---
name: gsd:note
description: Zero-friction idea capture
argument-hint: "<text>"
---

# /gsd:note <text>

Zero-friction idea capture. Append, list, or promote notes. Lightweight, no structure.

## Arguments

- `text` — Note content, or subcommand: `--list`, `--clear`, `--promote N`

## Process

- **Default:** Append text to `.planning/NOTES.md` with timestamp
- **`--list`:** Show all notes
- **`--clear`:** Archive old notes
- **`--promote N`:** Convert note N to a proper GSD item

**After this command:** Note captured, can review later.
