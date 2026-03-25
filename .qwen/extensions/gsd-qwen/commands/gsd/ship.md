---
name: gsd:ship
description: Create PR from verified work
argument-hint: "[N]"
---
<context>
**Arguments:**
- `N` — Phase number (default: last verified phase)

**Purpose:**
Create a pull request from verified, UAT-passed work.
</context>

<objective>
Create a pull request from verified work.

**Creates:**
- Git branch (if not already created)
- Pull Request on GitHub/GitLab

**After this command:**
- PR is ready for review
- Run `/gsd:next` to start next phase
</objective>

<execution_context>
@workflows/ship.md
</execution_context>

<process>
Execute the ship workflow from @workflows/ship.md.

1. Verify UAT passed for phase N
2. Create branch from verified commits (if needed)
3. Create PR with description from SUMMARY.md
4. Link PR to requirements
5. Update STATE.md
</process>
