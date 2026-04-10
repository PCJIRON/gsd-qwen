---
name: gsd:debug
description: Systematic debugging with persistent state
argument-hint: "[issue description]"
---

# /gsd:debug [issue]

Systematically diagnose and fix code issues with persistent state tracking across sessions.

## Arguments

- `issue description` — Description of the problem (optional, will ask if not provided)

## What This Creates

- `.planning/DEBUG-{n}.md` — Debug session log

## Process

1. Gather context: issue description, error messages, stack traces, affected files
2. Read `.planning/STATE.md` for current context
3. Check existing DEBUG-*.md files for related sessions
4. Attempt to reproduce the issue
5. Form hypotheses about root causes, rank by likelihood
6. Test hypotheses systematically with logging/assertions
7. Identify root cause and document chain of causation
8. Create fix plan with minimal changes
9. Execute fix or present to user
10. Document everything in `DEBUG-{n}.md`
11. Update STATE.md

**Output:** Root cause identified, fix applied (or plan created), DEBUG-{n}.md complete.
