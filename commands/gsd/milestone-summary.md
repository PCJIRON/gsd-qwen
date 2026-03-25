---
name: gsd:milestone-summary
description: Generate comprehensive project summary for team onboarding and review
argument-hint: "[version]"
---
<context>
**Arguments:**
- `version` — Optional milestone version to summarize (default: all)

**Purpose:**
Generate a comprehensive summary of milestone(s) for:
- Team onboarding
- Stakeholder review
- Documentation
- Portfolio tracking
</context>

<objective>
Generate milestone summary report.

**Output:**
- Comprehensive summary document
- Can be shared with team/stakeholders
- Includes progress, deliverables, metrics

**After this command:**
- Summary saved to `.planning/MILESTONE-SUMMARY.md`
- Can share with team
</objective>

<execution_context>
.planning/STATE.md
.planning/PROJECT.md
.planning/REQUIREMENTS.md
.planning/ROADMAP.md
.planning/*/SUMMARY.md (all phase summaries)
</execution_context>

<process>
1. Load project context from PROJECT.md
2. Load current state from STATE.md
3. Load roadmap and all phase summaries
4. Gather metrics:
   - Total phases planned/completed
   - Requirements delivered
   - Commits made
   - Time spent (if tracked)
5. Generate summary:
   ```markdown
   # Project Summary: {Project Name}
   
   ## Overview
   - **Goal:** {project goal}
   - **Status:** {current status}
   - **Milestone:** {current milestone}
   
   ## Milestone {N} Summary
   
   ### Phases Completed
   | Phase | Theme | Status | Summary |
   |-------|-------|--------|---------|
   | 1 | Foundation | ✅ Done | {summary} |
   | 2 | Features | ✅ Done | {summary} |
   
   ### Requirements Delivered
   - ✅ FR1: {description}
   - ✅ FR2: {description}
   - ⏳ FR3: {description} (in progress)
   
   ### Key Deliverables
   - Feature 1
   - Feature 2
   - API endpoints
   
   ### Metrics
   - Commits: {count}
   - Files changed: {count}
   - Lines added: {count}
   
   ### Known Issues
   - {Issue 1}
   - {Issue 2}
   
   ### Next Steps
   - {Next milestone goals}
   ```
6. Save to `.planning/MILESTONE-SUMMARY.md`
7. Create commit: `[GSD] Generate milestone summary`
8. Output summary to user
9. Offer to share/export options
</process>
