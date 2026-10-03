# Phase 2: CI/CD Foundation — Task Execution Plan

---

## Task 1: Fix __dirname in Vite Configs

**ID**: fix-vite-dirname  
**Type**: Code Fix  
**Status**: not_started

Fix `__dirname is not defined` ESLint errors in vite.config.ts and vite.config.server.ts by adding proper ES module imports.

### Sub-tasks
1. Add fileURLToPath import to vite.config.ts
2. Add fileURLToPath import to vite.config.server.ts
3. Compute __dirname in both files
4. Verify vite configs still work
5. Run pnpm lint and confirm errors gone

### Success Criteria
- pnpm lint shows no "__dirname" errors from vite files
- pnpm dev still works
- Files properly formatted

---

## Task 2: Fix require() in Tailwind Config

**ID**: fix-tailwind-require  
**Type**: Code Fix  
**Status**: not_started

Convert `require("tailwindcss-animate")` to ES import in tailwind.config.ts to fix ESLint error.

### Sub-tasks
1. Add import statement at top of tailwind.config.ts
2. Remove require() call
3. Verify tailwind loads animate plugin
4. Run pnpm build to test
5. Run pnpm lint to confirm fix

### Success Criteria
- No require() errors from ESLint
- Tailwind animations work in build
- File passes lint check

---

## Task 3: Fix Unused Imports

**ID**: fix-unused-imports  
**Type**: Code Fix  
**Status**: not_started

Remove or rename 12 unused imports causing ESLint errors across the codebase.

### Sub-tasks
1. Run pnpm lint and capture output
2. For each unused import: remove or rename with underscore
3. Search codebase to confirm truly unused
4. Verify build still succeeds
5. Run pnpm lint again to check progress

### Success Criteria
- All 12 unused import errors fixed
- No build failures
- pnpm lint shows 0 errors

---

## Task 4: Verify ESLint Passes

**ID**: verify-eslint-passes  
**Type**: Verification  
**Status**: not_started  
**Depends-On**: [fix-vite-dirname, fix-tailwind-require, fix-unused-imports]

Verify that all ESLint errors are resolved and CI can pass linting.

### Sub-tasks
1. Run pnpm lint after all fixes
2. Verify exit code 0
3. Confirm "0 errors" in output
4. Document warnings (acceptable)
5. Commit all changes with conventional commit

### Success Criteria
- pnpm lint returns exit code 0
- Output shows "0 errors"
- Warnings are acceptable
- pnpm build succeeds

---

## Task 5: Create PR for Testing

**ID**: create-test-pr  
**Type**: Integration Test  
**Status**: not_started  
**Depends-On**: [verify-eslint-passes]

Create pull request with ESLint fixes to test the CI validation pipeline.

### Sub-tasks
1. Create feature branch: git checkout -b fix/eslint-errors
2. Commit all fixes with descriptive message
3. Push to GitHub
4. Create PR against main
5. Wait for GitHub Actions to run (2-5 min)
6. Observe CI passing all validation steps

### Success Criteria
- PR created successfully
- GitHub Actions validate job passes
- All 6 CI steps show green
- No ESLint failures in workflow

---

## Task 6: Verify PR No-Deploy

**ID**: verify-no-pr-deploy  
**Type**: Verification  
**Status**: not_started  
**Depends-On**: [create-test-pr]

Confirm that PR validation does NOT trigger deployment to GitHub Pages.

### Sub-tasks
1. Wait for PR validation to complete
2. Check gh-pages branch history
3. Verify no new commit during PR build
4. Confirm live site unchanged
5. Document result in PR comment

### Success Criteria
- validate job completed
- No new commit on gh-pages
- Live site still shows previous version
- Deploy job did NOT run

---

## Task 7: Merge and Deploy

**ID**: verify-main-deploy  
**Type**: Integration Test  
**Status**: not_started  
**Depends-On**: [verify-no-pr-deploy]

Merge PR to main and verify automatic deployment to GitHub Pages.

### Sub-tasks
1. Merge PR to main branch
2. GitHub Actions should auto-trigger
3. Wait for both validate and deploy jobs
4. Verify both pass with green status
5. Check gh-pages has new commit
6. Confirm live site accessible and updated

### Success Criteria
- Main merge completed
- validate job passes
- deploy job runs and passes
- New commit on gh-pages
- Live site accessible

---

## Task 8: Update Status Documentation

**ID**: update-status-doc  
**Type**: Documentation  
**Status**: not_started  
**Depends-On**: [verify-main-deploy]

Update PHASE_2_STATUS.md to reflect Phase 2 completion.

### Sub-tasks
1. Open PHASE_2_STATUS.md
2. Change status to "✅ COMPLETE"
3. Update metrics: ESLint now passing
4. Replace In-Progress with Completed section
5. Document all 8 tasks completed
6. Point to Phase 3 next steps

### Success Criteria
- PHASE_2_STATUS.md shows COMPLETE
- All metrics updated
- Sections reorganized
- Next phase identified

---

## Execution Summary

| Task | Type | Duration |
|------|------|----------|
| 1. Fix vite-dirname | Fix | 15 min |
| 2. Fix tailwind-require | Fix | 10 min |
| 3. Fix unused imports | Fix | 30-45 min |
| 4. Verify ESLint | Verification | 5 min |
| 5. Create PR | Integration | 10 min |
| 6. Verify no-deploy | Verification | 10 min |
| 7. Merge & deploy | Integration | 10 min |
| 8. Update docs | Documentation | 10 min |
| **Total** | | **2-3 hours** |

