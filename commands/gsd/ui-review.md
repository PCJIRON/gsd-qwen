---
name: gsd:ui-review
description: Retroactive 6-pillar visual audit of implemented frontend code
argument-hint: "[N]"
---
<context>
**Arguments:**
- `N` — Phase number to audit (must be frontend/UI phase)

**Purpose:**
Audit implemented UI against 6 pillars of visual design.
Catches visual debt and accessibility issues before shipping.
</context>

<objective>
Conduct 6-pillar UI audit.

**6 Pillars:**
1. Layout & Spacing
2. Typography
3. Color & Contrast
4. Interactions & Feedback
5. Accessibility
6. Responsive Design

**Output:**
- Audit report with scores
- Issues by severity
- Fix recommendations

**After this command:**
- Know UI quality
- Issues identified
- Can fix before shipping
</objective>

<execution_context>
.planning/{N}-UI-SPEC.md (if exists)
.planning/{N}-*-SUMMARY.md
Frontend source files
@agents/gsd-ui-auditor.md
</execution_context>

<process>
1. Validate phase N has frontend code:
   - Check phase summary for UI files
   - If no UI: "Phase {N} has no UI code"
2. Load UI spec if exists
3. Spawn UI auditor agent to analyze:
   - Scan frontend files
   - Render components (if possible)
   - Check each pillar
4. Audit each pillar:
   **1. Layout & Spacing:**
   - Consistent spacing scale?
   - Proper alignment?
   - Visual hierarchy?
   **2. Typography:**
   - Font choices appropriate?
   - Readable sizes?
   - Consistent weights?
   **3. Color & Contrast:**
   - WCAG contrast ratios?
   - Consistent color usage?
   - Meaningful color semantics?
   **4. Interactions & Feedback:**
   - Hover states defined?
   - Loading states?
   - Error feedback?
   **5. Accessibility:**
   - ARIA labels?
   - Keyboard navigation?
   - Screen reader support?
   **6. Responsive Design:**
   - Mobile-friendly?
   - Breakpoint usage?
   - Fluid layouts?
5. Generate audit report:
   ```markdown
   # UI Audit Report: Phase {N}
   
   ## Scores (1-5)
   
   | Pillar | Score | Status |
   |--------|-------|--------|
   | Layout | 4 | ✅ Good |
   | Typography | 3 | ⚠️ Needs work |
   | Color | 5 | ✅ Excellent |
   | Interactions | 2 | ❌ Poor |
   | Accessibility | 3 | ⚠️ Needs work |
   | Responsive | 4 | ✅ Good |
   
   **Overall:** 3.5/5 ⚠️
  
   ## Issues by Severity
   
   ### Critical
   - Color contrast fails WCAG AA on {element}
   
   ### Major
   - Missing keyboard navigation on {component}
   - No loading state for {action}
   
   ### Minor
   - Inconsistent spacing on {page}
   
   ## Recommendations
   1. Fix critical issues before shipping
   2. Address major issues in next phase
   3. Minor issues can wait
   ```
6. Save to `.planning/{N}-UI-AUDIT.md`
7. Create commit: `[GSD] UI audit phase {N}`
8. If critical issues:
   - Warn: "Do not ship without fixing critical issues"
   - Suggest: "Fix issues, then re-run audit"
9. If passing (≥4/5):
   - Confirm: "UI quality good, ready to ship"
</process>
