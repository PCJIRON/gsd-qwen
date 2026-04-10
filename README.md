# GSD-Qwen v2.0

**Get Shit Done** — Spec-driven development system for Qwen Code

A lightweight yet powerful context engineering and spec-driven development system. Solves context rot by managing context, planning, and execution through a structured workflow.

---

## Quick Start

### Install

```bash
# Clone repository
git clone https://github.com/your-org/gsd-qwen.git
cd gsd-qwen

# Install globally
node bin/install.js --global

# OR install locally
node bin/install.js --local
```

### Verify

Restart Qwen Code and run:
```
/gsd:help
```

### First Project

```
/gsd:new-project
```

---

## Core Workflow

```
/gsd:new-project → /gsd:discuss-phase 1 → /gsd:plan-phase 1 → /gsd:execute-phase 1 → /gsd:verify-work 1 → /gsd:ship 1 → /gsd:next (repeat for phase 2...)
```

---

## Commands

### Core Workflow (7)

| Command | Description |
|---------|-------------|
| `/gsd:new-project [--auto]` | Initialize project with requirements → roadmap |
| `/gsd:discuss-phase [N]` | Capture implementation decisions |
| `/gsd:plan-phase [N]` | Create atomic task plans |
| `/gsd:execute-phase [N]` | Execute plans with atomic commits |
| `/gsd:verify-work [N]` | User acceptance testing |
| `/gsd:ship [N]` | Create PR from verified work |
| `/gsd:next` | Auto-detect and run next step |

### Management (4)

| Command | Description |
|---------|-------------|
| `/gsd:progress` | Show current state and next steps |
| `/gsd:settings` | Configure model profiles, agents, branching |
| `/gsd:manager` | Interactive phase dashboard |
| `/gsd:update` | Update GSD extension |

### Quick Commands (2)

| Command | Description |
|---------|-------------|
| `/gsd:quick <desc>` | Ad-hoc tasks with GSD guarantees |
| `/gsd:fast <text>` | Trivial inline tasks (no commit) |

### Debug & Quality (6)

| Command | Description |
|---------|-------------|
| `/gsd:debug` | Systematic debugging with persistent state |
| `/gsd:review` | Cross-AI peer review |
| `/gsd:health [--repair]` | Validate .planning/ integrity |
| `/gsd:validate-phase [N]` | Validate plans against requirements |
| `/gsd:audit-uat` | Find phases missing UAT |
| `/gsd:audit-milestone` | Verify milestone definition of done |

### UI Commands (2)

| Command | Description |
|---------|-------------|
| `/gsd:ui-phase` | Generate UI design contract (UI-SPEC.md) |
| `/gsd:ui-review` | 6-pillar visual audit of implemented UI |

### Roadmap Management (7)

| Command | Description |
|---------|-------------|
| `/gsd:add-phase` | Append phase to roadmap |
| `/gsd:remove-phase` | Remove future phase |
| `/gsd:insert-phase` | Insert phase between existing phases |
| `/gsd:new-milestone` | Start new milestone/version |
| `/gsd:milestone-summary` | Generate project summary |
| `/gsd:research-phase` | Research without creating plans |
| `/gsd:list-phase-assumptions` | Preview assumptions before planning |

### Idea Capture (4)

| Command | Description |
|---------|-------------|
| `/gsd:add-todo` | Capture as lightweight todo |
| `/gsd:add-backlog` | Park idea outside active milestone |
| `/gsd:note` | Zero-friction idea capture |
| `/gsd:plant-seed` | Idea with trigger condition |

### Session & Workspace (7)

| Command | Description |
|---------|-------------|
| `/gsd:pause-work` | Create handoff for session pause |
| `/gsd:resume-work` | Restore from last handoff |
| `/gsd:new-workspace` | Create isolated workspace |
| `/gsd:list-workspaces` | Show all workspaces |
| `/gsd:remove-workspace` | Remove workspace |
| `/gsd:workstreams` | Manage parallel workstreams |
| `/gsd:session-report` | Generate session summary |

### Codebase & Git (5)

| Command | Description |
|---------|-------------|
| `/gsd:map-codebase` | Analyze existing codebase (brownfield) |
| `/gsd:pr-branch` | Create clean PR branch |
| `/gsd:reapply-patches` | Reapply lost patches |
| `/gsd:forensics` | Post-mortem of failed workflow |
| `/gsd:cleanup` | Clean up temporary files |

### Misc (6)

