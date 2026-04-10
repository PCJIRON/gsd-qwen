---
name: gsd:forensics
description: Post-mortem investigation of failed workflow runs (diagnoses stuck loops, missing artifacts, git anomalies)
argument-hint: "[issue]"
---

# /gsd:forensics

## Arguments

- `issue` (optional) — What went wrong

## Purpose

Investigate why a GSD workflow run failed or got stuck. Diagnoses issues like infinite loops, missing files, and git problems.

## Process

1. **Gather forensic data**:
   - Load `.planning/STATE.md` (check for corruption)
   - Scan `.planning/` directory
   - Check git status and log
   - Look for error patterns

2. **Check for common issues**:

   - **Stuck Loop:** Same phase executing repeatedly, no progress in STATE.md
   - **Missing Artifacts:** Referenced files don't exist, plans without summaries
   - **Git Anomalies:** Detached HEAD, uncommitted changes blocking progress, merge conflicts
   - **State Corruption:** Invalid JSON in config, missing required fields

3. **Spawn forensics agent** to analyze patterns

4. **Generate forensics report** and save to `.planning/FORENSICS-{date}.md`:

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

5. **Present recovery options**:
   - "Auto-fix? (y/n)"
   - "Manual fix (I'll guide you)"
   - "Restore from backup"

6. **If auto-fix selected**: Execute recovery plan, verify fix worked, create commit: `[GSD] Forensics recovery`

7. **If manual fix**: Provide step-by-step commands, wait for user to complete

8. **If backup restore**: List available backups, restore selected backup

## After this command

- Root cause identified
- Recovery plan provided
- Fix applied or guided
