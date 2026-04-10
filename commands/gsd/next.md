---
name: gsd:next
description: Auto-detect and run next workflow step
---

# /gsd:next

Auto-detect and run the next workflow step by reading STATE.md position.

## Process

1. Read `.planning/STATE.md` for current position
2. Read `.planning/ROADMAP.md` for phase structure
3. Determine next step based on workflow position:
   - If no `.planning/` exists → suggest `/gsd:new-project`
   - If phase not discussed → suggest `/gsd:discuss-phase {N}`
   - If phase not planned → suggest `/gsd:plan-phase {N}`
   - If phase not executed → suggest `/gsd:execute-phase {N}`
   - If phase not verified → suggest `/gsd:verify-work {N}`
   - If phase not shipped → suggest `/gsd:ship {N}`
   - If phase complete → suggest next phase
4. Show the user what the next step is
5. Ask for confirmation or run it automatically
6. Execute the next step

**Output:** Shows current position and next recommended action, then executes or waits for confirmation.
