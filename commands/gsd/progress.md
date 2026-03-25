---
name: gsd:progress
description: Show current state and next steps
---
<context>
**Purpose:**
Quick overview of project state, current phase, and recommended next action.
</context>

<objective>
Display project progress and next steps.

**Shows:**
- Current phase and position
- Completed tasks
- Pending tasks
- Recommended next command
</objective>

<execution_context>
.planning/STATE.md
.planning/ROADMAP.md
.planning/PROJECT.md
</execution_context>

<process>
1. Load STATE.md for current position
2. Load ROADMAP.md for phase structure
3. Load PROJECT.md for context
4. Display:
   - Project name and goal
   - Current phase
   - Completed tasks (with checkmarks)
   - Pending tasks
   - Next recommended command
</process>
