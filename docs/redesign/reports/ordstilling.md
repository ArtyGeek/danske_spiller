# ordstilling — redesign report

Game file: ordstilling-detektiv/index.html | Theme: shared/themes/ordstilling.css | Screenshots: docs/redesign/screenshots/ordstilling/ (mobile/tablet/desktop: start, play/built, correct, wrong, results, case-intro, filter, map-after, dark-map, mobile-focus)

| Check | Result |
|---|---|
| Console errors/warnings, failed requests (3 viewports) | PASS (zero) |
| No horizontal scroll (390/820/1440, every captured screen) | PASS |
| Full flow: start, correct, wrong, finish, restart/back to menu | PASS (map, case, correct, wrong, finish case (SOLVED stamp, next case unlocked), back to map. Final investigation and weak-sentence mode not driven end-to-end (code paths unchanged, restyled only)) |
| Scoring/rules unchanged | PASS (only additive fx hooks; score/lives/streak values verified) |
| Saved progress (localStorage key `dwod_progress_v1`) written and restored after reload | PASS |
| Reduced motion (animation-name none on sprites/fx, game still works) | PASS |
| Dark mode readable | PASS (mobile screenshot reviewed) |
| æ/ø/å render, long words wrap | PASS (Pixelify/JetBrains Mono; overflow-wrap:anywhere) |
| Tap targets >= 44px (buttons measured at 390px) | PASS |
| Visible focus ring on Tab | PASS (mobile-focus.png) |
| Feedback not colour-only | PASS (check/cross icon + RIGTIGT/FORKERT text) |
| Offline / file:// (no CDN; Google Fonts import removed) | PASS |
| Back to menu | PASS (shared bar auto-injected; old floating home link removed; in-game back button kept where it exists) |
| Real device / screen reader / Danish TTS voice | NOT VERIFIED (headless Chrome only) |

## Changed files
- ordstilling-detektiv/index.html: removed Google Fonts @import and floating home link; added sjovt css/js + theme links; hat sprite in masthead, pokal/polle/stjerne on results; Sjovt.fx hooks (answer correct/wrong, score bump, celebrate, hydrate sprites, watchScreens); emoji removed/replaced by text (lock -> LOCKED, hearts -> text glyphs, speaker -> note glyph); speaker aria-label now Danish.
- shared/themes/ordstilling.css (new)

## Known issues
- Final Investigation (timed) and Svage saetninger mode were restyled but not played through in the automated run.
- Game UI copy is mostly English; kept as is (content rule).
- Heart lives use text glyphs coloured pink (no sprite) to keep the HUD logic untouched.

## Shared-system requests
None.
