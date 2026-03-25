# GSD Quick Mode Workflow

## Purpose
Execute ad-hoc tasks with GSD guarantees without full planning cycle.

---

## Flow

### Step 1: Parse Request
1. Get task description from user
2. Clarify if ambiguous
3. Determine task type:
   - **Feature:** New functionality
   - **Bugfix:** Fix existing issue
   - **Refactor:** Code improvement
   - **Experiment:** Try something new

### Step 2: Quick Planning

**Spawn `gsd-planner` with quick mode:**

```markdown
## Quick Plan: {task}

### Objective
{clear, measurable goal}

### Tasks
1. {task 1} — {estimate}
2. {task 2} — {estimate}
3. {task 3} — {estimate}

### Verification
- [ ] {criterion 1}
- [ ] {criterion 2}

### Output
{expected deliverables}
```

**If `--discuss` flag:**
- Ask clarifying questions first
- Surface gray areas
- Document decisions

**If `--research` flag:**
- Spawn focused researcher
- Investigate approaches
- Recommend best option

### Step 3: Execute

**Spawn `gsd-executor` with quick mode:**

1. Execute tasks in order
2. Create atomic commits
3. Verify each task
4. Track progress

### Step 4: Verify

**If `--full` flag:**
- Run plan checker (max 1 iteration)
- Run post-execution verification
- Create verification report

**Without `--full`:**
- Basic verification only
- User confirms work

### Step 5: Create Summary

```markdown
# Quick Task Summary

## Task
{original request}

## Completed
- {task 1} ✅
- {task 2} ✅

## Commits
- {commit 1}
- {commit 2}

## Verification
- [ ] Criteria met
- [ ] Tests passing

## Time
- Planned: {estimate}
- Actual: {actual}
```

### Step 6: Update State

Update STATE.md:
- Log quick task completion
- Update session info

### Step 7: Commit
Create commit: `[GSD-quick] {task description}`

---

## Output
- `.planning/quick/{N}-{task}/PLAN.md`
- `.planning/quick/{N}-{task}/SUMMARY.md`
- Git commits

## Next Steps
- Continue with main workflow
- Or run another quick task
