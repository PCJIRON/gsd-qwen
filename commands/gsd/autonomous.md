---
name: gsd:autonomous
description: Run GSD workflow autonomously with minimal user interaction
argument-hint: "[goal]"
---

# /gsd:autonomous

## Arguments

- `goal` — What to accomplish autonomously

## Purpose

Run GSD workflow with minimal user interaction. Best for well-defined tasks where you trust the AI to execute.

## Process

1. Get goal from user:
   - "What should I accomplish?"
   - Clarify if ambiguous
2. Determine workflow path:
   - New project? → new-project → plan-phase → execute-phase → verify-work
   - Existing phase? → execute-phase → verify-work
   - Quick task? → quick
3. Confirm autonomy level:
   ```markdown
   # Autonomous Mode

   **Goal:** {goal}

   **Workflow:**
   1. {step 1}
   2. {step 2}
   3. {step 3}

   **Autonomy Level:**
   - ⚡ Full: No checkpoints, complete everything
   - 🟡 Checkpoints: Ask at key decisions
   - 🟢 Conservative: Ask before each phase

   **Start? (y/n)**
   ```
4. If confirmed, execute workflow:
   - Run each command in sequence
   - Make decisions autonomously (or at checkpoints)
   - Track progress
5. Handle deviations:
   - If blocked: Log and continue with other work
   - If error: Retry or skip
   - If user interrupts: Pause gracefully
6. Generate summary:
   ```markdown
   # Autonomous Execution Summary

   **Goal:** {goal}
   **Status:** {Complete|Partial|Failed}

   ## Completed
   - {task 1}
   - {task 2}

   ## Skipped/Failed
   - {task 3}: {reason}

   ## Commits
   - {commit 1}
   - {commit 2}

   ## Next Steps
   - {recommendation}
   ```
7. Save to `.planning/AUTONOMOUS-{date}.md`
8. Create commit: `[GSD] Autonomous execution: {goal}`

## After this command

- Work completed autonomously
- Summary report generated
