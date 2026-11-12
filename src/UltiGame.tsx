import { gameName, useLang, type ArcadeGameProps } from './arcade';

/** Placeholder until the table UI lands: the arcade contract is wired, the game itself comes later. */
export function UltiGame({ embedded = false }: ArcadeGameProps) {
  const [lang] = useLang();
  return <div data-testid="ulti-game">{embedded ? null : <h1>{gameName('ulti', lang)}</h1>}</div>;
}

export default UltiGame;
