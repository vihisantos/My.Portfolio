# 🔒 CI/CD Infrastructure Audit Report – My.Portfolio
**Date**: October 3, 2026  
**Phase**: 1 (Audit)  
**Status**: HARDENING IN PROGRESS  
**Deliverable**: Complete infrastructure assessment + recommendations

---

## Executive Summary

The My.Portfolio project has a **functioning but incomplete** CI/CD pipeline. Current GitHub Actions workflow successfully builds and deploys to GitHub Pages, but lacks essential quality gates, security checks, and performance validation. This audit identifies **15 critical gaps** across CI/CD, code quality, security, and observability domains.

**Key Findings**:
- ✅ Basic CI/CD structure exists (GitHub Actions)
- ✅ Frozen lockfile strategy in place (`pnpm-lock.yaml`)
- ✅ Build pipeline functional
- ❌ **TypeScript strict mode disabled** (`strict: false`)
- ❌ No branch protection policies
- ❌ No security scanning (dependencies, code)
- ❌ No performance baseline/monitoring
- ❌ No test coverage enforcement
- ❌ Deploy and PR jobs conflated (both deploy on push to main)
- ❌ No semantic versioning or release automation

---

## Part 1: Current State Analysis

### 1.1 GitHub Actions Workflow Status

**File**: `.github/workflows/deploy.yml`

**Current Pipeline** (runs on both push to main AND pull_request to main):
```
Checkout → Node Setup → Install pnpm → Install deps → Format Check → 
TypeScript Check → Test (conditional) → Build → Deploy to Pages
```

**Critical Issues**:
| Issue | Severity | Impact | Fix |
|-------|----------|--------|-----|
| Deploy runs on **both** `push` and `pull_request` | 🔴 CRITICAL | PRs deploy to GitHub Pages (wrong) | Separate jobs: PR = build-only, Push = build + deploy |
| No branch protection on `main` | 🔴 CRITICAL | Anyone can push broken code | Add GitHub branch protection rules |
| `pnpm format.fix` modifies files during CI | 🟡 HIGH | Workflow succeeds but code is reformatted (side effects) | Use `pnpm format --check` instead of `--write` |
| Runs on `windows-latest` | 🟡 MEDIUM | Windows-specific line endings, path separators | Use `ubuntu-latest` for consistency |
| Node 20 (pinned, but older) | 🟡 MEDIUM | Missing Node 22 LTS features | Update to Node 22 LTS |
| No concurrency limits | 🟡 MEDIUM | Multiple runs queue up | Add concurrency rules to prevent duplicate builds |

**Full Workflow Breakdown**:

```yaml
# ❌ PROBLEM: Both push and pull_request trigger deploy
on:
  push:
    branches: [main]    # ← This should NOT deploy
  pull_request:
    branches: [main]    # ← This should only build

jobs:
  build-and-deploy:     # ← Single job does both (should be split)
    runs-on: windows-latest  # ← Use ubuntu-latest
    steps:
      # ... setup steps ...
      
      # ❌ PROBLEM: Modifies files
      - name: Run code formatter
        run: pnpm format.fix  # ← Use --check, not --write
        
      # ✅ GOOD: TypeScript check exists
      - name: Run TypeScript type‑check
        run: pnpm typecheck
        
      # ⚠️ PROBLEM: Tests only run if test files exist
      - name: Check for test files
        id: check_tests
        run: ...
      
      # ❌ PROBLEM: Always deploys (even for PRs)
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
```

---

### 1.2 TypeScript Configuration Status

**File**: `tsconfig.json`

**Current Settings**:
```json
{
  "compilerOptions": {
    "strict": false,           // ❌ TYPE SAFETY DISABLED
    "noUnusedLocals": false,   // ❌ DEAD CODE ALLOWED
    "noUnusedParameters": false, // ❌ UNUSED PARAMS IGNORED
    "noImplicitAny": false,    // ❌ ANY TYPE IMPLICIT
    "strictNullChecks": false, // ❌ NULL SAFETY DISABLED
    "noFallthroughCasesInSwitch": false  // ❌ SWITCH CASES CAN FALL THROUGH
  }
}
```

