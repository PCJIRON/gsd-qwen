---
name: gsd:quick
description: Ad-hoc tasks with GSD guarantees
argument-hint: "<description>"
---
<context>
**Arguments:**
- `description` — Task description

**Purpose:**
Quick, ad-hoc tasks without full planning cycle.
Uses GSD execution guarantees (atomic commits, verification).
</context>

<objective>
Execute an ad-hoc task with GSD guarantees.

**Creates:**
- Atomic git commit
- Task summary

**Use for:**
- Small features
- Bug fixes
- Refactoring
- Quick experiments
</objective>

<execution_context>
@agents/gsd-executor.md
</execution_context>

<process>
1. Parse task description
2. Clarify requirements if ambiguous
3. Create mini-plan (objective, tasks, verification)
4. Execute tasks atomically
5. Create commit with message: `[GSD-quick] task description`
6. Verify work
7. Output summary
</process>
