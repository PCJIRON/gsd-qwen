---
name: gsd:add-backlog
description: Add idea to backlog parking lot (999.x numbering, outside active milestone)
argument-hint: "<description>"
---
<context>
**Arguments:**
- `description` — The idea to capture

**Purpose:**
Capture ideas that don't fit in the current milestone.
Backlog items are numbered 999.x to indicate they're outside the active sequence.
</context>

<objective>
Add item to backlog parking lot.

**Creates/Updates:**
- `.planning/BACKLOG.md`

**After this command:**
- Idea captured
- Can review later with `/gsd:review-backlog`
- Can promote to active milestone
</objective>

<execution_context>
.planning/BACKLOG.md (if exists)
.planning/STATE.md
</execution_context>

<process>
1. Get description from user
2. Load existing BACKLOG.md (if exists)
3. Assign backlog number (999.x format):
   - Find highest 999.x number
   - Increment: 999.1, 999.2, 999.3...
4. Add to backlog:
   ```markdown
   ## Backlog
   
   ### Items
   
   | ID | Description | Added | Priority | Status |
   |----|-------------|-------|----------|--------|
   | 999.1 | {description} | {date} | P2 | Parking |
   ```
5. Do NOT create git commit (backlog is lightweight)
6. Confirm: "Backlog item 999.{N} added"
7. Show info:
   - "Review backlog: `/gsd:review-backlog`"
   - "Promote to milestone: Run `/gsd:review-backlog` and select promote"
8. If item seems urgent, suggest:
   - "This sounds urgent. Add to current milestone instead?"
</process>
