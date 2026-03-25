# GSD Plan Phase Workflow

## Purpose
Research implementation and create atomic task plans for phase N.

---

## Flow

### Step 1: Load Context
1. Read ROADMAP.md for phase N
2. Read REQUIREMENTS.md for phase N requirements
3. Read {N}-CONTEXT.md (if exists) for user decisions
4. Read STATE.md for current position

### Step 2: Research Implementation
Spawn `gsd-phase-researcher` agent:

**Research areas:**
- Implementation approaches
- Library/framework options
- Best practices
- Codebase patterns (if brownfield)
- Common pitfalls

**Output:** `{N}-RESEARCH.md`

### Step 3: Create Plans
Spawn `gsd-planner` agent:

**For each requirement in phase N:**
1. Determine tasks needed
2. Group into atomic plans
3. Define verification criteria
4. Estimate effort

**Plan structure:**
```markdown
---
phase: {N}
plan: {M}
type: {feature|bugfix|refactor}
wave: {W}
depends_on: [plan-refs]
---

<objective>
Clear, measurable goal
</objective>

<context>
@references and context
</context>

<tasks>
<task id="1" type="auto">
Task description
</task>
<task id="2" type="checkpoint">
Checkpoint task
</task>
</tasks>

<verification>
- [ ] Criterion 1
- [ ] Criterion 2
</verification>

<output_spec>
Expected deliverables
</output_spec>
```

### Step 4: Validate Plans
Spawn `gsd-plan-checker` agent:

**Check:**
- Requirement coverage
- Task atomicity
- Verification clarity
- Feasibility

**If validation fails:**
- Revise plans
- Re-validate (max 2 iterations)
- If still fails: Replan from scratch

### Step 5: Group into Waves
Organize plans by dependencies:

```
Wave 1 (parallel): Plan 1, Plan 2
Wave 2 (parallel): Plan 3, Plan 4 (depends on 1, 2)
Wave 3 (parallel): Plan 5 (depends on 3, 4)
```

### Step 6: Create Planning Summary
Generate planning summary:

```markdown
# Phase {N} Planning Summary

## Plans Created
| Plan | Objective | Tasks | Wave | Status |
|------|-----------|-------|------|--------|
| {N}-1 | {objective} | {count} | 1 | ✅ Ready |
| {N}-2 | {objective} | {count} | 1 | ✅ Ready |

## Research Summary
- Approaches considered: {count}
- Recommended: {approach}
- Key findings: {summary}

## Validation
- Requirements covered: {count}/{total}
- Plans validated: {count}
- Iterations: {count}

## Execution Order
1. Wave 1: Plan {N}-1, {N}-2 (parallel)
2. Wave 2: Plan {N}-3, {N}-4 (parallel)
3. Wave 3: Plan {N}-5

## Next Step
Run `/gsd:execute-phase {N}`
```

### Step 7: Update State
Update STATE.md:
- Mark phase N as "planned"
- Set position to "ready for execution"

### Step 8: Commit
Create commit: `[GSD] Plan phase {N}`

---

## Output
- `{N}-RESEARCH.md` — Implementation research
- `{N}-{M}-PLAN.md` — Atomic task plans (multiple)
- `{N}-PLANNING-SUMMARY.md` — Planning summary

## Next Step
Run `/gsd:execute-phase {N}`
