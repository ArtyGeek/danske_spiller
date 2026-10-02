# Report: idiomjaeger (game-id `idiomjaeger`)

Files changed: `idiomjaeger.html` (head links, markup hooks, additive shim script), new `shared/themes/idiomjaeger.css`.
Screenshots: `docs/redesign/screenshots/idiomjaeger/` (mobile / tablet / desktop, plus `mobile-dark-*`, `mobile-reduced-*`). Test script: scratchpad `idiomjaeger-test.mjs` (105 checks at 3 viewports + dark + reduced motion, 0 failing).

## Checks
| Check | Result |
|---|---|
| Console errors/warnings, failed requests (all 3 viewports, dark, reduced) | PASS (0) |
| No horizontal scroll: start, games, quiz, correct, wrong, results, learn, dict, stats, badges, memory, match, fill, survival, timed | PASS (390 / 820 / 1440) |
| Flow: menu > games > Idiom Hunter > correct > wrong > 10 questions > results > "Spil igen" > "Jagtmenu" | PASS |
| Other modes driven: Memory (complete), Match Pairs (miss + complete), Fill the Missing (wrong + correct, Enter key), Survival (3 lives to end), Timed Hunt, Learn, Dictionary + search "gærdet", Stats, Badges | PASS |
| Scoring unchanged (+10 coins/streak 1 on correct, streak reset on wrong, totalAns counts) | PASS |
| Saved progress: key `idiomjaeger_v2` written, identical after reload, menu shows restored stats | PASS |
| Reduced motion: no running CSS animations, game still completes | PASS |
| Dark mode (prefers-color-scheme): readable, frames/feedback/sprites visible | PASS (screenshots reviewed) |
| Tap targets >= 44px (all buttons, inputs, selects, role=button cards, 3 viewports) | PASS |
| Text >= 14px (excluding shared bar wordmark, which is 10px in sjovt.css) | PASS |
| Focus ring visible on Tab (4px solid) and Enter answers by keyboard | PASS |
| Feedback not colour-only (✓ RIGTIGT / ✗ FORKERT labels + icon box) | PASS |
| æøå rendering (menu, headings, search for "gærdet", "Lægge...") | PASS (visual) |
| Long Danish words wrap (overflow-wrap:anywhere on prompts, buttons, cards) | PASS (no overflow at 390px) |
| Real touch device, screen reader, actual Danish TTS voice | NOT VERIFIED (not available headless) |

## What changed
- Pixel-arcade reskin of every screen: panels, buttons, selects/inputs, question prompt, choices (✓/✗ states), feedback + explanation boxes, idiom cards, memory cards, match pairs, stats bars, badges, toast, speaker button.
- Sprites: polle mascot (header, bobbing), main-menu tile icons, star for coins, hjerte for lives (with aria-label), pokal/stjerne+polle (hopping) on result screens, star on memory card backs.
- fx: pop/shake/burst on answers (wrappers around `answer`/`checkText`), confetti on every end screen, enter animation only on real screen changes, score bump.
- a11y: memory cards / match items get role=button, tabindex, Enter/Space; keyboard focus kept on the same memory card across re-render; toast is `role=status`; speaker buttons 44px.
- Removed the old floating `.dsg-home` link (shared bar replaces it); in-game back button relabelled "Jagtmenu" to distinguish it from the shared "MENU". Dictionary list no longer has its own inner scroll.
- Gameplay screens hide the big title banner (`ij-compact`) so the question is above the fold on mobile.
- No change to data, rules, scoring, SRS or localStorage.

## Known issues
- Some inline emoji remain inside text (🔥 in progress line, 🗣️ before example sentences, category icons in tags, motivational strings, toast). Decorative emoji in headings/menu tiles are stripped/replaced.
- Match Pairs stacks to one column at <= 480px (original behaviour); items are tall because of the 44px speaker.
- Learning content is English meanings + Danish idioms (unchanged); page `lang="da"` retained.

## Shared-system requests
- Sprites: flame, lock, speaker, padlock would replace remaining emoji. Black sprite outlines vanish on dark panels (worked around with a cream tile in the theme); a dark-aware sprite palette would be cleaner.
- `.sd-bar-logo` is 10px (below the 14px floor) - fine for a wordmark, flagged for completeness.
