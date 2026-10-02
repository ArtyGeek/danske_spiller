# Report: dansk-mester (game-id `dansk-mester`)

Files changed: `danske-phraser/dansk-mester.html` (removed Google Fonts @import and `.dsg-home` link, head links, markup/sprite hooks, flag-emoji labels, additive shim script), new `shared/themes/dansk-mester.css`.
Screenshots: `docs/redesign/screenshots/dansk-mester/` (mobile / tablet / desktop, plus `mobile-dark-*`, `mobile-reduced-*`). Test script: scratchpad `dansk-mester-test.mjs` (93 checks, 0 failing).

## Checks
| Check | Result |
|---|---|
| Console errors/warnings, failed requests (3 viewports, dark, reduced); no network fonts | PASS (0) |
| No horizontal scroll: home, path, modes, quiz, correct, wrong, results, flash, match, match-done, timed, stats, badges, locked-toast | PASS (390 / 820 / 1440) |
| Flow: home > path > category > modes > Multiple Choice > correct > wrong > finish (8/8) > results > Play again > Quit > modes | PASS |
| Other modes: Flash Cards (flip + "I knew it"), Match Pairs (miss, hit, finish), Timed Challenge, Mixed Review, Stats, Badges, locked category toast | PASS |
| Scoring unchanged: correct +10 XP, wrong +2 XP, totalAnswered / totalCorrect / sessions counts, streak | PASS |
| Saved progress: key `danskMester.v1` identical after reload; topbar XP restored | PASS |
| Reduced motion: no running animations, still completes | PASS |
| Dark mode readable (reviewed) | PASS |
| Tap targets >= 44px (buttons, selects, cards, nav, speaker) | PASS |
| Text >= 14px (excluding shared bar wordmark) | PASS |
| Focus ring visible on Tab; Enter opens a path card via keyboard | PASS |
| Feedback not colour-only (✓ CORRECT / ✗ WRONG labels + icon box, ✗ on missed pairs, "LOCK"/"LOCKED" text) | PASS |
| Long words wrap, æøå render | PASS (visual) |
| Real touch device, screen reader, Danish TTS voice | NOT VERIFIED |

## What changed
- Full pixel-arcade reskin: top bar (Dannebrog sprite, XP/streak chips), path cards, category list, mode tiles, quiz prompt/options, feedback box, flash card, match pairs, result ring (butt caps), stats, badges, bottom nav, toast.
- Nunito Google Fonts import removed (fonts are local). Toast moved below the sticky shared bar.
- Sprites replace decorative emoji: mode tiles, path cards, nav, badges, results; polle mascot bobs on home, pokal/polle on results. Leading emoji in headings/buttons are stripped at render time (never in answer options / learning content).
- Flag emoji labels ("🇩🇰 Danish -> 🇬🇧 English") changed to plain "Danish -> English" (they render as letters on Windows).
- fx: pop/shake on options, pixel burst (replaces round particles), confetti on result screens, enter animation per screen / question.
- a11y: clickable divs (path card, category, mode, back/quit, flash card) get role=button + tabindex + Enter/Space.
- No change to data, scoring, SRS, or localStorage.

## Known issues
- After a wrong answer the game auto-advances after 1.5s (original timing, logic untouched) while the explanatory note is long; slow readers may not finish it. Suggest a "Next" button or longer delay as a future logic change.
- A few emoji remain inside running text (💡 note, 🎉 in some headlines, 🔓 unlocked banner, timer glyph).
- Flash card is one tap target (front/back); keyboard users press Enter on the card.

## Shared-system requests
- Sprites for flame, lock, speaker; dark-aware sprite outlines (worked around with cream tiles in dark theme).
- `.sd-bar-logo` 10px wordmark is below the 14px floor (flagged only).
