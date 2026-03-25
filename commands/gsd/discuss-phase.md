---
name: gsd:discuss-phase
description: Capture implementation decisions before planning
argument-hint: "[N]"
---
<context>
**Arguments:**
- `N` — Phase number (default: current phase)

**Purpose:**
Before creating a plan, capture user's implementation preferences:
- UI/UX decisions
- API design choices
- Content requirements
- Technical constraints
</context>

<objective>
Capture and document implementation decisions for a phase.

**Creates:**
- `.planning/{N}-CONTEXT.md` — Implementation decisions and vision

**After this command:** Run `/gsd:plan-phase {N}` to create the plan.
</objective>

<execution_context>
@workflows/discuss-phase.md
@templates/context.md
</execution_context>

<process>
Execute the discuss-phase workflow from @workflows/discuss-phase.md.

1. Determine phase number (from argument or STATE.md)
2. Ask clarifying questions about implementation preferences
3. Document decisions in {N}-CONTEXT.md
4. Update STATE.md with phase position
</process>
