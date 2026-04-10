---
name: gsd:add-todo
description: Capture idea as lightweight todo
argument-hint: "<description>"
---

# /gsd:add-todo <description>

Capture an idea as a lightweight todo without full GSD structure. Updates `TODOS.md`.

## Process

1. Get todo description
2. Load or create `.planning/TODOS.md`
3. Append todo with timestamp:
   ```markdown
   - [ ] {description} — Added {date}
   ```
4. Show current todo count and pending items
