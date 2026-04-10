---
name: gsd:set-profile
description: Switch model profile (quality/balanced/budget/inherit)
argument-hint: "<profile>"
---

# /gsd:set-profile

## Arguments

- `profile` — One of: `quality`, `balanced`, `budget`, `inherit`

## Profiles

| Profile | Description |
|---------|-------------|
| `quality` | Best quality, slower, higher cost (e.g., Opus) |
| `balanced` | Good balance (default) |
| `budget` | Fast, cost-effective (e.g., Sonnet/Haiku) |
| `inherit` | Use Qwen Code's configured model |

## Purpose

Quick switch between model profiles without editing config manually.

## Process

1. **Validate profile argument**: Must be `quality`, `balanced`, `budget`, or `inherit`. If invalid, show available options and exit.

2. **Load `.planning/config.json`**

3. **Check current profile**:
   - If same as requested: "Already using {profile} profile"
   - If different: Continue

4. **Show profile change preview**:

   ```markdown
   # Model Profile Change

   **Current:** {current-profile}
   **New:** {new-profile}

   ## Profile Details

   ### {new-profile}
   - **Model:** {model name}
   - **Speed:** {fast|medium|slow}
   - **Quality:** {good|better|best}
   - **Cost:** {low|medium|high}

   **Change profile? (y/n)**
   ```

5. **If confirmed**: Update `modelProfile` in config.json, save

6. **Create commit**: `[GSD] Set profile to {profile}`

7. **Confirm**: "Profile changed to {profile}. All subsequent commands will use this profile."

8. **If switching from quality to budget**: Warn "Lower quality model may affect complex tasks"

9. **If switching to quality**: Note "Higher quality, may be slower"

## After this command

- Profile changed
- All subsequent commands use new profile
