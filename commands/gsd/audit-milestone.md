---
name: gsd:audit-milestone
description: Verify milestone achieved its definition of done
argument-hint: "[N]"
---
<context>
**Arguments:**
- `N` — Milestone number to audit (default: current)

**Purpose:**
Audit a milestone to verify all requirements were met and definition of done achieved.
</context>

<objective>
Audit milestone completion and identify any gaps.

**Output:**
- Audit report showing requirement coverage
- List of any incomplete work
- Recommendations for closing gaps

**After this command:**
- If PASS: Ready to complete milestone
- If FAIL: Address gaps before completing
</objective>

<execution_context>
.planning/STATE.md
.planning/REQUIREMENTS.md
.planning/ROADMAP.md
.planning/*-UAT.md (all UAT reports)
</execution_context>

<process>
1. Load milestone state from STATE.md
2. Load all requirements from REQUIREMENTS.md
3. Load all UAT reports (*-UAT.md)
4. Load roadmap and verify all phases marked complete
5. Audit each requirement:
   - Check if covered by a phase
   - Check if phase has UAT
   - Check if UAT passed
6. Create audit report:
   ```markdown
   # Milestone {N} Audit Report
   
   ## Requirement Coverage
   | Requirement | Phase | UAT | Status |
   |-------------|-------|-----|--------|
   | FR1 | Phase 1 | ✅ PASS | ✅ |
   | FR2 | Phase 2 | ❌ FAIL | ❌ |
   | FR3 | Phase 3 | Pending | ⏳ |
   
   ## Phase Status
   - Phase 1: ✅ Complete (UAT passed)
   - Phase 2: ❌ Complete (UAT failed)
   - Phase 3: ⏳ In Progress
   
   ## Gaps Identified
   1. FR2 not verified - Phase 2 UAT failed
   2. Phase 3 not complete
   
   ## Result: FAIL (2 gaps)
   
   ## Recommendations
   1. Fix Phase 2 issues: Run `/gsd:debug "Phase 2 UAT failures"`
   2. Complete Phase 3: Run `/gsd:execute-phase 3`
   ```
7. Update STATE.md with audit result
8. If gaps found:
   - List commands to fix each gap
9. If no gaps:
   - Confirm: "Milestone ready for completion"
   - Suggest: "Run `/gsd:complete-milestone`"
</process>
