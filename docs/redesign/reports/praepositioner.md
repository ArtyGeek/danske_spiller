# praepositioner (dansk-praepositioner.html) - redesign report

Files changed: `dansk-praepositioner.html` (head links, emoji->sprites, a11y hooks, fx hooks), new `shared/themes/praepositioner.css`.
Screenshots: `docs/redesign/screenshots/praepositioner/{mobile,tablet,desktop}-*.png` (start, mc question/correct/wrong, fill, drag, mistake, correct, trans, pairs, review, speed, speed-results, stats; plus `mobile-dark-*`).
Test scripts (scratchpad): `praepositioner-run.mjs`, `praepositioner-misc.mjs`.

| Check | Result |
|---|---|
| Console errors/warnings, failed requests (3 viewports, light + dark + reduced motion) | PASS (zero) |
| No horizontal scroll on every screen at 390 / 820 / 1440 (and 360 with long word) | PASS |
| Full flow: menu > mode > correct > wrong > complete (speed round) > restart > menu | PASS (all 9 modes + stats driven) |
| Scoring/XP/streak unchanged | PASS (logic untouched; xp 10/2, speed +5 verified in code, XP bar updates) |
| Saved progress (`praep_mester_v1`, `praep_speed_best`) written, survives reload, same values | PASS |
| Reduced motion: no running animations; streak/particles still self-remove | PASS |
| Dark mode readable (answer states, feedback, tags use --sd-text) | PASS (fixed one dark contrast bug found in first pass) |
| a/o/ae glyphs, long Danish word wrapping | PASS (JetBrains Mono + Pixelify latin-ext loaded) |
| Focus ring on Tab (4px solid) + keyboard operation (mode buttons, Find-fejlen words via Enter/Space) | PASS |
| Tap targets >= 44x44 on all buttons/inputs/select/speaker (measured every screen) | PASS |
| Feedback not colour-only (check/cross icon + word + coloured frame) | PASS |
| Body text >= 16px; meta >= 14px | PASS |
| Real-device touch drag in Drag mode | NOT VERIFIED (HTML5 DnD not simulated; tap-to-place is tested) |
| Speech synthesis | NOT VERIFIED (headless; button only changed glyph + aria-label) |

What changed: fonts/colours/frames per brief; level select; 10 mode tiles with sprites; Polle mascot (sd-bob) in header; correct/wrong opts get Sjovt.fx via MutationObserver (no logic edits); XP counter bump; speed-round and review-empty screens show hopping pokal/stjerne + confetti; emoji removed from labels/feedback (check/cross text kept); tappable words in "Find fejlen" made focusable; Google-font-free (the game had none); old floating home pill removed (shared bar replaces it).

Known issues: stats "strongest" list can include 0% items when fewer than 3 prepositions attempted (pre-existing logic, untouched). Display font weight set to 500 because Pixelify bold renders C like O at small sizes.

Shared-system requests: none required. (Optional: Pixelify weight 700 closes the gap in "C" at 16-18px; consider capping display weight at 500 in sjovt.css.)
