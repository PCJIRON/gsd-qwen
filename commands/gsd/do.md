---
name: gsd:do
description: Route freeform text to the right GSD command automatically
argument-hint: "<text>"
---
<context>
**Arguments:**
- `text` — Freeform request or command

**Purpose:**
Intelligent routing of natural language requests to the appropriate GSD command.
Don't need to remember exact command names.
</context>

<objective>
Parse user intent and route to correct command.

**Examples:**
- "add a todo to fix login" → `/gsd:add-todo`
- "show me progress" → `/gsd:progress`
- "I need to debug the auth issue" → `/gsd:debug`
- "what's the status" → `/gsd:stats`

**After this command:**
- Request routed to correct command
- That command executes
</objective>

<execution_context>
.planning/STATE.md
All GSD commands
</execution_context>

<process>
1. Parse user's freeform text
2. Extract intent keywords:
   - "todo", "remember", "task" → add-todo
   - "progress", "where am i", "next" → progress
   - "debug", "broken", "not working" → debug
   - "stats", "statistics", "metrics" → stats
   - "clean", "cleanup", "organize" → cleanup
   - "health", "check", "validate" → health
   - "update", "upgrade" → update
   - "settings", "config", "configure" → settings
   - "review", "audit" → review or review-backlog
   - "ship", "pr", "pull request" → ship
   - "plan", "planning" → plan-phase
   - "execute", "run", "build" → execute-phase
   - "verify", "test", "uat" → verify-work
3. Match to GSD command
4. If confident match (>80%):
   - Extract arguments from text
   - Execute matched command with arguments
5. If uncertain match (50-80%):
   - Show top 3 possible commands
   - Ask: "Did you mean?"
   - User selects, command executes
6. If no match (<50%):
   - "I'm not sure what you want to do"
   - Suggest: "Try `/gsd:help` for all commands"
   - Or: "Can you rephrase?"
7. Log routing decision for learning
</process>