| Command | Description |
|---------|-------------|
| `/gsd:do <text>` | Intelligent routing of freeform text |
| `/gsd:help` | Display command reference |
| `/gsd:stats` | Project statistics |
| `/gsd:profile-user` | Generate developer behavioral profile |
| `/gsd:set-profile` | Switch model profiles |
| `/gsd:thread` | Persistent context threads |

---

## File Structure

After `/gsd:new-project`:

```
.planning/
├── PROJECT.md              # Project context
├── REQUIREMENTS.md         # Requirements
├── ROADMAP.md              # Phase roadmap
├── STATE.md                # Current state (single source of truth)
├── config.json             # Settings
├── {N}-CONTEXT.md          # Phase N decisions
├── {N}-RESEARCH.md         # Phase N research
├── {N}-{M}-PLAN.md         # Phase N, Plan M
├── {N}-{M}-SUMMARY.md      # Phase N, Plan M results
├── {N}-VERIFICATION.md     # Phase N integration check
├── {N}-UAT.md              # Phase N UAT results
├── DEBUG-{n}.md            # Debug session logs
├── BACKLOG.md              # Backlog parking lot
├── TODOS.md                # Lightweight todos
└── USER-PROFILE.md         # Developer behavioral profile
```

---

## Features

### Context Engineering
- Maintains fresh context windows
- Offloads work to 18 specialized subagents
- Preserves memory across sessions via `.planning/` files

### Atomic Commits
- One commit per task: `[GSD-{phase}-{plan}-T{task}] description`
- Traceable and reversible
- Clear commit messages

### Wave Execution
- Groups tasks by dependencies
- Parallel execution where possible
- Automatic dependency resolution

### Spec-Driven
- Requirements-first approach
- Verification gates at each step
- User acceptance testing before shipping

### 18 Specialized Agents
- **Core:** gsd-executor, gsd-planner, gsd-roadmapper, gsd-verifier
- **Research:** gsd-project-researcher, gsd-phase-researcher, gsd-advisor-researcher, gsd-research-synthesizer
- **Quality:** gsd-plan-checker, gsd-integration-checker, gsd-nyquist-auditor
- **Debug:** gsd-debugger
- **Analysis:** gsd-assumptions-analyzer, gsd-codebase-mapper, gsd-user-profiler
- **UI:** gsd-ui-researcher, gsd-ui-auditor, gsd-ui-checker

---

## Configuration

### Model Profiles

Edit `.planning/config.json`:

```json
{
  "modelProfile": "balanced",
  "workflowAgents": {
    "research": true,
    "planCheck": true,
    "verification": true
  },
  "gitBranching": "none"
}
```

**Profiles:**
- `quality` — Best quality, slower
- `balanced` — Default (recommended)
- `budget` — Fast, cost-effective
- `inherit` — Use Qwen Code's configured model

**Branching:**
- `none` — Stay on current branch (default)
- `phase` — Branch per phase
- `milestone` — Branch per milestone

---

## Uninstall

```bash
# Global uninstall
node bin/install.js --uninstall --global

# Local uninstall
node bin/install.js --uninstall --local
```

---

## Development

### Structure

```
gsd-qwen/
├── qwen-extension.json    # Manifest (v2.0)
├── GSD.md                 # Context file
├── commands/
│   └── gsd/              # Commands (57 total, clean markdown)
├── agents/               # Agents (18 total, clean markdown)
├── workflows/            # Workflow definitions (10)
├── templates/            # File templates (4)
├── references/           # Reference docs (3)
└── bin/
    └── install.js        # Installer v2.0
```

### What's New in v2.0

- **Clean markdown format** — All commands and agents converted from XML-like tags to clean markdown
- **Updated manifest schema** — Uses latest Qwen Code extension format with `commands`, `agents`, `contextFileName` fields
- **GSD.md context file** — System-level instructions loaded by Qwen Code
- **Improved installer** — Better error handling, file counting, exclusion list
- **57 commands** — Full command suite organized by category

### Add Commands

Create `commands/gsd/your-command.md`:

```markdown
---
name: gsd:your-command
description: What it does
argument-hint: "[args]"
---

# /gsd:your-command

## Arguments
- `arg` — Description

## Process
1. Step one
2. Step two
3. Step three

**After this command:** What happens next.
```

---

## Credits

Based on [GSD (Get Shit Done)](https://github.com/gsd-build/get-shit-done) for Claude Code.

Ported to Qwen Code for open-source AI development.
