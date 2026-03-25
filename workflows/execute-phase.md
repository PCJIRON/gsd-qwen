# GSD Execute Phase Workflow

## Purpose
Execute all plans for phase N in dependency-aware waves with atomic commits.

---

## Flow

### Step 1: Load Plans
1. Read all `{N}-{M}-PLAN.md` files
2. Parse frontmatter for dependencies
3. Group plans into waves
4. Check STATE.md for any completed plans

### Step 2: Execute Wave by Wave

**For each wave:**

#### Parallel Execution
For independent plans in wave:
1. Spawn `gsd-executor` agent for each plan
2. Each executor works in isolated context
3. Executors report progress

#### Sequential Execution
For dependent plans:
1. Wait for dependencies to complete
2. Verify dependency commits exist
3. Execute plan

### Step 3: Task Execution Protocol

**For each task in plan:**

1. **Read task** from plan
2. **Execute task** using appropriate tools
3. **Verify task** against done criteria
4. **Create commit:**
   ```bash
   git add <changed files>
   git commit -m "[GSD-{N}-{M}-T{taskNum}] {task description}"
   ```
5. **Track completion** in plan summary

### Step 4: Handle Deviations

**Rule 1: Scope Creep**
- If task > 30 min unplanned work → Flag for approval

**Rule 2: Missing Critical**
- If missing functionality blocks completion → Add and document

**Rule 3: Blocked**
- If blocked by dependency → Pause and report

**Rule 4: Better Way**
- If better approach found → Document and proceed if low-risk

### Step 5: Create Plan Summary

After each plan completes:

```markdown
# Summary: Phase {N}, Plan {M}

## Tasks Completed
| Task | Description | Commit | Status |
|------|-------------|--------|--------|
| 1 | {desc} | {hash} | ✅ |
| 2 | {desc} | {hash} | ✅ |

## Deviations
- {deviation 1}
- {deviation 2}

## Verification
- [ ] All success criteria met
- [ ] Tests passing
- [ ] No regressions

## Notes
{any important notes}
```

### Step 6: Verify Phase

After all plans complete:

Spawn `gsd-integration-checker`:
- Verify all plans integrated correctly
- Check for conflicts
- Run integration tests
- Create `{N}-VERIFICATION.md`

### Step 7: Update State

Update STATE.md:
- Mark phase N as "executed"
- Mark as "ready for verification"
- Update progress

### Step 8: Commit Summary
Create commit: `[GSD] Complete phase {N} execution`

---

## Output
- `{N}-{M}-SUMMARY.md` — Plan summaries (multiple)
- `{N}-VERIFICATION.md` — Integration verification
- Git commits for each task

## Next Step
Run `/gsd:verify-work {N}`
