---
name: gsd:manager
description: Interactive command center for managing multiple phases
---

# /gsd:manager

## Purpose

Interactive dashboard for managing complex multi-phase work. Visual overview of all phases, quick actions, and progress tracking.

## Process

1. Load all project data:
   - STATE.md, ROADMAP.md, REQUIREMENTS.md
   - All phase files ({N}-*.md)
   - Git status
2. Generate dashboard:
   ```markdown
   # GSD Manager - {Project Name}

   ## Project Status
   **Milestone:** {N} | **Phase:** {M} | **Progress:** {X}%

   ## Phase Overview

   | # | Theme | Status | Progress | Actions |
   |---|-------|--------|----------|---------|
   | 1 | Foundation | ✅ Done | 100% | [View] [Summary] |
   | 2 | Features | 🔄 In Progress | 60% | [Continue] [Plan] [Execute] |
   | 3 | API | ⏳ Pending | 0% | [Discuss] [Plan] |
   | 4 | UI | ⏳ Pending | 0% | [Discuss] [Plan] |

   ## Quick Actions

   ### Current Phase (2)
   - [ ] Continue execution → `/gsd:execute-phase 2`
   - [ ] View plan → Open `2-PLAN.md`
   - [ ] View summary → Open `2-SUMMARY.md`

   ### Blockers
   - {blocker 1}
   - {blocker 2}

   ## Recent Activity
   - {commit 1}
   - {commit 2}

   ## Next Steps
   1. {immediate next action}
   2. {following action}
   ```
3. Display interactive menu:
   ```
   Select action:
   1. View phase details
   2. Continue current phase
   3. Switch to phase...
   4. View blockers
   5. Generate report
   6. Settings
   7. Exit
   ```
4. Handle user selection:
   - **View phase:** Show phase details, offer actions
   - **Continue:** Run `/gsd:execute-phase {N}`
   - **Switch:** Change current phase in STATE.md
   - **Blockers:** Show and manage blockers
   - **Report:** Generate status report
   - **Settings:** Open settings
5. After action completes:
   - Return to dashboard
   - Refresh data
   - Show updated status
6. Loop until user exits
7. On exit:
   - "Dashboard closed"
   - "Run `/gsd:manager` to return"

## After this command

- Dashboard displayed
- Can manage phases interactively
- Quick actions available
