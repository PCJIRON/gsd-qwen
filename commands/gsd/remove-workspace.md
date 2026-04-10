---
name: gsd:remove-workspace
description: Remove workspace and clean up worktrees
---

# /gsd:remove-workspace

## Arguments

- `name` — Workspace name to remove

## Purpose

Remove a workspace and clean up associated git worktrees or clones.

## Process

1. Load WORKSPACES.md
2. Find workspace by name:
   - If not found: "Workspace '{name}' not registered"
   - If found: Continue
3. Determine workspace type:
   - **Worktree:** Use `git worktree remove`
   - **Clone:** Delete directory manually
4. Show removal preview:
   ```markdown
   # Workspace Removal Preview

   **Workspace:** {name}
   **Type:** {worktree|clone}
   **Location:** {path}
   **Branch:** {branch}

   ## Actions
   - Remove git worktree: `git worktree remove {path}`
   - Delete directory: {path}
   - Update WORKSPACES.md: Remove entry

   ## Warning
   - Uncommitted changes will be LOST
   - Check workspace for pending work

   **Proceed? (y/n)**
   ```
5. If confirmed:
   - Check for uncommitted changes in workspace
   - If changes: Warn and ask to stash/commit first
   - Remove worktree or delete directory
   - Update WORKSPACES.md
   - Archive workspace entry to `.planning/archive/workspaces.md`
6. Create commit (in parent): `[GSD] Remove workspace: {name}`
7. Confirm: "Workspace '{name}' removed"
8. If worktree removal fails:
   - Provide manual commands to run
   - "Run: `git worktree remove {path} --force`"

## After this command

- Workspace removed
- No orphaned worktrees
- Registry updated
