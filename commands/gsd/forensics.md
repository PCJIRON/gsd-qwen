---
name: gsd:forensics
description: Post-mortem investigation of failed workflow runs (diagnoses stuck loops, missing artifacts, git anomalies)
argument-hint: "[issue]"
---
<context>
**Arguments:**
- `issue` — What went wrong (optional)

**Purpose:**
Investigate why a GSD workflow run failed or got stuck.
Diagnoses issues like infinite loops, missing files, git problems.
</context>

<objective>
Investigate workflow failure.

**Output:**
- Forensics report
- Root cause identified
- Recovery plan

**After this command:**
- Know what went wrong
- Know how to fix
- Can recover gracefully
</objective>

<execution_context>
.planning/STATE.md
.planning/
.git/
git log
git status
</execution_context>

<process>
1. Gather forensic data:
   - Load STATE.md (check for corruption)
   - Scan .planning/ directory
   - Check git status and log
   - Look for error patterns
2. Check for common issues:
   **Stuck Loop:**
   - Same phase executing repeatedly
   - No progress in STATE.md
   **Missing Artifacts:**
   - Referenced files don't exist
   - Plans without summaries
   **Git Anomalies:**
   - Detached HEAD
   - Uncommitted changes blocking progress
   - Merge conflicts
   **State Corruption:**
   - Invalid JSON in config
   - Missing required fields
3. Spawn forensics agent to analyze patterns
4. Generate forensics report:
   ```markdown
   # Forensics Report
   
   ## Issue Detected
   {description}
   
   ## Evidence
   
   ### State Analysis
   - STATE.md last updated: {date}
   - Current phase: {N}
   - Status: {stuck|error|corrupted}
   
   ### File Analysis
   - Missing files: {list}
   - Orphaned files: {list}
   
   ### Git Analysis
   - Branch: {name}
   - Status: {clean|dirty|detached}
   - Recent errors: {list}
   
   ## Root Cause
   {explanation}
   
   ## Recovery Plan
   1. {step 1}
   2. {step 2}
   3. {step 3}
   
   ## Prevention
   - {recommendation for future}
   ```
5. Save to `.planning/FORENSICS-{date}.md`
6. Present recovery options:
   - "Auto-fix? (y/n)"
   - "Manual fix (I'll guide you)"
   - "Restore from backup"
7. If auto-fix selected:
   - Execute recovery plan
   - Verify fix worked
   - Create commit: `[GSD] Forensics recovery`
8. If manual fix:
   - Provide step-by-step commands
   - Wait for user to complete
9. If backup restore:
   - List available backups
   - Restore selected backup
</process>
