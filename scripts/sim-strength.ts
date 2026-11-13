/**
 * Strength acceptance: bot-only 10-deal sessions on the real engine. For each pair (A vs B), A and B sit at seats 0
 * and 1 and a fixed medium bot at seat 2; every session seed is played twice with A and B swapped, so both see the
 * same cards. A session counts as a win for A when A ends with more units than B (ties are not wins).
 *
 *   npm run sim:strength                 # 300 sessions per pair, sharded over the CPU cores
 *   npm run sim:strength -- 60           # fewer
 *   PAIR=medium,easy npm run sim:strength
 *   (hard vs medium is printed for information only)
 *   SIM_SHARDS=1 npm run sim:strength    # single process
 */
import { spawn } from 'node:child_process';
import { availableParallelism } from 'node:os';
import { fileURLToPath } from 'node:url';
import type { Level } from '../src/bots/profiles';
import { addTally, emptyTally, STRENGTH_THRESHOLD as THRESHOLD, strengthTally, type Tally } from '../src/game/strength';

const SESSIONS = Math.max(2, Number(process.argv[2] ?? 300));
const PAIRS: [Level, Level][] = [
  ['hard', 'easy'],
  ['medium', 'easy'],
  ['hard', 'medium'],
];
/** Pairs held to the threshold (hard vs medium is reported for information). */
const GATED = new Set(['hard,easy', 'medium,easy']);
type Results = Record<string, Tally>;

const selected = PAIRS.filter(([a, b]) => !process.env.PAIR || process.env.PAIR === `${a},${b}`);

function runShard(shard: number, shards: number): Results {
  const out: Results = {};
  for (const [a, b] of selected) out[`${a},${b}`] = strengthTally(a, b, SESSIONS, shard, shards);
  return out;
}

function runChild(shard: number, shards: number): Promise<Results> {
  return new Promise((resolve, reject) => {
    const bin = fileURLToPath(new URL('../node_modules/.bin/vite-node', import.meta.url));
    const script = fileURLToPath(import.meta.url);
    const child = spawn(bin, [script, String(SESSIONS)], {
      env: { ...process.env, SIM_SHARD: String(shard), SIM_SHARDS: String(shards) },
      stdio: ['ignore', 'pipe', 'inherit'],
    });
    let text = '';
    child.stdout.on('data', (d) => (text += String(d)));
    child.on('error', reject);
    child.on('close', (code) => {
      const line = text.split('\n').find((l) => l.startsWith('SHARD '));
      if (code !== 0 || !line) reject(new Error(`shard ${shard} failed (${code})`));
      else resolve(JSON.parse(line.slice(6)) as Results);
    });
  });
}

async function main() {
  if (process.env.SIM_SHARD !== undefined) {
    const r = runShard(Number(process.env.SIM_SHARD), Number(process.env.SIM_SHARDS ?? 1));
    console.log(`SHARD ${JSON.stringify(r)}`);
    return;
  }
  const started = Date.now();
  const shards = Math.max(1, Math.min(Number(process.env.SIM_SHARDS ?? availableParallelism() - 1), SESSIONS));
  const parts = shards === 1 ? [runShard(0, 1)] : await Promise.all(Array.from({ length: shards }, (_, i) => runChild(i, shards)));
  let ok = true;
  console.log(`Ulti strength simulation · ${SESSIONS} sessions of 10 deals per pair · third seat medium · ${shards} processes`);
  for (const [a, b] of selected) {
    const key = `${a},${b}`;
    const t = parts.reduce<Tally>((acc, p) => addTally(acc, p[key]), emptyTally());
    const rate = t.wins / t.sessions;
    const pass = rate >= THRESHOLD;
    if (GATED.has(key)) ok &&= pass;
    console.log(
      `${a.padEnd(6)} vs ${b.padEnd(6)}  ${String(t.wins).padStart(4)}/${t.sessions} wins  ${(rate * 100).toFixed(1).padStart(5)} %  ` +
        `(${t.ties} ties)  avg units/session ${(t.unitsA / t.sessions).toFixed(1)} vs ${(t.unitsB / t.sessions).toFixed(1)}  ` +
        (GATED.has(key) ? `${pass ? 'PASS' : 'FAIL'} (≥ ${THRESHOLD * 100} %)` : 'info'),
    );
  }
  console.log(`${ok ? 'Acceptance met' : 'Acceptance NOT met'} · ${((Date.now() - started) / 1000).toFixed(1)} s`);
  process.exitCode = ok ? 0 : 1;
}

void main();
