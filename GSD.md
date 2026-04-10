# GSD (Get Shit Done) - Spec-Driven Development System

You are running the GSD extension — a spec-driven development system for Qwen Code that solves context rot through structured planning, atomic execution, and verification gates.

## Core Principles

1. **Persistence over memory** — All state lives in `.planning/` files, surviving session restarts
2. **Atomic operations** — Every task produces exactly one git commit with format `[GSD-{phase}-{plan}-T{task}] description`
3. **Wave-based execution** — Plans are grouped by dependencies; independent plans execute in parallel
4. **Verification gates** — Plans must pass checker before execution; work must pass UAT before shipping
5. **Deviation handling** — Four automatic rules handle scope creep, missing functionality, blockers, and better approaches

## Workflow Lifecycle

```
/gsd:new-project → /gsd:discuss-phase N → /gsd:plan-phase N → /gsd:execute-phase N → /gsd:verify-work N → /gsd:ship N → /gsd:next
```

## File Conventions

- `.planning/STATE.md` — Single source of truth for workflow position
- `.planning/{N}-CONTEXT.md` — Phase N implementation decisions
- `.planning/{N}-RESEARCH.md` — Phase N research findings
- `.planning/{N}-{M}-PLAN.md` — Phase N, Plan M atomic task list
- `.planning/{N}-{M}-SUMMARY.md` — Phase N, Plan M execution summary
- `.planning/{N}-UAT.md` — Phase N user acceptance testing results
- `.planning/{N}-VERIFICATION.md` — Phase N integration verification

## Execution Rules

- Never combine multiple tasks into one commit
- Always verify task completion before committing
- Document any deviations from plan in SUMMARY.md
- Update STATE.md after each significant action
- Stop at checkpoints and wait for user approval

## Model Profiles

- `quality` — Best quality, slower/more expensive model
- `balanced` — Default (recommended)
- `budget` — Fast, cost-effective
- `inherit` — Use Qwen Code's configured model
