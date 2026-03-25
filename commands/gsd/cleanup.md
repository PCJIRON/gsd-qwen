---
name: gsd:cleanup
description: Clean up temporary files and organize planning directory
---
<context>
**Purpose:**
Clean up temporary files, old handoffs, and organize the planning directory.
Keeps the project tidy without losing important artifacts.
</context>

<objective>
Clean up planning directory and temporary files.

**Actions:**
- Archive old handoff files
- Remove temporary files
- Organize planning directory
- Optional: Compress old phase files

**After this command:**
- Cleaner planning directory
- Old files archived (not deleted)
- No data loss
</objective>

<execution_context>
.planning/
.planning/HANDOFF.json
.planning/*.tmp
</execution_context>

<process>
1. Scan planning directory:
   - List all files
   - Identify temporary files (*.tmp, *.bak)
   - Identify old handoffs
   - Identify orphaned files
2. Show cleanup preview:
   ```markdown
   # Cleanup Preview
   
   ## Files to Archive
   - HANDOFF.json (old, from {date})
   - PAUSE-MESSAGE.md (old, from {date})
   
   ## Files to Delete
   - temp-123.tmp
   - backup.bak
   
   ## Files to Organize
   - Move completed phase summaries to archive/
   
   ## Safe to proceed? (y/n)
   ```
3. If confirmed:
   - Create archive directory: `.planning/archive/{date}/`
   - Move old handoffs to archive
   - Delete temporary files
   - Organize completed phases
4. Update STATE.md:
   - Note cleanup performed
   - List archived files
5. Create commit: `[GSD] Cleanup planning directory`
6. Report results:
   ```markdown
   # Cleanup Complete
   
   ## Archived
   - 2 handoff files → archive/2026-03-25/
   
   ## Deleted
   - 3 temporary files
   
   ## Organized
   - Phase 1-3 summaries → archive/phases/
   
   **No data lost.** All archived files recoverable.
   ```
7. Offer undo: "Restore archived? Run `/gsd:cleanup --restore`"
</process>
