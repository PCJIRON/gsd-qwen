---
name: gsd:audit-uat
description: Audit verification debt — find phases missing UAT
---
<context>
**Purpose:**
Find phases that are marked complete but missing User Acceptance Testing.
Ensures quality standards are maintained.
</context>

<objective>
Audit phases for UAT completion.

**Output:**
- List of phases missing UAT
- Risk assessment
- Remediation plan

**After this command:**
- Know which phases need UAT
- Can schedule UAT sessions
</objective>

<execution_context>
.planning/STATE.md
.planning/ROADMAP.md
.planning/*-UAT.md (all UAT reports)
</execution_context>

<process>
1. Load ROADMAP.md and list all phases
2. Load STATE.md for phase status
3. Scan for all UAT files: `ls .planning/*-UAT.md`
4. For each phase:
   - Check if marked complete
   - Check if UAT file exists
   - Check if UAT passed
5. Create audit report:
   ```markdown
   # UAT Audit Report
   
   ## Phase Status
   
   ### ✅ UAT Complete
   | Phase | Theme | UAT Result | Date |
   |-------|-------|------------|------|
   | 1 | Foundation | PASS | 2026-03-20 |
   | 2 | Features | PASS | 2026-03-22 |
   
   ### ❌ Missing UAT
   | Phase | Theme | Completed | Risk |
   |-------|-------|-----------|------|
   | 3 | API | 2026-03-24 | HIGH |
   | 4 | UI | 2026-03-25 | MEDIUM |
   
   ## Risk Assessment
   
   ### HIGH RISK (ship without UAT)
   - Phase 3: API changes affect core functionality
   
   ### MEDIUM RISK
   - Phase 4: UI changes, limited backend impact
   
   ## Remediation Plan
   
   ### Immediate (before next ship)
   1. Run `/gsd:verify-work 3` for Phase 3
   2. Run `/gsd:verify-work 4` for Phase 4
   
   ### Process Improvement
   - Add UAT gate to workflow
   - Don't mark phase complete without UAT
   ```
6. Save to `.planning/UAT-AUDIT.md`
7. Create commit: `[GSD] UAT audit`
8. If missing UAT found:
   - Warn: "Shipping without UAT is risky"
   - Suggest: "Run `/gsd:verify-work {N}` before shipping"
9. If all UAT complete:
   - Confirm: "All phases verified"
   - Suggest: "Ready to ship"
</process>
