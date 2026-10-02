# Report: flashcards (danish_flashcards/danish_flashcards_game)

Files changed: `index.html` (Google Fonts removed; sjovt css/js + theme linked; removed old home link `.dsg-home` and decorative card bg stays hidden; sprite title; completion panel + feedback line markup), `script.js` (additive hooks at end of file; keyboard flip on the card; speaker glyph emoji -> play glyph), `style.css` untouched, `shared/themes/flashcards.css` (new).
Screenshots: `docs/redesign/screenshots/flashcards/{mobile,tablet,desktop}-{start,card-back,correct,wrong,review,filter-b1,complete}.png` plus dark/focus/longword.
Test scripts (scratchpad): `flashcards-run.mjs`, `flashcards-extra.mjs`.

## Checks
| Check | Result |
|---|---|
| Console errors / failed requests, 3 viewports | PASS (0) |
| External requests (Google Fonts removed) | PASS none |
| No horizontal scroll: start, card back, review, filter, complete at 390/820/1440, plus 360 and 320 w/ long word | PASS |
| Tap targets >= 44px (start + complete, all viewports) | PASS |
| Scoring: right -> correct 1; wrong -> wrong 1, card flips, auto-advance | PASS (logic untouched) |
| Review Mistakes mode + Back to full deck | PASS |
| Level filter (B1 / All) | PASS |
| Completion (all 150 marked) shows panel + confetti, restart resets | PASS |
| localStorage `verb_glosekort_v1` written and restored after reload (index, counts, statuses) | PASS |
| Menu link in shared bar -> ../../index.html | PASS |
| Reduced motion: no running animations, flip instant, no confetti | PASS |
| Dark mode readable | PASS (screenshots) |
| Keyboard: card flips with Enter/Space; buttons focus rings 4px | PASS |
| Verb list items (li) keyboard operable | NOT DONE: li elements are click-only in the original; making 150 tab stops seemed worse than leaving as is. Right/Wrong/Restart/Review/filter all keyboard operable. |
| Feedback not colour-only (check/cross on buttons, list items, review banner, feedback line text) | PASS |
| Contrast >= 4.5:1 numerically | NOT VERIFIED (visual review only) |

## What changed
Pixel panels for sidebar/scoreboard/cards; card faces are paper (front, mono font so ae/oe/aa read unambiguously) and ink (back) with 4px frame; flip uses steps(); 100vh replaced with dvh; mobile order puts the card before the verb list; fixed a latent layout issue (`.card-face` back face had no top/left so it sat below the front) in the theme.
Hooks: fx.correct/wrong on buttons, fx.bump on counter change, celebrate + pokal on deck completion, polle sprite in title, `watchScreens` on review banner.

## Known issues / shared requests
- App text is English with Danish verbs (original language kept).
- No results screen in the original; a small completion panel was added (additive, no logic change).
- No shared requests.
