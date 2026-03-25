---
name: gsd:pause-work
description: Create handoff when stopping mid-phase (writes HANDOFF.json)
argument-hint: "[message]"
---
<context>
**Arguments:**
- `message` — Optional note about where you're stopping

**Purpose:**
Create a clean handoff when you need to stop work mid-phase.
Allows you (or another session) to resume exactly where you left off.
</context>

<objective>
Create handoff documentation for session pause.

**Creates:**
- `.planning/HANDOFF.json` — Resume point and context
- `.planning/PAUSE-MESSAGE.md` — Optional human-readable note

**After this command:**
- Safe to stop work
- Next session can run `/gsd:resume-work`
</objective>

<execution_context>
.planning/STATE.md
.planning/
git status
</execution_context>

<process>
1. Load current state from STATE.md
2. Capture current context:
   - Current phase and plan number
   - Last completed task
   - In-progress work (if any)
   - Open files or pending changes
3. Check git status:
   - Uncommitted changes
   - Current branch
4. Create HANDOFF.json:
   ```json
   {
     "timestamp": "2026-03-25T14:30:00Z",
     "phase": 1,
     "plan": 2,
     "task": 3,
     "status": "in-progress",
     "lastCompletedTask": "Task 2: Create API endpoint",
     "inProgressTask": "Task 3: Add validation",
     "uncommittedChanges": true,
     "branch": "feature/phase-1",
     "notes": "Stopped mid-task, validation logic half done"
   }
   ```
5. If message provided, create PAUSE-MESSAGE.md:
   ```markdown
   # Pause Note
   
   **Stopped at:** {timestamp}
   
   **Context:**
   {user's message}
   
   **Next steps:**
   1. Complete validation logic in {file}
   2. Run tests
   3. Continue with task 4
   ```
6. Stage handoff files: `git add .planning/HANDOFF.json`
7. Create commit (if changes): `[GSD] Pause work - phase {N}, plan {M}`
8. Confirm: "Work paused. Run `/gsd:resume-work` to continue."
</process>
