# GSD Debug Workflow

## Purpose
Systematic debugging with persistent state across sessions.

---

## Flow

### Step 1: Gather Context
1. Get issue description from user
2. Load existing DEBUG-*.md files
3. Check STATE.md for related info
4. Identify affected files/components

### Step 2: Reproduce Issue
1. Attempt to reproduce
2. Capture error output
3. Document reproduction steps
4. Note environment details

### Step 3: Form Hypotheses
1. List possible root causes
2. Rank by likelihood
3. Plan tests for each
4. Start with most likely

### Step 4: Test Hypotheses
1. For each hypothesis:
   - Add logging/assertions
   - Run targeted tests
   - Confirm or rule out
2. Document results
3. Narrow down

### Step 5: Identify Root Cause
1. Pinpoint exact issue
2. Trace to root cause
3. Understand why it fails
4. Document chain of causation

### Step 6: Create Fix Plan
1. Determine minimal fix
2. Consider side effects
3. Plan tests for fix
4. Document steps

### Step 7: Execute Fix
1. Implement fix
2. Test fix
3. Verify no regressions
4. Create commit

### Step 8: Document

```markdown
# Debug Session {N}

## Issue
{description}

## Root Cause
{detailed explanation}

## Fix Applied
{what was done}

## Verification
- [ ] Issue resolved
- [ ] Tests passing
- [ ] No regressions

## Commits
- {commit hash}

## Lessons
{what we learned}
```

### Step 9: Update State
Update STATE.md:
- Log debug session
- Mark issue as resolved

### Step 10: Commit
Create commit: `[GSD-debug] {issue description}`

---

## Output
- `.planning/DEBUG-{N}.md` — Debug session log
- Fix commit

## Next Steps
- Continue with original task
- Or run `/gsd:verify-work` if phase work
