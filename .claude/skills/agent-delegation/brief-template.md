# Brief template (copy, fill every field, delete none)

**Task:** <task-id> — <title>
**Role:** <coder | designer | tester | releaser>
**Why:** <one sentence: what this unlocks for learners / the backlog>

## Workspace
- Worktree: `<absolute path>`   Branch: `task/<id>`   Base: `<sha>`
- Commit small, `feat|data|fix|style(<scope>): …`; never touch `master`, never push.

## Read first
- `<path>` §<section> — <what to take from it>

## Files
- MAY edit: `<list>`
- MUST NOT edit: `prd.md`, `specs.md`, `<other tasks' files>`, `shared/sjovt.css`, `shared/sjovt.js`, `shared/fonts/`, anything not listed above
- Need a change outside the list? Stop and request it in the report.

## Do
1. <step with concrete numbers/paths>
2. …

## Acceptance (every line must be checkable)
- [ ] <measurable criterion, e.g. "`node shared/validate.js` exits 0">
- [ ] <e.g. "0 console errors, no horizontal scroll at 390/820/1440">
- [ ] <e.g. "scoring and localStorage keys unchanged">

## Constraints & traps
- <platform rule>  — <why>
- Already tried / known failure (re-dispatch only): <verbatim evidence>

## Stop and ask if
- <spec conflict | needs shared change | unsure Danish → mark `verify: true`>

## Report back (≤ 15 lines)
Status: DONE | PARTIAL | BLOCKED · Head sha · Files changed (count + list) · Commands run → result ·
Screenshots viewed (paths) · NOT VERIFIED (with reason) · Requests · Lessons: <n new/updated>
