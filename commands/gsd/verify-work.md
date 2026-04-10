---
name: gsd:verify-work
description: User acceptance testing for completed phase
argument-hint: "[N]"
---

# /gsd:verify-work [N]

Perform user acceptance testing (UAT) on completed phase. Tests each requirement against delivered work and documents PASS/FAIL results.

## Arguments

- `N` — Phase number (defaults to current phase from STATE.md)

## What This Creates

- `.planning/{N}-UAT.md` — UAT report with PASS/FAIL results

## Process

1. Read `.planning/STATE.md` for current position
2. Load REQUIREMENTS.md for phase requirements
3. Load all `{N}-*-SUMMARY.md` files for deliverables
4. Load `{N}-VERIFICATION.md` for integration check results
5. Spawn `gsd-verifier` agent to conduct UAT:
   - Test each requirement systematically
   - Record PASS/FAIL/PARTIAL with evidence
   - Document test methods and file references
6. Create `{N}-UAT.md` with results:
   ```markdown
   # UAT: Phase {N}
   ## Overall Result: PASS/FAIL
   ## Requirements Tested
   ### Requirement 1: {description}
   - **Status:** PASS/FAIL/PARTIAL
   - **Evidence:** {files, output}
   ```
7. If FAIL: recommend `/gsd:debug` or create fix plan
8. If PASS: recommend `/gsd:ship {N}`
9. Update STATE.md with UAT results
10. Commit: `[GSD-uat] Phase {N} UAT {result}`

**After this command:** If PASS, run `/gsd:ship {N}`. If FAIL, run `/gsd:debug`.
