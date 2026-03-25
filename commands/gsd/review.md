---
name: gsd:review
description: Cross-AI peer review of current phase or branch
argument-hint: "[phase|branch]"
---
<context>
**Arguments:**
- `phase` — Phase number to review (default: current)
- `branch` — Git branch to review

**Purpose:**
Get an AI-powered peer review of completed work before shipping.
Catches issues, suggests improvements, validates quality.
</context>

<objective>
Conduct AI peer review of phase or branch.

**Output:**
- Review report with findings
- Suggested improvements
- Quality score

**After this command:**
- If PASS: Ready to ship
- If ISSUES: Address before shipping
</objective>

<execution_context>
.planning/STATE.md
.planning/{N}-*-SUMMARY.md
git diff main
@agents/gsd-integration-checker.md
</execution_context>

<process>
1. Determine review target:
   - If phase specified: Load phase summaries
   - If branch specified: Load branch diff
   - Default: Current phase
2. Load all relevant files:
   - Phase summaries
   - Changed files
   - Test results (if any)
3. Spawn integration checker agent to review:
   - Code quality
   - Architecture consistency
   - Test coverage
   - Documentation
   - Security concerns
   - Performance implications
4. Generate review report:
   ```markdown
   # Review Report: Phase {N}
   
   ## Summary
   - **Files Changed:** {count}
   - **Lines Added:** {count}
   - **Tests Added:** {count}
   
   ## Quality Checks
   
   ### ✅ Pass
   - Code follows project conventions
   - Tests cover main functionality
   - Documentation updated
   
   ### ⚠️ Warnings
   - Consider adding error handling in {file}
   - Missing edge case test for {scenario}
   
   ### ❌ Issues
   - Security: {issue}
   - Performance: {issue}
   
   ## Suggestions
   1. {improvement 1}
   2. {improvement 2}
   
   ## Result: PASS with warnings
   ```
5. Save to `.planning/REVIEW-{phase}.md`
6. Create commit (if review notes): `[GSD] Review phase {N}`
7. If issues found:
   - List commands to fix
   - Suggest: "Fix issues, then run `/gsd:review` again"
8. If pass:
   - Confirm: "Ready to ship"
   - Suggest: "Run `/gsd:ship {N}`"
</process>
