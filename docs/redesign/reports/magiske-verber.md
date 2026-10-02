# magiske-verber (magiske_verber.html) - redesign report

Files changed: `magiske_verber.html`, new `shared/themes/magiske-verber.css`.
Screenshots: `docs/redesign/screenshots/magiske-verber/{mobile,tablet,desktop}-*.png` (start, level-select, question, correct, wrong, results, detective, detective-answered, irregular-chain, speed, speed-results, review, stats; plus `mobile-dark-*`).
Test scripts (scratchpad): `magiske-verber-run.mjs`, `magiske-verber-misc.mjs`, `mv-focus2.mjs`.

| Check | Result |
|---|---|
| Console errors/warnings, failed requests (3 viewports, light + dark + reduced motion) | PASS (zero) - original had a Google Fonts @import and a missing `hogwarts.jpg`; both removed so it works offline with no 404 |
| No horizontal scroll on every screen at 390 / 820 / 1440 (360 with long word) | PASS |
| Flow: menu > level > question > correct > wrong > results > replay/menu; detective, irregular, speed (timer), review, stats | PASS |
| Scoring/progress unchanged; `magiske_verber_v1` written, persists across reload (mastery 67% before/after) | PASS |
| Reduced motion: no running animations | PASS |
| Dark mode readable (sprite plate added for dark crest) | PASS |
| Focus ring on Tab (4px); cards/options/difficulty now keyboard-operable (Enter/Space), 1/2/3 keys still work | PASS |
| Enter on focused native "Naeste" advances exactly one question | PASS (see note) |
| Tap targets >= 44x44 (all buttons, cards, options, back links) | PASS |
| Feedback not colour-only (check/cross icon + header text + frame; options prefixed check/cross) | PASS |
| Body text >= 16px; meta >= 14px; contrast uses --sd-text on panels | PASS |
| a/o/ae rendering, long-word wrapping | PASS |
| Speech synthesis | NOT VERIFIED (headless) |

What changed: castle/gold theme replaced with mustard pixel-arcade; twinkling stars and body photo removed; menu cards/difficulty tiles/options restyled with sprites (hat, snegl, cykel, hjerte, molle, flag, stjerne, pokal); hat bobbing on title, pokal hopping + confetti on results; correct/wrong/streak fx via `Sjovt.fx` calls inside `answer()` (additive); screen enter via `Sjovt.fx.enter` in `showScreen`; emoji stripped from labels, toasts, badges; back links became real `<button>`s; menu cards, difficulty tiles and options got `role=button`/`tabindex`.

Note (behaviour fix, not logic): the document keydown handler clicked "Naeste" on Enter even when that button itself was focused, causing a double activation. It now ignores events from native buttons. Scoring, question pool, mistakes list and storage keys untouched. Removed the `console.log('Magiske Verber loaded...')` line.

Known issues: none open. The Danish/English mixed titles ("Verb Form Arena" etc.) are original content and kept.

Shared-system requests: none.
