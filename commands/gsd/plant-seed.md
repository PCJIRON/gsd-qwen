---
name: gsd:plant-seed
description: Capture forward-looking ideas with trigger conditions — surfaces at right milestone
argument-hint: "<idea>"
---
<context>
**Arguments:**
- `idea` — The forward-looking idea to capture

**Purpose:**
Capture ideas that aren't ready for current milestone but should surface at a future milestone.
Seeds have trigger conditions that determine when they become relevant.
</context>

<objective>
Plant a seed for future milestones.

**Creates/Updates:**
- `.planning/SEEDS.md` — Seed registry

**After this command:**
- Idea captured with trigger
- Will surface at appropriate milestone
- Not in active backlog
</objective>

<execution_context>
.planning/SEEDS.md (if exists)
.planning/STATE.md
</execution_context>

<process>
1. Get idea from user
2. Ask clarifying questions:
   - "When should this surface?" (milestone, condition)
   - "What triggers this idea?" (feature complete, scale need, etc.)
   - "Why not now?" (not priority, depends on other work)
3. Determine trigger type:
   - **Milestone-based:** "Surface at milestone 3+"
   - **Feature-based:** "Surface when X is complete"
   - **Scale-based:** "Surface when users > 1000"
   - **Time-based:** "Surface in 3 months"
4. Create seed entry:
   ```markdown
   ## Seeds
   
   ### {Seed Title}
   
   **Idea:**
   {description}
   
   **Trigger:**
   - Type: {milestone|feature|scale|time}
   - Condition: {condition}
   - Surface at: {milestone N / when X}
   
   **Why not now:**
   {rationale}
   
   **Planted:** {date}
   **Status:** Dormant
   ```
5. Add to SEEDS.md
6. Do NOT create git commit (seeds are lightweight)
7. Confirm:
   - "Seed planted: {title}"
   - "Will surface when: {trigger}"
8. Show info:
   - "View seeds: `/gsd:plant-seed --list`"
   - "Seeds auto-surface when triggers met"
9. If idea seems urgent:
   - "This sounds relevant now. Add to backlog instead?"
</process>
