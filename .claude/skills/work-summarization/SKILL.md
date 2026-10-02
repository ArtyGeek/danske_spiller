---
name: work-summarization
description: How the coordinator (product-manager) verifies agent reports and turns them into a short, honest summary — evidence ledger, status vocabulary, conflict handling, spot-check procedure, and the end-of-task and end-of-session report formats. Use whenever an agent returns, before marking any task done, and when writing the closing summary for the user.
---

# Verifying and summarising agent work

A worker report is a **claim**, not a fact. Your summary is only as trustworthy as what you checked yourself. Be professional: precise, brief, unflattering when the facts are, and never more confident than the evidence.

## 1. When a report arrives — triage in this order
1. **Complete?** Does it contain status, head sha, files, commands→results, NOT VERIFIED, `Lessons:`? Missing evidence → one targeted re-ask ("paste the exit code / show the screenshot path"), then treat as failed.
2. **In scope?** `git diff --stat master...task/<id>` — only allowed files, no `tmp_*`, no shared/frozen files, no stray artefacts. Out-of-scope edits are a finding even if harmless.
3. **Spot-check one or two claims yourself** (cheap, high value): re-run the validator or smoke command, open one screenshot with Read, grep that a storage key is unchanged. Pick the claim whose failure would hurt most. If the spot-check disagrees with the report, the report is untrusted until re-verified.
4. **Gate satisfied?** Tester PASS must name `Tested: <branch>@<sha>` equal to the current head. Any later commit voids it.

## 2. Evidence ledger (keep per task, mentally or in SCRATCHPAD)
For every claim in the summary record its basis, strongest first:
- **Verified by me** — I ran/opened it.
- **Verified by tester** — report with sha + command output/screenshots.
- **Reported by worker** — their word only; label it as such.
- **Not verified** — say why (no audio in headless Chrome, no real device, no native-speaker review).

Never promote a claim to a higher tier than its basis. Never write "all tests pass" without the count and the command.

## 3. Status vocabulary (use exactly these)
`PASS` verified, criteria met · `FAIL` criterion not met (name it) · `FLAKY` differs between runs · `NOT VERIFIED` could not be checked (reason) · `BLOCKED` waiting on a decision/dependency (name who) · `PARTIAL` some criteria met (list both). No "mostly", "should be fine", "looks good".

## 4. Synthesising several reports
- Lead with outcomes, not process: what shipped, what is broken, what needs a decision.
- Merge duplicates; keep per-item detail in the reports and link to them (`docs/…/reports/<id>.md`).
- **Surface disagreement**, don't average it: if coder says done and tester says FAIL, report FAIL with the failing evidence.
- Separate **regressions** (was working, now isn't) from **pre-existing issues** the worker noticed; the latter go to the backlog, not into "fixed".
- Collect NOT VERIFIED items from all reports into one list; they are the user's residual risk.
- Pull every "request" (shared-system change, data question, spec ambiguity) into one decision list with a recommendation each.
- Flag anything outward-facing or irreversible that a worker did or proposed (push, deletion, publishing) — it needs the user's explicit go-ahead.

## 5. Writing style
- Audience is the user, not the agents: plain words, no internal ids unless they help find something.
- Numbers over adjectives ("12/12 games, 36 loads, 0 console errors", not "all good").
- One idea per line; ≤10 lines for a session close, ≤6 per task. Lists only for parallel facts.
- State limits plainly and once; don't bury a FAIL under praise or pad with caveats the user can't act on.
- Never claim work you didn't verify; never hide a skipped step.

## 6. Formats (fill, don't embellish)

**Per task (SCRATCHPAD §3 entry, and the chat reply when asked)**
```
<task-id> — <PASS|FAIL|PARTIAL|BLOCKED> @ <sha>
Did: <1 line>   Files: <n> (<dirs>)
Evidence: <tester report path>; I re-ran <cmd> → <result>
Not verified: <list or none>
Next / needs from you: <action or decision>
```

**Session close (≤10 lines)**
```
Shipped: <ids + 1-line each, with sha>
Blocked: <id — reason — what unblocks it>
Failed/rework: <id — root cause — rounds used>
Decisions needed: <numbered, each with your recommendation>
Not verified (residual risk): <consolidated list>
Next: <exact next action>   Branches/worktrees left open: <list>
Agent changes: <promoted lessons or none>
```

## 7. Before you hit send — checklist
- [ ] Every PASS has an sha and a source (tester or me).
- [ ] Nothing in "done" is only "reported by worker" without saying so.
- [ ] FAILs, regressions and NOT VERIFIED items are visible, not buried.
- [ ] Out-of-scope or irreversible actions are called out.
- [ ] Decisions for the user are explicit, numbered, with a recommendation.
- [ ] SCRATCHPAD §3 entry written and §1 "Resume Here" overwritten with the exact next action.
