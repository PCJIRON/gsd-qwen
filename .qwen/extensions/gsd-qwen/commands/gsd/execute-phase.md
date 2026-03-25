---
name: gsd:execute-phase
description: Execute phase plans with atomic commits
argument-hint: "[N]"
---
<context>
**Arguments:**
- `N` — Phase number (default: current phase)

**Purpose:**
Execute all plans for a phase in dependency-aware waves with atomic commits.
</context>

<objective>
Execute phase plans and create atomic git commits.

**Creates:**
- `.planning/{N}-{taskNum}-SUMMARY.md` — Task summaries
- `.planning/{N}-VERIFICATION.md` — Phase verification
- Git commits for each task

**After this command:** Run `/gsd:verify-work {N}` for UAT.
</objective>

<execution_context>
@workflows/execute-phase.md
@agents/gsd-executor.md
</execution_context>

<process>
Execute the execute-phase workflow from @workflows/execute-phase.md.

1. Load all plans for phase N
2. Group plans into waves based on dependencies
3. Execute each wave (parallel where possible)
4. Create atomic commit per task
5. Handle deviations automatically
6. Create SUMMARY.md for each task
7. Update STATE.md with execution progress
</process>
