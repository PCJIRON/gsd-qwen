# GSD Discuss Phase Workflow

## Purpose
Capture implementation decisions before planning phase N.

---

## Flow

### Step 1: Load Phase Context
1. Read ROADMAP.md for phase N description
2. Read REQUIREMENTS.md for phase N requirements
3. Check if CONTEXT.md already exists
   - If yes: "Context already exists. Overwrite? (y/n)"
   - If no: Continue

### Step 2: Identify Decision Areas
Analyze phase and identify gray areas:

**For UI/Frontend phases:**
- Layout preferences
- Component library choices
- Styling approach
- Interaction patterns
- Responsive requirements

**For API/Backend phases:**
- Response format
- Error handling
- Authentication approach
- Data validation
- Rate limiting

**For Feature phases:**
- User flow details
- Edge case handling
- Integration points
- Data requirements

### Step 3: Ask Questions
For each decision area, ask:

```
## {Decision Area}

**Options:**
- Option A: {description}
- Option B: {description}
- Option C: {description}

**Your preference?** (A/B/C or describe your own)
```

### Step 4: Document Decisions
Create {N}-CONTEXT.md:

```markdown
# Phase {N} Context

## Decisions

### {Decision Area 1}
**Decision:** {selected option}
**Rationale:** {why this choice}
**Notes:** {additional context}

### {Decision Area 2}
...

## Vision
{overall vision for this phase}

## Constraints
- {constraint 1}
- {constraint 2}

## Non-Goals
- {what we're NOT doing}
```

### Step 5: Update State
Update STATE.md:
- Mark phase N as "discussed"
- Set position to "ready for planning"

### Step 6: Commit
Create commit: `[GSD] Discuss phase {N}`

---

## Output
- `{N}-CONTEXT.md` — Implementation decisions

## Next Step
Run `/gsd:plan-phase {N}`
