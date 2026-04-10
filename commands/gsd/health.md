---
name: gsd:health
description: Validate .planning/ directory integrity
argument-hint: "[--repair]"
---

# /gsd:health [--repair]

Validate `.planning/` directory integrity and optionally repair issues.

## Flags

- `--repair` — Auto-fix detected issues

## Process

1. Check `.planning/` directory exists
2. Verify required files: PROJECT.md, REQUIREMENTS.md, ROADMAP.md, STATE.md, config.json
3. Check phase file consistency:
   - CONTEXT files have matching PLAN files
   - PLAN files have matching SUMMARY files
   - SUMMARY files have matching UAT files
4. Validate STATE.md references valid files
5. Check for orphaned files (not referenced by STATE.md)
6. Check git integrity: planning commits match STATE.md
7. Display health report:
   - ✅ Healthy files
   - ⚠️ Warnings (missing optional files)
   - ❌ Errors (missing required files, broken references)
8. If `--repair` flag:
   - Create missing STATE.md entries
   - Remove orphaned files (with confirmation)
   - Fix broken references

**Output:** Health score, issues found, actions taken (if --repair).
