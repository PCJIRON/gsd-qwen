---
name: gsd:discuss-phase
description: Capture implementation decisions before planning
argument-hint: "[N]"
---

# /gsd:discuss-phase [N]

Capture implementation decisions before planning. Creates `{N}-CONTEXT.md` with architectural choices, technology decisions, and implementation preferences.

## Arguments

- `N` — Phase number (defaults to current phase from STATE.md)

## What This Creates

- `.planning/{N}-CONTEXT.md` — Implementation decision document

## Process

1. Read `.planning/STATE.md` for current position
2. Read `.planning/ROADMAP.md` for phase goals
3. Read `.planning/REQUIREMENTS.md` for requirements
4. Identify decision areas for this phase:
   - Architecture choices
   - Library/technology selections
   - API design decisions
   - Data model choices
   - UI/UX decisions
   - Testing strategy
5. Ask the user about each decision area
6. Document decisions in `{N}-CONTEXT.md`:
   ```markdown
   # Phase {N} Context

   ## Decisions
   ### Decision 1: {topic}
   - **Decision:** {what was decided}
   - **Rationale:** {why}
   - **Alternatives considered:** {what else}
   - **Trade-offs:** {pros/cons}
   ```
7. Update STATE.md with context capture date
8. Commit: `[GSD-context] Phase {N} decisions captured`

**After this command:** Run `/gsd:plan-phase {N}` to create atomic task plans.
