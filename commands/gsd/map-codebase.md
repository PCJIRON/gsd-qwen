---
name: gsd:map-codebase
description: Analyze existing codebase before new-project (brownfield projects)
argument-hint: "[area]"
---

# /gsd:map-codebase

## Arguments

- `area` — Optional specific area to analyze (e.g., "auth", "api", "frontend")

## Purpose

Analyze an existing codebase before starting a new project/milestone. Understands stack, architecture, conventions, and concerns.

## What This Creates

- `.planning/CODEBASE-MAP.md` — Codebase analysis
- `.planning/STACK.md` — Tech stack documentation
- `.planning/ARCHITECTURE.md` — Architecture overview

## Process

1. Scan project structure:
   - Directory structure
   - File types and languages
   - Config files (package.json, etc.)
2. Identify tech stack:
   - Languages
   - Frameworks
   - Libraries
   - Build tools
3. Analyze architecture:
   - Entry points
   - Module structure
   - Dependencies
   - Patterns used
4. Extract conventions:
   - Naming conventions
   - File organization
   - Code style
   - Testing patterns
5. Identify concerns:
   - Complex areas
   - Technical debt
   - Missing tests
   - Outdated dependencies
6. Spawn codebase mapper agent to synthesize findings
7. Create CODEBASE-MAP.md:
   ```markdown
   # Codebase Map

   ## Stack
   - **Languages:** TypeScript, Python
   - **Frameworks:** React, Express
   - **Database:** PostgreSQL

   ## Architecture
   - **Pattern:** MVC
   - **Entry:** src/index.ts
   - **Modules:** auth, api, db

   ## Conventions
   - **Naming:** camelCase for variables
   - **Tests:** __tests__/ alongside source
   - **Imports:** Absolute paths from src/

   ## Concerns
   - ⚠️ auth module has no tests
   - ⚠️ package.json has 5 outdated deps
   - ℹ️ Consider migrating to ES modules
   ```
8. Create STACK.md and ARCHITECTURE.md if detailed
9. Update STATE.md: "Codebase mapped"
10. Create commit: `[GSD] Map codebase`
11. Suggest next step:
    - "Run `/gsd:new-project` to start with codebase context"
    - "Planning will use your existing patterns"

## After this command

- Codebase understood
- Ready for `/gsd:new-project` with context
- Planning will use existing patterns
