---
name: gsd:update
description: Update GSD to latest version with changelog preview
---

# /gsd:update

## Purpose

Update the GSD extension to the latest version. Shows changelog before updating.

## Process

1. **Check current version**: Read `qwen-extension.json` version

2. **Check for updates**: Fetch latest version from GitHub, compare versions

3. **If up to date**: Confirm "GSD is up to date (v{version})" and exit

4. **If update available**: Download changelog and display:

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

5. **If confirmed**:
   - Backup current version to `.backup/gsd-qwen-{version}/`
   - Download new version
   - Replace extension files
   - Update version in `qwen-extension.json`

6. **Verify update**: Check all commands present, run health check

7. **Create commit**: `[GSD] Update to v{new-version}`

8. **Confirm completion**:

   ```markdown
   # Update Complete

   **Updated:** v{old} → v{new}

   ## Backup
   Old version backed up to: `.backup/gsd-qwen-{old}/`

   ## Next Steps
   - Restart Qwen Code
   - Run `/gsd:help` to verify
   ```

9. **If issues**: Provide rollback command — "Restore backup: Run `/gsd:update --rollback`"

## After this command

- GSD updated to latest version
- Old version backed up
- Ready to use
