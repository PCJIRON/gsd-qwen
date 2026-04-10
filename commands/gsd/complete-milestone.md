---
name: gsd:complete-milestone
description: Archive current milestone, tag release, and prepare for next
---

# /gsd:complete-milestone

## Purpose

Complete the current milestone, archive all artifacts, and optionally start the next milestone.

## Process

1. Load current milestone state from STATE.md
2. Verify all phases complete:
   - Check all phases marked as "Done"
   - Verify all UAT passed
   - Confirm all work shipped
3. If incomplete:
   - List remaining work
   - Ask: "Complete anyway? (y/n)"
4. If confirmed:
   - Archive milestone files:
     - Move `.planning/` to `.planning/archive/milestone-{N}/`
   - Create git tag: `v{milestone-number}`
   - Create release summary:
     ```markdown
     # Milestone {N} Complete

     ## Summary
     - Phases completed: X
     - Requirements delivered: Y
     - Commits: Z

     ## Changelog
     - Feature 1
     - Feature 2
     ...
     ```
5. Update STATE.md:
   - Mark milestone as "Complete"
   - Clear current phase
6. Create commit: `[GSD] Complete milestone {N}`
7. Ask: "Start next milestone? (y/n)"
8. If yes: Run `/gsd:new-milestone`

## After this command

- Current milestone archived
- Release tagged
- Ready for new milestone or maintenance
