---
name: gsd:plan-phase
description: Research and create atomic task plans for a phase
argument-hint: "[N]"
---
<context>
**Arguments:**
- `N` — Phase number (default: next planned phase)

**Purpose:**
Research implementation approaches and create detailed, atomic task plans.
</context>

<objective>
Create atomic, executable task plans for a phase.

**Creates:**
- `.planning/{N}-RESEARCH.md` — Implementation research
- `.planning/{N}-{taskNum}-PLAN.md` — Atomic task plans

**After this command:** Run `/gsd:execute-phase {N}` to execute plans.
</objective>

<execution_context>
@workflows/plan-phase.md
@templates/plan.md
@agents/gsd-planner.md
</execution_context>

<process>
Execute the plan-phase workflow from @workflows/plan-phase.md.

1. Load phase from ROADMAP.md
2. Research implementation approaches ({N}-RESEARCH.md)
3. Create atomic task plans with XML structure
4. Each plan has: objective, tasks, verification, output spec
5. Verify plans against requirements
6. Update STATE.md
</process>
