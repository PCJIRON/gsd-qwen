---
name: gsd:validate-phase
description: Validate phase plans against requirements before execution
argument-hint: "[N]"
---

# /gsd:validate-phase

## Arguments

- `N` — Phase number to validate

## Purpose

Verify that phase plans fully cover the requirements before execution. Catches gaps early, before any code is written.

## Process

1. Load all plans for phase N: `{N}-1-PLAN.md`, `{N}-2-PLAN.md`, etc.
2. Load requirements for phase N from REQUIREMENTS.md
3. Spawn plan checker agent to:
   - Map each plan to requirements it addresses
   - Identify requirements with no covering plan
   - Check plan quality (clear objectives, verification criteria)
   - Verify dependencies are correct
4. Create validation report:
   ```markdown
   # Phase {N} Validation Report

   ## Requirements Coverage
   | Requirement | Covered By | Status |
   |-------------|------------|--------|
   | FR1 | Plan 1, Plan 2 | ✅ |
   | FR2 | Plan 3 | ✅ |
   | FR3 | NONE | ❌ |

   ## Plan Quality
   - Plan 1: ✅ Clear objective, verification defined
   - Plan 2: ⚠️ Missing verification criteria

   ## Result: FAIL (1 requirement uncovered, 1 plan needs fixes)
   ```
5. If FAIL:
   - List missing plans needed
   - Suggest: "Run `/gsd:plan-phase {N} --additional` to create missing plans"
6. If PASS:
   - Confirm: "All requirements covered, plans are valid"
   - Suggest: "Run `/gsd:execute-phase {N}` to execute"
7. Update STATE.md with validation result

## After this command

- If PASS: Run `/gsd:execute-phase {N}`
- If FAIL: Create additional plans to cover gaps
