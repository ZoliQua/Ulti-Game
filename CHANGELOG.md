# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses
[Semantic Versioning](https://semver.org/).

## [Unreleased]

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
