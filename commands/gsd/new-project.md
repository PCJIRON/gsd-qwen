---
name: gsd:new-project
description: Initialize a new project with deep context gathering and PROJECT.md
argument-hint: "[--auto]"
---

# /gsd:new-project

Initialize a new project through unified flow: questioning → research (optional) → requirements → roadmap.

## Flags

- `--auto` — Automatic mode. After config questions, runs research → requirements → roadmap without further interaction. Expects idea document via @ reference.

## What This Creates

- `.planning/PROJECT.md` — project context
- `.planning/config.json` — workflow preferences
- `.planning/research/` — domain research (optional)
- `.planning/REQUIREMENTS.md` — scoped requirements
- `.planning/ROADMAP.md` — phase structure
- `.planning/STATE.md` — project memory

## References

- @workflows/new-project.md
- @references/questioning.md
- @templates/project.md
- @templates/requirements.md
- @templates/roadmap.md

## Process

1. Ask the user 7 key questions about their project (what, why, who, type, tech stack, MVP features, scope)
2. Create `.planning/` directory structure
3. Populate PROJECT.md from template with user's answers
4. Create config.json with default settings
5. If not `--auto` mode, iterate on requirements through clarifying questions
6. Extract detailed requirements into REQUIREMENTS.md
7. Spawn gsd-roadmapper to create ROADMAP.md with 3-6 phases
8. Create initial STATE.md with project position
9. Make initial git commit: `[GSD-init] Project setup with requirements and roadmap`
10. Show clear next steps: `/gsd:discuss-phase 1` or `/gsd:plan-phase 1`

**After this command:** Run `/gsd:plan-phase 1` to start execution.
