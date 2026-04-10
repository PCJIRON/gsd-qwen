---
name: gsd:thread
description: Persistent context threads — lightweight cross-session knowledge for work spanning multiple sessions
argument-hint: "[name]"
---

# /gsd:thread

## Arguments

- `name` — Thread name (optional, creates new if not found)

## Purpose

Maintain persistent context across sessions for long-running work. Threads store knowledge, decisions, and patterns that should persist.

## What This Creates/Updates

- `.planning/threads/{name}.md` — Thread content

## Process

1. Check if thread name provided:
   - If yes: Load or create thread
   - If no: List all threads
2. **List mode** (no name):
   - Scan `.planning/threads/` directory
   - List all threads:
     ```markdown
     # Context Threads

     | Thread | Created | Updated | Size |
     |--------|---------|---------|------|
     | auth-system | 2026-03-20 | 2026-03-25 | 2.3 KB |
     | api-conventions | 2026-03-21 | 2026-03-24 | 1.5 KB |

     ## Actions
     - View thread: `/gsd:thread {name}`
     - Create thread: `/gsd:thread {name}`
     - Delete thread: Edit `.planning/threads/{name}.md`
     ```
3. **View/Create mode** (name provided):
   - Check if thread exists
   - If exists: Load and display
   - If not exists: Create new thread
4. Display thread content:
   ```markdown
   # Thread: {name}

   **Created:** {date}
   **Updated:** {date}

   ## Content
   {thread content}

   ## Actions
   - Add to thread: Type your addition
   - Edit thread: Open `.planning/threads/{name}.md`
   - Delete thread: `/gsd:thread --delete {name}`
   ```
5. Offer to add to thread:
   - "Add to this thread? (y/n)"
   - If yes: Append user input
   - Update timestamp
6. Save thread to `.planning/threads/{name}.md`
7. Do NOT create git commit (threads are working documents)
8. Confirm:
   - "Thread '{name}' updated"
   - "Thread auto-loads in future sessions"

## After this command

- Thread created/updated
- Context persisted across sessions
- Available for future sessions
