# Phase 2: CI/CD Foundation — Requirements

**Objective**: Complete CI/CD infrastructure hardening to establish professional quality gates and separate PR validation from production deployment.

**Status**: In Progress (75% complete)

---

## Current State

✅ **Completed**:
- Workflow separation (validate job runs on PR; deploy job runs only on main)
- TypeScript strict mode enabled (strict: true)
- Format validation without mutations (prettier --check)
- ESLint configuration created and integrated

⚠️ **Blocking Issue**:
- ESLint reports 102 problems (17 errors, 85 warnings)
- 17 errors are preventing CI from passing

---

## Requirements

### R1: Fix ESLint Blocking Errors
**Requirement**: Resolve all 17 ESLint errors so CI validates successfully

**Sub-requirements**:
- R1.1: Fix `__dirname` not defined errors in vite config files (4 errors)
  - Location: vite.config.ts, vite.config.server.ts
  - Root cause: Node.js globals not available in Vite config context
  
- R1.2: Fix `require()` usage in tailwind.config.ts (1 error)
  - Location: tailwind.config.ts line 93
  - Root cause: ESLint forbids require() in ES modules
  
- R1.3: Fix unused imports causing errors (12 errors)
  - Identify and remove or rename unused imports across codebase

**Success Criteria**:
- `pnpm lint` returns exit code 0
- No errors in ESLint output
- CI passes ESLint step without failures

---

### R2: Validate Complete CI Pipeline
**Requirement**: Ensure all validation steps pass in GitHub Actions workflow

**Sub-requirements**:
- R2.1: Prettier format check passes
- R2.2: TypeScript typecheck passes (strict: true)
- R2.3: ESLint linting passes (all errors fixed)
- R2.4: pnpm audit runs without blocking errors
- R2.5: Build completes successfully

**Success Criteria**:
- All 6 CI steps complete successfully
- Workflow shows green status for both validate and deploy jobs
- No failed steps in pipeline

---

### R3: Integration Verification
**Requirement**: Confirm workflow correctly gates PR and main deployments

**Sub-requirements**:
- R3.1: PR validation runs without deployment
- R3.2: Main push deployment blocked if validate fails
- R3.3: Main push deployment proceeds if validate passes
- R3.4: Concurrency control prevents duplicate builds

**Success Criteria**:
- PR created and validates without deploying to gh-pages
- Workflow correctly sequences validate → deploy on main
- No concurrent builds or race conditions

---

## Implementation Approach

1. **Fix ESLint Errors** — Resolve each of the 17 blocking errors
2. **Verify ESLint Passes** — Run `pnpm lint` and confirm exit code 0
3. **Test CI Pipeline** — Create PR and verify validation works
4. **Test Deployment Gate** — Verify main push deploys correctly
5. **Document Completion** — Update PHASE_2_STATUS.md

---

## Acceptance Criteria

- [ ] `pnpm lint` passes with zero errors
- [ ] GitHub Actions validate job passes all steps
- [ ] PR created from branch shows green CI checks
- [ ] Main branch deploy only occurs after validate passes
- [ ] No PR deployments occur
- [ ] PHASE_2_STATUS.md updated with completion status

---

## Risks & Assumptions

**Assumptions**:
- Unused imports can be safely removed or prefixed with underscore
- No existing bugs will be uncovered by strict type checking
- GitHub Actions permissions already correctly scoped

**Risks**:
- Fixing `__dirname` might affect development environment
- Removing imports might break functionality if used indirectly
- Risky to merge if not thoroughly tested

