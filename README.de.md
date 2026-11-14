# 🎴 Ulti

[English](README.md) · **Deutsch** · [Magyar](README.hu.md)

**Ulti**, das ungarische Kartenspiel für drei, gebaut mit **React 18**, **Vite** und **TypeScript**. Du spielst gegen zwei Bots,
**Bandi** und **Teri**, mit dem ungarischen (Tell-)Blatt aus 32 Karten. Das Blatt ist unsere eigene Vektor-Neuzeichnung des
gemeinfreien Musters von József Schneider aus dem Jahr 1835, mit den Tell-Figuren und den vier Jahreszeiten-Assen. Es gibt echtes
Bieten mit dem Talon, die klassischen Ansagen (Passz, Negyvenszáz, Ulti, Betli, Durchmars, Húszszáz, Színtelen durchmars), die
Piros-Verdopplung, Kontra und die ungarische Abrechnung.
Eine Partie hat zehn Runden. Ein gut lesbares Protokoll hält jedes Gebot und jeden Stich fest.
Es läuft eigenständig **und** als eines der fünfzehn Spiele von **[Zoltan's Arcade](https://github.com/ZoliQua/Arcade-Game-Center)**.
Hier kannst du es spielen: [dulzoltan.hu/arcade/#/play/ulti](https://dulzoltan.hu/arcade/#/play/ulti).

[![CI](https://github.com/ZoliQua/Ulti-Game/actions/workflows/ci.yml/badge.svg)](https://github.com/ZoliQua/Ulti-Game/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-MIT-green)
![node](https://img.shields.io/badge/node-%E2%89%A520-339933?logo=node.js&logoColor=white)
![react](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)

---

## 📑 Inhaltsverzeichnis

- [Die Zoltan's-Arcade-Familie](#-die-zoltans-arcade-familie)
- [Funktionen](#-funktionen)
- [Schnellstart](#-schnellstart)
- [Die Regeln in Kürze](#-die-regeln-in-kürze)
- [Steuerung](#%EF%B8%8F-steuerung)
- [Punkte & Statistik](#-punkte--statistik)
- [Die Bots](#-die-bots)
- [Autospeichern & Fortsetzen](#-autospeichern--fortsetzen)
- [Einbindung in Arcade-Game-Center](#-einbindung-in-arcade-game-center)
- [Skripte](#-skripte)
- [Architektur](#%EF%B8%8F-architektur)
- [Mitwirken](#-mitwirken)
- [Lizenz](#%EF%B8%8F-lizenz)

## 🕹️ Die Zoltan's-Arcade-Familie

Jedes Spiel ist ein eigenes Repo, das sich auch ins Portal einfügt. Alle teilen ein Designsystem, ein Punktemodell und ein
Speicherformat über das eingebundene [`src/arcade/`](./src/arcade)-Kit.

| Spiel | Repo | Genre |
| --- | --- | --- |
| 🏠 **Arcade-Portal** | [Arcade-Game-Center](https://github.com/ZoliQua/Arcade-Game-Center) | Alle Spiele an einem Ort, Live-Demos, Statistik, Bestenliste |
| 🧱 Tetris | [Tetris-Game](https://github.com/ZoliQua/Tetris-Game) | Arcade |
| 🐍 Snake | [Snake-Game](https://github.com/ZoliQua/Snake-Game) | Reaktion |
| 🔢 2048 | [2048-Game](https://github.com/ZoliQua/2048-Game) | Puzzle |
| 🟡 Pac-Man | [Pac-Man-Game](https://github.com/ZoliQua/Pac-Man-Game) | Labyrinth |
| ⚫ Gomoku | [Gomoku-Game](https://github.com/ZoliQua/Gomoku-Game) | Strategie |
| 🦷 Tic-Tac-Toe | [Tic-Tac-Toe-Game](https://github.com/ZoliQua/Tic-Tac-Toe-Game) | Duell |
| 🏓 Breakout | [Breakout-Game](https://github.com/ZoliQua/Breakout-Game) | Schläger |
| 👾 Space Invaders | [Space-Invaders-Game](https://github.com/ZoliQua/Space-Invaders-Game) | Shooter |
| 🔴 Connect Four | [Connect-Four-Game](https://github.com/ZoliQua/Connect-Four-Game) | Duell |
| 🔩 Nut Sort | [Nut-Sort-Game](https://github.com/ZoliQua/Nut-Sort-Game) | Sortieren |
| 🃏 Texas Hold'em | [Texas-Holdem-Game](https://github.com/ZoliQua/Texas-Holdem-Game) | Karten |
| 💣 Minesweeper | [Minesweeper-Game](https://github.com/ZoliQua/Minesweeper-Game) | Logik |
| ♠️ Solitaire | [Solitaire-Game](https://github.com/ZoliQua/Solitaire-Game) | Karten |
| 🎴 **Ulti** (dieses Repo) | [Ulti-Game](https://github.com/ZoliQua/Ulti-Game) | Karten |
| 🂡 Snapszer | [Snapszer-Game](https://github.com/ZoliQua/Snapszer-Game) | Karten |

## ✨ Funktionen

- 🎴 **Das ungarische (Tell-)Blatt** (über das Arcade-Kit mit den anderen Spielen mit ungarischem Blatt geteilt): unsere eigene
  SVG-Zeichnung nach dem Schneider-Muster von 1835, doppelköpfig wie das echte Blatt. Jeder Unter und Ober zeigt seine eigene
  Tell-Figur, die Könige reiten, und die Asse zeigen die Jahreszeiten (Rot Frühling, Schellen Sommer, Grün Herbst, Eichel Winter;
  ungarisch piros Tavasz, tök Nyár, zöld Ősz, makk Tél). Jede Farbe hat ihre eigene Form (Herz, Schelle, Blatt, Eichel), sodass
  man die Farben nie an der Farbe allein unterscheiden muss.
- 🗣️ **Echtes Bieten**: Die Vorhand nimmt den Talon auf und legt zwei Karten ab. Danach nimmt reihum jeder den Talon auf und bietet
  höher, oder passt. Die Gebotsliste bietet **nur** Gebote an, die höher als das aktuelle und mit deinen Karten möglich sind. Jedes
  Gebot ist ein Ansagename plus ein Knopf für die Trumpffarbe, und ein Tooltip erklärt es.
- 📜 **Ansagen**: Passz, Negyvenszáz, Ulti, Betli, Durchmars, Húszszáz und Színtelen durchmars. Die üblichen Kombinationen
  (Ulti + Passz / Negyvenszáz / Húszszáz / Durchmars) sind erlaubt. **Piros** (Rot ist Trumpf) verdoppelt die Trumpfansagen, und ein
  Gegenspieler kann das Spiel mit **Kontra** verdoppeln.
- 🃏 **Stichspiel mit durchgesetzten Regeln**: Farbe bekennen, überbieten, wenn du kannst, trumpfen und übertrumpfen, und beim Ulti
  die Trumpf-Sieben behalten. Karten, die du nicht spielen darfst, sind abgeblendet und schraffiert. Klickst du trotzdem darauf,
  sagt dir das Spiel, welche Regel es verbietet.
- 🧑‍🎨 **Drei Porträts** im Holzschnittstil des Blatts: du, **Bandi** (Zwirbelbart und Pfeife) und **Teri** (Zopf und Blume). Jeder
  Platz zeigt den Namen, den Stand, den Geber, den Alleinspieler und die Gegenspieler sowie ein umrahmtes **▶ Am Zug**-Abzeichen.
- 📖 **Ein lesbares Protokoll**: jedes Gebot, jedes Passen, jedes Kontra und jede 20/40-Meldung, und jeder Stich als eine Zeile mit
  dem Gewinner. Eine Tabelle **Runden** zeigt für jede Runde den Alleinspieler, das Gebot, das Ergebnis und deine Einheiten.
- 🤖 **Bots in Leicht, Mittel oder Schwer**. Sie sehen nur ihre eigenen Karten und den offenen Tisch. **Langsam / Normal / Schnell**
  bestimmt ihr Tempo.
- 🏆 **Einheitliche Arcade-Punkte**: Dein Nettoergebnis über zehn Runden wird zu deiner Punktzahl. Bestwert, Partien und Siege teilst
  du mit dem Portal.
- 📖 **Regeln-Fenster** (Knopf oder **R**): Ziel, so spielst du, die Regeln mit einem Diagramm der Kartenfolge, die Wertetabelle der
  Ansagen aus derselben Gebotsliste, die das Spiel anbietet, die Punktewertung mit jeder Zahl aus den Konstanten des Spiels, der
  Zahnmodus und auf dem Handy die Touch-Steuerung. Beim Öffnen hält die Partie an.
- 🏁 **Vorzeitig beenden**: zwischen zwei Runden möglich; nach einer Rückfrage endet die Partie. Ab der 5. gespielten Runde (der
  Hälfte von zehn) kommt die bisherige Punktzahl in die Bestenliste, davor 0 Punkte.
- ⛶ **Vollbild** für den Tisch (auf dem iPhone eine bildschirmfüllende Ansicht ohne die Seite drumherum).
- ⏸️ **Pause** mit P, oder automatisch, wenn der Tab im Hintergrund ist. Bots und Uhr halten an.
- 💾 **Autospeichern & Fortsetzen**: Die ganze Partie übersteht Neuladen und Schließen des Tabs, sogar mitten im Stich. Die Karten
  der Bots werden gespeichert, aber nie offen gezeigt.
- 🌗 **Dunkles / helles Design**, gemeinsam mit jedem Arcade-Spiel (Taste **T**)
- 🌍 **Drei Sprachen**: Englisch, Ungarisch und Deutsch. Die ungarischen Ansagenamen bleiben in jeder Sprache, jeweils mit einer
  kurzen Erklärung, zum Beispiel „Ulti — den letzten Stich mit der Trumpf-Sieben machen”. Zahlen folgen der Gruppierung der Sprache.
- 🦷 **Zahnmodus**: ein Schalter „Fogas mód” / "Dental mode" / „Zahnmodus” in den Einstellungen, standardmäßig aus (oder
  `?dental=1`), gemeinsam für die ganze Arcade. Auf den Kartenrücken ist ein Zahn, und die drei Porträts tragen mit denselben
  Gesichtern zahnärztliche Kleidung: du als Zahnarzt (weißer Kittel, Stirnspiegel, Mundspiegel), Bandi als Dentalhygieniker (Maske
  und Sonde) und Teri als Zahnarzthelferin (Haube). Die Kartenbilder bleiben traditionell.
- 🤖 **Demo-Modus** (`<UltiDemo />`): Drei Bots spielen echte Runden auf der Startseite des Portals.
- 📱 **Handytauglich**: Im Hochformat stapelt sich der Tisch untereinander. Die Hand ist ein überlappender Fächer, in den auf 360 px
  zwölf Karten passen, und jede Karte behält eine Eckmarke mit Rang und Farbzeichen. Tippe auf eine Karte, sie hebt sich; tippe noch
  einmal, und du spielst sie. Ablegen, Gebote, Passen, Kontra und Ausspielen liegen in einer Leiste am unteren Bildschirmrand.
- 🧪 **Getestet**: Blatt, Regeln und Abrechnung der Engine, Fairness und Stärke der Bots, Spielstände, eine ganze Runde über die
  Oberfläche gespielt, die Gründe für unerlaubte Karten, die Gebotsliste, der Zeitpunkt für Kontra, das Aufnehmen des Talons, die
  Sprachen, der Zahnmodus, die Demo, das Regeln-Fenster, das vorzeitige Beenden und die Touch-Steuerung.

## 🚀 Schnellstart

Du brauchst **Node ≥ 20** und npm.

```bash
git clone https://github.com/ZoliQua/Ulti-Game.git
cd Ulti-Game
npm install
npm run dev          # http://localhost:5173  (?gallery=1 zeigt das ganze Blatt)
```

Für einen Produktions-Build: `npm run build && npm run preview`. Der Build nutzt relative Pfade, daher kann `dist/` aus jedem
Unterordner ausgeliefert werden.

## 📏 Die Regeln in Kürze

Grundlage ist der Ulti-Artikel der ungarischen Wikipedia mit seiner Wertetabelle. Das Spiel nutzt die Grundansagen, ohne die
offenen („terített”) Varianten.

- **Geben**: Jeder bekommt 10 Karten, 2 Karten bilden den Talon. Geben und Spiel laufen nach rechts. Auf dem Bildschirm sitzt der
  Spieler nach dir oben rechts.
- **Bieten**: Die Vorhand nimmt den Talon auf (12 Karten), legt zwei Karten ab und muss bieten. Der nächste Spieler **nimmt den
  Talon auf** und bietet höher, oder **passt**. Zweimal Passen hintereinander beendet das Bieten. Wer zuletzt geboten hat, wird
  **Alleinspieler**, die anderen beiden spielen gemeinsam dagegen.
- **Kontra**: Jeder Gegenspieler darf das Spiel der Reihe nach einmal verdoppeln.
- **Spiel**: Der Alleinspieler spielt zuerst aus. Du musst Farbe bekennen und die beste Karte überbieten, wenn du kannst. Ohne die
  ausgespielte Farbe musst du trumpfen und, wenn möglich, übertrumpfen. In Trumpfspielen gilt A, X, K, O, U, IX, VIII, VII. In Betli
  und Színtelen durchmars gibt es keinen Trumpf, und die X steht unter dem Unter.
- **Punkte**: Asse und Zehner zählen je 10, der letzte Stich 10, gemeldete Paare 20 (K+O einer anderen Farbe) oder 40 (K+O in
  Trumpf). Asse und Zehner im Talon gehören den Gegenspielern.

| Ansage | Wert | Der Alleinspieler muss … |
| --- | --- | --- |
| Passz | 1 | mehr Punkte machen als die beiden Gegenspieler zusammen |
| Negyvenszáz | 4 | König + Ober in Trumpf (40) melden und 100 Punkte erreichen |
| Ulti | 4 | den letzten Stich mit der Trumpf-Sieben machen (ein verlorenes Ulti kostet doppelt) |
| Betli | 5 | keinen Stich machen (ohne Trumpf) |
| Durchmars | 6 | alle zehn Stiche machen |
| Húszszáz | 8 | König + Ober einer anderen Farbe (20) melden und 100 Punkte erreichen |
| Színtelen durchmars | 12 | alle zehn Stiche ohne Trumpf machen |

**Piros** (Rot ist Trumpf) verdoppelt die Trumpfansagen, **Kontra** verdoppelt das Spiel. Der Alleinspieler bekommt den Wert von
**jedem** Gegenspieler oder zahlt ihn jedem.

## ⌨️ Steuerung

| Taste | Aktion |
| --- | --- |
| 🖱️ Klick auf eine Karte | Beim Ablegen: auswählen (zwei Karten) · im Spiel: ausspielen, oder sehen, warum es nicht erlaubt ist |
| 🖱️ Gebotsknöpfe | Ansage und Trumpffarbe wählen |
| **Tab** / **Shift+Tab** | Zwischen Karten und Knöpfen wechseln (**Enter** / **Leertaste** drückt sie) |
| **Enter** | Start · nächste Runde · weiter (wenn kein Knopf den Fokus hat) |
| **P** / **Esc** | Pause / weiter |
| **R** | Regeln öffnen |
| **T** | Dunkles / helles Design umschalten (eigenständige Seite) |

Tastenkürzel werden ignoriert, solange du in ein Formularfeld tippst oder Cmd/Ctrl/Alt hältst.

**Auf dem Handy**: Tippe auf eine Karte, sie hebt sich; tippe noch einmal (oder auf **… ausspielen**), und du spielst sie. Beim
Ablegen tippst du zwei Karten an und dann **2 Karten ablegen**. Die Gebotsliste, **Passen**, **Kontra** und **… ausspielen** liegen
in einer Leiste am unteren Bildschirmrand, in Reichweite deines Daumens. **Vollbild** über dem Tisch gibt ihm den ganzen
Bildschirm. Auf dem iPhone blendet *Teilen → Zum Home-Bildschirm* auch die Browserleisten aus.

## 🎯 Punkte & Statistik

Jede Runde ist ein Nullsummenspiel. Der Alleinspieler bekommt den Wert (mit Piros und Kontra) von jedem Gegenspieler oder zahlt ihn
jedem. Nach zehn Runden:

```
Punktzahl = min(30000, runden(max(0, deine Netto-Einheiten) × 50 × Schwierigkeitsfaktor))
Schwierigkeitsfaktor: Leicht 1 · Mittel 1,5 · Schwer 2
```

Die Partie ist ein **Sieg**, wenn du allein vorn liegst, ein **Unentschieden**, wenn du mit dem besseren Bot gleichauf bist, und
sonst eine **Niederlage**. Das Kit zeichnet jede beendete Partie einmal unter `arcade.stats.ulti` auf. Eine über **Neue Partie**
aufgegebene Partie wird nicht gewertet. **Beenden** gibt es nur zwischen zwei Runden, nie mitten in einer, so kann man einem
scheiternden Spiel nicht entkommen. Es schließt die Partie vorzeitig ab: Nach mindestens `MIN_FINISH_DEALS` = ⌈10 / 2⌉ = 5
gespielten Runden kommt die bisherige Punktzahl in die Bestenliste, davor 0 Punkte, so lässt sich eine glückliche erste Runde
nicht sichern.
Die Statusleiste zeigt die **Runde**, deinen **Stand**, die **Punkte**, den **Bestwert** und die aktive **Zeit**.

## 🤖 Die Bots

- **Leicht** spielt zufällige erlaubte Karten, bietet nur Passz und gibt nie Kontra.
- **Mittel** bewertet seine Hand für jede Ansage, wählt Ablage und Gebot nach dem Erwartungswert, gibt einem schwach wirkenden Spiel
  Kontra und spielt nach Faustregeln.
- **Schwer** zieht Stichproben von Verteilungen der unbekannten Karten, die zu allem passen, was er gesehen hat (Fehlfarben,
  Überbiet-Grenzen, gemeldete Paare), und spielt jede Kandidatenkarte darauf durch.

Die Bots bekommen nur einen `BotView`: den offenen Tisch und ihre eigenen Karten. Den Talon sehen sie nur, wenn sie ihn selbst
abgelegt haben. Kein Bot schaut in den verdeckten Talon, bevor er entscheidet, ihn aufzunehmen. Bei deiner eigenen Aufnahme bietet
das Spiel immer **Talon aufnehmen** an. Wenn selbst diese zwei Karten das aktuelle Gebot nicht schlagen können, zeigt es sie dir,
erklärt warum und lässt dich sie zurücklegen und passen.
`npm run sim:strength` prüft die Stärke der Bots: In 300 Partien pro Paarung schlägt Schwer Leicht in 95 % der Fälle und Mittel
Leicht in 85 %.

## 💾 Autospeichern & Fortsetzen

Die Partie wird als Ganzes gespeichert: Schwierigkeit, Seed, Rundennummer, die laufende Runde (alle Hände, Talon, Gebote, Stiche)
und die laufenden Stände. Sie nutzt den Schlüssel `arcade.session.ulti` mit Schemaversion. Ein Validator prüft die Struktur und die
Invarianten: 32 verschiedene Karten, Handgrößen passend zur Phase, nachgerechnete Stichgewinner, die Geberfolge, jedes
Rundenergebnis und die Punktsummen.
Das Spiel speichert etwa einmal pro Sekunde, immer wenn die Seite in den Hintergrund geht, und wenn es ausgeblendet wird. Nach dem
Neuladen erscheint **Willkommen zurück**, und das Spiel ist pausiert. Eine beendete Partie wird nie wiederhergestellt. Die Züge der
Bots ergeben sich nur aus dem gespeicherten Stand, daher läuft eine fortgesetzte Partie genau so weiter wie zuvor.

## 🧩 Einbindung in Arcade-Game-Center

```tsx
import { UltiGame, UltiDemo } from '@arcade/ulti';

<UltiGame
  embedded                                   // blendet den Seitentitel aus; das Portal zeigt ihn
  onGameOver={(score, info) => submitScore('ulti', score)}   // beendete Partien mit mehr als 0 Punkten; Beenden: immer, info = { finished: true }
  onRunEnd={(run) => console.log(run.outcome, run.score)}  // jede beendete Partie
  onStatusChange={({ status, score, seconds }) => updateHeader(status, seconds)}
/>
<UltiDemo active={cardIsVisible} />          // Demo-Modus auf der Startseite
```

Beide Komponenten folgen dem gemeinsamen Vertrag `ArcadeGameProps` / `ArcadeDemoProps` aus `src/arcade/types.ts`.
Status:
- `idle`: vor einer Partie (die Einstellungskarte)
- `running`: während einer Partie
- `paused`: angehalten oder wiederhergestellt
- `gameOver`: nach der zehnten Runde oder nach **Beenden**

## 🧪 Skripte

| Skript | Zweck |
| --- | --- |
| `npm run dev` | Vite-Entwicklungsserver (`?gallery=1`: das ganze Blatt, nur in der Entwicklung) |
| `npm run build` | Typprüfung (`tsc -b`) und Produktions-Build |
| `npm run preview` | Den Produktions-Build ausliefern |
| `npm run typecheck` | `tsc -b` |
| `npm run lint` | ESLint |
| `npm test` | Vitest (Engine-, Bot-, Partie- und Komponententests) |
| `npm run check` | lint → typecheck → test → build (das, was die CI ausführt) |
| `npm run sim:strength` | Stärkesimulation der Bots (`-- N` Partien, `PAIR=a,b`) |

## 🏗️ Architektur

```
src/
  arcade/        eingebundenes Zoltan's-Arcade-Kit — hier nicht bearbeiten (siehe seine README)
  deck/          Gallery.tsx — Blattübersicht nur in der Entwicklung (?gallery=1); das Blatt selbst liegt im Kit (src/arcade/hungarian)
  engine/        reine Ulti-Regeln: Geben, Gebote, Talon, Kontra, erlaubtes Spiel mit Gründen, Rundenergebnis und Abrechnung
  bots/          BotView (die einzige Brücke zum Bot-Code), Bieten und Spielen auf drei Stufen, Stichproben von Verteilungen
  game/          Partie (10 Runden, Spielstände, Validator), Arcade-Punkte, Tempo der Bots (speed), Stärkesimulation
  ui/            Table, Seat, Hand, TrickArea, BidPanel, ActionPanel, LogPanel, labels, figures/ (die drei Porträts)
  demo/          UltiDemo (drei Bots)
  UltiGame.tsx   das einbettbare Spiel (ArcadeGameProps)
  rules.tsx      Abschnitte des Regeln-Fensters, das Diagramm der Kartenfolge und die Wertetabelle der Ansagen
  i18n.ts        Texte auf en / hu / de
  App.tsx        eigenständige Seite: <ArcadeShell><UltiGame/></ArcadeShell>
  main.tsx       Einstieg; lädt die gemeinsame arcade.css einmal
  index.ts       Paket-Einstieg für Arcade-Game-Center
```

Die Oberfläche ändert das Spiel nur über die Partie (`act`, `botStep`, `nextDeal`), und die Partie geht über die öffentliche API der
Engine, die ihre Eingabe nie verändert und bei allem Unerlaubten einen Fehler wirft.

## 🤝 Mitwirken

Siehe [CONTRIBUTING.md](./CONTRIBUTING.md), den [Verhaltenskodex](./CODE_OF_CONDUCT.md) und [SECURITY.md](./SECURITY.md).
Die Mitwirkenden stehen in [CONTRIBUTORS.md](./CONTRIBUTORS.md), die Änderungen in [CHANGELOG.md](./CHANGELOG.md).

## ⚖️ Lizenz

[MIT](./LICENSE) © 2026 Zoltán Dul

---

<p align="center">Mit ❤️ gemacht von Zoltán Dul · Teil von <a href="https://github.com/ZoliQua/Arcade-Game-Center">Zoltan's Arcade</a></p>
