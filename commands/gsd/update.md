---
name: gsd:update
description: Update GSD to latest version with changelog preview
---
<context>
**Purpose:**
Update the GSD extension to the latest version.
Shows changelog before updating.
</context>

<objective>
Update GSD extension.

**Actions:**
- Check for updates
- Show changelog
- Install new version
- Backup old version

**After this command:**
- GSD updated to latest
- Changelog reviewed
- Old version backed up
</objective>

<execution_context>
gsd-qwen/ (extension directory)
https://github.com/gsd-build/gsd-qwen (or your repo)
</execution_context>

<process>
1. Check current version:
   - Read `qwen-extension.json` version
2. Check for updates:
   - Fetch latest version from GitHub
   - Compare versions
3. If up to date:
   - Confirm: "GSD is up to date (v{version})"
   - Exit
4. If update available:
   - Download changelog
   - Display changelog:
     ```markdown
     # GSD Update Available
     
     **Current:** v{old-version}
     **Latest:** v{new-version}
     
     ## Changelog
     
     ### New Features
     - {feature 1}
     - {feature 2}
     
     ### Bug Fixes
     - {fix 1}
     - {fix 2}
     
     ### Breaking Changes
     - {change 1} (if any)
     
     **Update? (y/n)**
     ```
5. If confirmed:
   - Backup current version to `.backup/gsd-qwen-{version}/`
   - Download new version
   - Replace extension files
   - Update version in `qwen-extension.json`
6. Verify update:
   - Check all commands present
   - Run health check
7. Create commit: `[GSD] Update to v{new-version}`
8. Confirm:
   ```markdown
   # Update Complete
   
   **Updated:** v{old} → v{new}
   
   ## Backup
   Old version backed up to: `.backup/gsd-qwen-{old}/`
   
   ## Next Steps
   - Restart Qwen Code
   - Run `/gsd:help` to verify
   ```
9. If issues:
   - Provide rollback command
   - "Restore backup: Run `/gsd:update --rollback`"
</process>
