# GSD Help Workflow

## Purpose
Display all available GSD commands with descriptions.

---

## Command Reference

### Core Commands

| Command | Description |
|---------|-------------|
| `/gsd:new-project` | Initialize project with questioning → research → requirements → roadmap |
| `/gsd:discuss-phase [N]` | Capture implementation decisions for phase N |
| `/gsd:plan-phase [N]` | Research and create atomic task plans for phase N |
| `/gsd:execute-phase [N]` | Execute phase N plans with atomic commits |
| `/gsd:verify-work [N]` | User acceptance testing for phase N |
| `/gsd:ship [N]` | Create PR from verified work |

### Management Commands

| Command | Description |
|---------|-------------|
| `/gsd:progress` | Show current state and next steps |
| `/gsd:next` | Auto-detect and run next workflow step |
| `/gsd:settings` | Configure model profiles and workflow agents |
| `/gsd:update` | Update GSD to latest version |

### Quick Commands

| Command | Description |
|---------|-------------|
| `/gsd:quick <description>` | Ad-hoc tasks with GSD guarantees |
| `/gsd:fast <text>` | Inline trivial tasks (executes immediately) |

### Debug Commands

| Command | Description |
|---------|-------------|
| `/gsd:debug` | Systematic debugging with persistent state |
| `/gsd:health` | System health check |
| `/gsd:stats` | Project statistics |

---

## Workflow Overview

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

```
.planning/
├── PROJECT.md          # Project context
├── REQUIREMENTS.md     # Requirements
├── ROADMAP.md          # Phase roadmap
├── STATE.md            # Current state
├── config.json         # Settings
├── {N}-CONTEXT.md      # Phase decisions
├── {N}-RESEARCH.md     # Phase research
├── {N}-{N}-PLAN.md     # Task plans
├── {N}-{N}-SUMMARY.md  # Task summaries
├── {N}-VERIFICATION.md # Phase verification
└── {N}-UAT.md          # UAT results
```

---

## Tips

1. **Start with** `/gsd:new-project` to initialize
2. **Use** `/gsd:next` for auto-pilot through workflow
3. **Check** `/gsd:progress` anytime for status
4. **Quick tasks** use `/gsd:quick` or `/gsd:fast`
5. **Stuck?** Run `/gsd:debug` for help
