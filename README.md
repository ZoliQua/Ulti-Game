# 🎴 Ulti

**English** · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Ulti**, the Hungarian three-player card game, built with **React 18**, **Vite** and **TypeScript**. You play against two bots,
**Bandi** and **Teri**, with the 32-card Hungarian (Tell) deck. The deck is our own vector redraw of the public-domain 1835 Schneider
József design, with the Tell figures and the four season aces. The game has real bidding with the talon, the classic contracts
(Passz, Negyvenszáz, Ulti, Betli, Durchmars, Húszszáz, Színtelen durchmars), the piros doubling, Kontra and Hungarian scoring.
A session is ten deals. A readable log records every bid and trick.
It runs on its own **and** as one of the fifteen games of **[Zoltan's Arcade](https://github.com/ZoliQua/Arcade-Game-Center)**.
Play it at [dulzoltan.hu/arcade/#/play/ulti](https://dulzoltan.hu/arcade/#/play/ulti).

[![CI](https://github.com/ZoliQua/Ulti-Game/actions/workflows/ci.yml/badge.svg)](https://github.com/ZoliQua/Ulti-Game/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-MIT-green)
![node](https://img.shields.io/badge/node-%E2%89%A520-339933?logo=node.js&logoColor=white)
![react](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)

---

## 📑 Table of contents

- [The Zoltan's Arcade family](#%EF%B8%8F-the-zoltans-arcade-family)
- [Features](#-features)
- [Quick start](#-quick-start)
- [Rules in short](#-rules-in-short)
- [Controls](#%EF%B8%8F-controls)
- [Scoring & stats](#-scoring--stats)
- [The bots](#-the-bots)
- [Autosave & resume](#-autosave--resume)
- [Embedding in Arcade-Game-Center](#-embedding-in-arcade-game-center)
- [Scripts](#-scripts)
- [Architecture](#%EF%B8%8F-architecture)
- [Contributing](#-contributing)
- [License](#%EF%B8%8F-license)

## 🕹️ The Zoltan's Arcade family

Every game is a standalone repo that also plugs into the portal. All of them share one design system, one scoring model and one save
format through the vendored [`src/arcade/`](./src/arcade) kit.

| Game | Repo | Genre |
| --- | --- | --- |
| 🏠 **Arcade portal** | [Arcade-Game-Center](https://github.com/ZoliQua/Arcade-Game-Center) | All games in one place, live demos, stats, leaderboard |
| 🧱 Tetris | [Tetris-Game](https://github.com/ZoliQua/Tetris-Game) | Arcade |
| 🐍 Snake | [Snake-Game](https://github.com/ZoliQua/Snake-Game) | Reflex |
| 🔢 2048 | [2048-Game](https://github.com/ZoliQua/2048-Game) | Puzzle |
| 🟡 Pac-Man | [Pac-Man-Game](https://github.com/ZoliQua/Pac-Man-Game) | Maze |
| ⚫ Gomoku | [Gomoku-Game](https://github.com/ZoliQua/Gomoku-Game) | Strategy |
| 🦷 Tic-Tac-Toe | [Tic-Tac-Toe-Game](https://github.com/ZoliQua/Tic-Tac-Toe-Game) | Duel |
| 🏓 Breakout | [Breakout-Game](https://github.com/ZoliQua/Breakout-Game) | Paddle |
| 👾 Space Invaders | [Space-Invaders-Game](https://github.com/ZoliQua/Space-Invaders-Game) | Shooter |
| 🔴 Connect Four | [Connect-Four-Game](https://github.com/ZoliQua/Connect-Four-Game) | Duel |
| 🔩 Nut Sort | [Nut-Sort-Game](https://github.com/ZoliQua/Nut-Sort-Game) | Sorting |
| 🃏 Texas Hold'em | [Texas-Holdem-Game](https://github.com/ZoliQua/Texas-Holdem-Game) | Cards |
| 💣 Minesweeper | [Minesweeper-Game](https://github.com/ZoliQua/Minesweeper-Game) | Logic |
| ♠️ Solitaire | [Solitaire-Game](https://github.com/ZoliQua/Solitaire-Game) | Cards |
| 🂡 Snapszer | [Snapszer-Game](https://github.com/ZoliQua/Snapszer-Game) | Cards |
| 🎴 **Ulti** (this repo) | [Ulti-Game](https://github.com/ZoliQua/Ulti-Game) | Cards |

## ✨ Features

- 🎴 **The Hungarian (Tell) deck** (shared with the other Hungarian-deck games through the arcade kit): our own SVG redraw after the
  1835 Schneider design, double-headed like the real deck. Each Alsó and Felső shows its own Tell character, the kings ride horses,
  and the aces show the seasons (piros Tavasz, tök Nyár, zöld Ősz, makk Tél). Each suit has its own shape (heart, bell, leaf,
  acorn), so colour is never needed to tell the suits apart.
- 🗣️ **Real bidding**: the forehand takes the talon and lays two cards down. Each player in turn picks up the talon to bid higher, or passes.
  The bid list offers **only** bids that are higher than the current one and possible with your cards. Each bid is a contract name
  plus a trump-suit button, and a tooltip explains it.
- 📜 **Contracts**: Passz, Negyvenszáz, Ulti, Betli, Durchmars, Húszszáz and Színtelen durchmars. The common combinations
  (Ulti + Passz / Negyvenszáz / Húszszáz / Durchmars) are allowed. **Piros** (hearts trump) doubles the trump bids, and a defender may
  double the game with **Kontra**.
- 🃏 **Trick play with the rules enforced**: follow suit, beat when you can, trump and over-trump, and keep the trump VII for an Ulti.
  Cards you may not play are dimmed and hatched. If you click one anyway, the game tells you which rule stops it.
- 🧑‍🎨 **Three portraits** in the deck's woodcut style: you, **Bandi** (handlebar moustache and pipe) and **Teri** (braid and flower).
  Each seat shows the name, the balance, the dealer, the declarer and defenders, and a framed **▶ On turn** badge.
- 📖 **A readable log**: every bid, pass, kontra and 20/40 announcement, and every trick as one line with the winner. A **Deals** table
  lists the declarer, bid, result and your units for each deal.
- 🤖 **Easy, Medium or Hard bots**. They only ever see their own cards and the public table. **Slow / Normal / Fast** sets their pace.
- 🏆 **Unified arcade scoring**: your net result over ten deals becomes your score. Best, plays and wins are shared with the portal.
- 📖 **Rules dialog** (button or **R**): goal, how to play, the rules with a card-order diagram, the bid value table built from the
  same bid list the game offers, the scoring with every number taken from the game's own constants, dental mode and, on a phone,
  the touch controls. Opening it pauses the session.
- 🏁 **Finish early**: offered between two deals; after a confirm it ends the session. From the 5th completed deal (half of the ten)
  the score so far goes on the leaderboard, before that 0 points.
- ⛶ **Full screen** for the table (on iPhone a full-screen view without the page around it).
- ⏸️ **Pause** with P, or automatically when the tab is hidden. It freezes the bots and the timer.
- 💾 **Autosave & resume**: the whole session survives reloads and tab closes, even mid-trick. The bots' cards are saved but never drawn face up.
- 🌗 **Dark / light theme** shared with every arcade game (press **T**)
- 🌍 **Three languages**: English, Hungarian and German. The Hungarian contract terms are kept in every language, each with a short
  explanation, for example "Ulti — win the last trick with the trump VII". Numbers follow the locale's grouping.
- 🦷 **Dental mode**: a „Fogas mód” / "Dental mode" / „Zahnmodus” toggle in the settings, off by default (or `?dental=1`), shared across
  the whole arcade. The card backs carry a tooth, and the three portraits change into dental outfits with the same faces: you as the
  dentist (white coat, head mirror, mouth mirror), Bandi as the hygienist (mask and probe) and Teri as the assistant (cap). The card
  faces stay traditional.
- 🤖 **Attract-mode demo** (`<UltiDemo />`): three bots play real deals on the portal's landing page.
- 📱 **Phone-friendly**: the table stacks upright on portrait screens. The hand is an overlapping fan that fits twelve cards on
  360 px, and every card keeps a corner index with its rank and suit sign. Tap a card to raise it, tap it again to play it. Laying
  down, bids, Pass, Kontra and Play sit in a bar at the bottom of the screen.
- 🧪 **Tested**: deck, engine rules and scoring, bot fairness and strength, session saves, a full deal driven through the UI,
  illegal-card reasons, the bid list, kontra timing, the talon pick-up, languages, dental mode, the demo, the rules dialog, finishing
  early and the touch controls.

## 🚀 Quick start

Requires **Node ≥ 20** and npm.

```bash
git clone https://github.com/ZoliQua/Ulti-Game.git
cd Ulti-Game
npm install
npm run dev          # http://localhost:5173  (?gallery=1 shows the whole deck)
```

For a production build, run `npm run build && npm run preview`. The build uses relative asset paths, so `dist/` can be served from any sub-folder.

## 📏 Rules in short

The source is the Hungarian Wikipedia article on Ulti and its value table. The game uses the basic contracts, without the open ("terített") variants.

- **Deal**: 10 cards each and a 2-card talon. The deal and the play go round to the right. On screen, the player after you sits top-right.
- **Bidding**: the forehand takes the talon (12 cards), lays two cards down and must bid. The next player either **picks up the talon**
  and bids higher, or **passes**. The bidding ends after two passes in a row. The last bidder becomes the **declarer**, and the other two
  defend together.
- **Kontra**: each defender in turn may double the game once.
- **Play**: the declarer leads first. You must follow suit and beat the best card if you can. Without the led suit, you must trump, and
  over-trump if you can. In trump games the order is A, X, K, F, Alsó, IX, VIII, VII. In Betli and Színtelen durchmars there is no
  trump and the X ranks below the Alsó.
- **Points**: aces and tens are worth 10 each, the last trick 10, and announced pairs 20 (K+F of another suit) or 40 (trump K+F).
  The talon's aces and tens go to the defenders.

| Contract | Value | The declarer must… |
| --- | --- | --- |
| Passz | 1 | take more points than the two defenders together |
| Negyvenszáz | 4 | announce the trump K+F (40) and reach 100 points |
| Ulti | 4 | win the last trick with the trump VII (a failed Ulti pays double) |
| Betli | 5 | take no trick (no trumps) |
| Durchmars | 6 | take all ten tricks |
| Húszszáz | 8 | announce another suit's K+F (20) and reach 100 points |
| Színtelen durchmars | 12 | take all ten tricks without trumps |

**Piros** (hearts trump) doubles the trump contracts, and **Kontra** doubles the game. The declarer wins or pays the value to **each** defender.

## ⌨️ Controls

| Key | Action |
| --- | --- |
| 🖱️ Click a card | Discarding: select it (two cards) · playing: play it, or see why it is not allowed |
| 🖱️ Bid buttons | Choose a contract and its trump suit |
| **Tab** / **Shift+Tab** | Move between the cards and the buttons (**Enter** / **Space** presses them) |
| **Enter** | Start · next deal · continue (when no button has focus) |
| **P** / **Esc** | Pause / resume |
| **R** | Open the rules |
| **T** | Toggle dark / light theme (standalone page) |

Hotkeys are ignored while you type in a form field or hold Cmd/Ctrl/Alt.

**On a phone**: tap a card to raise it and tap it again (or the **Play** button) to play it. While discarding, tap two cards and
then **Lay down 2 cards**. The bid list, **Pass**, **Kontra** and **Play** sit in a bar at the bottom of the screen, within reach of
your thumb. **Full screen** above the table gives it the whole screen. On an iPhone, *Share → Add to Home Screen* also hides the
browser bars.

## 🎯 Scoring & stats

Every deal is zero-sum. The declarer receives the value (piros and kontra included) from each defender, or pays it to each one.
After ten deals:

```
score = min(30000, round(max(0, your net units) × 50 × difficulty factor))
difficulty factor: Easy 1 · Medium 1.5 · Hard 2
```

The session is a **win** when you finish strictly on top, a **draw** when you are level with the better bot, and otherwise a **loss**.
The kit records every finished session once under `arcade.stats.ulti`. A session given up through **New session** is not recorded.
**Finish** is offered only between two deals, never during one, so a failing contract cannot be escaped. It ends the session
early: after at least `MIN_FINISH_DEALS` = ⌈10 / 2⌉ = 5 completed deals the score so far goes on the leaderboard; before that it
ranks 0 points, so one lucky first deal cannot be locked in.
The stat strip shows the **Deal**, your **Balance**, the **Score**, **Best** and the active **Time**.

## 🤖 The bots

- **Easy** plays random legal cards, bids only Passz and never doubles.
- **Medium** evaluates its hand for every contract, picks discards and bids by expected value, doubles a weak-looking game and plays
  by rules of thumb.
- **Hard** samples deals of the unseen cards that fit everything it has seen (voids, must-beat caps, announced pairs) and plays each
  candidate card out on them.

The bots only receive a `BotView`: the public table plus their own cards. They see the talon only when they laid it down. No bot ever
looks at the hidden talon before it decides to pick it up. For your own pick-up, the game always offers **Pick up the talon**. If even
those two cards cannot beat the current bid, it shows them to you, explains why, and lets you put them back and pass.
Run `npm run sim:strength` to check bot strength: in 300 sessions per pair, hard beats easy 95 % of the time and medium beats easy 85 %.

## 💾 Autosave & resume

The session is saved as a whole: difficulty, seed, deal number, the current deal (all hands, talon, bids, tricks) and the running
scores. It uses the key `arcade.session.ulti` and is schema-versioned. A validator checks the shape and the invariants: 32 distinct
cards, hand sizes for the phase, recomputed trick winners, dealer rotation, every deal result and the score sums.
The game saves about once a second, whenever the page is hidden, and when it unmounts. Reloading shows **Welcome back** with the game paused.
A finished session is never restored. The bots' moves come from the saved state only, so a resumed session plays on exactly as before.

## 🧩 Embedding in Arcade-Game-Center

```tsx
import { UltiGame, UltiDemo } from '@arcade/ulti';

<UltiGame
  embedded                                   // hide the page title; the portal shows it
  onGameOver={(score, info) => submitScore('ulti', score)}   // finished sessions with points > 0; Finish: always, info = { finished: true }
  onRunEnd={(run) => console.log(run.outcome, run.score)}  // every finished session
  onStatusChange={({ status, score, seconds }) => updateHeader(status, seconds)}
/>
<UltiDemo active={cardIsVisible} />          // landing-page attract mode
```

Both components follow the shared `ArcadeGameProps` / `ArcadeDemoProps` contract from `src/arcade/types.ts`.
Status mapping:
- `idle`: before a session (the setup card)
- `running`: during a session
- `paused`: while suspended or restored
- `gameOver`: after the tenth deal, or after **Finish**

## 🧪 Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server (`?gallery=1`: the whole deck, dev only) |
| `npm run build` | Type-check (`tsc -b`) and production build |
| `npm run preview` | Serve the production build |
| `npm run typecheck` | `tsc -b` |
| `npm run lint` | ESLint |
| `npm test` | Vitest (engine, bots, session and component tests) |
| `npm run check` | lint → typecheck → test → build (what CI runs) |
| `npm run sim:strength` | Bot strength simulation (`-- N` sessions, `PAIR=a,b`) |

## 🏗️ Architecture

```
src/
  arcade/        vendored Zoltan's Arcade kit — do not edit here (see its README)
  deck/          Gallery.tsx — dev-only deck review page (?gallery=1); the deck itself lives in the kit (src/arcade/hungarian)
  engine/        pure Ulti rules: deal, bids, talon, kontra, legal play with reasons, deal result and scoring
  bots/          BotView (the only bridge to bot code), bidding and play at three levels, deal sampling
  game/          session (10 deals, saves, guard), arcade scoring, bot pacing (speed), strength simulation
  ui/            Table, Seat, Hand, TrickArea, BidPanel, ActionPanel, LogPanel, labels, figures/ (the three portraits)
  demo/          UltiDemo (three bots)
  UltiGame.tsx   the embeddable game (ArcadeGameProps)
  rules.tsx      Rules dialog sections, the card-order diagram and the bid value table
  i18n.ts        en / hu / de strings
  App.tsx        standalone page: <ArcadeShell><UltiGame/></ArcadeShell>
  main.tsx       entry; loads the shared arcade.css once
  index.ts       package entry used by Arcade-Game-Center
```

The UI changes the game only through the session (`act`, `botStep`, `nextDeal`), and the session goes through the engine's public
API, which never mutates its input and throws on anything illegal.

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md), the [Code of Conduct](./CODE_OF_CONDUCT.md) and [SECURITY.md](./SECURITY.md).
Contributors are listed in [CONTRIBUTORS.md](./CONTRIBUTORS.md), and changes in [CHANGELOG.md](./CHANGELOG.md).

## ⚖️ License

[MIT](./LICENSE) © 2026 Zoltán Dul

---

<p align="center">Made with ❤️ by Zoltán Dul · part of <a href="https://github.com/ZoliQua/Arcade-Game-Center">Zoltan's Arcade</a></p>