**Impact**: 
- Zero type safety enforcement
- No catch for common bugs (null reference, implicit any, dead code)
- When `typecheck` runs in CI, it issues **zero errors** (meaningless)

**Risk Level**: 🔴 **CRITICAL**

---

### 1.3 Build Configuration Status

**File**: `vite.config.ts` + `vite.config.server.ts`

**Current Setup**:
```
vite.config.ts:
├── Client build → dist/spa
├── Manual chunks: vendor | ui | framer (good)
├── Base path: /My.Portfolio/ (GitHub Pages)
└── Express plugin for dev server

vite.config.server.ts:
├── Server build → dist/server
├── Target: node22
├── External: express, cors (good)
└── Sourcemaps enabled (good for debugging)
```

**Good Practices Identified**:
- ✅ Manual chunk splitting configured
- ✅ Separate client/server builds
- ✅ Path aliases (@, @shared)
- ✅ Sourcemaps enabled for production

**Gaps**:
- ⚠️ No chunk size warnings configured
- ⚠️ No rollup input validation
- ⚠️ No minification toggle for server (set to false)
- ⚠️ No asset optimization directives

---

### 1.4 Package Manager & Lockfile Status

**File**: `package.json` + `pnpm-lock.yaml`

**Strengths**:
- ✅ `pnpm 10.14.0` with SHA512 hash (pinned, reproducible)
- ✅ Lockfile frozen (v9.0) with `lockfileVersion: 9.0`
- ✅ CI already uses `--frozen-lockfile` flag
- ✅ Corepack ready (packageManager field present)

**Dependencies Count**:
- Runtime: 11 packages
- DevDependencies: 91 packages (~102 total)

**Concerns**:
- ⚠️ Heavy dependency footprint (mostly from Radix UI + Three.js ecosystem)
- ⚠️ No dependency audit scheduled in CI

---

### 1.5 Code Quality & Formatting Status

**File**: `.prettierrc` + `package.json` scripts

**Current Setup**:
```json
// .prettierrc
{
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "all"
}
```

**Scripts Defined**:
```
pnpm format.fix    → prettier --write .
pnpm typecheck     → tsc
pnpm build         → client + server builds
pnpm test          → vitest --run
```

**Status**:
- ✅ Prettier configured
- ✅ TypeScript check script exists
- ⚠️ **No ESLint configured** (linting missing)
- ⚠️ **No test coverage reporting**
- ⚠️ **No pre-commit hooks** (Husky/lint-staged missing)

---

### 1.6 Testing Status

**File**: `package.json` (vitest listed as devDep)

**Current State**:
- ✅ Vitest installed (v3.2.4)
- ✅ Test script exists: `pnpm test` (runs `vitest --run`)
- ❌ **No vitest.config.ts found** (using defaults)
- ❌ **No test files exist** (workflow checks for them conditionally)
- ❌ **No coverage threshold** enforced
- ❌ **No test automation** in CI (skipped if no tests)

**Risk**: Tests are optional, not mandatory.

---

### 1.7 Security & Deployment Status

**File**: `netlify.toml` + `server/` logic

**Security Headers Found** (in netlify.toml):
```
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000
Content-Security-Policy: default-src 'self' 'unsafe-inline' 'unsafe-eval' 
                         https: wss: data: blob:
```

**Issues**:
- ❌ **CSP too permissive** (`'unsafe-inline'`, `'unsafe-eval'`)
- ❌ **Deployed to GitHub Pages, but CSP headers in Netlify.toml** (mismatch)
- ❌ **No dependency vulnerability scanning** in CI
- ❌ **No rate limiting** in GitHub Actions deploy
- ⚠️ Express app has rate-limit package but not configured in workflow

