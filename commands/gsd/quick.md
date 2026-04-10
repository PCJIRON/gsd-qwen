---
name: gsd:quick
description: Ad-hoc tasks with GSD guarantees
argument-hint: "<description>"
---

# /gsd:quick <description>

Execute an ad-hoc task with GSD guarantees (atomic commits, verification) without the full planning cycle.

## Arguments

- `description` — Task description

## Use For

- Small features
- Bug fixes
- Refactoring
- Quick experiments

## Process

1. Parse task description
2. Clarify requirements if ambiguous
3. Create mini-plan with objective, tasks, and verification criteria
4. Spawn `gsd-executor` to execute tasks atomically
5. Create commit: `[GSD-quick] task description`
6. Verify work completed
7. Output summary

**After this command:** Work is done and committed.
