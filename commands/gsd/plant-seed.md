---
name: gsd:plant-seed
description: Capture forward-looking idea with trigger condition
argument-hint: "<description>"
---

# /gsd:plant-seed <description>

Capture a forward-looking idea with trigger conditions. Surfaces at the right milestone.

## Arguments

- `description` — The idea
- Will ask: when should this surface? (which phase/milestone)

## Process

1. Get seed description and trigger condition (which phase/milestone)
2. Load or create `.planning/SEEDS.md`
3. Add seed with trigger:
   ```markdown
   ### Seed: {description}
   - **Trigger:** Phase {N} / Milestone {M}
   - **Planted:** {date}
   - **Status:** Dormant
   ```
4. No git commit

**After this command:** Seed planted, will surface when trigger condition met.
