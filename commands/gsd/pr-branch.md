---
name: gsd:pr-branch
description: Create clean PR branch filtering .planning/ commits
---

# /gsd:pr-branch

## Purpose

Create a clean pull request branch that filters out `.planning/` commits. Only code changes are included, not planning artifacts.

## What This Creates

- New branch: `pr/phase-{N}` or `pr/milestone-{N}`
- Contains only code changes
- `.planning/` commits filtered out

## Process

1. Load current phase/milestone from STATE.md
2. Determine branch name:
   - `pr/phase-{N}` for single phase
   - `pr/milestone-{N}` for full milestone
3. Check current branch:
   - If already on feature branch: Continue
   - If on main: "Create feature branch first?"
4. Get all commits for phase/milestone:
   - Parse git log
   - Identify commits by message pattern: `[GSD-{phase}-{task}]`
   - Filter out `.planning/` only commits
5. Create orphan branch:
   ```bash
   git checkout --orphan {pr-branch}
   git reset --hard main
   git cherry-pick {code-commit-1}
   git cherry-pick {code-commit-2}
   ...
   ```
6. Verify branch:
   - Show commit count
   - Show files changed
   - Confirm no `.planning/` files
7. Display PR branch summary:
   ```markdown
   # PR Branch Created

   **Branch:** {pr-branch}
   **Commits:** {count}
   **Files Changed:** {count}

   ## Commits
   | Hash | Message |
   |------|---------|
   | abc123 | feat: Add login endpoint |
   | def456 | test: Add auth tests |

   ## Next Steps
   1. Push: `git push origin {pr-branch}`
   2. Create PR on GitHub/GitLab
   3. Link to requirements
   ```
8. Ask: "Push to remote? (y/n)"
9. If yes: `git push -u origin {pr-branch}`
10. Offer to create PR description from phase summaries

## After this command

- Ready to push and create PR
- Clean commit history for reviewers
