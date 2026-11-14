import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { applyDental, applyLang, formatNumber, loadSession } from './arcade';
import { SESSION_SCHEMA, sessionScore } from './game/session';
import { findSession, humanTurn, save } from './test/fixtures';
import { UltiGame } from './UltiGame';

beforeEach(() => {
  localStorage.clear();
  applyDental(false, { silent: true });
  applyLang('hu', { silent: true });
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
  applyLang('en', { silent: true });
});

const key = (k: string) => act(() => void fireEvent.keyDown(window, { key: k }));
const click = (el: Element) => act(() => void fireEvent.click(el));
const tick = (ms: number) => act(() => void vi.advanceTimersByTime(ms));
const finishBtn = () => screen.queryByRole('button', { name: 'Befejezés' });
const stat = (label: string) => screen.getByText(label, { selector: 'dt' }).parentElement?.querySelector('dd')?.textContent;

/** A saved session with points on the board, the player to move. */
function resumeWithPoints() {
  const s = findSession((x) => humanTurn(x, 'play') && x.scores[0] > 0 && x.history.length >= 1);
  save(s, 90);
  return s;
}

describe('Ulti finish early', () => {
  it('is hidden before the session starts and visible once it runs', () => {
    render(<UltiGame />);
    expect(finishBtn()).toBeNull();
    click(screen.getByRole('button', { name: /Osztás/ }));
    expect(finishBtn()).toBeTruthy();
  });

  it('confirms with the Score panel value (the deals played), ranks it once and shows the finished card', () => {
    const s = resumeWithPoints();
    const score = sessionScore(s);
    expect(score).toBeGreaterThan(0);
    const onGameOver = vi.fn();
    render(<UltiGame onGameOver={onGameOver} />);
    key('p');
    expect(stat('Pont')).toBe(formatNumber(score, 'hu'));
    click(finishBtn()!);
    expect(screen.getByRole('alertdialog').textContent).toContain(
      `Befejezed a játékot? ${formatNumber(score, 'hu')} pont kerül a ranglistára.`,
    );
    click(screen.getByRole('button', { name: 'Befejezem' }));
    expect(onGameOver).toHaveBeenCalledTimes(1);
    expect(onGameOver).toHaveBeenCalledWith(score, { finished: true });
    const card = screen.getByRole('dialog', { name: 'Idő előtt befejezve' });
    expect(card.textContent).toContain(`${formatNumber(score, 'hu')} pontot szereztél.`);
    expect(card.textContent).toContain(`${formatNumber(s.history.length, 'hu')} osztás`);
    expect(loadSession('ulti', SESSION_SCHEMA)).toBeNull();
    act(() => void window.dispatchEvent(new Event('pagehide')));
    tick(5000);
    expect(onGameOver).toHaveBeenCalledTimes(1);
    expect(loadSession('ulti', SESSION_SCHEMA)).toBeNull();
    expect(finishBtn()).toBeNull();
  });

  it('a finish at score 0 still ranks 0 once', () => {
    const onGameOver = vi.fn();
    render(<UltiGame onGameOver={onGameOver} />);
    click(screen.getByRole('button', { name: /Osztás/ }));
    click(finishBtn()!);
    expect(screen.getByRole('alertdialog').textContent).toContain(`${formatNumber(0, 'hu')} pont kerül a ranglistára`);
    click(screen.getByRole('button', { name: 'Befejezem' }));
    expect(onGameOver).toHaveBeenCalledTimes(1);
    expect(onGameOver).toHaveBeenCalledWith(0, { finished: true });
    expect(screen.getByRole('dialog', { name: 'Idő előtt befejezve' })).toBeTruthy();
  });

  it('Cancel changes nothing', () => {
    const s = resumeWithPoints();
    const onGameOver = vi.fn();
    render(<UltiGame onGameOver={onGameOver} />);
    key('p');
    const cards = document.querySelectorAll('[data-hand-card]').length;
    click(finishBtn()!);
    click(screen.getByRole('button', { name: 'Mégse' }));
    expect(screen.queryByRole('alertdialog')).toBeNull();
    expect(onGameOver).not.toHaveBeenCalled();
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(document.querySelectorAll('[data-hand-card]')).toHaveLength(cards);
    expect(stat('Pont')).toBe(formatNumber(sessionScore(s), 'hu'));
  });

  it('the bots and the clock stand still while the confirm is open', () => {
    const s = findSession((x) => x.phase === 'playing' && x.deal.phase === 'play' && x.deal.turn !== 0);
    save(s, 30);
    render(<UltiGame />);
    key('p');
    click(finishBtn()!);
    const time = stat('Idő');
    tick(10_000);
    expect(stat('Idő')).toBe(time);
    act(() => void window.dispatchEvent(new Event('pagehide')));
    expect(loadSession<typeof s>('ulti', SESSION_SCHEMA)?.data.deal.log.length).toBe(s.deal.log.length);
  });
});
