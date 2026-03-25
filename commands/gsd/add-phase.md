---
name: gsd:add-phase
description: Append a new phase to the current roadmap
argument-hint: "[description]"
---
<context>
**Arguments:**
- `description` — Brief description of the phase work

**Purpose:**
Add a new phase to the end of the current roadmap without disrupting existing phases.
</context>

<objective>
Append a new phase to the roadmap.

**Creates:**
- Updated `ROADMAP.md` with new phase
- Updated `STATE.md` with phase info

**After this command:**
- New phase added to roadmap
- Run `/gsd:plan-phase N` to plan the new phase
</objective>

<execution_context>
.planning/ROADMAP.md
.planning/STATE.md
.planning/config.json
</execution_context>

<process>
1. Load ROADMAP.md and STATE.md
2. Determine next phase number (current max + 1)
3. Ask user for phase details if not provided:
   - What work should this phase include?
   - Any specific requirements or constraints?
   - Priority level (P0/P1/P2)?
4. Create phase entry in ROADMAP.md:
   ```markdown
   ## Phase {N}: {Theme}
   **Goal:** {description}
   **Requirements:** TBD
   **Status:** Planned
   ```
5. Update STATE.md with new phase count
6. Create commit: `[GSD] Add phase {N}: {description}`
7. Suggest next step: `/gsd:discuss-phase {N}` or `/gsd:plan-phase {N}`
</process>
