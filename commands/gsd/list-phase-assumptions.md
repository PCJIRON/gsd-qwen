---
name: gsd:list-phase-assumptions
description: See what the planner intends to do before creating full plans
argument-hint: "[N]"
---

# /gsd:list-phase-assumptions

## Arguments

- `N` — Phase number to analyze

## Purpose

Get a preview of what the planner is thinking before committing to full plans. Helps catch misunderstandings early.

## Process

1. Load phase N details from ROADMAP.md
2. Load requirements for phase N
3. Load CONTEXT.md if it exists (user decisions)
4. Spawn assumptions analyzer agent to:
   - Analyze requirements
   - Infer likely implementation approach
   - Surface implicit assumptions
   - Identify ambiguous areas
5. Present assumptions to user:
   ```markdown
   # Phase {N} Assumptions Analysis

   ## Assumed Approach
   Based on requirements, the planner would likely:

   1. **Architecture:** Assume {X} because {reason}
   2. **Library:** Assume {Y} because {reason}
   3. **Pattern:** Assume {Z} because {reason}

   ## Ambiguous Areas
   These areas need clarification:
   - {Area 1}: Could be implemented as A or B
   - {Area 2}: Unclear if feature X is in scope

   ## Potential Concerns
   - {Concern 1}: May conflict with existing code
   - {Concern 2}: May need additional research

   ## Recommendation
   - If assumptions look correct: Run `/gsd:plan-phase {N}`
   - If assumptions are wrong: Run `/gsd:discuss-phase {N}` to clarify
   ```
6. Do NOT create any files (analysis only)
7. Wait for user decision

## After this command

- Review assumptions
- If correct: Run `/gsd:plan-phase {N}`
- If incorrect: Run `/gsd:discuss-phase {N}` to clarify
