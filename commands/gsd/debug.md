---
name: gsd:debug
description: Systematic debugging with persistent state
argument-hint: "<issue description>"
---
<context>
**Arguments:**
- `issue description` — What's broken or not working

**Purpose:**
Systematic debugging with persistent state across sessions.
Unlike ad-hoc debugging, GSD debug tracks progress and findings.
</context>

<objective>
Debug an issue systematically.

**Creates:**
- `.planning/DEBUG-{n}.md` — Debug session log
- Fix plan if issue found

**After this command:**
- Issue diagnosed (or in progress)
- Fix plan ready to execute
- Debug state persisted
</objective>

<execution_context>
.planning/STATE.md
.planning/DEBUG-*.md (previous debug sessions)
@agents/gsd-debugger.md
</execution_context>

<process>
1. Get issue description from user
2. Check for existing debug sessions:
   - Load DEBUG-*.md files
   - Check if related debug in progress
3. Create or continue debug session:
   - New session: `.planning/DEBUG-{n}.md`
   - Continue: Update existing session
4. Spawn debugger agent to:
   - Reproduce the issue
   - Gather context (logs, errors, stack traces)
   - Form hypotheses
   - Test hypotheses systematically
   - Identify root cause
5. Document findings in DEBUG-{n}.md:
   ```markdown
   # Debug Session {n}
   
   ## Issue
   {description}
   
   ## Context
   - Phase: {n}
   - Plan: {n}
   - File: {path}
   
   ## Hypotheses Tested
   1. {Hypothesis 1} - ❌ Ruled out
   2. {Hypothesis 2} - ✅ Confirmed
   
   ## Root Cause
   {explanation}
   
   ## Fix Plan
   1. {step 1}
   2. {step 2}
   
   ## Status: Ready to fix
   ```
6. If root cause found:
   - Create fix plan
   - Ask: "Execute fix? (y/n)"
   - If yes: Run fix plan
7. If still investigating:
   - Update STATE.md: "Debug in progress"
   - Save session
   - Continue next session
8. Create commit: `[GSD] Debug session {n}: {issue}`
</process>
