# GSD New Project Workflow

## Purpose
Initialize a new project with comprehensive context gathering.

---

## Flow

### Step 1: Ask Questions

Ask the user about their project:

1. **What do you want to build?** (1-2 sentences)
2. **What problem does it solve?** (Who are the users?)
3. **What type of application?** (Web, Mobile, CLI, API, Desktop)
4. **Tech stack preferences?** (Frontend, Backend, Database)
5. **Key MVP features?** (2-5 must-haves)
6. **Similar tools/products?** (References)
7. **Project scope?** (Prototype, Production, Learning)

---

### Step 2: Create Directory Structure

```bash
mkdir -p .planning/research
```

---

### Step 3: Create PROJECT.md

Use template from `@templates/project.md`:

```markdown
# Project Name

## Overview
{User's description}

## Problem
{Problem being solved}

## Users
{Target users}

## Type
{Application type}

## Tech Stack
{Selected technologies}

## MVP Features
- Feature 1
- Feature 2
- Feature 3

## References
- Similar tool 1
- Similar tool 2

## Goals
{Project goals}
```

---

### Step 4: Create config.json

```json
{
  "modelProfile": "balanced",
  "workflowAgents": {
    "research": true,
    "planCheck": true,
    "verification": true
  },
  "gitBranching": "none"
}
```

---

### Step 5: Extract Requirements

Ask clarifying questions to extract detailed requirements:

1. For each MVP feature, ask:
   - What exactly should this do?
   - Any specific constraints?
   - How will you test it works?

2. Document as REQUIREMENTS.md:

```markdown
# Requirements

## Functional Requirements

### FR1: Feature 1
- Description
- Acceptance criteria

### FR2: Feature 2
...

## Technical Requirements

### TR1: Architecture
...

## Non-Functional Requirements

### NFR1: Performance
...
```

---

### Step 6: Create Roadmap

Use `@agents/gsd-roadmapper.md`:

1. Analyze requirements
2. Identify dependencies
3. Define 3-6 phases
4. Create ROADMAP.md

```markdown
# Roadmap

## Overview
- Total Phases: X
- MVP: Phase 1-2

## Phase 1: Foundation
**Theme:** Core MVP
**Requirements:** FR1, FR2, TR1
**Success Criteria:** ...

## Phase 2: Key Features
...
```

---

### Step 7: Create STATE.md

```markdown
# Project State

**Current Phase:** Phase 0 - Planning
**Position:** Ready to start Phase 1
**Last Updated:** {date}

## Completed
- [x] Project initialized
- [x] Requirements documented
- [x] Roadmap created

## Next Step
Run `/gsd:discuss-phase 1` or `/gsd:plan-phase 1`
```

---

### Step 8: Create Initial Commit

```bash
git add .planning/
git commit -m "[GSD-init] Project setup with requirements and roadmap"
```

---

## Output

**Files Created:**
- `.planning/PROJECT.md`
- `.planning/config.json`
- `.planning/REQUIREMENTS.md`
- `.planning/ROADMAP.md`
- `.planning/STATE.md`

**Next Command:**
- `/gsd:discuss-phase 1` — Discuss implementation
- OR `/gsd:plan-phase 1` — Start planning directly

---

## Rules

1. **Ask all questions** before creating files
2. **Use templates** from templates/ directory
3. **Atomic commit** after setup complete
4. **Clear next steps** in STATE.md
