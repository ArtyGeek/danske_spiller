---
name: agent-delegation
description: Use when the product-manager is about to dispatch coder, designer, tester or releaser, is splitting a task, is deciding whether agents can run in parallel, or is re-dispatching after a failed or incomplete report.
---

# Delegating to agents

Agents start **cold**: no conversation, no memory of why. The brief is the only thing they get. A vague brief produces plausible-looking wrong work; a precise one produces checkable work. Spend the effort here — it is cheaper than a rework round (cap: 2 rounds, 4 dispatches per task).

## 1. Decide: delegate or do it yourself
Delegate when the task has a clear deliverable, touches a bounded file set, and is verifiable. Do it yourself (on `master`) only for coordination files you own: `PROGRESS.md`, `SCRATCHPAD.md`, `.claude/agents|skills|hooks`. Never write game code, data or CSS. Ask the user instead of dispatching when the decision is theirs (scope, conflicting specs, anything outward-facing or destructive).

## 2. Pick the agent (one role per dispatch)
| Need | Agent | Never ask it to |
|---|---|---|
| Game logic, modes, `data.js`, shared code, bug fix | `coder` | restyle, sign off its own work |
| Theme CSS, sprites, layout, motion, responsive/dark/reduced-motion polish | `designer` | change content, rules, scoring |
| Independent verdict: validate, audit, drive the UI | `tester` | fix the code it tests |
| Merge to master + push after a PASS | `releaser` | anything before a tester PASS on the exact sha |
| Read-only discovery across many files | `Explore` | edit |

Gate order is fixed: data → `coder` → `tester`; game/mode → `coder` (+`designer`) → `tester`; design → `designer` → `tester`; then `releaser`. The agent that built a thing is never its tester.

## 3. Size the task
One deliverable, one session, one branch (`task/<id>`, worktree `.worktrees/<id>`). If you cannot state the acceptance criteria in ≤6 checkable lines, split it (e.g. a game = data task + shell + one slice per mode). Prefer vertical slices that can be tested end to end over horizontal layers nobody can verify.

## 4. Parallelise only when safe
Run agents concurrently only if **all** hold: disjoint file sets (list them, compare them), separate branches/worktrees, no dependency between outputs, and the shared files they might want (`shared/sjovt.css|js`, `shared/dansk-core.js`, `prd.md`, `specs.md`) are frozen. Never two agents on one branch. If two tasks both want a shared change, serialise: land the shared change first, then fan out. Batch independent dispatches in a single message.

## 5. Write the brief (use `brief-template.md`)
Every brief contains, in this order:
1. **Goal** — one sentence of *why*, then the deliverable.
2. **Context pointers** — exact paths/sections to read (`prd.md §…`, `specs.md` section, `docs/redesign/AGENT-BRIEF.md`), not summaries from memory.
3. **Workspace** — absolute worktree path, branch name, base sha.
4. **Allowed / forbidden files** — explicit lists. Default forbidden: `prd.md`, `specs.md`, other tasks' files, `shared/fonts/`, `tmp_*`.
5. **Acceptance criteria** — observable and measurable ("12 items per mode, `node shared/validate.js` exits 0, zero console errors at 390/820/1440, no horizontal scroll"), never "looks good".
6. **Constraints** — platform rules that bite here (vanilla JS, `file://`, stable item IDs, no CDN, don't change scoring/storage keys).
7. **Known traps** — lessons from `.claude/agent-memory/` that apply; what was already tried (mandatory on re-dispatch).
8. **Report format** — the exact shape you want back (see `work-summarization`): status, files + counts, commands run + results, screenshots viewed, NOT VERIFIED list, requests, `Lessons:`.
9. **Stop conditions** — when to stop and ask instead of improvising (spec conflict, needed shared change, uncertain Danish).

Style: imperative, specific, no filler, no pasted file dumps. Name numbers, paths, selectors. State the *why* for any rule that looks arbitrary so the agent can apply it to cases you did not foresee.

## 6. Re-dispatching after a failure
Never resend the same brief. New brief = original acceptance + the **failure list verbatim** (evidence, not paraphrase) + what was tried + what to change. Same agent, same branch. After round 2, or the same root cause three times, stop: mark `blocked` with evidence and escalate — it is a spec or brief problem.

**Limits (single source; agent files and `product-manager.md` mirror these):** per task max 2 rework rounds and 4 dispatches; per worker, per failing check, max 3 attempts (seo: 2), each with a different hypothesis; tester re-runs a failure once; releaser retries a push once, merge/validation failures 0. Any agent that hits its cap stops and returns a **Blocked report**: `Task · Attempts (what, in order) · Last error/evidence (verbatim) · Best diagnosis · Suggested next step`. Never loosen acceptance or widen scope to escape a cap.

## 7. Anti-patterns
- "Fix the styling" / "make it better" — no acceptance, no end.
- Delegating understanding: "figure out what's wrong and fix it" without pointing at where to look.
- Giving a worker the tester's verdict to rubber-stamp, or asking the tester to also repair.
- Unbounded file access ("update whatever is needed").
- Parallel agents that both edit the same CSS/JS.
- Trusting "done" without evidence (see `work-summarization`).
- Re-asking the same question after a timeout instead of narrowing the task.

## 8. After dispatch
Don't poll or duplicate the agent's work while it runs. Do independent coordination work (grooming, reading specs). When the result arrives, verify before accepting — that procedure is the `work-summarization` skill.
