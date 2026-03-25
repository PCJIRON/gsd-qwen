---
name: gsd:resume-work
description: Restore from last session handoff
---
<context>
**Purpose:**
Resume work from where you left off using the handoff created by `/gsd:pause-work`.
</context>

<objective>
Restore session context from handoff.

**Reads:**
- `.planning/HANDOFF.json`
- `.planning/PAUSE-MESSAGE.md` (if exists)

**After this command:**
- Context restored
- Ready to continue work
- STATE.md updated
</objective>

<execution_context>
.planning/HANDOFF.json
.planning/PAUSE-MESSAGE.md (if exists)
.planning/STATE.md
</execution_context>

<process>
1. Check for HANDOFF.json:
   - If not found: "No handoff found. Start fresh or run `/gsd:progress`"
   - If found: Continue
2. Load handoff data:
   - Phase, plan, task numbers
   - Last completed task
   - In-progress work
   - Branch info
3. Load PAUSE-MESSAGE.md if exists:
   - Display user's pause note
4. Verify state:
   - Check git branch matches handoff
   - Check uncommitted changes exist (if noted)
   - Warn if state has changed since pause
5. Update STATE.md:
   - Set current position to handoff position
   - Mark as "Resumed from pause"
   - Update timestamp
6. Restore context:
   - Load relevant plan file
   - Show last completed task
   - Show in-progress task details
7. Display resume summary:
   ```markdown
   # Work Resumed
   
   **Paused:** {timestamp}
   **Resumed:** {current time}
   
   **Position:**
   - Phase: {N}
   - Plan: {M}
   - Task: {T}
   
   **Last Completed:**
   {task description}
   
   **In Progress:**
   {task description}
   
   **Next Steps:**
   1. {immediate next action}
   2. {following action}
   ```
8. Ask: "Continue with in-progress task? (y/n)"
9. If yes: Continue execution
10. If no: Show options (skip, replan, etc.)
</process>
