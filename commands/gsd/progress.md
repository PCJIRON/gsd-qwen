---
name: gsd:progress
description: Show current state and next steps
---

# /gsd:progress

Show current project state, completed work, and next steps from STATE.md, ROADMAP.md, and PROJECT.md.

## Process

1. Read `.planning/STATE.md` for current position, completed tasks, blockers
2. Read `.planning/ROADMAP.md` for phase structure and milestones
3. Read `.planning/PROJECT.md` for project context
4. Display:
   - **Current Phase:** N — {theme}
   - **Position:** {discussed|planned|executing|verified|shipped}
   - **Completed:** List of completed phases with UAT results
   - **In Progress:** Current wave/plan being executed
   - **Pending:** Remaining plans for current phase
   - **Blockers:** Any active blockers
   - **Next Step:** Clear recommendation
5. Show recent git activity
6. Show session activity

**Output:** Formatted summary of project state with clear next step recommendation.
