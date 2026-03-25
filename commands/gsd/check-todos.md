---
name: gsd:check-todos
description: List pending todos
---
<context>
**Purpose:**
View all captured todos and their status.
</context>

<objective>
Display todo list with status.

**Reads:**
- `.planning/TODOS.md`

**After this command:**
- See all pending todos
- Can mark todos complete
- Can promote todos to phases
</objective>

<execution_context>
.planning/TODOS.md
.planning/STATE.md
</execution_context>

<process>
1. Check if TODOS.md exists:
   - If not: "No todos captured. Use `/gsd:add-todo <description>`"
   - If yes: Continue
2. Load TODOS.md
3. Parse todos by status:
   - Active (unchecked)
   - Completed (checked)
4. Display todos:
   ```markdown
   # Todos
   
   ## Active ({count})
   
   ### P0 (Critical)
   - [ ] {todo} (Added: {date})
   
   ### P1 (Important)
   - [ ] {todo} (Added: {date})
   
   ### P2 (Nice to have)
   - [ ] {todo} (Added: {date})
   
   ## Completed ({count})
   - [x] {todo} (Done: {date})
   - [x] {todo} (Done: {date})
   ```
5. Offer actions:
   - "Mark todo complete: `/gsd:add-todo -x <number>`"
   - "Promote to phase: `/gsd:add-phase` with todo description"
   - "Delete todo: Edit TODOS.md manually"
6. If many old todos, suggest:
   - "Consider reviewing backlog: `/gsd:review-backlog`"
</process>
