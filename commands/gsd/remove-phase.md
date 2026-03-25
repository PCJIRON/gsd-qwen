---
name: gsd:remove-phase
description: Remove a future phase from the roadmap and renumber
argument-hint: "[N]"
---
<context>
**Arguments:**
- `N` — Phase number to remove

**Purpose:**
Remove a planned phase that's no longer needed, cleaning up the roadmap.
</context>

<objective>
Remove phase N from the roadmap and renumber subsequent phases.

**Creates:**
- Updated `ROADMAP.md` without phase N
- Updated `STATE.md` with new phase count
- Archived phase files (if any)

**After this command:**
- Phase removed
- All later phases renumbered (-1)
- Roadmap is cleaner
</objective>

<execution_context>
.planning/ROADMAP.md
.planning/STATE.md
.planning/
</execution_context>

<process>
1. Load ROADMAP.md and list all phases
2. Validate phase number N (must exist and not be completed)
3. Show user what will be removed:
   - Phase N title and description
   - Any associated files ({N}-*.md)
4. Ask for confirmation: "Remove phase N: {title}?"
5. If confirmed:
   - Archive or delete phase files ({N}-*.md)
   - Remove phase N from ROADMAP.md
   - Renumber all phases from N+1 onwards (-1)
   - Update STATE.md with new phase count
6. Create commit: `[GSD] Remove phase {N}: {title}`
7. Warn user about renumbering impact
8. Show updated roadmap summary
</process>
