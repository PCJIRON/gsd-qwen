---
name: gsd:research-phase
description: Research implementation approaches for a phase without planning
argument-hint: "[N]"
---
<context>
**Arguments:**
- `N` — Phase number to research

**Purpose:**
Research implementation approaches for a phase without creating plans yet.
Useful when you need more information before committing to a plan.
</context>

<objective>
Research implementation approaches for phase N.

**Creates:**
- `{N}-RESEARCH.md` — Implementation research document

**After this command:**
- Research complete
- Run `/gsd:plan-phase {N}` when ready to plan
</objective>

<execution_context>
.planning/ROADMAP.md
.planning/REQUIREMENTS.md
.planning/{N}-CONTEXT.md (if exists)
@agents/gsd-phase-researcher.md
</execution_context>

<process>
1. Load phase N details from ROADMAP.md
2. Load requirements for phase N from REQUIREMENTS.md
3. Load CONTEXT.md if it exists (user decisions)
4. Spawn phase researcher agent to investigate:
   - Implementation approaches
   - Library/framework options
   - Best practices
   - Common pitfalls
   - Codebase patterns (if brownfield)
5. Create `{N}-RESEARCH.md` with findings:
   ```markdown
   # Phase {N} Research
   
   ## Approaches Considered
   1. {Approach 1} - Pros/Cons
   2. {Approach 2} - Pros/Cons
   
   ## Recommended Approach
   {Recommendation with rationale}
   
   ## Implementation Notes
   - Key considerations
   - Libraries to use
   - Patterns to follow
   
   ## Pitfalls to Avoid
   - Common mistakes
   - Edge cases
   ```
6. Update STATE.md: "Phase {N} research complete"
7. Create commit: `[GSD] Research phase {N}`
8. Suggest next step: `/gsd:plan-phase {N}`
</process>
