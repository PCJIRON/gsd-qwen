---
name: gsd:plan-phase
description: Create atomic task plans for a phase
argument-hint: "[N]"
---

# /gsd:plan-phase [N]

Research and create atomic task plans for a phase. Spawns specialized agents to research implementation approach, create atomic plans, and validate plans against requirements.

## Arguments

- `N` — Phase number (defaults to current phase from STATE.md)

## What This Creates

- `.planning/{N}-RESEARCH.md` — Implementation research
- `.planning/{N}-{planNum}-PLAN.md` — Atomic task plans (one per plan)
- `.planning/{N}-{planNum}-VALIDATION.md` — Plan validation reports

## Process

1. Read `.planning/STATE.md` for current position
2. Read `.planning/ROADMAP.md` for phase goals
3. Read `{N}-CONTEXT.md` for implementation decisions
4. Read REQUIREMENTS.md for requirements
5. Spawn `gsd-phase-researcher` to research implementation approach → creates `{N}-RESEARCH.md`
6. Spawn `gsd-planner` to create atomic task plans → creates `{N}-{planNum}-PLAN.md` files
7. Spawn `gsd-plan-checker` to validate each plan → creates `{N}-{planNum}-VALIDATION.md`
8. If validation fails, iterate plan checker (max 2 iterations)
9. Group plans into dependency-aware waves
10. Update STATE.md with planning completion
11. Commit: `[GSD-plan] Phase {N} plans created`

**After this command:** Run `/gsd:execute-phase {N}` to execute the plans.
