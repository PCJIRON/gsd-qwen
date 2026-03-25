---
name: gsd:health
description: Validate .planning/ directory integrity, auto-repair with --repair
argument-hint: "[--repair]"
---
<context>
**Flags:**
- `--repair` — Auto-fix issues found

**Purpose:**
Validate the health of the `.planning/` directory.
Catches corruption, missing files, and inconsistencies.
</context>

<objective>
Check and optionally repair planning directory health.

**Checks:**
- Required files exist
- File format valid
- State consistent
- Git history intact

**After this command:**
- Health report generated
- Issues identified
- Optional: Auto-repaired
</objective>

<execution_context>
.planning/
.planning/STATE.md
.planning/PROJECT.md
.planning/ROADMAP.md
.git/
</execution_context>

<process>
1. Scan `.planning/` directory:
   - List all files
   - Check file sizes
   - Check last modified dates
2. Validate required files:
   - STATE.md (exists, valid JSON frontmatter)
   - PROJECT.md (exists, has content)
   - ROADMAP.md (exists, has phases)
   - config.json (if exists, valid JSON)
3. Check consistency:
   - STATE.md phase count matches ROADMAP.md
   - All referenced files exist
   - No orphaned files
4. Check git history:
   - `.planning/` commits present
   - No corrupted commits
5. Generate health report:
   ```markdown
   # Health Report
   
   ## Status: {HEALTHY|WARNINGS|CRITICAL}
   
   ### ✅ Healthy
   - STATE.md: Valid
   - PROJECT.md: Valid
   - ROADMAP.md: Valid
   
   ### ⚠️ Warnings
   - {warning 1}
   - {warning 2}
   
   ### ❌ Critical
   - {issue 1}
   - {issue 2}
   
   ## Recommendations
   1. {action 1}
   2. {action 2}
   ```
6. If `--repair` flag:
   - Backup `.planning/` to `.planning.backup/`
   - Fix auto-repairable issues:
     - Rebuild STATE.md from other files
     - Remove orphaned files
     - Fix malformed JSON
   - Report what was fixed
7. Save report to `.planning/HEALTH-REPORT.md`
8. Create commit (if repairs): `[GSD] Health check and repair`
9. If critical issues:
   - Warn user
   - Suggest: "Restore from backup or run `/gsd:debug`"
</process>
