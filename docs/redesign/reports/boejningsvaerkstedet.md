# Report: boejningsvaerkstedet

Files changed: `boejningsvaerkstedet/index.html` (head links, emoji->sprites/text, fx hooks, "Rigtigt!" line in correct slip, summary mascot), `shared/themes/boejningsvaerkstedet.css` (new).
Screenshots: `docs/redesign/screenshots/boejningsvaerkstedet/{mobile,tablet,desktop}-*` (start, modeN-play/wrong/correct/summary for all 6 modes, plus dark + focus).
Test scripts (scratchpad): `boejningsvaerkstedet-run.mjs`, `-extra.mjs`, `-focus.mjs`.

## Checks
| Check | Result |
|---|---|
| Console errors/warnings, failed requests (all 3 viewports x 6 modes) | PASS (0) |
| No horizontal scroll (390/820/1440 on start, play, wrong, summary; also 360 and 320 with a 70-char word) | PASS |
| Tap targets >= 44px (start, wrong-state, summary, all viewports) | PASS |
| Full flow per mode: start -> wrong -> Videre -> correct x9 -> summary -> Spil igen -> back (X) -> start | PASS (summary 9/10, 90% every mode; scoring unchanged) |
| Modes 5 and 6 with shipped data | PASS |
| Modes 1-4 (renderers) | PASS using test-injected synthetic data (shipped data.js has 0 items for modes 1-4, buttons show "kommer snart"; injection done in test only via evaluateOnNewDocument) |
| localStorage keys/behaviour (`boejningsvaerkstedet:mode`, `:levels`, `srs:boejningsvaerkstedet`, DanskCore dark key) | PASS: written, restored after reload; code for them untouched |
| Reduced motion (no running animations, no confetti/burst, still works) | PASS |
| Dark mode (OS pref + MORK toggle flips data-theme) | PASS, readable (screenshots) |
| Focus rings visible (4px outline on Tab; bar link, buttons) | PASS |
| Keyboard: Enter/Escape/1-3 keys, Tab order | PASS |
| Feedback not colour-only (check/cross icon + "Rigtigt!"/"Rigtigt svar:" text on slip, option marks, slot marks) | PASS |
| aeoeaa glyphs in Pixelify/JetBrains Mono, long-word wrap | PASS |
| No network/Google fonts (file://) | PASS |
| Contrast >= 4.5:1 | NOT VERIFIED numerically (palette is the shared tokens; visually reviewed) |

## What changed
- Theme maps the game's CSS vars to `--sd-*`; every screen (start, play, 6 mode UIs, slip, summary) restyled as pixel frames; sd-bar used for menu link, the in-game X (quit) kept.
- fx: `watchScreens` on the three screens; `fx.correct/wrong` from `buildSlip` (all modes) and on MC option buttons; celebrate + pokal (acc>=50) / polle mascot on summary; animated polle on start; molle sprite brand.
- Emoji removed: title, brand, mute/dark buttons are now text labels (MORK, LYD / LYD x), TTS button restyled to a play glyph (CSS only), empty-state uses `hat` sprite, cross-game chip emoji replaced.
- Body padding moved to `.shell` so the sticky bar sits flush at the top.

## Known issues / notes
- Modes 1-4 have no data in `data.js` (pre-existing); not a redesign issue.
- Correct-slip now shows "Rigtigt!" text (added for non-colour-only feedback).
- The DanskCore `injectBaseStyles` rules are overridden only where visible (tts button).

## Shared-system requests
None required. (Optional: `.sd-bar` could be `position: sticky` inside an element so body padding doesn't offset it - worked around.)
