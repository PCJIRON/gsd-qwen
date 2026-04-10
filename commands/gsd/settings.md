---
name: gsd:settings
description: Configure model profiles, workflow agents, and git branching
---

# /gsd:settings

Configure GSD preferences including model profiles, workflow agents, and git branching strategy.

## Configuration Options

### Model Profile
- `quality` — Best quality, slower/more expensive model
- `balanced` — Default (recommended)
- `budget` — Fast, cost-effective
- `inherit` — Use Qwen Code's configured model

### Workflow Agents
Toggle specialized agents:
- `research` — Spawn gsd-phase-researcher during planning
- `planCheck` — Spawn gsd-plan-checker for validation
- `verification` — Spawn gsd-integration-checker after execution

### Git Branching Strategy
- `none` — Stay on current branch (default)
- `phase` — Create branch per phase
- `milestone` — Create branch per milestone

## Process

1. Read current `.planning/config.json`
2. Display current settings
3. Ask user what to change
4. Update config.json with new values
5. Show confirmation of changes

**Example config.json:**
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
