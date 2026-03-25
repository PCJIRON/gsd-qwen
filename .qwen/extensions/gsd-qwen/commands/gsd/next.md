---
name: gsd:next
description: Auto-detect and run the next workflow step
---
<context>
**Purpose:**
Automatically detect and execute the next step in the GSD workflow.

**Workflow Order:**
1. new-project → 2. discuss-phase → 3. plan-phase → 4. execute-phase → 5. verify-work → 6. ship
</context>

<objective>
Auto-detect and run the next workflow step.

**Behavior:**
- Reads STATE.md to determine current position
- Runs the appropriate command for next step
- Updates STATE.md after completion
</objective>

<execution_context>
.planning/STATE.md
.planning/ROADMAP.md
</execution_context>

<process>
1. Load STATE.md
2. Determine current workflow position
3. Identify next step:
   - No project? → Run `/gsd:new-project`
   - Phase not discussed? → Run `/gsd:discuss-phase N`
   - Phase not planned? → Run `/gsd:plan-phase N`
   - Phase not executed? → Run `/gsd:execute-phase N`
   - Phase not verified? → Run `/gsd:verify-work N`
   - Phase not shipped? → Run `/gsd:ship N`
   - All phases done? → Congratulate user
4. Execute the next command
5. Update STATE.md
</process>
