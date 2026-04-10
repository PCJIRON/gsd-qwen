---
name: gsd:do
description: Intelligent routing of freeform text to correct GSD command
argument-hint: "<text>"
---

# /gsd:do <text>

Intelligent routing of freeform text to the correct GSD command using NLP intent matching.

## Arguments

- `text` — Freeform description of what you want to do

## Process

1. Parse the freeform text for intent signals:
   - "build/create/make" → `/gsd:quick` or `/gsd:new-project`
   - "fix/debug/broken" → `/gsd:debug`
   - "add/todo/remember" → `/gsd:add-todo`
   - "note/idea/thought" → `/gsd:note`
   - "review/check/audit" → `/gsd:review` or `/gsd:audit-*`
   - "next/continue" → `/gsd:next`
2. Match intent to best command
3. Show matched command and ask for confirmation
4. Route to appropriate command

**After this command:** Intent matched, appropriate command executed.
