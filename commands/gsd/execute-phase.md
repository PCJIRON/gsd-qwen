---
name: gsd:execute-phase
description: Execute phase plans in dependency-aware waves with atomic commits
argument-hint: "[N]"
---

# /gsd:execute-phase [N]

Execute phase plans in dependency-aware waves with atomic commits. Spawns gsd-executor for each plan, handles deviations automatically, and creates integration verification.

## Arguments

- `N` — Phase number (defaults to current phase from STATE.md)

## What This Creates

- `.planning/{N}-{planNum}-SUMMARY.md` — Execution summaries
- `.planning/{N}-VERIFICATION.md` — Integration check report
- Git commits: `[GSD-{N}-{planNum}-T{taskNum}] description`

## Process

1. Read `.planning/STATE.md` for current position
2. Load all `{N}-*-PLAN.md` files
3. Load `{N}-RESEARCH.md` and `{N}-CONTEXT.md`
4. Sort plans by wave (dependency order)
5. For each wave:
   - Execute independent plans in parallel where possible
   - Spawn `gsd-executor` for each plan
   - Each executor: executes tasks atomically, creates commits, handles deviations
   - Create `{N}-{planNum}-SUMMARY.md` after each plan
6. Apply deviation rules automatically:
   - **Rule 1 (Scope Creep)**: If unplanned work > 30 min, flag for approval
   - **Rule 2 (Missing Critical)**: Add missing functionality and document
   - **Rule 3 (Blocked)**: Pause and report dependency blocks
   - **Rule 4 (Better Way)**: Document and proceed if low-risk improvement
7. After all plans complete, spawn `gsd-integration-checker` → creates `{N}-VERIFICATION.md`
8. Update STATE.md with execution completion
9. Commit: `[GSD-execute] Phase {N} executed`

**After this command:** Run `/gsd:verify-work {N}` for user acceptance testing.