**Observation**: Netlify config exists but project deploys to GitHub Pages via GitHub Actions. This is a **configuration mismatch**.

---

## Part 2: Critical Gaps Identified

### Gap Matrix

| # | Domain | Gap | Severity | Impact | Phase |
|---|--------|-----|----------|--------|-------|
| **G1** | CI/CD Architecture | PR and Deploy conflated in single job | 🔴 CRITICAL | PRs deploy to production | 2 |
| **G2** | Type Safety | `strict: false` disables all type checking | 🔴 CRITICAL | No type safety in production | 3 |
| **G3** | Code Quality | No ESLint configured | 🔴 CRITICAL | No linting rules enforced | 4 |
| **G4** | Testing | Tests optional (conditional step) | 🔴 CRITICAL | Failed tests don't block merge | 5 |
| **G5** | Branch Protection | No rules on `main` | 🔴 CRITICAL | Anyone can push broken code | 6 |
| **G6** | Security | No dependency audit in CI | 🟡 HIGH | Vulnerable packages not caught | 7 |
| **G7** | Performance | No bundle size monitoring | 🟡 HIGH | Silent performance regressions | 8 |
| **G8** | Observability | No build artifacts tracking | 🟡 HIGH | Can't trace regressions to commits | 9 |
| **G9** | Versioning | No semantic versioning | 🟡 HIGH | No release automation | 10 |
| **G10** | Pre-commit | No git hooks | 🟡 MEDIUM | Broken code committed locally | 11 |
| **G11** | Node Version | Pinned to Node 20 | 🟡 MEDIUM | Missing LTS 22 features | 12 |
| **G12** | Formatting | `format.fix` modifies files in CI | 🟡 MEDIUM | Side effects in workflow | 13 |
| **G13** | Concurrency | No job concurrency limits | 🟡 MEDIUM | Duplicate build runs queue | 14 |
| **G14** | Accessibility | No a11y automation in CI | 🟡 MEDIUM | Accessibility issues miss testing | 15 |
| **G15** | Documentation | No CI/CD runbook | 🟡 MEDIUM | Knowledge silos | 16 |

---

## Part 3: Configuration Mismatch & Architecture Issues

### 3.1 Deploy Target Mismatch

**Problem**: Two deploy targets configured, only one active.

**Current State**:
- `netlify.toml` ← configured but **NOT USED**
- GitHub Actions workflow deploys to GitHub Pages ← **ACTIVE**
- Express server configured but **NOT DEPLOYED**

**Why This Matters**:
- CSP headers in Netlify will never execute
- Express rate-limiting not active
- Any Netlify-specific rules ignored
- Configuration debt increases

**Recommendation**: Consolidate on GitHub Pages (current) and remove Netlify config, OR migrate fully to Netlify and update CI.

---

### 3.2 Server Build Configured But Not Deployed

**Issue**: `vite.config.server.ts` builds to `dist/server`, but:
- GitHub Pages deploy only publishes `dist/spa` (client only)
- No server binary actually runs
- Server start script exists but never invoked

**Why**: GitHub Pages is a static host; no Node.js runtime. This is intentional but creates dead code in the repo.

**Recommendation**: Either:
1. Accept server code as "future-ready" (unused), OR
2. Deploy to a Node.js host (Vercel, Netlify Functions, Railway) and update workflow

---

## Part 4: Recommended Actions (By Phase)

### Phase 1 ✅ COMPLETE - Audit
**Deliverables**:
- [x] Current state analysis (this document)
- [x] Gap identification
- [x] Risk assessment
- [x] Architecture review

---

### Phase 2: CI/CD Architecture Redesign
**Goal**: Separate PR validation from production deploy  
**Actions**:
1. Create separate jobs: `pr-validate` (build only) and `deploy` (build + push)
2. PR job runs on `pull_request` event
3. Deploy job runs on `push` to `main` only
4. Add concurrency rules to prevent duplicate runs
5. Change runner to `ubuntu-latest`

