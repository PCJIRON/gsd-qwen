---
name: gsd:add-todo
description: Capture idea for later work
argument-hint: "<description>"
---
<context>
**Arguments:**
- `description` — The todo item to capture

**Purpose:**
Quickly capture ideas, tasks, or reminders without disrupting current work.
Todos are tracked separately from the roadmap.
</context>

<objective>
Add a todo item to the tracking list.

**Creates/Updates:**
- `.planning/TODOS.md` — Todo list

**After this command:**
- Todo added
- Can view with `/gsd:check-todos`
- Can promote to phase later
</objective>

<execution_context>
.planning/TODOS.md (if exists)
.planning/STATE.md
</execution_context>

<process>
1. Get todo description from user
2. Load existing TODOS.md (if exists)
3. Add new todo with metadata:
   ```markdown
   ## Todos
   
   ### Active
   - [ ] {todo description} (Added: {date}, Priority: {P0/P1/P2})
   
   ### Completed
   - [x] {completed todo} (Done: {date})
   ```
4. If no priority specified, default to P2 (low)
5. Save TODOS.md
6. Do NOT create git commit (todos are lightweight)
7. Confirm: "Todo added. Run `/gsd:check-todos` to view all."
8. If todo seems important, suggest:
   - "This sounds like a phase. Run `/gsd:add-phase`?"
</process>
