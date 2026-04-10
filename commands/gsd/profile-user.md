---
name: gsd:profile-user
description: Generate developer behavioral profile from session analysis for personalized responses
argument-hint: "[--questionnaire|--refresh]"
---

# /gsd:profile-user

## Arguments

- `--questionnaire` — Answer questions to build profile
- `--refresh` — Regenerate profile from recent sessions

## Purpose

Create a behavioral profile of your working style for personalized AI responses. The AI adapts to your preferences over time.

## Process

1. **Check flags**:
   - `--questionnaire`: Ask questions
   - `--refresh`: Analyze sessions
   - Neither: Show existing profile or create

2. **Questionnaire mode** — Ask 5-7 questions:
   1. Preferred detail level? (concise/verbose)
   2. Decision style? (quick/thorough)
   3. Error handling? (fix immediately/understand first)
   4. Code style preference? (comments/minimal)
   5. Testing approach? (TDD/after/none)
   6. Session length? (short bursts/long sessions)
   7. Feedback style? (direct/gentle)

   Compile answers into profile.

3. **Refresh mode** — Analyze last 10 sessions:
   - Extract patterns: average session length, common commands used, decision patterns, error recovery style
   - Update profile

4. **Create/Update profile** and save to `.planning/USER-PROFILE.md`:

   ```markdown
   # User Profile

   ## Preferences

   ### Communication
   - **Detail Level:** {concise|verbose}
   - **Feedback Style:** {direct|gentle}

   ### Workflow
   - **Decision Style:** {quick|thorough}
   - **Session Length:** {short|long}
   - **Avg Session:** {duration}

   ### Code Style
   - **Comments:** {extensive|minimal}
   - **Testing:** {TDD|after|none}
   - **Error Handling:** {fix|understand}

   ### Common Commands
   1. {command 1}
   2. {command 2}

   ## AI Adaptations
   - Provide {detail} explanations
   - Use {style} feedback
   - Suggest {type} solutions

   **Created:** {date}
   **Updated:** {date}
   ```

5. Create commit: `[GSD] Update user profile`

6. Confirm: "Profile updated. AI will now personalize responses."

7. Offer to adjust: "Edit profile manually or run `/gsd:profile-user --questionnaire`"

## After this command

- Profile created/updated
- AI will personalize responses
- Saved to `.planning/USER-PROFILE.md`
