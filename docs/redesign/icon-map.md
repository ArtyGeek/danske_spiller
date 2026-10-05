# Sjovt icon map (US-038)

Scope: documentation of which existing sprite means what, and the per-game change list. Uses ONLY sprites that exist in `shared/sjovt.js` (frozen). No new art. Line numbers refer to the working tree on 2026-10-04.

## 1. Sprite inventory (what each sprite actually depicts)

Pixel density: `spriteSVG` halves the scale of grids >= 32 wide (`sjovt.js:619`). At the same `data-scale` s both families have the same footprint (16 x s), but a 16px sprite has pixels of s px and a 32px sprite pixels of s/2 px. That is the VIS-004 mix. Contact sheet (light and dark, scale 4): scratchpad `impl/w-icons/sheet-light.png`, `sheet-dark.png`.

| Sprite | Grid | Family | Actually depicts | Portal card of |
|---|---|---|---|---|
| polle | 16x16 | flat | Hot-dog mascot with a smiling face | brand / hero |
| snegl | 14x14 | flat | Cinnamon roll (a brown spiral disc) | none |
| molle | 16x16 | flat | Red windmill with white crossed blades | none |
| cykel | 16x10 | flat | Bicycle, black outline only. Nearly invisible in dark mode (black on dark) | none |
| stjerne | 9x10 | flat | Small gold star | none (reward) |
| hjerte | 11x9 | flat | Red heart | none (lives) |
| pokal | 11x12 | flat | Gold trophy cup | none (results) |
| hat | 12x8 | flat | Small grey bowler hat with red band. Dark outline vanishes in dark mode | none (portal empty-state only) |
| flag | 17x12 | flat | Danish flag | none (language) |
| modsat | 32 | shaded | Blue arrow right over red arrow left | Antonymer |
| kort | 32 | shaded | White "Vb." card over a red card | Glosekort |
| tryllestav | 32 | shaded | Purple magic wand with gold star and sparkles | Magiske Verber |
| pin | 32 | shaded | Red map pin with four black arrows (pointer to one spot) | Præpositioner |
| snak | 32 | shaded | White speech bubble with three typing dots | Dansk Mester |
| terning | 32 | shaded | Two cards "en" (blue) and "et" (red) with sparkles (not a die) | En/Et |
| slik | 32 | shaded | Blue and red candy blobs joined (twins) | Konjunktioner |
| lup | 32 | shaded | Magnifying glass with spectacles | Ordstillingsdetektiven |
| net | 32 | shaded | Blue and red capsule joined by a gold ring (connector) | Forbindeord |
| kiste | 32 | shaded | Wooden treasure chest with a lock and a small scroll/roll | Idiomjæger |
| tandhjul | 32 | shaded | Grey gears with an "A" card (workshop) | Bøjningsværkstedet |
| ur | 32 | shaded | Two chat bubbles joined by a red chain link (NOT a clock) | Adverbier |
| bog | 32 | shaded | White "?" speech bubble with a blue person (NOT a book) | Pronomenmysteriet |
| tidsstjerne | 32 | shaded | Gold star with eyes (the "time machine" star) | Tidsmaskinen |

There is no clock, stopwatch, bolt, bar chart, flip-card or dice sprite. Names are misleading for `ur`, `bog`, `terning`, `net`, `slik`.

## 2. Current usage (mode menus and headers)

"Dens." F = flat 16px family, S = shaded 32px family. A row that has both is marked MIX.

