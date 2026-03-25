---
name: gsd:fast
description: Inline trivial tasks (executes immediately)
argument-hint: "<text>"
---
<context>
**Arguments:**
- `text` — Task to execute

**Purpose:**
Trivial tasks that execute immediately without planning.
No commit, no summary — just do it.
</context>

<objective>
Execute a trivial task immediately.

**Use for:**
- One-line changes
- Simple file edits
- Quick lookups
- Small commands

**Not for:**
- Multi-step tasks
- Features requiring planning
- Tasks needing verification
</objective>

<process>
1. Parse task text
2. Execute immediately
3. No commit (unless user requests)
4. No summary
5. Output result
</process>
