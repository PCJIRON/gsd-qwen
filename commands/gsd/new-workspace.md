---
name: gsd:new-workspace
description: Create isolated workspace with repo copies (worktrees or clones)
---

# /gsd:new-workspace

## Purpose

Create an isolated workspace for parallel development. Uses git worktrees or clones for multi-repo workflows.

## Process

1. **Ask user for workspace details**:
   - Workspace name?
   - Purpose (feature, experiment, bugfix)?
   - Use worktree or clone?

2. **Determine workspace location**:
   - Default: `../{workspace-name}/`
   - Or custom path

3. **Create workspace**:

   **Option A: Git Worktree** (recommended for same repo)
   ```bash
   git worktree add ../{workspace-name} -b {feature-branch}
   ```

   **Option B: Clone** (recommended for different repos)
   ```bash
   git clone . ../{workspace-name}
   ```

4. **Initialize workspace**:
   - Copy `.planning/config.json`
   - Create fresh `STATE.md`
   - Link to parent project

5. **Create workspace manifest**:

   ```json
   {
     "name": "{workspace-name}",
     "type": "worktree|clone",
     "parent": "{parent-path}",
     "branch": "{branch-name}",
     "created": "{date}",
     "purpose": "{purpose}"
   }
   ```

6. **Register workspace** in parent: Add to `.planning/WORKSPACES.md`

7. **Create commit** (in parent): `[GSD] Create workspace: {name}`

8. **Provide next steps**:

   ```markdown
   # Workspace Created

   **Name:** {name}
   **Location:** {path}
   **Branch:** {branch}

   ## Next Steps
   1. `cd {path}`
   2. Run `/gsd:new-project` or `/gsd:new-milestone`
   3. Start work

   ## Switch Back
   `cd {parent-path}`
   ```

## After this command

- Workspace created
- Ready to start parallel work
- Can switch back to parent anytime
