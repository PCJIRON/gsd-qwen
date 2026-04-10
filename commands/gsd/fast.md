---
name: gsd:fast
description: Trivial inline tasks
argument-hint: "<text>"
---

# /gsd:fast <text>

Execute trivial inline tasks with no commit and no summary — just execute.

## Arguments

- `text` — What to do

## Use For

- Trivial edits (rename a variable, fix a typo)
- Quick lookups
- One-line changes

## Process

1. Parse the inline task
2. Execute immediately
3. No git commit
4. No summary file
5. No state update

**After this command:** Task done, nothing else created.
