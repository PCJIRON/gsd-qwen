---
name: gsd:review
description: Cross-AI peer review of completed work
argument-hint: "[N]"
---

# /gsd:review [N]

Cross-AI peer review of completed work. Checks code quality, architecture, tests, documentation, security, and performance.

## Arguments

- `N` — Phase number to review (defaults to current phase)

## Process

1. Load phase scope: summaries, UAT results, commits
2. Spawn reviewer agent to conduct review across 6 areas:
   - **Code Quality:** Readability, maintainability, consistency
   - **Architecture:** Design decisions, patterns, scalability
   - **Tests:** Coverage, quality, edge cases
   - **Documentation:** Comments, README, API docs
   - **Security:** Input validation, auth, data protection
   - **Performance:** Bottlenecks, efficiency, resource usage
3. Generate review report with findings and recommendations
4. If critical issues found: create fix plan
5. If review passes: confirm ready for ship
6. Update STATE.md with review status

**After this command:** Review complete, issues documented, next steps clear.
