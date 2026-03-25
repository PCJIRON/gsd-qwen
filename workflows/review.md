# GSD Review Workflow

## Purpose
Cross-AI peer review of completed work before shipping.

---

## Flow

### Step 1: Determine Review Scope
1. Phase or branch specified?
2. Load all relevant files
3. Identify what to review

### Step 2: Spawn Reviewer
Spawn `gsd-integration-checker` or `gsd-plan-checker`:

**Review areas:**
- Code quality
- Architecture consistency
- Test coverage
- Documentation
- Security
- Performance
- Accessibility (if UI)

### Step 3: Conduct Review

**For each area:**

1. **Code Quality:**
   - Follows conventions?
   - Clean and readable?
   - No code smells?

2. **Architecture:**
   - Consistent with existing?
   - Proper abstractions?
   - Clear boundaries?

3. **Tests:**
   - Adequate coverage?
   - Tests meaningful?
   - Edge cases covered?

4. **Documentation:**
   - Code documented?
   - README updated?
   - API docs current?

5. **Security:**
   - No vulnerabilities?
   - Input validated?
   - Auth implemented?

6. **Performance:**
   - No obvious bottlenecks?
   - Efficient algorithms?
   - Resource usage ok?

### Step 4: Generate Report

```markdown
# Review Report: {phase|branch}

## Summary
- **Files Changed:** {count}
- **Lines Added:** {count}
- **Tests Added:** {count}

## Quality Checks

### ✅ Pass
- {check 1}
- {check 2}

### ⚠️ Warnings
- {warning 1}
- {warning 2}

### ❌ Issues
- {issue 1} — {severity}
- {issue 2} — {severity}

## Suggestions
1. {suggestion 1}
2. {suggestion 2}

## Result: {PASS|PASS with warnings|FAIL}
```

### Step 5: Handle Results

**If PASS:**
- Confirm ready to ship
- Suggest `/gsd:ship {N}`

**If WARNINGS:**
- List warnings
- Ask: "Fix warnings or ship anyway?"

**If FAIL:**
- List critical issues
- Create fix plan
- Suggest: "Fix issues, then review again"

### Step 6: Update State
Update STATE.md:
- Log review result
- Update position

### Step 7: Commit (if review notes)
Create commit: `[GSD-review] {phase|branch}`

---

## Output
- `.planning/REVIEW-{N}.md` — Review report

## Next Steps

**If PASS:**
→ Run `/gsd:ship {N}`

**If FAIL:**
→ Fix issues
→ Run `/gsd:review {N}` again
