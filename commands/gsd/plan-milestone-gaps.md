---
name: gsd:plan-milestone-gaps
description: Create phases to close gaps identified in milestone audit
argument-hint: "[N]"
---
<context>
**Arguments:**
- `N` — Milestone number to plan gaps for (default: current)

**Purpose:**
After an audit identifies gaps, automatically create phases to close them.
</context>

<objective>
Create phases to address gaps identified in milestone audit.

**Creates:**
- New phases in ROADMAP.md
- Gap closure plans

**After this command:**
- Gap closure phases added
- Run `/gsd:execute-phase {N}` to close gaps
</objective>

<execution_context>
.planning/STATE.md
.planning/REQUIREMENTS.md
.planning/ROADMAP.md
.planning/*-AUDIT.md (audit reports)
</execution_context>

<process>
1. Run `/gsd:audit-milestone` if not recently done
2. Load audit report and identify gaps:
   - Failed requirements
   - Incomplete phases
   - Missing features
3. Group gaps by theme:
   - Bug fixes → One phase
   - Missing features → Another phase
   - Performance issues → Another phase
4. For each gap group, create phase:
   - Determine phase number (append to roadmap)
   - Create phase entry:
     ```markdown
     ## Phase {N}: Gap Closure - {Theme}
     **Goal:** Address {specific gaps}
     **Requirements:** {list}
     **Priority:** P0 (blocking milestone)
     ```
5. Create plans for each gap phase:
   - Quick turnaround plans
   - Focused on specific fixes
6. Update ROADMAP.md with new phases
7. Update STATE.md:
   - Set current phase to first gap phase
8. Create commit: `[GSD] Add gap closure phases`
9. Suggest next step: `/gsd:execute-phase {N}`
10. Note: These phases are P0 - should be completed before milestone
</process>
