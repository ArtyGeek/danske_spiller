# konjunktioner (Konjunktion Crush) — redesign report

Files changed: `konjunktioner/konjunktioner.html` (Google Fonts @import removed, dsg-home link removed, sjovt.css/js + theme linked, emoji replaced by sprites/pixel glyphs, additive fx hooks, lives rendered as hjerte sprites, floating-candy emoji backdrop removed), `shared/themes/konjunktioner.css` (new).
No change to RAW sentences, RULES, scoring, levels, lives, review logic, or the `kkHi` localStorage key.

| Check | Result |
|---|---|
| Console errors/warnings, failed requests (3 viewports, full flow) | PASS (none) |
| No horizontal scroll on start/play/correct/wrong/results/review (390/820/1440) | PASS |
| Tap targets >= 44px (buttons, select, speaker) | PASS |
| Flow: start -> correct (+10) -> wrong (-1 life, streak 0) -> game over -> review -> review done -> restart -> menu link | PASS |
| Scoring unchanged (10 per correct, combo mult., lives) | PASS |
| Progress: `kkHi` written and read after reload (hiStart) | PASS |
| Level select (B2) filters deck | PASS |
| Keyboard: 1-4 answer, Enter next, Tab focus ring (4px blue) | PASS |
| Feedback not colour-only (check/cross on buttons + "Rigtigt!/Det rigtige er" text) | PASS |
| Reduced motion: no animations, still functional | PASS |
| Dark mode readable (play + wrong screens) | PASS (dimmed unchosen options are intentionally low contrast) |
| æøå render, long words wrap | PASS (fonts local, no external requests) |
| Preloader / shared bar / back to ../index.html | PASS |

Screenshots: `docs/redesign/screenshots/konjunktioner/{mobile,tablet,desktop}-{start,play,correct,wrong,results}.png` plus mobile review, review-done, dark, focus.

Known issues: transient particle burst briefly overlaps the correct button label (~0.5s). Pre-existing: Enter on a focused "Næste" button can double-fire (keydown handler + click); not touched (logic).
Shared-system requests: none.
