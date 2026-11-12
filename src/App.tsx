import { ArcadeShell } from './arcade';
import { UltiGame } from './UltiGame';

export default function App() {
  return (
    <ArcadeShell gameId="ulti">
      <UltiGame />
    </ArcadeShell>
  );
}