**Files to Modify**: `.github/workflows/deploy.yml`

---

### Phase 3: TypeScript Strict Mode Enforcement
**Goal**: Enable type safety in CI  
**Actions**:
1. Update `tsconfig.json`: set `strict: true`
2. Enable: `noUnusedLocals`, `noUnusedParameters`, `noImplicitAny`, `strictNullChecks`, `noFallthroughCasesInSwitch`
3. Fix type errors in codebase (may require code changes)
4. Ensure CI `typecheck` step fails on errors (already does)

**Files to Modify**: `tsconfig.json` + `client/**`, `server/**`, `shared/**`

---

### Phase 4: ESLint Configuration
**Goal**: Add linting rules to CI  
**Actions**:
1. Install ESLint 9+: `npm add -D eslint @eslint/js`
2. Create `eslint.config.js` with:
   - React rules
   - TypeScript rules
   - Best practices (no console in prod, no debugger, etc.)
3. Add `pnpm lint` script
4. Add lint step to GitHub Actions workflow
5. Fix existing violations

**Files to Modify**: Create `eslint.config.js`, update `package.json`, `.github/workflows/deploy.yml`

---

### Phase 5: Test Coverage Enforcement
**Goal**: Make tests mandatory in CI  
**Actions**:
1. Create `vitest.config.ts` if missing
2. Configure test coverage thresholds (e.g., 60% statements)
3. Update `pnpm test` script to include `--coverage`
4. Create initial test suite for critical components
5. Remove conditional test step from workflow (tests always run)

**Files to Modify**: Create `vitest.config.ts`, create `client/**/*.test.tsx`, update `package.json`, `.github/workflows/deploy.yml`

---

### Phase 6: Main Branch Protection
**Goal**: Enforce CI green before merge  
**Actions**:
1. GitHub Settings → Branch Protection Rules
2. Require CI checks pass before merge
3. Dismiss stale reviews on new commits
4. Require branches up to date before merge

**Files to Modify**: None (GitHub UI)

---

### Phase 7: Dependency Security Scanning
**Goal**: Catch vulnerable packages  
**Actions**:
1. Add `pnpm audit` to CI workflow
2. Configure GitHub Dependabot (auto-updates)
3. Add `npm audit` step after `pnpm install --frozen-lockfile`

**Files to Modify**: `.github/workflows/deploy.yml`

---

### Phase 8: Performance Baseline & Bundle Analysis
**Goal**: Measure current state, prevent regressions  
**Actions**:
1. Run `npm run build` and capture bundle sizes
2. Generate bundle analysis report (using `vite-plugin-visualizer`)
3. Document baseline metrics
4. Add bundle size checks to PR workflow

**Files to Modify**: `vite.config.ts`, `.github/workflows/deploy.yml`

---

### Phase 9: Observability & Build Artifacts
**Goal**: Track builds and regressions  
**Actions**:
1. Upload build artifacts (dist/) to workflow
2. Add commit SHA to build metadata
3. Log performance metrics to file
4. Archive reports (bundle analysis, coverage)

**Files to Modify**: `.github/workflows/deploy.yml`

---

### Phase 10: Semantic Versioning & Release Automation
**Goal**: Automated releases  
**Actions**:
1. Install `release-it` or `semantic-release`
2. Configure automatic version bumping
3. Generate changelogs
4. Create GitHub releases

**Files to Modify**: Create `release.config.js` or `.release-it.json`, `package.json`

---

### Phase 11: Pre-commit Hooks
**Goal**: Catch issues before commits  
**Actions**:
1. Install Husky + lint-staged
2. Create `.husky/pre-commit` hook
3. Run lint, prettier check, TypeScript check on staged files
4. Prevent broken code from entering repo

**Files to Modify**: Create `.husky/pre-commit`, `.lintstagedrc.json`, `package.json`

---

