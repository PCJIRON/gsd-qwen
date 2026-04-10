---
name: gsd:add-backlog
description: Add idea to backlog parking lot (999.x numbering, outside active milestone)
argument-hint: "<description>"
---

# /gsd:add-backlog <description>

Add an idea to the backlog parking lot. Items are numbered 999.x to indicate they're outside the active milestone.

## Process

1. Get description
2. Load or create `.planning/BACKLOG.md`
3. Find highest 999.x number, increment (999.1, 999.2...)
4. Add to backlog table:
   ```markdown
   | ID | Description | Added | Priority | Status |
   |----|-------------|-------|----------|--------|
   | 999.1 | {description} | {date} | P2 | Parking |
   ```
5. No git commit (backlog is lightweight)
6. Confirm item added, suggest `/gsd:review-backlog`