| Game / screen | Slot (mode) | Sprite now | Dens. | Role now |
|---|---|---|---|---|
| Antonymer menu | Vælg modsætningen | modsat | S | quiz (duplicates the header sprite) |
| | Find par | snegl | F | pairs |
| | Omvendt oversættelse | molle | F | translation |
| | Det manglende ord | cykel | F | typing |
| | Hurtigrunde | stjerne | F | speed |
| | Gentag fejlene | hjerte | F | review |
| | Øv efter emne | pokal | F | category |
| | Øv efter sværhedsgrad | hat | F | difficulty |
| Antonymer HUD chips | level / xp / streak / accuracy | pokal / stjerne / hjerte / flag | F | stats (streak is a heart, accuracy is a flag) |
| Præpositioner menu | Udfyld hullet | pin | S | typing (equals header) |
| | Flervalg | stjerne | F | quiz |
| | Træk og slip | cykel | F | drag |
| | Find fejlen | hat | F | error-hunt |
| | Ret sætningen | snegl | F | correct |
| | Oversættelse | flag | F | translation |
| | Forvekslingspar | hjerte | F | confusable pairs |
| | Lynrunde | molle | F | speed |
| | Gentag fejl | snegl | F | review (same as "Ret sætningen") |
| | Statistik | pokal | F | stats |
| Magiske Verber menu | Verbumarenaen | hat | F | quiz |
| | Tidsmaskinen | snegl | F | time/tense |
| | Førnutidsbyggeren | cykel | F | build |
| | Laboratoriet (uregelmæssige) | hjerte | F | irregular verbs |
| | Sætningsværkstedet | molle | F | repair |
| | Verbumdetektiven | flag | F | error-hunt/detective |
| | Hurtigduellen | stjerne | F | speed |
| | Blandet repetition | pokal | F | mixed |
| | Difficulty Nem / Mellem / Svær | snegl / cykel / molle | F | difficulty |
| Idiomjæger menu | Lærings-tilstand | molle | F | learn |
| | Øve-tilstand | stjerne | F | practice |
| | Spil | cykel | F | games hub |
| | Svage Idiomer | hjerte | F | review/weak |
| | Statistik | pokal | F | stats |
| | Idiom-ordbog | hat | F | dictionary |
| Idiomjæger streak / coins | streak `molle`, coins `stjerne`, lives `hjerte` | | F | chips (fine) |
| Idiomjæger achievements | 9 badges | stjerne, kort, kiste, pokal, lup, molle, pin, bog, flag | MIX | badge (one meaning per sprite lost) |
| Dansk Mester modes | Flervalg / Vendekort / Find par / Tidsudfordring / Blandet / Intervalrepetition / Svage ord | stjerne / snegl / hjerte / cykel / molle / pokal / hat | F | quiz / flip / pairs / speed / mixed / review / weak (molle here is "mixed", elsewhere "streak") |
| Dansk Mester chrome | header brand `flag`; chips xp `stjerne`, streak `molle`; bottom nav Hjem `snak`, Statistik `pokal`, Emblemer `stjerne` | | MIX in nav | identity wrong (portal card = snak); nav mixes S and F |
| Dansk Mester badges | 9 badges | stjerne, pokal, hjerte, snegl, molle, cykel, hat, flag, snak | MIX | badge |
| En/Et menu | 11 slots | already re-picked (D-ENET, decision #8), all S | S | see section 3 |
| Tidsmaskinen / Bøjningsværkstedet / Pronomenmysteriet / Glosekort / Forbindeord / Konjunktioner / Ordstillingsdetektiven / Adverbier | mode lists are text-only buttons | none | | no mode sprites, identity only (section 4) |

Cross-game meaning clashes (QA-061): `hat` = quiz arena, error-hunt, difficulty, dictionary, weak words, empty state. `molle` = translation, speed, repair, learn, mixed, streak, hard. `snegl` = pairs, review, correct, time, flip, easy. `pokal` = stats, mixed, category, SRS, level, results. `flag` = accuracy, translation, detective, header, "continue", Danish.

## 3. The map (one sprite per role)

Rule: a mode row uses ONLY the shaded 32px family. Each role has one sprite; a sprite has one role (identity use on its own game's header/portal card is allowed in addition). Where the En/Et re-pick (owner-approved, decision #8) differs, En/Et wins inside En/Et and is listed.

| Role | Sprite | Why | Used for |
|---|---|---|---|
| quiz / multiple choice | `bog` ("?" bubble) | question | Flervalg, Vælg modsætningen, Verbumarenaen, En/Et Style: Quiz (same) |
| typing / fill-in | `snak` (bubble with typing dots) | you type | Udfyld hullet, Det manglende ord, En/Et Dronningens gåder (same) |
| pairs / matching | `net` (two halves joined by a ring) | join two | Find par everywhere, En/Et Find par (same) |
| speed / timed | `tryllestav` | NO good sprite exists (no clock). Least bad 32px, chosen by the En/Et worker | Hurtigrunde, Lynrunde, Hurtigduellen, Tidsudfordring, En/Et Kaninens ræs (same) |
| review / weak spots | `lup` | find weak points | Gentag fejl(ene), Svage ord/Idiomer, En/Et Svage ord (same) |
| flip cards / learn by cards | `kort` | card | Vendekort, Lærings-tilstand, irregular verbs card. En/Et exception: Vendekort = `terning` (kort is already En/Et Flertal) |
| mixed / random | `terning` | "random" for all games except En/Et, whose cards `terning` is its identity | Blandet repetition, Øve-tilstand |
| translation / direction | `modsat` (two opposite arrows) | EN to DA | Oversættelse, Omvendt oversættelse. En/Et Spejlordene (same sprite, "opposite") |
| confusable / twin pairs | `slik` (twins) | twins | Forvekslingspar. En/Et Tvillingordene (same) |
| error-hunt / detective | `pin` (marks the spot) | mark the faulty word. En/Et Bestemt form also `pin` ("this one exact thing"); same idea | Find fejlen, Verbumdetektiven |
| repair / correct / tools | `tandhjul` | workshop | Ret sætningen, Sætningsværkstedet, games hub (Idiomjæger Spil) |
| build sentence | `ur` (chat bubbles + chain) | linked sentence parts | Førnutidsbyggeren (Adverbier is the "Sætningsbyggeren") |
| time / tense | `tidsstjerne` | Tidsmaskinen identity | Magiske "Tidsmaskinen", Tidsmaskinen header |
| collection / category / dictionary / SRS box | `kiste` | chest = Leitner box, topic set | Øv efter emne, Idiom-ordbog, Intervalrepetition |
| definite form | `pin` | En/Et only | Bestemt form |
| plural | `kort` | En/Et only (two cards) | Flertal |
| difficulty | `stjerne` x1/2/3 at one scale | NO 32px sprite. Least bad: stars; or `tidsstjerne` as a one-off | Nem/Mellem/Svær, Øv efter sværhedsgrad |
| stats / results | `pokal` | NO 32px sprite (BLOCKED, art task). Interim: render at half the `data-scale` of the row (2px pixels) | Statistik, results hero |

Chip/HUD context (small, scale 1-2, all flat F family, one density per chip row):
- `molle` = streak only, `hjerte` = lives only, `stjerne` = XP / coins / reward star, `pokal` = level, results and achievement badges only, `flag` = Danish / language only (never accuracy: use text "%"), `polle` = brand / home only.
- Badge grids use `stjerne` and `pokal` only (one density), not nine different sprites.
- `snegl`, `cykel`, `hat` are retired from mode rows (no meaning, `cykel` and `hat` unreadable in dark mode). `hat` is still used by the frozen portal empty state.

### Differences from the En/Et choice
All En/Et picks are kept as the map (Quiz `bog`, Vendekort `terning`, Find par `net`, speed `tryllestav`, Bestemt form `pin`, Flertal `kort`, Svage ord `lup`, En/et `terning`, Spejlordene `modsat`, Tvillingordene `slik`, Dronningens gåder `snak`). The only deviation is the generic role "flip cards" = `kort`; in En/Et the owner-approved `terning` wins (En/Et only). `terning` is "mixed" everywhere else.

## 4. Header / identity rule
Header and title sprite = the sprite of the game's portal card (`index.html:241-267`): Antonymer modsat, Glosekort kort, Magiske tryllestav, Præpositioner pin, Dansk Mester snak, En/Et terning, Konjunktioner slik, Ordstillingsdetektiven lup, Forbindeord net, Idiomjæger kiste, Bøjningsværkstedet tandhjul, Adverbier ur, Pronomenmysteriet bog, Tidsmaskinen tidsstjerne. One title per screen; both slots use the same sprite. `polle` is the SJOVT DANSK bar logo only.

## 5. Per-game application table (blueprint for game workers)

| File : line | Slot | Now | Target |
|---|---|---|---|
| `tidsmaskinen/index.html:158` | header brand | ur | tidsstjerne |
| `tidsmaskinen/index.html:165` | start h1 | ur | tidsstjerne |
| `boejningsvaerkstedet/index.html:366` | header brand (duplicate title) | molle + text | remove the brand title (keep `:373` h1 with `tandhjul`) or, if the bar needs a brand, `tandhjul`; one title only |
| `boejningsvaerkstedet/index.html:373` | start h1 | tandhjul | keep |
| `boejningsvaerkstedet/index.html:650` | empty state | hat | `tandhjul` (hat is retired) |
| `pronomenmysteriet/index.html:119,126` | brand and h1 | bog, bog | sprite OK; title is duplicated (VIS-021), keep one |
| `danske-phraser/dansk-mester.html:757` | header brand | flag | snak |
| `danske-phraser/dansk-mester.html:802` | "Fortsæt" card | flag | snak |
| `danske-phraser/dansk-mester.html:865` `MODE_SPR` | modes | mc stjerne, flash snegl, match hjerte, timed cykel, mixed molle, sr pokal, weak hat | `{mc:'bog',flash:'kort',match:'net',timed:'tryllestav',mixed:'terning',sr:'kiste',weak:'lup'}` (all S) |
| `danske-phraser/dansk-mester.html:879` | mode emblem | data-scale 4 | keep |
| `danske-phraser/dansk-mester.html:764-765` | bottom nav | snak, pokal, stjerne at scale 2 | `polle`, `pokal`, `stjerne` (one flat family, scale 2) |
| `danske-phraser/dansk-mester.html:759-760,533` | chips | stjerne, molle | keep (xp, streak) |
| `danske-phraser/dansk-mester.html:789` | path cards | cykel (verbs) / snegl | `kort` (verbs) / `snak` (expressions) |
| `danske-phraser/dansk-mester.html:1261` `BADGE_SPR` | badges | 9 mixed | `['pokal','stjerne']` cycle (one density) |
| `danish-antonyms-game.html:1428-1435` `MODES.emoji` | modes | modsat, snegl, molle, cykel, stjerne, hjerte, pokal, hat | choice `bog`, match `net`, reverse `modsat`, missing `snak`, speed `tryllestav`, review `lup`, category `kiste`, difficulty `stjerne` (BLOCKED, see 6) |
| `danish-antonyms-game.html:317-320` | HUD chips | pokal, stjerne, hjerte (streak), flag (acc) | pokal, stjerne, `molle` (streak), no sprite for accuracy (text "%") |
| `dansk-praepositioner.html:863` `MODE_SPR` | modes | fill pin, mc stjerne, drag cykel, mistake hat, correct snegl, trans flag, pairs hjerte, speed molle, review snegl, stats pokal | `{fill:'snak',mc:'bog',drag:'tandhjul',mistake:'pin',correct:'ur',trans:'modsat',pairs:'slik',speed:'tryllestav',review:'lup',stats:'pokal'}` (see note) |
| `magiske_verber.html:729` `GAME_SPR` | game cards | arena hat, timemachine snegl, perfect cykel, irregular hjerte, repair molle, detective flag, speed stjerne, mixed pokal | `{arena:'bog',timemachine:'tidsstjerne',perfect:'ur',irregular:'kort',repair:'tandhjul',detective:'pin',speed:'tryllestav',mixed:'terning'}` |
| `magiske_verber.html:741` `DIFF_SPR` | difficulty | snegl, cykel, molle | stars 1/2/3 (`stjerne`, same scale) |
| `idiomjaeger.html:688-693` | main menu | molle, stjerne, cykel, hjerte, pokal, hat | learn `kort`, practice `terning`, Spil `tandhjul`, Svage `lup`, Statistik `pokal`, Idiom-ordbog `kiste` |
| `idiomjaeger.html:661-669` `ACHS.ico` | badges | 9 mixed | `stjerne` / `pokal` only |
| `en og et/index.html:305-361` | 11 slots | done in D-ENET | no change |
| `adverbs.html:367`, `danish-antonyms-game.html:311`, `forbindenor/Forbindenor.html:214`, `konjunktioner/konjunktioner.html:273`, `ordstilling-detektiv/index.html:291`, `danish_flashcards/danish_flashcards_game/index.html:76`, `idiomjaeger.html:308`, `dansk-praepositioner.html:264`, `magiske_verber.html:273` | identity | ur, modsat, net, slik, lup, kort, kiste, pin, tryllestav | already match the portal, no change |

Note on Præpositioner: 10 rows need 10 distinct 32px sprites. `drag` has no matching sprite; least bad is `tandhjul` (move the parts), and `correct` takes `ur` (reassemble the sentence). The header `pin` no longer repeats in the grid because `fill` becomes `snak`.

## 6. BLOCKED (needs a new or redrawn sprite in frozen `sjovt.js`)
- Stats / results icon at 32px shaded (`pokal` is flat 11px). Interim: render at half scale so pixels match, or accept one flat icon per context.
- Difficulty icon (stars, flat `stjerne`) and speed icon (a real stopwatch; `tryllestav` is a compromise).
- Chip/HUD sprites (`molle`, `hjerte`, `pokal`, `stjerne`, `flag`) stay flat; the story's "redraw the 9 generic sprites at 32px" is the art task and not possible without owner approval.
- `cykel` has no fill and disappears in dark mode; retire it from the UI (done in the map).
- Portal `index.html:216` (empty-state `hat`) and `:228` (footer `flag`, fine) are frozen.
