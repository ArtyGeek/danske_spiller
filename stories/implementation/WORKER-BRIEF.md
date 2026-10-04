# Worker brief (applies to every implementation worker)

Project: "Sjovt Dansk", `C:\Users\TarasTsarenko\Downloads\Dansk\danske_spiller`, branch `qa-implementation`. Vanilla HTML/CSS/JS, must work over `file://`, no build, no fetch/CDN, zero console errors. Read `CLAUDE.md` first.

## Inputs
- Your assigned stories: read each in full in `stories/QA-USER-STORIES.md` (search `## US-0xx`). Consolidated findings: `qa/FINAL-QA-REPORT.md` (`QA-xxx`); raw worker reports in `qa/*.md` for extra evidence.
- For Danish content use `.claude/skills/danish-grammar-qa/SKILL.md`.
- `stories/IMPLEMENTATION-PLAN.md` explains ownership. Batch 1 outcomes are in `stories/implementation/US-001..004.md`.

## Hard rules
1. **Only edit the files listed as yours.** Other workers are editing other files concurrently. If you discover you need another file (shared code, another game, `shared/dansk-core.js`, `shared/explainer/*`, tests), STOP that part, finish the rest, and report it as a "shared dependency" in your output file. Never edit frozen files: `shared/sjovt.css`, `shared/sjovt.js`, portal `index.html`, `prd.md`, `specs.md`, `CLAUDE.md`.
2. **Stay in the story scope.** No refactoring, formatting changes, unrelated content changes, new features, dependency/config changes. Record unrelated problems under "Newly discovered issues" and do not fix them.
3. **No git state changes:** no commits, branches, stash, checkout, reset, `npm install`. (Reading with `git show/diff/log` is fine.)
4. **Content you're not sure of:** you are not a native speaker and no native sign-off exists. Apply only corrections that the QA evidence shows to be clearly wrong and where you're confident; list everything doubtful under "Needs native review" and leave it unchanged. Keep item IDs / storage keys / data shapes stable unless the story says otherwise.
5. **Keep PRD behaviour** (`prd.md`): Danish UI text, 360 px min width, 44x44 px targets, keyboard operation, progress survives reload, reset needs confirmation. Don't change scoring/SRS/storage keys unless the story says so.
6. **Temp files only in the scratchpad:** `C:\Users\TARAST~1\AppData\Local\Temp\claude\C--Users-TarasTsarenko-Downloads-Dansk\f9b073f4-9948-4e1b-9d44-1a692e6f9961\scratchpad\impl\<your-owner-name>\`. Existing tests (`tests/smoke.mjs`, `tests/tidsmaskinen.mjs`, `tests/pronomenmysteriet.mjs`) may write dump files into the repo root: run them so that nothing is left behind and delete anything they create; before finishing run `git status --short` and confirm only your owned files changed (plus `stories/implementation/*.md`).

## Tests
- Browser: `CHROME_PATH="C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"` (Chrome is not installed). `puppeteer-core` is at `tests/node_modules` (require by absolute path from scratchpad scripts; see `tests/lib/` helpers).
- `cd tests && CHROME_PATH=... node smoke.mjs <path/to/game.html>`. Legacy root-level games have no `#btn-play`: the "play button found" / "console clean + still playable" rows then fail as a known artefact; report it, and judge the rest.
- `node shared/validate.js` whenever `shared/data/*.js` changed.
- For each acceptance criterion write your own check (script or manual drive) and record the result. Where a bug was reproduced before the fix, show the before/after (use `git show HEAD:<file>` copies for "before").

## Output (required for every story you own)
Write `stories/implementation/US-XXX.md` (one per story; if a story has several slices owned by different workers, append your slice under a heading with your owner name) containing:
1. Implementation summary (what changed, in plain words)
2. `Status:` one of IMPLEMENTED / NEEDS REVIEW / BLOCKED (do not write VERIFIED; an independent agent does that)
3. Tests run + exact results (including pre-existing failures, attributed)
4. Manual verification performed
5. Files changed (with line ranges)
6. Remaining risks
7. Newly discovered issues (recorded only)
8. "Needs native review" list (content stories)
9. Acceptance-criteria table: every criterion from the story copied verbatim with PASS / FAIL / NOT VERIFIED (criteria needing native sign-off or owner approval = NOT VERIFIED)

Finish with a short summary message (stories, status, key test results, anything blocked).
