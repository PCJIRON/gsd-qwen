---
name: gsd:stats
description: Display project statistics — phases, plans, requirements, git metrics
---
<context>
**Purpose:**
Show comprehensive project statistics and metrics.
Useful for progress tracking, reporting, and retrospectives.
</context>

<objective>
Display project statistics.

**Metrics:**
- Phases: planned, completed, in progress
- Plans: total, completed, pending
- Requirements: coverage, delivery rate
- Git: commits, files changed, lines added/removed
- Time: estimated vs actual

**After this command:**
- Full project stats displayed
- Can share with stakeholders
</objective>

<execution_context>
.planning/STATE.md
.planning/PROJECT.md
.planning/REQUIREMENTS.md
.planning/ROADMAP.md
git log --stat
</execution_context>

<process>
1. Load all planning files:
   - STATE.md, PROJECT.md, REQUIREMENTS.md, ROADMAP.md
2. Count phases:
   - Total planned
   - Completed
   - In progress
   - Pending
3. Count plans:
   - Parse all `{N}-{M}-PLAN.md` files
   - Check corresponding SUMMARY.md files
4. Count requirements:
   - Parse REQUIREMENTS.md
   - Check phase traceability
5. Gather git metrics:
   - Total commits
   - Commits this session
   - Files changed
   - Lines added/removed
6. Calculate time metrics (if tracked):
   - Session count
   - Estimated time
   - Actual time
7. Generate stats report:
   ```markdown
   # Project Statistics
   
   ## Overview
   - **Project:** {name}
   - **Started:** {date}
   - **Status:** {status}
   
   ## Phases
   | Status | Count | Percentage |
   |--------|-------|------------|
   | Complete | 5 | 50% |
   | In Progress | 2 | 20% |
   | Pending | 3 | 30% |
   | **Total** | **10** | 100% |
   
   ## Plans
   - Total: 25
   - Completed: 18
   - Pending: 7
   - Completion rate: 72%
   
   ## Requirements
   - Total: 40
   - Delivered: 28
   - Delivery rate: 70%
   
   ## Git Metrics
   - Commits: 156
   - Files changed: 89
   - Lines added: 4,523
   - Lines removed: 1,234
   
   ## Sessions
   - Total sessions: 15
   - Avg session duration: 2.5 hours
   ```
8. Display to user
9. Offer to save report: "Save to STATS.md? (y/n)"
</process>