### Phase 12: Node.js Version Management
**Goal**: Upgrade to Node 22 LTS  
**Actions**:
1. Update `.github/workflows/deploy.yml` to Node 22
2. Update `.node-version` or `.nvmrc` if present
3. Test locally with Node 22
4. Update `vite.config.server.ts` target if needed

**Files to Modify**: `.github/workflows/deploy.yml`

---

### Phase 13: Code Formatting Validation
**Goal**: Check format without modifying  
**Actions**:
1. Change `pnpm format.fix` to `pnpm format --check` in workflow
2. Create separate `pnpm format` (with `--write`) for local use only
3. Fails CI if formatting is wrong

**Files to Modify**: `package.json`, `.github/workflows/deploy.yml`

---

### Phase 14: Workflow Concurrency Control
**Goal**: Prevent duplicate builds  
**Actions**:
1. Add `concurrency` group to GitHub Actions jobs
2. Cancel in-progress runs when new commit pushed
3. Group by branch name

**Files to Modify**: `.github/workflows/deploy.yml`

---

### Phase 15: Accessibility Automation
**Goal**: Catch a11y issues in CI  
**Actions**:
1. Install `jest-axe` or `axe-playwright`
2. Add a11y tests to component test suite
3. Run a11y checks in test step
4. Fail on violations

**Files to Modify**: Create `client/**/*.a11y.test.tsx`, `vitest.config.ts`

---

### Phase 16: Documentation & Runbook
**Goal**: Team knowledge  
**Actions**:
1. Create `CI_CD_RUNBOOK.md` with:
   - How to run tests locally
   - How to debug CI failures
   - Merge process
   - Release checklist
2. Update `README.md` with CI/CD badge
3. Document all scripts and their purpose

**Files to Modify**: Create `CI_CD_RUNBOOK.md`, update `README.md`

---

## Part 5: Risk Assessment

### High-Risk Items (Must Fix Before Redesign)

| Risk | Current State | Impact | Mitigation |
|------|---------------|--------|-----------|
| Type Safety | Disabled | Bugs reach production | Phase 3: Enable strict mode |
| PRs Deploy | Both push & PR trigger deploy | Production broken by PRs | Phase 2: Separate jobs |
| No Tests | Conditional/optional | Regressions missed | Phase 5: Mandatory tests |
| No Branch Protection | Anyone can push | Broken code in main | Phase 6: Enforce checks |
| No ESLint | No rules | Code quality degradation | Phase 4: Add ESLint |

### Medium-Risk Items (Important But Not Blocking)

- Node.js version outdated
- No dependency audit
- No performance monitoring
- No release automation
- No pre-commit hooks

### Low-Risk Items (Nice to Have)

- Bundle analysis
- Documentation
- Accessibility automation
- Semantic versioning

---

## Part 6: Implementation Roadmap

### Recommended Sequence

**Week 1: Foundation**
- Phase 2: CI/CD Architecture Redesign (1-2 days)
- Phase 6: Main Branch Protection (1 day)
- Phase 3: TypeScript Strict Mode (2-3 days)

**Week 2: Code Quality**
- Phase 4: ESLint Configuration (1-2 days)
- Phase 5: Test Coverage Enforcement (1-2 days)
- Phase 13: Code Formatting Validation (1 day)

**Week 3: Security & Performance**
- Phase 7: Dependency Security Scanning (1 day)
- Phase 8: Performance Baseline & Bundle Analysis (1-2 days)
- Phase 9: Observability & Build Artifacts (1 day)

**Week 4: Polish & Automation**
- Phase 11: Pre-commit Hooks (1 day)
- Phase 12: Node.js Version Management (1 day)
- Phase 14: Workflow Concurrency Control (1 day)
- Phase 15: Accessibility Automation (1-2 days)
- Phase 16: Documentation & Runbook (1-2 days)

**Week 5: Optional**
- Phase 10: Semantic Versioning & Release Automation (1-2 days)

---

## Part 7: Dependencies & Blockers

### Phase Dependencies

