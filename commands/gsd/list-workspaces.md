---
name: gsd:list-workspaces
description: Show all GSD workspaces and their status
---
<context>
**Purpose:**
List all registered workspaces and their current status.
</context>

<objective>
Display workspace list with status.

**Reads:**
- `.planning/WORKSPACES.md`
- `.planning/WORKSPACES.json`

**Output:**
- All workspaces
- Status (active, archived, completed)
- Last activity
</objective>

<execution_context>
.planning/WORKSPACES.md
.planning/WORKSPACES.json
</execution_context>

<process>
1. Check if WORKSPACES.md or WORKSPACES.json exists:
   - If not: "No workspaces registered. Run `/gsd:new-workspace`"
   - If yes: Continue
2. Load workspace registry
3. For each workspace, check status:
   - Exists on disk?
   - Git branch status
   - Last activity (from STATE.md)
4. Display workspace list:
   ```markdown
   # Workspaces
   
   ## Active
   
   | Name | Type | Branch | Last Active | Status |
   |------|------|--------|-------------|--------|
   | feature-x | worktree | feat/x | 2026-03-25 | 🟢 Active |
   | bugfix-123 | clone | fix/123 | 2026-03-24 | 🟡 Idle |
   
   ## Archived
   
   | Name | Type | Archived | Reason |
   |------|------|----------|--------|
   | experiment-ai | clone | 2026-03-20 | Completed |
   
   ## Summary
   - Active: 2
   - Archived: 1
   - Total: 3
   ```
5. Offer actions:
   - "Switch to workspace: `cd {path}`"
   - "Archive workspace: `/gsd:remove-workspace {name}`"
   - "View workspace details: Check `{path}/.planning/STATE.md`"
6. If workspace on disk but not registered:
   - Warn: "Found unregistered workspace at {path}"
   - Suggest: "Add to WORKSPACES.md manually"
</process>
