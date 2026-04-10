---
name: gsd:review-backlog
description: Review and promote backlog items to active milestone or remove stale entries
---

# /gsd:review-backlog

## Purpose

Review the backlog parking lot and decide what to promote to active work. Keeps backlog fresh and actionable.

## Process

1. Check if BACKLOG.md exists:
   - If not: "No backlog. Use `/gsd:add-backlog` to capture ideas"
   - If yes: Continue
2. Load BACKLOG.md
3. Load current roadmap from ROADMAP.md
4. For each backlog item:
   - Check if still relevant
   - Check if fits current milestone
   - Check priority
5. Display backlog review:
   ```markdown
   # Backlog Review

   ## Items ({count})

   ### Recommend Promote (fits current milestone)
   - [ ] {item 1} (Added: {date}, Priority: P1)
   - [ ] {item 2} (Added: {date}, Priority: P0)

   ### Recommend Keep (not yet relevant)
   - [ ] {item 3} (Added: {date}, for milestone 3+)

   ### Recommend Remove (stale/not relevant)
   - [ ] {item 4} (Added: {date}, no longer needed)
   ```
6. Ask user for each item:
   - "Promote to roadmap? (y/n)"
   - "Remove from backlog? (y/n)"
   - "Keep in backlog? (y/n)"
7. For promoted items:
   - Add to ROADMAP.md as new phase or existing phase
   - Remove from BACKLOG.md
8. For removed items:
   - Archive to `.planning/archive/backlog-removed.md`
   - Remove from BACKLOG.md
9. Update BACKLOG.md with remaining items
10. Create commit: `[GSD] Review backlog - promoted {N} items`
11. Show summary:
    - Promoted: {count}
    - Removed: {count}
    - Remaining: {count}

## After this command

- Backlog is current and relevant
- Promoted items added to roadmap
