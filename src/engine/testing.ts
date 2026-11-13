/** Test helpers: hand-built deal states (not part of the public engine API). */
import type { HCard, HRank, HSuit } from '../deck/cards';
import type { Bid, DealState, Player, Trick } from './types';

export const c = (suit: HSuit, rank: HRank): HCard => ({ suit, rank });

export interface PlayStateOptions {
  hands: [HCard[], HCard[], HCard[]];
  bid: Bid;
  declarer: Player;
  turn?: Player;
  talon?: HCard[];
  tricks?: Trick[];
  trick?: Trick | null;
  kontra?: boolean;
  dealer?: Player;
}

/** A state in the play phase with the given hands (no consistency checks — tests only). */
export function playState(o: PlayStateOptions): DealState {
  const dealer = o.dealer ?? (((o.declarer + 2) % 3) as Player);
  return {
    seed: 0,
    dealer,
    forehand: ((dealer + 1) % 3) as Player,
    phase: 'play',
    turn: o.turn ?? (o.trick ? (((o.trick.leader + o.trick.cards.length) % 3) as Player) : o.declarer),
    hands: o.hands,
    talon: o.talon ?? [],
    bid: o.bid,
    bidder: o.declarer,
    passes: 2,
    declarer: o.declarer,
    kontra: o.kontra ?? false,
    kontraBy: null,
    tricks: o.tricks ?? [],
    trick: o.trick ?? null,
    announcements: [],
    log: [],
  };
}
