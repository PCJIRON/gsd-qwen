# GSD-Qwen

**Get Shit Done** — Spec-driven development system for Qwen Code

A lightweight yet powerful context engineering and spec-driven development system for Qwen Code. Solves context rot by managing context, planning, and execution.

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

## Core Commands

### Workflow Commands

| Command | Description |
|---------|-------------|
| `/gsd:new-project` | Initialize project with requirements → roadmap |
| `/gsd:discuss-phase [N]` | Capture implementation decisions |
| `/gsd:plan-phase [N]` | Create atomic task plans |
| `/gsd:execute-phase [N]` | Execute plans with atomic commits |
| `/gsd:verify-work [N]` | User acceptance testing |
| `/gsd:ship [N]` | Create PR from verified work |
| `/gsd:next` | Auto-detect and run next step |

### Management Commands

| Command | Description |
|---------|-------------|
| `/gsd:progress` | Show current state and next steps |
| `/gsd:settings` | Configure preferences |
| `/gsd:update` | Update GSD |

### Quick Commands

| Command | Description |
|---------|-------------|
| `/gsd:quick <desc>` | Ad-hoc tasks with GSD guarantees |
| `/gsd:fast <text>` | Inline trivial tasks |

---

## Workflow

```
/gsd:new-project
    ↓
/gsd:discuss-phase 1
    ↓
/gsd:plan-phase 1
    ↓
/gsd:execute-phase 1
    ↓
/gsd:verify-work 1
    ↓
/gsd:ship 1
    ↓
/gsd:next (repeat for phase 2...)
```

---

## File Structure

After `/gsd:new-project`:

```
.planning/
├── PROJECT.md          # Project context
├── REQUIREMENTS.md     # Requirements
├── ROADMAP.md          # Phase roadmap
├── STATE.md            # Current state
├── config.json         # Settings
├── 1-CONTEXT.md        # Phase 1 decisions
├── 1-RESEARCH.md       # Phase 1 research
├── 1-1-PLAN.md         # Phase 1, Plan 1
├── 1-1-SUMMARY.md      # Phase 1, Plan 1 summary
└── 1-UAT.md            # Phase 1 UAT results
```

---

## Features

### Context Engineering
- Maintains fresh context windows
- Offloads work to subagents
- Preserves memory across sessions

### Atomic Commits
- One commit per task
- Traceable and reversible
- Clear commit messages

### Wave Execution
- Groups tasks by dependencies
- Parallel execution where possible
- Automatic dependency resolution

### Spec-Driven
- Requirements-first approach
- Verification at each step
- User acceptance testing

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
- `balanced` — Default
- `budget` — Fast, cost-effective

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
├── qwen-extension.json   # Manifest
├── commands/
│   └── gsd/             # Commands (57 total)
├── agents/              # Agents (18 total)
├── workflows/           # Workflows
├── templates/           # File templates
├── references/          # Reference docs
└── bin/
    └── install.js       # Installer
```

### Add Commands

Create `commands/gsd/your-command.md`:

```markdown
---
name: gsd:your-command
description: What it does
---
<objective>
Clear objective
</objective>

<execution_context>
@workflows/your-workflow.md
</execution_context>

<process>
Step-by-step instructions
</process>
```

---

## License

MIT

---

## Credits

Based on [GSD (Get Shit Done)](https://github.com/gsd-build/get-shit-done) for Claude Code.

Ported to Qwen Code for open-source AI development.
