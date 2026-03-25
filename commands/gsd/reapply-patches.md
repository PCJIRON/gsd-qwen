---
name: gsd:reapply-patches
description: Reapply patches that were reverted or lost during merge conflicts
---
<context>
**Purpose:**
Reapply patches (code changes) that were lost during:
- Merge conflicts
- Failed rebases
- Accidental reverts
- Branch resets
</context>

<objective>
Find and reapply lost patches.

**Actions:**
- Scan git history for lost changes
- Identify patches to reapply
- Reapply safely

**After this command:**
- Lost patches recovered
- Code restored
- History preserved
</objective>

<execution_context>
git log
git reflog
.planning/STATE.md
</execution_context>

<process>
1. Scan git reflog for lost commits:
   - Look for GSD commit patterns: `[GSD-...]`
   - Find commits not in current branch
2. Check for merge conflict resolutions:
   - Look for conflict markers in recent commits
   - Identify code that was removed
3. Load STATE.md for context:
   - What phases were in progress?
   - What work was completed but not committed?
4. Identify patches to reapply:
   - List lost commits with descriptions
   - Show diff for each
5. Present recovery options:
   ```markdown
   # Lost Patches Found
   
   ## Recoverable Commits
   
   | Hash | Message | Date | Status |
   |------|---------|------|--------|
   | abc123 | feat: Add login | 2026-03-24 | Lost in merge |
   | def456 | test: Add tests | 2026-03-24 | Lost in rebase |
   
   ## Actions
   1. Reapply all (creates new commits)
   2. Selective reapply (choose which)
   3. Cherry-pick (manual)
   4. Ignore (don't recover)
   ```
6. If reapply selected:
   - For each patch:
     - Extract diff
     - Apply to current code
     - Resolve conflicts if any
     - Create commit: `[GSD] Reapply: {original message}`
7. Verify reapplication:
   - Run tests
   - Check functionality
8. Create recovery report:
   ```markdown
   # Patch Recovery Report
   
   ## Reapplied
   - {commit 1} → {new commit}
   - {commit 2} → {new commit}
   
   ## Failed (conflicts)
   - {commit}: Manual review needed
   
   ## Next Steps
   - Review conflicts manually
   - Run full test suite
   ```
9. Save to `.planning/PATCH-RECOVERY.md`
10. Create commit: `[GSD] Reapply lost patches`
</process>
