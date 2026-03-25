---
name: gsd:insert-phase
description: Insert urgent work between existing phases
argument-hint: "[N] [description]"
---
<context>
**Arguments:**
- `N` — Phase number to insert BEFORE (existing phases shift down)
- `description` — Brief description of the urgent work

**Purpose:**
Insert urgent/unplanned work into the roadmap without losing existing phases.
</context>

<objective>
Insert a new phase at position N, renumbering subsequent phases.

**Creates:**
- Updated `ROADMAP.md` with inserted phase
- Updated `STATE.md` with new phase numbers
- Renumbered plan files if needed

**After this command:**
- Urgent phase inserted
- All later phases renumbered
- Run `/gsd:plan-phase {N}` to plan the inserted phase
</objective>

<execution_context>
.planning/ROADMAP.md
.planning/STATE.md
.planning/
</execution_context>

<process>
1. Load ROADMAP.md and list all phases
2. Validate phase number N (must be within range)
3. Ask user for details if not provided:
   - What urgent work needs to be done?
   - Why is this urgent?
   - Any dependencies on existing phases?
4. Insert new phase at position N:
   - Shift all phases from N onwards by +1
   - Insert new phase with number N
5. Rename phase files if they exist:
   - `{N}-*.md` → `{N+1}-*.md` for affected phases
6. Update ROADMAP.md with new structure
7. Update STATE.md with new phase count
8. Create commit: `[GSD] Insert phase {N}: {description}`
9. Warn user about renumbering impact
10. Suggest next step: `/gsd:plan-phase {N}`
</process>
