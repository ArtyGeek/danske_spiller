# Report: antonyms (danish-antonyms-game.html)

Files changed: `danish-antonyms-game.html` (head links; removed the old floating "Oversigt" link, replaced by the shared bar; emoji -> sprites/text; speaker emoji -> SVG icon; `.back-link` anchors -> `<button>` so they are keyboard operable; feedback verdict uses check/cross text; additive fx script), `shared/themes/antonyms.css` (new). `danish_antonyms.csv` untouched. Logic, data, scoring and key `modsat_danish_antonyms_v1` untouched.

| Check | Result |
|---|---|
| Console errors / warnings / failed requests (3 viewports) | PASS (none) |
| No horizontal scroll (390, 820, 1440, 360 with long words) | PASS |
| Tap targets >= 44px incl. speaker buttons, pills, switches | PASS |
| Full flow: Choice (correct, wrong, 10 questions) -> results -> play again -> quit -> menu | PASS |
| Match Pairs (right + wrong pair), Reverse, Missing (typed answer + Enter), Speed, Category, Difficulty, Review, Settings | PASS |
| Scoring / XP / mastery unchanged (+10 XP per correct, counts consistent with storage) | PASS |
| Persistence: setting toggled by keyboard Space, survives reload | PASS |
| Keyboard: switches are real focusable checkboxes (previously `display:none`), focus ring visible | PASS |
| Reduced motion (no running animations, still functional) | PASS |
| Dark mode via OS preference | PASS |
| Long words / ae oe aa wrapping at 360px | PASS |
| Feedback not colour-only (check/cross + text on options, match items, verdict) | PASS |
| Speech synthesis | NOT VERIFIED (headless Chrome has no Danish voice; code path untouched) |

Visual: pixel HUD chips with sprites, mode cards use the 8 sprites, pixel progress bars, ON/OFF pixel switches, compact header on phones (XP bar hidden during play via `:has()`), pokal sprite and confetti on results, pop/shake on answers, XP/streak bumps, level-up confetti.

Known issues / notes:
- CSS `:has()` used for compact play header (progressive enhancement only).
- Ambiguous pairs in the data (e.g. a word appearing in several pairs) are original behaviour.
- Pixelify "C" glyph looks like "O" at small sizes (shared font).

Shared-system requests: none.
Screenshots: `docs/redesign/screenshots/antonyms/`.
