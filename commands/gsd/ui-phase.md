---
name: gsd:ui-phase
description: Generate UI design contract (UI-SPEC.md) for frontend phases
argument-hint: "[N]"
---

# /gsd:ui-phase

## Arguments

- `N` — Phase number (must be frontend/UI phase)

## Purpose

Create a UI design contract before implementing frontend work. Defines layout, components, interactions, and visual style.

## What This Creates

- `.planning/{N}-UI-SPEC.md` — UI design contract

## Process

1. Validate phase N is frontend/UI:
   - Check ROADMAP.md phase description
   - If not UI phase: "Phase {N} is not UI-focused. Proceed anyway?"
2. Load phase context and plans
3. Spawn UI researcher agent to analyze:
   - User requirements
   - Existing UI patterns (if any)
   - Design system (if any)
   - Accessibility needs
4. Generate UI spec:
   ```markdown
   # UI Specification: Phase {N}

   ## Overview
   - **Feature:** {feature name}
   - **Users:** {target users}
   - **Goal:** {ui goal}

   ## Layout
   - **Structure:** {wireframe description}
   - **Grid:** {grid system}
   - **Responsive:** {breakpoints}

   ## Components
   | Component | Purpose | Props | State |
   |-----------|---------|-------|-------|
   | {Component1} | {purpose} | {props} | {state} |

   ## Interactions
   - **Click:** {behavior}
   - **Hover:** {behavior}
   - **Loading:** {state}
   - **Error:** {state}

   ## Visual Style
   - **Colors:** {palette}
   - **Typography:** {fonts}
   - **Spacing:** {scale}
   - **Shadows:** {elevation}

   ## Accessibility
   - **ARIA:** {requirements}
   - **Keyboard:** {nav pattern}
   - **Screen Reader:** {support}

   ## Empty States
   - {description}

   ## Edge Cases
   - {case 1}
   - {case 2}
   ```
5. Save to `.planning/{N}-UI-SPEC.md`
6. Create commit: `[GSD] UI spec for phase {N}`
7. Suggest next step:
   - "Review spec: Open `{N}-UI-SPEC.md`"
   - "Execute: Run `/gsd:execute-phase {N}`"
   - "Audit existing: Run `/gsd:ui-review {N}`"

## After this command

- UI spec ready
- Clear visual requirements
- Run `/gsd:execute-phase {N}` with spec
