---
name: gsd:verify-work
description: User acceptance testing for completed work
argument-hint: "[N]"
---
<context>
**Arguments:**
- `N` — Phase number (default: last executed phase)

**Purpose:**
Manual user acceptance testing to verify delivered work matches requirements.
</context>

<objective>
Verify completed work through user acceptance testing.

**Creates:**
- `.planning/{N}-UAT.md` — UAT results

**After this command:**
- If PASS: Run `/gsd:ship {N}` to create PR
- If FAIL: Run `/gsd:debug` to diagnose
</objective>

<execution_context>
@workflows/verify-work.md
@agents/gsd-verifier.md
</execution_context>

<process>
Execute the verify-work workflow from @workflows/verify-work.md.

1. Load requirements from REQUIREMENTS.md
2. Load delivered work from phase summaries
3. Test each requirement against delivered work
4. Document results in {N}-UAT.md
5. Mark as PASS or FAIL
6. Update STATE.md
</process>
