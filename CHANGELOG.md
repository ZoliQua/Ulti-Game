# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/).

## [Unreleased]

## [1.1.0] - 2026-11-14

### Added
- Rules dialog (button or R): goal, how to play (mouse and keyboard, or touch on a phone), the rules with a card-order diagram for
  trump and colourless games, a bid value table built from the game's own bid list (with the piros values), the scoring with every
  number computed from the engine and scoring constants, dental mode and, on touch screens, the mobile tips. Opening it pauses the
  session.
- Finish early: offered only between two deals (a note says why it is missing during a deal); after a confirm the session ends.
  From `MIN_FINISH_DEALS` = ⌈10 / 2⌉ = 5 completed deals the session score is ranked, before that 0 points (no locking in a lucky
  first deal, no escaping a failing contract); the game-over card says "Finished early".
- Touch controls: the hand becomes an overlapping fan sized from its own width (twelve cards fit on 360 px), each card with a corner
  index (rank + suit sign); tap raises a card, a second tap (or the Play button) plays it. Laying down, bids, Pass, Kontra and Play
  sit in a sticky bar at the bottom of the screen with thumb-sized buttons; touch help in the Keys panel.
  Known exception to the 44 px touch-target rule: with twelve cards on 360 px each card's tappable strip is about 23 px wide
  (≈ 76 px tall); tap-then-confirm (or the Play button) guards against mistaps.
- Phone layouts: in portrait the opponents sit on one line each, your own seat hides (balance and turn are in the stats and the
  bar), the centre is slim and the bid list is one line per contract, so table, hand and bar fit on one screen; in landscape
  the actions, stats and tools move to a side column next to the table.
- Full screen for the table (native where the browser allows it, a CSS full-screen view on iPhone); `viewport-fit=cover`.
- README in English, German and Hungarian.

### Changed
- The Hungarian deck now comes from the shared arcade kit (`src/arcade/hungarian`); the season aces follow Hungarian Wikipedia:
  piros Tavasz, tök Nyár, zöld Ősz, makk Tél (1.0.0 named them differently).
- A bot's move is computed once, in its own task after the visible delay, instead of inside a React state updater.
- Bid values in the bid list and its tooltips go through the locale's number format.
- The deal, card-point and scoring numbers (hand and talon size, last trick, 20/40, the 100-point target, piros, kontra and
  failed-Ulti factors) are named engine constants, and the hints (discard prompt and button, contract explanations) print them.
- The log speaks to you in the second person ("You pass", „Passzolsz”, „Du passt”); the piros ×2 is a separate badge on the bid
  buttons.

## [1.0.0] - 2026-11-14

### Added
- The 32-card Hungarian (Tell) deck as our own SVG redraw after the public-domain 1835 Schneider József design: Tell figures on
  the Alsó, Felső and Király, the season aces (piros Nyár, tök Ősz, zöld Tavasz, makk Tél), suit signs told apart by shape, a
  traditional back and a tooth back for dental mode; a dev-only gallery (`?gallery=1`).
- Pure rules engine: deal and talon, bidding with pick-up and discards, the contracts Passz, Negyvenszáz, Ulti, Betli, Durchmars,
  Húszszáz and Színtelen durchmars (plus Ulti combinations), piros doubling, one Kontra, follow / beat / trump / over-trump with
  reason codes, automatic 20/40 announcements, early end of a lost Betli or Durchmars, deal result and zero-sum scoring (a failed
  Ulti pays double).
- Bots at three levels behind a `BotView` that holds only the public table and the bot's own cards; Hard samples consistent deals
  of the unseen cards. `npm run sim:strength` checks that Hard and Medium beat Easy.
- Sessions of ten deals with a rotating dealer, arcade score `min(30000, max(0, units) × 50 × difficulty factor)`, win / draw / loss
  outcome, autosave & resume (`arcade.session.ulti`) with a validator that also checks every finished deal's result.
- Table UI: you at the bottom, Bandi top-right and Teri top-left (play goes to the right), the bid, trump, talon and trick in the
  centre, a bid list that offers only higher bids (Hungarian contract names, suit-sign buttons, explanation tooltips), the talon
  pick-up always offered (shown and put back with a pass when even the talon cannot beat the bid), Kontra for the defenders, dimmed
  and hatched cards that may not be played with the rule as a reason when clicked, a deal result card, a Deals table and a readable
  log of bids and tricks.
- Bot pacing with a visible delay and a Slow / Normal / Fast setting (`ulti.speed`); the difficulty is remembered (`ulti.difficulty`).
- Three old-style seat portraits (you, Bandi, Teri) in the deck's woodcut look; seats show the name, balance, dealer, declarer /
  defender and a framed ▶ turn badge (never colour alone).
- English, Hungarian and German; the Hungarian contract terms are kept in every language with a short explanation.
- Dental mode (shared `arcade.dental`, off by default, toggle in Settings): tooth card backs and the portraits as dentist, hygienist
  and assistant with the same faces; the card faces stay traditional.
- `UltiDemo` attract mode: three bots playing real deals; writes nothing to storage and freezes while inactive.
- Vitest + Testing Library suite, `npm run check`, GitHub Actions CI, community files and an acorn-card favicon.
