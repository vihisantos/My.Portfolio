# TypeScript Strict Mode Errors — Cataloging

**Date**: Phase 2 Implementation  
**Total Errors**: 158 in 121 files  
**Status**: Cataloging + Incremental Fix

---

## Error Breakdown

### Critical Errors (Type-Related, Not Auto-Fixable)

1. **MagicBentoContent.tsx:347** (1 error)
   - Type: RefObject mismatch with LegacyRef
   - Severity: 🔴 CRITICAL
   - Fix: Type assertion or refactor ref usage
   - Lines: 347

### Low-Priority Errors (Unused Imports/Variables)

2. **Unused React Imports** (110+ errors)
   - Pattern: `import React from 'react'` not used (due to JSX pragma)
   - Files: Most .tsx files in ui-library/
   - Severity: 🟡 MEDIUM (auto-fixable)
   - Fix: Remove unused `import React`

3. **Unused Icon Imports** (20+ errors)
   - Pattern: Icons imported but not rendered
   - Examples: MessageSquare, Briefcase, User, Info, Share2, Laptop, etc.
   - Severity: 🟡 MEDIUM
   - Fix: Remove unused icons from import

4. **Unused Function Parameters** (5+ errors)
   - Pattern: `req` in demo.ts, `mode` in vite.config.ts
   - Severity: 🟠 LOW
   - Fix: Prefix with `_` or remove

5. **Unused Variables** (10+ errors)
   - Examples: `theme`, `language`, `code`, `handleCopy`, etc.
   - Severity: 🟠 LOW
   - Fix: Remove or use

6. **Unused Type Definitions** (1 error)
   - Example: `interface Skill` in SkillChart.tsx
   - Severity: 🟠 LOW
   - Fix: Remove or use

---

## Strategy: Incremental Fix

### Phase 1: Auto-Fixable (90% of errors)
- Remove unused React imports (JSX pragma enabled)
- Remove unused icon imports
- Remove unused variables
- **Tool**: Regex + manual file updates
- **Time**: ~2-3 hours

### Phase 2: Manual Fixes (10% of errors)
- RefObject/LegacyRef type fix
- Parameter prefixing (_mode, _req)
- **Time**: ~1-2 hours
- **Total**: ~3-5 hours to reach clean typecheck

---

## Files Priority (By Error Count)

### Tier 1: Many Errors (>1)
- UILibrary.tsx (11)
- Navigation.tsx (9)
- Index.tsx (4)
- CapybaraHolding.tsx (2)
- Documentation.tsx (2)
- NotFound.tsx (2)
- MagicBentoContent.tsx (1 critical)

### Tier 2: Moderate Errors
- Various ui-library components (1 each): 70+ files

### Tier 3: Few Errors
- Pages & other (1 each): 10+ files
- Server & config (1 each): 2 files

---

## Action Items

- [ ] Tier 1: Fix high-error files first
  - [ ] UILibrary.tsx
  - [ ] Navigation.tsx
  - [ ] Index.tsx
  - [ ] Fix MagicBentoContent.tsx (critical type error)

- [ ] Tier 2: Batch process ui-library components
  - [ ] Remove React imports from ~70 files
  - [ ] Remove unused icon imports

- [ ] Tier 3: Quick fixes
  - [ ] Prefix unused parameters
  - [ ] Remove unused variables
  - [ ] Verify typecheck passes

---

## Next Step

Implement fixes incrementally, starting with **MagicBentoContent.tsx** (the only critical type error), then batch process the rest.

