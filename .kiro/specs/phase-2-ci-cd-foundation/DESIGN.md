# Phase 2: CI/CD Foundation — Design

**Objective**: Establish professional CI/CD quality gates through ESLint error resolution and workflow validation.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│         CI/CD Quality Gate Pipeline                  │
└─────────────────────────────────────────────────────┘

PR FLOW:
  Developer → Push to branch
     ↓
  GitHub Actions (PR event)
     ↓
  validate job:
    ├─ Prettier --check (no mutations)
    ├─ ESLint (code quality)
    ├─ TypeScript (type safety)
    ├─ pnpm audit (security)
    ├─ Tests (functional validation)
    └─ Build (compilation)
     ↓
  CI Status: ✅ GREEN or ❌ RED
     ↓
  Block merge if RED ← (branch protection)

MAIN FLOW (push to main):
  Merge PR to main
     ↓
  GitHub Actions (push event)
     ↓
  validate job (same as PR)
     ↓
  deploy job (only if validate ✅)
    ├─ Build
    └─ Deploy to gh-pages
     ↓
  Live at: https://vihisantos.github.io/My.Portfolio

BLOCKED (what we prevent):
  ❌ PR deployments (validate job has no deploy step)
  ❌ Invalid code reaching main (branch protection + CI)
  ❌ Deployment without validation (deploy job depends on validate)
```

---

## Component Breakdown

### 1. ESLint Error Resolution

**Problem**: 17 ESLint errors prevent CI from passing

**Categories**:

#### 1.1 `__dirname` Not Defined (4 errors)
**Files**: 
- `vite.config.ts`
- `vite.config.server.ts`

**Root Cause**: 
Vite config files run in Node.js context but don't have `__dirname` in ES modules.

**Solution Approach**:
```javascript
// Option A: Use import.meta
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Option B: Conditionally define (if used)
const __dirname = typeof process !== 'undefined' 
  ? path.dirname(fileURLToPath(import.meta.url))
  : '.'
```

**Decision**: Use Option A (import.meta.url) — most modern and portable.

---

#### 1.2 `require()` Usage (1 error)
**File**: `tailwind.config.ts:93`

**Root Cause**: 
ESLint rule `@typescript-eslint/no-require-imports` forbids require() in ES modules.

**Current Code**:
```javascript
require("tailwindcss-animate")
```

**Solution Approach**:
```javascript
// Option A: Convert to ES import
import "tailwindcss-animate"

// Option B: ESLint override (if must use require)
// require("tailwindcss-animate") // eslint-disable-line @typescript-eslint/no-require-imports
```

**Decision**: Use Option A (ES import) — better for ESLint compliance and module consistency.

---

#### 1.3 Unused Imports (12 errors)
**Pattern**: Icons, components, types imported but not used in file

**Root Cause**: 
ESLint rule `@typescript-eslint/no-unused-vars` catches imports that aren't referenced.

**Solution Approach**:

For each unused import:
1. Verify it's truly not used (search for all occurrences)
2. Remove if not used
3. OR prefix with `_` if intentionally unused (e.g., `_Icon`)
4. OR add ESLint disable comment if special case

**Decision**: Remove genuinely unused imports; prefix with `_` if intentional.

---

### 2. Validation Pipeline Structure

**Current Configuration** (`.github/workflows/deploy.yml`):

```yaml
name: Build & Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  validate:
    name: Validate Code Quality
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 10.14.0
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "pnpm"
      
      - run: pnpm install --frozen-lockfile
      
      # Format Check (no mutations)
      - name: Check code formatting
        run: pnpm format --check
      
      # Linting (code quality)
      - name: Run ESLint
        run: pnpm lint
      
      # Type Safety
      - name: Run TypeScript typecheck
        run: pnpm typecheck
      
      # Security Scan
      - name: Audit dependencies
        run: pnpm audit --prod
      
      # Tests
      - name: Run tests
        run: pnpm test
      
      # Build
      - name: Build project
        run: pnpm build
  
  deploy:
    name: Deploy to GitHub Pages
    needs: validate          # ← Depends on validate passing
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'  # ← Only on main
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 10.14.0
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "pnpm"
      
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/spa
```

**Key Design Points**:
- Two jobs: `validate` (PR + main) and `deploy` (main only)
- `deploy` has `needs: validate` dependency
- `validate` runs on both PR and push; `deploy` only on main after validate passes
- Concurrency group prevents duplicate builds
- Read-only permissions for validate; write permissions for deploy

---

### 3. Success Validation

**Metrics**:
1. ESLint passes: `pnpm lint` exit code 0, zero errors
2. CI green: All 6 validation steps pass in GitHub Actions
3. No PR deployments: PRs don't touch gh-pages branch
4. Deployment gates work: Main push only deploys if validate passes

---

## Implementation Tasks

### Phase 2A: Fix ESLint Errors

1. **Fix `__dirname` in Vite configs**
   - Add `import { fileURLToPath } from 'url'` to both files
   - Add `const __dirname = path.dirname(fileURLToPath(import.meta.url))`
   - Update references to use computed `__dirname`

2. **Fix `require()` in Tailwind config**
   - Convert `require("tailwindcss-animate")` to ES import

3. **Fix unused imports**
   - Identify each unused import via ESLint output
   - Remove or rename with underscore prefix
   - Verify no functionality broken

4. **Run `pnpm lint`**
   - Verify all 17 errors resolved
   - Check for new warnings (can be addressed separately)

---

### Phase 2B: Test & Verify

1. **Create PR from feature branch**
   - Push changes to branch
   - Create PR against main
   - Observe CI validation running

2. **Verify PR doesn't deploy**
   - Wait for CI to complete
   - Confirm gh-pages branch unchanged
   - Verify PR shows green CI status

3. **Merge PR to main**
   - Merge changes
   - Observe validate job + deploy job sequence

4. **Verify deployment succeeds**
   - Check deploy job completion
   - Confirm live site updated
   - Verify correct build deployed

---

## Configuration Changes

### Files Modified

1. **vite.config.ts**
   - Add fileURLToPath import
   - Add __dirname computation
   - No logic changes, just enabling ESLint pass

2. **vite.config.server.ts**
   - Add fileURLToPath import
   - Add __dirname computation

3. **tailwind.config.ts**
   - Change require() to ES import

4. **Client/server components** (as needed)
   - Remove unused imports
   - Prefix intentional unused imports with underscore

---

## Risk Mitigation

**Risk**: Removing imports breaks functionality
**Mitigation**: 
- Search codebase for all references before removing
- Test build after each change
- Run tests to verify no regressions

**Risk**: `__dirname` computation doesn't work in dev environment
**Mitigation**:
- Use `import.meta.url` which is standard in Node.js ES modules
- Test locally with `pnpm dev` before committing

**Risk**: ESLint continues to fail after fixes
**Mitigation**:
- Carefully follow ESLint output for exact line/column numbers
- Use `pnpm lint --fix` for safe auto-fixes first
- Manual review of remaining issues

---

## Success Criteria

- [ ] `pnpm lint` returns exit code 0
- [ ] ESLint output shows "0 errors, N warnings"
- [ ] GitHub Actions workflow shows ✅ for all validate steps
- [ ] PR created and shows green CI status
- [ ] PR doesn't deploy to gh-pages
- [ ] Main branch deploy succeeds and goes live
- [ ] PHASE_2_STATUS.md shows "COMPLETE"

