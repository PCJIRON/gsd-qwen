---
name: gsd:help
description: Display command reference
---

# /gsd:help

Display GSD command reference and workflow overview.

## Output

Show command reference table:

### Core Workflow
| Command | Description |
|---------|-------------|
| `/gsd:new-project` | Initialize project with requirements → roadmap |
| `/gsd:discuss-phase [N]` | Capture implementation decisions |
| `/gsd:plan-phase [N]` | Create atomic task plans |
| `/gsd:execute-phase [N]` | Execute plans with atomic commits |
| `/gsd:verify-work [N]` | User acceptance testing |
| `/gsd:ship [N]` | Create PR from verified work |
| `/gsd:next` | Auto-detect and run next step |

### Management
| Command | Description |
|---------|-------------|
| `/gsd:progress` | Show current state and next steps |
| `/gsd:settings` | Configure preferences |
| `/gsd:manager` | Interactive phase dashboard |

### Quick
| Command | Description |
|---------|-------------|
| `/gsd:quick <desc>` | Ad-hoc tasks with GSD guarantees |
| `/gsd:fast <text>` | Trivial inline tasks |

### Quality
| Command | Description |
|---------|-------------|
| `/gsd:debug` | Systematic debugging |
| `/gsd:review` | Cross-AI peer review |
| `/gsd:health` | Validate .planning/ integrity |

### Roadmap
| Command | Description |
|---------|-------------|
| `/gsd:add-phase` | Append phase to roadmap |
| `/gsd:remove-phase` | Remove future phase |
| `/gsd:new-milestone` | Start new milestone |

### Idea Capture
| Command | Description |
|---------|-------------|
| `/gsd:add-todo` | Capture as lightweight todo |
| `/gsd:add-backlog` | Park idea outside active milestone |
| `/gsd:note` | Zero-friction idea capture |
| `/gsd:plant-seed` | Idea with trigger condition |

### Session & Workspace
| Command | Description |
|---------|-------------|
| `/gsd:pause-work` | Create handoff for session pause |
| `/gsd:resume-work` | Restore from last handoff |
| `/gsd:new-workspace` | Create isolated workspace |

## Workflow Diagram

```
/gsd:new-project → /gsd:discuss-phase → /gsd:plan-phase → /gsd:execute-phase → /gsd:verify-work → /gsd:ship → /gsd:next (repeat)
```
