# GSD Verify Work Workflow

## Purpose
User acceptance testing for phase N — verify delivered work matches requirements.

---

## Flow

### Step 1: Load Deliverables
1. Read REQUIREMENTS.md for phase N requirements
2. Read all `{N}-{M}-SUMMARY.md` files
3. Read `{N}-VERIFICATION.md` (technical verification)
4. Load actual code/files delivered

### Step 2: Extract Testable Deliverables

For each requirement:
1. Identify what should be testable
2. Define test method
3. Prepare test scenario

```markdown
## Requirement {ID}: {description}

**Test Method:** {manual|automated|inspection}
**Test Steps:**
1. {step 1}
2. {step 2}
3. {step 3}

**Expected:** {expected result}
**Actual:** {to be filled}
**Status:** {PASS|FAIL|PARTIAL}
```

### Step 3: Conduct UAT

**For each requirement:**

1. **Present test scenario** to user:
   ```
   ## Testing: {requirement}
   
   **Scenario:** {description}
   
   **Steps:**
   1. {step 1}
   2. {step 2}
   
   **Expected:** {expected result}
   
   **Can you do this and confirm it works?** (yes/no/partial)
   ```

2. **Record result:**
   - **PASS:** User confirms it works
   - **FAIL:** Doesn't work as expected
   - **PARTIAL:** Works but with issues

3. **Document evidence:**
   - Screenshots (if UI)
   - Test output
   - User notes

### Step 4: Handle Failures

**If FAIL or PARTIAL:**

1. **Diagnose issue:**
   - What exactly is wrong?
   - Is it a bug or misunderstanding?
   - How severe is it?

2. **Create fix plan:**
   - What needs to be fixed
   - Estimated effort
   - Priority

3. **Document in UAT report**

### Step 5: Create UAT Report

```markdown
# UAT Report: Phase {N}

## Overall Result: {PASS|FAIL}

## Requirements Tested

### FR1: {description}
- **Status:** ✅ PASS
- **Test Method:** Manual testing
- **Evidence:** {screenshot/output}
- **Notes:** {observations}

### FR2: {description}
- **Status:** ❌ FAIL
- **Test Method:** Manual testing
- **Issue:** {what's wrong}
- **Fix Plan:** {how to fix}
- **Priority:** {P0|P1|P2}

## Summary
- **Total:** {N} requirements
- **Pass:** {N}
- **Fail:** {N}
- **Partial:** {N}

## Blockers
- {blocker 1}
- {blocker 2}

## Recommendations
{next steps based on results}
```

### Step 6: Update State

Update STATE.md:
- Mark phase N as "verified" (if PASS)
- Or mark as "failed UAT" (if FAIL)
- Update position

### Step 7: Commit
Create commit: `[GSD] UAT phase {N}`

---

## Output
- `{N}-UAT.md` — UAT report

## Next Steps

**If PASS:**
→ Run `/gsd:ship {N}` to create PR

**If FAIL:**
→ Run `/gsd:debug` to diagnose
→ Or run `/gsd:execute-phase {N}` again with fix plans
