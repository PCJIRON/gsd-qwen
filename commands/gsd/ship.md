---
name: gsd:ship
description: Create PR from verified work
argument-hint: "[N]"
---

# /gsd:ship [N]

Create a pull request from verified work. Supports GitHub (gh CLI) and GitLab with configurable branch strategies.

## Arguments

- `N` — Phase number (defaults to current phase from STATE.md)

## Prerequisites

- Phase must have PASS result from `/gsd:verify-work {N}`
- All integration checks must pass

## What This Creates

- PR branch (if branching strategy configured)
- Pull request on GitHub/GitLab
- PR description with phase summary

## Process

1. Read `.planning/STATE.md` for current position
2. Verify `{N}-UAT.md` exists and result is PASS
3. Read config.json for branch strategy (none/phase/milestone)
4. Load all `{N}-*-SUMMARY.md` files for work performed
5. Determine branch strategy:
   - `none` — Stay on current branch
   - `phase` — Create branch `phase-{N}`
   - `milestone` — Create branch `milestone-{milestoneNum}`
6. Create PR branch if needed
7. Generate PR description from phase summaries
8. Create PR using `gh pr create` (GitHub) or GitLab API
9. Update STATE.md with PR URL and status
10. Commit: `[GSD-ship] Phase {N} PR created`

**After this command:** Review and merge the PR. Then run `/gsd:next` for the next phase.
