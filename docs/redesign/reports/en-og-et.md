# en-og-et (Ordenes Vidunderland) — redesign report

Files changed: `en og et/index.html` (Google Fonts links + dsg-home removed, sjovt.css/js + theme linked, emoji -> sprites/text, inline font styles replaced by `.is-sentence`/`.gap` classes, feedback box classes `sd-fb`, fx hooks, keyboard operability for flashcard and match tiles, aria-pressed on level buttons, aria-live on #message), `shared/themes/en-og-et.css` (new).
No change to word data, rules, scoring, progress logic or the `en_et_traener_v1` key.

| Check | Result |
|---|---|
| Console errors/warnings, failed requests (3 viewports) | PASS (none); no googleapis in DOM |
| No horizontal scroll: menu, play, correct, wrong, results, typed, sentence, submenu, MC, flash, match (390/820/1440; menu + longword also at 360) | PASS |
| Tap targets >= 44px on all screens listed above | PASS |
| Modes driven: en/et (buttons + keys 1/2), definite, plural, sentence (typed + Enter), speed (timer starts/stops), weak (enabled after errors, runs), opposites MC/flash/match, synonyms flash | PASS |
| Full flow: start -> correct -> wrong -> 15 rounds -> results -> Igen -> Tilbage -> menu | PASS |
| Scoring/streak unchanged (e.g. 14/15, best streak 13) | PASS |
| Progress: `en_et_traener_v1` identical after reload; weak count restored | PASS |
| CEFR filter works (A1), aria-pressed set | PASS |
| Keyboard: flashcard flips with Space, match tiles playable with Enter/Space, focus ring 4px | PASS |
| Feedback not colour-only (icon + text; options/tiles get check/cross) | PASS |
| Reduced motion: no animations, functional | PASS |
| Dark mode readable (menu, wrong) | PASS |
| æøå + long word wrap at 360px | PASS |
| Speech synthesis button (♪) | NOT VERIFIED (no audio in headless; click handler unchanged) |

Screenshots: `docs/redesign/screenshots/en-og-et/{mobile,tablet,desktop}-{start,play,correct,wrong,results}.png` plus mobile typed, sentence, speed, submenu, mc, flash, match, weak, dark, focus, longword.

Known issues: in-game "← Tilbage" (to mode menu) kept alongside the shared "← MENU" bar since it is a distinct in-game quit. Compact header uses `:has()` (modern browsers; falls back to full header). Emblem SVGs recoloured via CSS attribute selectors.
Shared-system requests: none.
