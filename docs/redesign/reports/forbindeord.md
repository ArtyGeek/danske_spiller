# forbindeord — redesign report

Game file: forbindenor/Forbindenor.html | Theme: shared/themes/forbindeord.css | Screenshots: docs/redesign/screenshots/forbindeord/ (mobile/tablet/desktop: start, play/built, correct, wrong, results, mobile-weak, mobile-dark, mobile-focus)

| Check | Result |
|---|---|
| Console errors/warnings, failed requests (3 viewports) | PASS (zero) |
| No horizontal scroll (390/820/1440, every captured screen) | PASS |
| Full flow: start, correct, wrong, finish, restart/back to menu | PASS (answered correct and wrong, weak mode, lost all energy to results, Spil igen) |
| Scoring/rules unchanged | PASS (only additive fx hooks; score/lives/streak values verified) |
| Saved progress (localStorage key `forbindenor_v1`) written and restored after reload | PASS |
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
- forbindenor/Forbindenor.html: removed Google Fonts @import, old dsg-home link, grid/scanline background divs; added sjovt css/js + theme links; polle mascot in header, pokal/polle/stjerne on results; Sjovt.fx hooks (correct/wrong/bump/enter/celebrate/watchScreens); cyber copy replaced by Danish plain labels (SYSTEM RESET -> RESULTAT, Energy -> Energi, Genstart -> Spil igen); emoji speaker/icons replaced by text glyphs; toast got role=status.
- shared/themes/forbindeord.css (new)

## Known issues
- Game has no separate start screen (it begins at the first question), so the mascot lives in the header.
- 'Svage forbindeord' button stays visible on the results screen (pre-existing behaviour).
- Bilingual EN/DA labels (Overs&aelig;ttelse / Translation, category English subtitle) kept as content.

## Shared-system requests
None.
