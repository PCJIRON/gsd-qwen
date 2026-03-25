# GSD Ship Workflow

## Purpose
Create pull request from verified work (phase N).

---

## Flow

### Step 1: Verify Prerequisites
1. Check `{N}-UAT.md` exists and result is PASS
2. Check all tasks have commits
3. Check no uncommitted changes
4. If any fail: "Cannot ship. Fix prerequisites first."

### Step 2: Determine Branch Strategy

**Based on config.json `gitBranching`:**

**`none` (default):**
- Stay on current branch
- All commits already on branch

**`phase`:**
- Create branch: `phase-{N}`
- Cherry-pick phase N commits

**`milestone`:**
- Create branch: `milestone-{M}`
- Include all milestone phases

### Step 3: Create PR Branch (if needed)

```bash
# For phase branching
git checkout -b phase-{N}

# For milestone branching
git checkout -b milestone-{M}
```

### Step 4: Generate PR Description

From phase summaries:

```markdown
# Phase {N}: {theme}

## Summary
{brief description of what was built}

## Requirements Delivered
- ✅ FR1: {description}
- ✅ FR2: {description}
- ✅ FR3: {description}

## Changes
- {change 1}
- {change 2}
- {change 3}

## Testing
- UAT: Passed ({date})
- Technical verification: Passed
- Integration tests: Passed

## Commits
{list of commits in phase}

## Checklist
- [ ] Code reviewed
- [ ] Tests passing
- [ ] Documentation updated
- [ ] UAT passed
```

### Step 5: Create PR

**For GitHub:**
```bash
# Push branch
git push -u origin {branch-name}

# Create PR (if gh cli available)
gh pr create \
  --title "Phase {N}: {theme}" \
  --body-file .planning/PR-DESCRIPTION.md \
  --base main
```

**For GitLab:**
```bash
# Push branch
git push -u origin {branch-name}

# Provide link to create PR manually
https://gitlab.com/{repo}/merge_requests/new
```

### Step 6: Update State

Update STATE.md:
- Mark phase N as "shipped"
- Add PR link
- Update position

### Step 7: Commit
Create commit: `[GSD] Ship phase {N}`

---

## Output
- PR created on GitHub/GitLab
- `{N}-PR.md` — PR link and details

## Next Step
- If more phases: Run `/gsd:next`
- If milestone complete: Run `/gsd:complete-milestone`
