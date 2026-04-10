---
name: gsd:check-todos
description: List pending todos by priority
---

# /gsd:check-todos

List all pending todos from `.planning/TODOS.md` organized by priority.

## Process

1. Read `.planning/TODOS.md`
2. Parse todos into pending and completed
3. Display:
   - **Pending:** List with dates
   - **Completed:** Count
4. Offer to mark as done or remove
