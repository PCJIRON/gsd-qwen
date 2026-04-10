---
name: gsd:session-report
description: Generate session summary with work performed and outcomes
---

# /gsd:session-report

## Purpose

Generate a summary report of what was accomplished in the current session. Useful for:
- Daily standups
- Progress tracking
- Time reporting
- Documentation

## Process

1. Determine session start time:
   - From STATE.md (last updated timestamp)
   - Or from first git commit of session
2. Gather session data:
   - Git commits since session start
   - Files changed
   - Plans completed
   - Phases advanced
3. Load STATE.md for context:
   - Starting position
   - Current position
   - Any blockers encountered
4. Generate report:
   ```markdown
   # Session Report

   **Date:** {date}
   **Duration:** {start} - {end} ({duration})

   ## Summary
   - **Phase:** {start} → {current}
   - **Plans Completed:** {count}
   - **Commits:** {count}
   - **Files Changed:** {count}

   ## Work Performed

   ### Commits
   | Hash | Message |
   |------|---------|
   | abc123 | feat: Add login endpoint |
   | def456 | test: Add auth tests |

   ### Plans Completed
   - Plan {N}-{M}: {title}
   - Plan {N}-{M+1}: {title}

   ### Files Changed
   - src/auth/login.ts
   - tests/auth.test.ts

   ## Outcomes
   - ✅ Login endpoint implemented
   - ✅ Tests passing
   - ⏳ Logout pending (next session)

   ## Blockers
   - {any blockers encountered}

   ## Next Session
   - Continue with Plan {N}-{M+2}
   - Complete logout functionality
   ```
5. Save to `.planning/SESSION-REPORT-{date}.md`
6. Create commit: `[GSD] Session report {date}`
7. Display report to user
8. Offer to share/export

## After this command

- Report saved to `.planning/SESSION-REPORT.md`
- Can share with team/stakeholders
