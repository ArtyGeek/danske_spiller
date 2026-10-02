# Report: adverbs (adverbs.html)

Files changed: `adverbs.html` (head links, sprite in header, dark toggle also sets `data-theme`, additive fx script, sprite on the "Review complete" string), `shared/themes/adverbs.css` (new).
Logic, data, scoring and localStorage keys (`danishSentenceBuilderProgress`, `danishDarkMode`) untouched.

| Check | Result |
|---|---|
| Console errors / warnings / failed requests (3 viewports, full click-through) | PASS (none) |
| No horizontal scroll (390, 820, 1440, plus 360 with long words) | PASS |
| Tap targets >= 44px (buttons, textarea) on all captured screens | PASS |
| Flow: question -> correct -> wrong -> next, order, category, translate, modals | PASS |
| Scoring unchanged (+10, streak reset, level thresholds) | PASS (verified 0 -> 10, streak 1 after correct) |
| Persistence across reload (progress + dark mode) | PASS |
| Keyboard: key 1 answers, Tab focus ring visible (4px blue + ink) | PASS |
| Reduced motion (no animations, still functional) | PASS |
| Dark mode: OS preference and toggle (`data-theme`), readable | PASS |
| a/o/aa glyphs, long-word wrapping at 360px | PASS |
| Feedback never colour-only (check/cross icon + text, on options too) | PASS |
| Restart / "results" screen | N/A: the game is endless and has no results screen. The "Review complete!" branch is dead code (it needs `reviewQueue.length > 0` and `=== 0` at once). Celebration (confetti + star sprite) is wired to level-up instead. |
| Back to menu | PASS (shared bar link -> index.html) |

What changed visually: pixel panels/buttons, mono option buttons with check/cross, stat tiles, map buttons with "LOCKED"/check labels, modals (settings and review modals had no CSS originally and now are proper overlays), question card placed first via CSS `order` (stats and map below it), polle mascot bobbing in the header.

Known issues / notes:
- Settings text contains a stray citation artifact "【164741182258330†L185-L193】" (original content, left untouched).
- Wrong-answer highlight on the clicked option is added by the fx hook (the original CSS had `.wrong` but nothing applied it).
- Review modal opens a question behind it (original behaviour, unchanged).
- Pixelify "C" glyph looks like "O" at small sizes (shared font).

Shared-system requests: none.
Screenshots: `docs/redesign/screenshots/adverbs/`.
