---
name: gsd:new-milestone
description: Start a new milestone/version for existing codebase
argument-hint: "[name]"
---
<context>
**Arguments:**
- `name` — Optional milestone name (e.g., "v2.0", "Mobile App")

**Purpose:**
Start a new milestone for an existing codebase (not a new project).
Similar to new-project but for continuing development.
</context>

<objective>
Initialize a new milestone with questions → research → requirements → roadmap.

**Creates:**
- `.planning/MILESTONE-{N}.md` — Milestone context
- `.planning/REQUIREMENTS-{N}.md` — New requirements
- `.planning/ROADMAP-{N}.md` — New roadmap
- Updates `.planning/STATE.md`

**After this command:**
- New milestone initialized
- Run `/gsd:plan-phase 1` to start execution
</objective>

<execution_context>
.planning/STATE.md
.planning/PROJECT.md (existing)
@workflows/new-project.md
@templates/roadmap.md
</execution_context>

<process>
1. Load existing project state from STATE.md
2. Determine next milestone number (current + 1)
3. Ask user questions:
   - What do you want to build in this milestone?
   - How does this build on existing work?
   - What's the milestone goal?
   - Any new requirements or constraints?
   - Timeline expectations?
4. Optional research:
   - Research domain changes since last milestone
   - Investigate new requirements
5. Extract requirements:
   - What's new in this milestone
   - What carries over from previous
   - What's out of scope
6. Create roadmap:
   - Phase structure for milestone
   - Dependencies on existing code
7. Create milestone files:
   - `MILESTONE-{N}.md`
   - `REQUIREMENTS-{N}.md`
   - `ROADMAP-{N}.md`
8. Update STATE.md:
   - Set current milestone to N
   - Reset phase position to 0
9. Create commit: `[GSD] Start milestone {N}: {name}`
10. Suggest next step: `/gsd:discuss-phase 1` or `/gsd:plan-phase 1`
</process>
