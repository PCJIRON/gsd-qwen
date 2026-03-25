---
name: gsd:note
description: Zero-friction idea capture — append, list, or promote notes to todos
argument-hint: "<text>"
---
<context>
**Arguments:**
- `text` — Note content to capture

**Purpose:**
Capture quick notes without any structure or commitment.
Notes are lightweight and can be promoted to todos later.
</context>

<objective>
Capture or manage quick notes.

**Creates/Updates:**
- `.planning/NOTES.md` — Note collection

**Modes:**
- **Append:** Add new note
- **List:** Show all notes
- **Promote:** Convert note to todo

**After this command:**
- Note captured
- Can promote to todo later
</objective>

<execution_context>
.planning/NOTES.md (if exists)
</execution_context>

<process>
1. Check if text provided:
   - If yes: Append mode
   - If no: List mode
2. **Append mode:**
   - Load NOTES.md (if exists)
   - Add new note with timestamp:
     ```markdown
     ## Notes
     
     ### 2026-03-25 14:30
     - {note text}
     
     ### 2026-03-25 14:25
     - {previous note}
     ```
   - Do NOT create git commit (notes are lightweight)
   - Confirm: "Note added"
3. **List mode:**
   - Load NOTES.md
   - Display notes (newest first):
     ```markdown
     # Notes (Last 10)
     
     ### 2026-03-25 14:30
     - {note 1}
     
     ### 2026-03-25 14:25
     - {note 2}
     
     ...
     
     ## Actions
     - Promote to todo: `/gsd:note --promote <number>`
     - Clear notes: `/gsd:note --clear`
     ```
   - Offer to promote notes to todos
4. **Promote mode** (--promote N):
   - Select note N
   - Run `/gsd:add-todo` with note content
   - Mark note as promoted in NOTES.md
5. **Clear mode** (--clear):
   - Archive NOTES.md to `.planning/archive/notes-{date}.md`
   - Create fresh NOTES.md
   - Confirm: "Notes cleared"
</process>
