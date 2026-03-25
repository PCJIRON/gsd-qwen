---
name: gsd:workstreams
description: Manage parallel workstreams (list, create, switch, status, progress, complete)
argument-hint: "<subcommand> [name]"
---
<context>
**Arguments:**
- `subcommand` — Action to perform
- `name` — Workstream name (for create, switch, complete)

**Subcommands:**
- `list` — Show all workstreams
- `create <name>` — Create new workstream
- `switch <name>` — Switch to workstream
- `status [name]` — Show workstream status
- `progress [name]` — Show workstream progress
- `complete <name>` — Complete and merge workstream

**Purpose:**
Manage multiple parallel lines of work within the same project.
Each workstream has its own STATE.md and progress tracking.
</context>

<objective>
Execute workstream management subcommand.

**After this command:**
- Workstream created/switched/completed
- Parallel work tracked separately
</objective>

<execution_context>
.planning/STATE.md
.planning/WORKSTREAMS.md
.workstreams/
</execution_context>

<process>
Parse subcommand and execute:

### list
1. Load WORKSTREAMS.md
2. Display all workstreams:
   ```markdown
   # Workstreams
   
   | Name | Status | Created | Last Active |
   |------|--------|---------|-------------|
   | main | 🟢 Active | - | 2026-03-25 |
   | feature-x | 🟡 In Progress | 2026-03-20 | 2026-03-24 |
   | bugfix-123 | ⏳ Blocked | 2026-03-22 | 2026-03-23 |
   ```

### create <name>
1. Validate name (unique, valid chars)
2. Create `.workstreams/{name}/` directory
3. Copy STATE.md template
4. Add to WORKSTREAMS.md
5. Confirm: "Workstream '{name}' created"

### switch <name>
1. Validate workstream exists
2. Update active workstream in `.planning/config.json`
3. Load workstream STATE.md
4. Confirm: "Switched to workstream '{name}'"

### status [name]
1. Load workstream STATE.md
2. Display current state, phase, blockers

### progress [name]
1. Load workstream STATE.md and ROADMAP.md
2. Show progress summary

### complete <name>
1. Verify workstream work is complete
2. Merge changes to main
3. Archive workstream
4. Update WORKSTREAMS.md
5. Confirm: "Workstream '{name}' completed and merged"

</process>
