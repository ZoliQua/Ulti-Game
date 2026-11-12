import type { ArcadeDemoProps } from '../arcade';

/** Placeholder until the autopilot demo lands; writes nothing to storage. */
export function UltiDemo({ active = true }: ArcadeDemoProps) {
  return <div data-testid="ulti-demo" data-active={active ? 'true' : 'false'} />;
}