```
Phase 2 (CI/CD Arch) ──→ Phase 6 (Branch Protection)
         ↓
Phase 3 (TypeScript) ──→ Phase 4 (ESLint) ──→ Phase 5 (Tests)
                           ↓
                       Phase 13 (Format Check)
                           ↓
                       Phase 7 (Security Scan)
                           ↓
                       Phase 8 (Performance) ──→ Phase 9 (Observability)
```

**Critical Path** (minimum viable gates):
1. Phase 2 ✓ (separate PR & deploy)
2. Phase 6 ✓ (branch protection)
3. Phase 3 ✓ (TypeScript strict)
4. Phase 4 ✓ (ESLint)
5. Phase 5 ✓ (test enforcement)

---

## Part 8: Success Metrics

### Pre-Hardening State
- 🔴 Type safety: **0%** (strict=false)
- 🔴 Linting: **0%** (no ESLint)
- 🔴 Tests: **0%** (no test suite)
- 🔴 Branch protection: **None**
- 🔴 Security scanning: **None**
- 🔴 Performance tracking: **None**

### Post-Hardening State (Target)
- ✅ Type safety: **100%** (strict=true, all errors fixed)
- ✅ Linting: **100%** (ESLint passes, no warnings)
- ✅ Test coverage: **>60%** statements
- ✅ Branch protection: **Enforced** (CI green required)
- ✅ Security: **Zero high/critical vulns** (via audit)
- ✅ Performance: **Baseline established** + regression detection
- ✅ CI/CD: **Separate PR/deploy**, atomic builds

---

## Next Steps

**Immediate**:
1. ✅ **Phase 1 Complete**: You're reading this audit report
2. 📋 **Phase 2 Next**: Redesign GitHub Actions workflow
   - Split PR validation from deploy
   - Update `.github/workflows/deploy.yml`
   - Test on a branch before merging to main

**Then**:
3. Phase 3: Enable TypeScript strict mode (fix type errors)
4. Phase 4: Configure ESLint
5. Phase 5: Build test suite

---

## Questions & Follow-Up

**For user clarification**:
- [ ] Confirm deploy target: GitHub Pages (current) OR migrate to Netlify?
- [ ] Server code: Keep as "future-ready" OR remove?
- [ ] Node version: Update to 22 LTS immediately?
- [ ] Test coverage target: 60%? 80%?
- [ ] Which ESLint rules most important for your team?

---

## Appendix A: File Inventory

| File | Purpose | Status |
|------|---------|--------|
| `.github/workflows/deploy.yml` | CI/CD pipeline | ⚠️ Needs redesign |
| `tsconfig.json` | TypeScript config | ❌ Strict mode disabled |
| `package.json` | Scripts & dependencies | ✅ Mostly good |
| `vite.config.ts` | Client build | ✅ Good |
| `vite.config.server.ts` | Server build | ⚠️ Unused |
| `.prettierrc` | Code formatting | ✅ Good |
| `pnpm-lock.yaml` | Frozen dependencies | ✅ Good |
| `netlify.toml` | Deploy config | ⚠️ Not used |
| `server/` | Express backend | ⚠️ Not deployed |
| `client/` | React frontend | ⚠️ No type safety |

---

## Appendix B: Glossary

- **CI/CD**: Continuous Integration / Continuous Deployment
- **Type Safety**: Enforcing static type checking (TypeScript)
- **ESLint**: JavaScript/TypeScript linter (code quality rules)
- **Vitest**: Fast unit test framework for Vite
- **Frozen Lockfile**: `pnpm-lock.yaml` can't be modified during install
- **Branch Protection**: GitHub rules preventing direct pushes to main
- **Bundle Analysis**: Tool to visualize code distribution
- **Pre-commit Hook**: Automation that runs before commits are created
- **Semantic Versioning**: Version numbering (major.minor.patch)

---

**End of Report**

---

> **PHASE 1 COMPLETE**. Ready to proceed to **PHASE 2: CI/CD Architecture Redesign**?
