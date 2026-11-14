# 🎴 Ulti

[English](README.md) · [Deutsch](README.de.md) · **Magyar**

Az **Ulti**, a háromszemélyes magyar kártyajáték, **React 18**, **Vite** és **TypeScript** alapon. Két gépi ellenfél, **Bandi** és
**Teri** ellen játszol a 32 lapos magyar (Tell-) kártyával. A pakli a közkincs, 1835-ös Schneider József-féle minta saját vektoros
újrarajzolása, a Tell-figurákkal és a négy évszakos ásszal. Van valódi licit a talonnal, a klasszikus bemondások (Passz, Negyvenszáz,
Ulti, Betli, Durchmars, Húszszáz, Színtelen durchmars), a piros duplázás, a kontra és a magyar pontozás.
Egy játszma tíz osztás. Egy jól olvasható napló rögzít minden licitet és ütést.
Önállóan **és** a **[Zoltan's Arcade](https://github.com/ZoliQua/Arcade-Game-Center)** tizenöt játékának egyikeként is fut.
Itt játszhatsz vele: [dulzoltan.hu/arcade/#/play/ulti](https://dulzoltan.hu/arcade/#/play/ulti).

[![CI](https://github.com/ZoliQua/Ulti-Game/actions/workflows/ci.yml/badge.svg)](https://github.com/ZoliQua/Ulti-Game/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-MIT-green)
![node](https://img.shields.io/badge/node-%E2%89%A520-339933?logo=node.js&logoColor=white)
![react](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)

---

## 📑 Tartalom

- [A Zoltan's Arcade család](#-a-zoltans-arcade-család)
- [Funkciók](#-funkciók)
- [Gyors kezdés](#-gyors-kezdés)
- [A szabályok röviden](#-a-szabályok-röviden)
- [Irányítás](#%EF%B8%8F-irányítás)
- [Pontozás és statisztika](#-pontozás-és-statisztika)
- [A gépi játékosok](#-a-gépi-játékosok)
- [Automatikus mentés és folytatás](#-automatikus-mentés-és-folytatás)
- [Beágyazás az Arcade-Game-Centerbe](#-beágyazás-az-arcade-game-centerbe)
- [Szkriptek](#-szkriptek)
- [Felépítés](#%EF%B8%8F-felépítés)
- [Közreműködés](#-közreműködés)
- [Licenc](#%EF%B8%8F-licenc)

## 🕹️ A Zoltan's Arcade család

Minden játék önálló repó, amely a portálba is beépül. Mindegyik ugyanazt a dizájnrendszert, pontozási modellt és mentési formátumot
használja a beemelt [`src/arcade/`](./src/arcade) készleten keresztül.

| Játék | Repó | Műfaj |
| --- | --- | --- |
| 🏠 **Arcade portál** | [Arcade-Game-Center](https://github.com/ZoliQua/Arcade-Game-Center) | Minden játék egy helyen, élő demók, statisztika, ranglista |
| 🧱 Tetris | [Tetris-Game](https://github.com/ZoliQua/Tetris-Game) | Arcade |
| 🐍 Snake | [Snake-Game](https://github.com/ZoliQua/Snake-Game) | Reflex |
| 🔢 2048 | [2048-Game](https://github.com/ZoliQua/2048-Game) | Fejtörő |
| 🟡 Pac-Man | [Pac-Man-Game](https://github.com/ZoliQua/Pac-Man-Game) | Labirintus |
| ⚫ Gomoku | [Gomoku-Game](https://github.com/ZoliQua/Gomoku-Game) | Stratégia |
| 🦷 Tic-Tac-Toe | [Tic-Tac-Toe-Game](https://github.com/ZoliQua/Tic-Tac-Toe-Game) | Párbaj |
| 🏓 Breakout | [Breakout-Game](https://github.com/ZoliQua/Breakout-Game) | Ütő |
| 👾 Space Invaders | [Space-Invaders-Game](https://github.com/ZoliQua/Space-Invaders-Game) | Lövöldözős |
| 🔴 Connect Four | [Connect-Four-Game](https://github.com/ZoliQua/Connect-Four-Game) | Párbaj |
| 🔩 Nut Sort | [Nut-Sort-Game](https://github.com/ZoliQua/Nut-Sort-Game) | Rendezős |
| 🃏 Texas Hold'em | [Texas-Holdem-Game](https://github.com/ZoliQua/Texas-Holdem-Game) | Kártya |
| 💣 Minesweeper | [Minesweeper-Game](https://github.com/ZoliQua/Minesweeper-Game) | Logika |
| ♠️ Solitaire | [Solitaire-Game](https://github.com/ZoliQua/Solitaire-Game) | Kártya |
| 🎴 **Ulti** (ez a repó) | [Ulti-Game](https://github.com/ZoliQua/Ulti-Game) | Kártya |
| 🂡 Snapszer | [Snapszer-Game](https://github.com/ZoliQua/Snapszer-Game) | Kártya |

## ✨ Funkciók

- 🎴 **A magyar (Tell-) kártya** (az arcade-készleten keresztül közös a többi magyar kártyás játékkal): saját SVG-rajz az 1835-ös
  Schneider-minta nyomán, kétfejű, mint az igazi pakli. Minden alsón és felsőn a saját Tell-szereplője látszik, a királyok lóháton
  ülnek, az ászokon pedig az évszakok (piros Tavasz, tök Nyár, zöld Ősz, makk Tél). Minden színnek saját formája van (szív, tök,
  levél, makk), így a színek megkülönböztetéséhez soha nem kell a szín.
- 🗣️ **Valódi licit**: az előkéz felveszi a talont, és lerak két lapot. Utána sorban mindenki vagy felveszi a talont, és magasabbat
  mond, vagy passzol. A licitlista **csak** a mostaninál magasabb, a lapjaiddal teljesíthető bemondásokat kínálja. Minden bemondás egy
  bemondásnév és egy adu-szín gomb, a buborék pedig elmagyarázza.
- 📜 **Bemondások**: Passz, Negyvenszáz, Ulti, Betli, Durchmars, Húszszáz és Színtelen durchmars. A szokásos kombinációk
  (Ulti + Passz / Negyvenszáz / Húszszáz / Durchmars) megengedettek. A **piros** (piros az adu) megduplázza az adus bemondásokat, az
  ellenjátékos pedig **kontrával** duplázhatja a játékot.
- 🃏 **Lapjárás betartatott szabályokkal**: színre szín, felülütés, ha tudsz, aduzás és felüladuzás, ultinál az adu hetes megtartása.
  Amit nem tehetsz, az halvány és sraffozott. Ha mégis rákattintasz, a játék megmondja, melyik szabály tiltja.
- 🧑‍🎨 **Három portré** a pakli fametszetes stílusában: te, **Bandi** (kunkori bajusz és pipa) és **Teri** (copf és virág).
  Minden ülésen ott a név, az egyenleg, az osztó, a felvevő és az ellenjátékosok, és egy keretes **▶ Soron** jelvény.
- 📖 **Olvasható napló**: minden licit, passz, kontra és 20/40-es bemondás, és minden ütés egy sorban, a nyertesével. Az
  **Osztások** táblázat osztásonként mutatja a felvevőt, a bemondást, az eredményt és a te egységeidet.
- 🤖 **Könnyű, Közepes vagy Nehéz gépi ellenfelek**. Csak a saját lapjaikat és a nyilvános asztalt látják. A **Lassú / Normál / Gyors**
  beállítás adja a tempójukat.
- 🏆 **Egységes arcade-pontozás**: a tíz osztás nettó eredményéből lesz a pontszámod. A rekord, a játszmák és a győzelmek száma közös
  a portállal.
- 📖 **Szabályok ablak** (gomb vagy **R**): cél, így játssz, a szabályok a lapsorrend ábrájával, a bemondások értéktáblázata
  ugyanabból a licitlistából, amit a játék kínál, a pontozás – minden szám a játék saját állandóiból –, a fogas mód és telefonon az
  érintéses irányítás. Megnyitásakor a játszma megáll.
- 🏁 **Idő előtti befejezés**: megerősítés után lezárja a játszmát, és az eddig lejátszott osztások pontszáma kerül a ranglistára.
- ⛶ **Teljes képernyő** az asztalnak (iPhone-on az oldal többi része nélküli, teljes képernyős nézet).
- ⏸️ **Szünet** a P billentyűvel, vagy magától, ha a lap a háttérbe kerül. A gépi játékosok és az óra is megállnak.
- 💾 **Automatikus mentés és folytatás**: az egész játszma túléli az újratöltést és a lap bezárását, akár ütés közben is. A gépi
  játékosok lapjai mentésre kerülnek, de soha nem jelennek meg felfordítva.
- 🌗 **Sötét / világos téma**, közös minden arcade-játékkal (**T** billentyű)
- 🌍 **Három nyelv**: angol, magyar és német. A magyar bemondásnevek minden nyelven megmaradnak, mindegyik egy rövid
  magyarázattal, például „Ulti — az utolsó ütést az adu hetessel viszed el”. A számok a nyelv szerinti tagolást követik.
- 🦷 **Fogas mód**: „Fogas mód” / "Dental mode" / „Zahnmodus” kapcsoló a beállításokban, alapból kikapcsolva (vagy `?dental=1`),
  közös az egész arcade-ban. A lapok hátán fog van, a három portré pedig ugyanazokkal az arcokkal fogászati öltözetet kap: te mint
  fogorvos (fehér köpeny, homloktükör, szájtükör), Bandi mint dentálhigiénikus (maszk és szonda), Teri mint asszisztens (sapka). A
  lapok képe hagyományos marad.
- 🤖 **Bemutató mód** (`<UltiDemo />`): három gépi játékos valódi osztásokat játszik a portál nyitóoldalán.
- 📱 **Telefonbarát**: álló képernyőn az asztal egymás alá rendeződik. A kézben tartott lapok egymást fedő legyezőt alkotnak, amely
  360 px-en is elfér tizenkét lappal, és minden lap sarkában látszik a rangja és a színjele. Koppints egy lapra, és kiemelkedik;
  koppints rá újra, és kijátszod. A lerakás, a licit, a Passz, a Kontra és a kijátszás gombja a képernyő alján, egy sávban van.
- 🧪 **Tesztelve**: pakli, motorszabályok és pontozás, a gépi játékosok tisztessége és erőssége, a játszmamentés, egy teljes osztás
  a felületen keresztül végigjátszva, a tiltott lapok indoklása, a licitlista, a kontra időzítése, a talon felvétele, a nyelvek, a
  fogas mód, a bemutató, a szabályok ablak, az idő előtti befejezés és az érintéses irányítás.

## 🚀 Gyors kezdés

**Node ≥ 20** és npm kell hozzá.

```bash
git clone https://github.com/ZoliQua/Ulti-Game.git
cd Ulti-Game
npm install
npm run dev          # http://localhost:5173  (?gallery=1 az egész paklit mutatja)
```

Éles buildhez futtasd: `npm run build && npm run preview`. A build relatív útvonalakat használ, így a `dist/` bármelyik
almappából kiszolgálható.

## 📏 A szabályok röviden

A forrás a magyar Wikipédia Ulti-szócikke és annak értéktáblázata. A játék az alapbemondásokat használja, a terített változatok
nélkül.

- **Osztás**: mindenki 10 lapot kap, 2 lap a talonba kerül. Az osztás és a játék jobbra halad. A képernyőn az utánad következő
  játékos ül jobbra fent.
- **Licit**: az előkéz felveszi a talont (12 lap), lerak két lapot, és licitálnia kell. A következő játékos vagy **felveszi a
  talont**, és magasabbat mond, vagy **passzol**. Két egymást követő passz lezárja a licitet. Az utolsó licitáló lesz a
  **felvevő**, a másik kettő közösen védekezik.
- **Kontra**: mindkét ellenjátékos sorban egyszer megduplázhatja a játékot.
- **Lapjárás**: a felvevő hív először. Színre színt kell tenni, és ha tudod, felül kell ütnöd a legjobb lapot. Ha nincs a hívott
  színből, adut kell tenned, és ha tudsz, felül kell aduznod. Adus játékokban a sorrend: ász, X, K, F, alsó, IX, VIII, VII. Betliben
  és színtelen durchmarsban nincs adu, és az X az alsó alatt áll.
- **Pontok**: az ász és a tízes 10-10 pontot ér, az utolsó ütés 10-et, a bemondott pár 20-at (másik szín K+F) vagy 40-et (adu K+F).
  A talonban lévő ászok és tízesek az ellenjátékosokéi.

| Bemondás | Érték | A felvevőnek… |
| --- | --- | --- |
| Passz | 1 | több pontot kell vinnie, mint a két ellenjátékosnak együtt |
| Negyvenszáz | 4 | be kell mondania az adu K+F-et (40), és el kell érnie a 100 pontot |
| Ulti | 4 | az utolsó ütést az adu hetessel kell elvinnie (a bukott ulti duplán fizet) |
| Betli | 5 | egyetlen ütést sem vihet (adu nélkül) |
| Durchmars | 6 | mind a tíz ütést el kell vinnie |
| Húszszáz | 8 | be kell mondania egy másik szín K+F-ét (20), és el kell érnie a 100 pontot |
| Színtelen durchmars | 12 | mind a tíz ütést el kell vinnie adu nélkül |

A **piros** (piros az adu) megduplázza az adus bemondásokat, a **kontra** pedig a játékot. A felvevő **mindkét** ellenjátékostól
megkapja az értéket, vagy mindkettőnek kifizeti.

## ⌨️ Irányítás

| Billentyű | Művelet |
| --- | --- |
| 🖱️ Kattintás egy lapra | Lerakáskor: kijelölés (két lap) · játék közben: kijátszás, vagy megtudod, miért nem szabad |
| 🖱️ Licitgombok | Bemondás és adu-szín választása |
| **Tab** / **Shift+Tab** | Lépés a lapok és a gombok között (az **Enter** / **Szóköz** megnyomja őket) |
| **Enter** | Indítás · következő osztás · folytatás (ha egyik gombon sincs fókusz) |
| **P** / **Esc** | Szünet / folytatás |
| **R** | A szabályok megnyitása |
| **T** | Sötét / világos téma (önálló oldalon) |

A gyorsbillentyűk nem működnek, amíg egy beviteli mezőbe gépelsz, vagy nyomva tartod a Cmd/Ctrl/Alt billentyűt.

**Telefonon**: koppints egy lapra, és kiemelkedik; koppints rá újra (vagy a **Kijátszom** gombra), és kijátszod. Lerakáskor
koppints két lapra, aztán a **Lerakom a 2 lapot** gombra. A licitlista, a **Passzolok**, a **Kontra** és a **Kijátszom** gomb a
képernyő alján, egy sávban van, kézre esik a hüvelykujjadnak. Az asztal fölötti **Teljes képernyő** gomb az egész képernyőt az
asztalnak adja. iPhone-on a *Megosztás → Főképernyőhöz adás* a böngészősávokat is eltünteti.

## 🎯 Pontozás és statisztika

Minden osztás nullaösszegű. A felvevő mindkét ellenjátékostól megkapja az értéket (a pirossal és a kontrával együtt), vagy
mindkettőnek kifizeti. Tíz osztás után:

```
pontszám = min(30000, kerekítés(max(0, nettó egységeid) × 50 × nehézségi szorzó))
nehézségi szorzó: Könnyű 1 · Közepes 1,5 · Nehéz 2
```

A játszma **győzelem**, ha egyedül végzel az élen, **döntetlen**, ha a jobbik géppel holtversenyben vagy, egyébként **vereség**.
A készlet minden befejezett játszmát egyszer rögzít az `arcade.stats.ulti` kulcs alatt. Az **Új játszma** gombbal feladott játszma
nem kerül be. A **Befejezés** idő előtt lezárja a játszmát: az eddig lejátszott osztások pontszáma (a folyamatban lévő osztás nem
számít) akkor is a ranglistára kerül, ha 0.
A statisztikasáv mutatja az **Osztás**t, az **Egyenleg**edet, a **Pont**ot, a **Rekord**ot és az aktív **Idő**t.

## 🤖 A gépi játékosok

- A **Könnyű** véletlenszerű szabályos lapot tesz, csak passzt licitál, és soha nem kontráz.
- A **Közepes** minden bemondásra kiértékeli a kezét, várható érték alapján rak le és licitál, egy gyengének tűnő játékot
  megkontráz, és ökölszabályok szerint játszik.
- A **Nehéz** a nem látott lapokból olyan leosztásokat mintavételez, amelyek mindennel összhangban vannak, amit látott (hiányzó
  színek, felülütési korlátok, bemondott párok), és minden jelölt lapot végigjátszik rajtuk.

A gépi játékosok csak egy `BotView`-t kapnak: a nyilvános asztalt és a saját lapjaikat. A talont csak akkor látják, ha ők rakták
le. Egyik gépi játékos sem néz bele a rejtett talonba, mielőtt eldönti, hogy felveszi. A saját felvételednél a játék mindig felkínálja
a **Felveszem a talont** gombot. Ha még ezzel a két lappal sem tudnád felülmúlni a mostani licitet, megmutatja őket, elmagyarázza,
miért, és visszarakhatod őket egy passzal.
A gépi játékosok erejét az `npm run sim:strength` ellenőrzi: páronként 300 játszmában a nehéz az esetek 95 %-ában veri a könnyűt, a
közepes 85 %-ban.

## 💾 Automatikus mentés és folytatás

A játszma egészben kerül mentésre: nehézség, seed, osztásszám, az aktuális osztás (minden kéz, talon, licitek, ütések) és a futó
eredmények. Az `arcade.session.ulti` kulcsot használja, sémaverzióval. Egy ellenőrző vizsgálja a szerkezetet és az invariánsokat:
32 különböző lap, a fázishoz illő kézméretek, újraszámolt ütésnyertesek, az osztó forgása, minden osztás eredménye és a pontösszegek.
A játék nagyjából másodpercenként ment, valamint mindig, amikor a lap a háttérbe kerül, és amikor eltűnik az oldalról. Újratöltés
után az **Üdv újra!** üzenet fogad, a játék szünetel. Befejezett játszma soha nem töltődik vissza. A gépi játékosok lépései csak a
mentett állapotból jönnek, így a folytatott játszma pontosan úgy megy tovább, mint korábban.

## 🧩 Beágyazás az Arcade-Game-Centerbe

```tsx
import { UltiGame, UltiDemo } from '@arcade/ulti';

<UltiGame
  embedded                                   // elrejti az oldalcímet; a portál mutatja
  onGameOver={(score, info) => submitScore('ulti', score)}   // befejezett játszmák 0-nál több ponttal; Befejezés: mindig, info = { finished: true }
  onRunEnd={(run) => console.log(run.outcome, run.score)}  // minden befejezett játszma
  onStatusChange={({ status, score, seconds }) => updateHeader(status, seconds)}
/>
<UltiDemo active={cardIsVisible} />          // bemutató mód a nyitóoldalon
```

Mindkét komponens a közös `ArcadeGameProps` / `ArcadeDemoProps` szerződést követi (`src/arcade/types.ts`).
Állapotok:
- `idle`: játszma előtt (a beállító kártya)
- `running`: játszma közben
- `paused`: felfüggesztve vagy visszatöltve
- `gameOver`: a tizedik osztás után, vagy a **Befejezés** után

## 🧪 Szkriptek

| Szkript | Mire való |
| --- | --- |
| `npm run dev` | Vite fejlesztői szerver (`?gallery=1`: az egész pakli, csak fejlesztéskor) |
| `npm run build` | Típusellenőrzés (`tsc -b`) és éles build |
| `npm run preview` | Az éles build kiszolgálása |
| `npm run typecheck` | `tsc -b` |
| `npm run lint` | ESLint |
| `npm test` | Vitest (motor-, gépi játékos-, játszma- és komponenstesztek) |
| `npm run check` | lint → typecheck → test → build (ezt futtatja a CI) |
| `npm run sim:strength` | A gépi játékosok erejének szimulációja (`-- N` játszma, `PAIR=a,b`) |

## 🏗️ Felépítés

```
src/
  arcade/        beemelt Zoltan's Arcade készlet — itt ne szerkeszd (lásd a README-jét)
  deck/          Gallery.tsx — csak fejlesztéskor elérhető pakliáttekintő (?gallery=1); maga a pakli a készletben van (src/arcade/hungarian)
  engine/        tiszta Ulti-szabályok: osztás, licit, talon, kontra, szabályos lapjárás indoklással, osztáseredmény és pontozás
  bots/          BotView (az egyetlen híd a gépi játékosok kódjához), licit és lapjárás három szinten, leosztás-mintavételezés
  game/          játszma (10 osztás, mentés, ellenőrző), arcade-pontozás, a gépi játékosok tempója (speed), erősségszimuláció
  ui/            Table, Seat, Hand, TrickArea, BidPanel, ActionPanel, LogPanel, labels, figures/ (a három portré)
  demo/          UltiDemo (három gépi játékos)
  UltiGame.tsx   a beágyazható játék (ArcadeGameProps)
  rules.tsx      a Szabályok ablak részei, a lapsorrend ábrája és a bemondások értéktáblázata
  i18n.ts        en / hu / de szövegek
  App.tsx        önálló oldal: <ArcadeShell><UltiGame/></ArcadeShell>
  main.tsx       belépési pont; egyszer betölti a közös arcade.css-t
  index.ts       csomag-belépési pont az Arcade-Game-Center számára
```

A felület csak a játszmán keresztül változtat a játékon (`act`, `botStep`, `nextDeal`), a játszma pedig a motor nyilvános API-ján
keresztül, amely soha nem módosítja a bemenetét, és minden szabálytalan lépésre hibát dob.

## 🤝 Közreműködés

Lásd a [CONTRIBUTING.md](./CONTRIBUTING.md), a [magatartási kódex](./CODE_OF_CONDUCT.md) és a [SECURITY.md](./SECURITY.md) fájlt.
A közreműködők a [CONTRIBUTORS.md](./CONTRIBUTORS.md), a változások a [CHANGELOG.md](./CHANGELOG.md) fájlban vannak.

## ⚖️ Licenc

[MIT](./LICENSE) © 2026 Zoltán Dul

---

<p align="center">Készítette ❤️-vel Zoltán Dul · a <a href="https://github.com/ZoliQua/Arcade-Game-Center">Zoltan's Arcade</a> része</p>
