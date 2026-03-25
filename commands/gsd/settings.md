---
name: gsd:settings
description: Configure model profile and workflow agents
---
<context>
**Purpose:**
View and modify GSD settings interactively.
Configure model profiles, workflow preferences, and agent settings.
</context>

<objective>
Display and modify settings.

**Reads:**
- `.planning/config.json`

**After this command:**
- Settings viewed
- Optional: Settings modified
- Changes saved
</objective>

<execution_context>
.planning/config.json
.planning/STATE.md
</execution_context>

<process>
1. Load `.planning/config.json`
2. Display current settings:
   ```markdown
   # GSD Settings
   
   ## Model Profile
   - **Current:** {quality|balanced|budget|inherit}
   - **Model:** {model name}
   
   ## Workflow Agents
   - **Research:** {enabled|disabled}
   - **Plan Checker:** {enabled|disabled}
   - **Verifier:** {enabled|disabled}
   
   ## Git Branching
   - **Strategy:** {none|phase|milestone}
   
   ## Discuss Mode
   - **Mode:** {questions|assumptions}
   
   ## Advanced
   - **Max Plans per Phase:** {number}
   - **Auto-commit:** {true|false}
   ```
3. Offer to modify:
   - "Change setting? (y/n)"
4. If yes, present options:
   ```
   1. Change model profile
   2. Toggle workflow agents
   3. Change git branching strategy
   4. Change discuss mode
   5. Advanced settings
   ```
5. For each setting:
   - Show current value
   - Show available options
   - Ask for new value
   - Validate input
6. Update config.json:
   - Preserve existing settings
   - Only change modified values
7. Save config.json
8. Create commit: `[GSD] Update settings`
9. Confirm changes:
   - "Settings updated"
   - Show what changed
10. If model changed:
    - Warn: "Model change affects quality/speed"
    - Suggest: "Test with `/gsd:quick` first"
</process>
