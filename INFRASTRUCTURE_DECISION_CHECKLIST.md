# 🎯 Infrastructure Hardening - Decision Checklist

**Before proceeding to Phase 2**, please review and confirm these decisions:

---

## Decision 1: Deploy Target Strategy

### Current Situation
- ✅ **Active**: GitHub Pages deployment (via GitHub Actions)
- ⚠️ **Inactive**: Netlify config (`netlify.toml`) exists but not used
- ⚠️ **Inactive**: Server build configured but not deployed

### Your Options

**Option A: Consolidate on GitHub Pages** ✅ RECOMMENDED
```
Benefits:
- Simple: Static host, no backend complexity
- Current: Already working
- Free: GitHub Pages included with repo
- Low maintenance: No provider switching

Action:
1. Delete: netlify.toml
2. Delete: vite.config.server.ts
3. Remove: server/* build logic
4. Keep: Focus on client-only optimization

Timeline: 30 minutes (cleanup only)
```

**Option B: Migrate to Netlify** (with full backend)
```
Benefits:
- Serverless functions: Express can run
- Environment management: Better secrets handling
- Monitoring: Netlify built-in observability

Costs:
- Migration time: 2-3 hours
- Learning curve: Netlify Functions different from Express
- Ongoing: Netlify account + monitoring

Action:
1. Rewrite workflow to use netlify-cli
2. Update netlify.toml configuration
3. Configure environment variables in Netlify UI
4. Deploy server to Functions
5. Update deploy job in GitHub Actions

Timeline: 3-4 hours (complex)
```

**Option C: Keep Both (Not Recommended)**
```
Downsides:
- Configuration debt: Two deploy paths
- Maintenance burden: Update both configs
- Confusion: Which is active?
- Waste: Dead code in repo

Not recommended for professional hardening.
```

### → **Your Decision**:
- [ ] **A: GitHub Pages (static, current)**
- [ ] **B: Netlify (serverless backend)**
- [ ] **Clarification needed** (ask below)

---

## Decision 2: Server Code Status

### Current Situation
```
vite.config.server.ts builds to dist/server/
Express app configured in server/
But: Nothing actually runs it (GitHub Pages is static)
```

### Your Options

**Option A: Remove Server Code** ✅ IF CHOSE GITHUB PAGES
```
Action:
1. Delete: vite.config.server.ts
2. Delete: server/ directory
3. Update: package.json (remove build:server)
4. Remove: "start" script

Result: 
- Cleaner codebase
- No dead code
- Smaller artifact

Timeline: 30 minutes
```

**Option B: Keep Server "Future-Ready"** ✅ IF UNSURE
```
Action:
1. Leave vite.config.server.ts
2. Leave server/ directory
3. Add comment: "Future: Use if migrating to serverless"
4. Don't deploy it (yet)

Result:
- Can migrate to Netlify/Vercel later
- Current codebase preserved
- Slight maintenance cost

Timeline: None (keep as-is)
```

**Option C: Migrate to Node.js Host** (complex)
```
Requires:
1. Rewrite GitHub Actions deploy
2. Choose host: Vercel, Railway, DigitalOcean
3. Configure environment
4. Migrate secrets
5. Update DNS/routing

Timeline: 4-6 hours
Not recommended in this phase.
```

### → **Your Decision**:
- [ ] **A: Remove server code (GitHub Pages only)**
- [ ] **B: Keep server code (future-ready)**
- [ ] **Clarification needed** (ask below)

---

## Decision 3: Node.js Version

### Current Situation
```
Pinned: Node 20 (in GitHub Actions workflow)
LTS: Node 22 (available now)
```

### Your Options

**Option A: Upgrade to Node 22 LTS Now** ✅ RECOMMENDED
```
Benefits:
- Future-proof: LTS support until 2027
- Performance: Improvements in V8
- Security: Latest patches
- Alignment: Most projects using 22 by 2025

Action:
1. Update .github/workflows/deploy.yml: node-version: '22'
2. Update vite.config.server.ts: target: 'node22' (already done)
3. Test locally with Node 22
4. If issues, add comment and revert

Timeline: 1 day (includes testing)
Phase: Part of Phase 12
```

**Option B: Keep Node 20 (Conservative)**
```
Rationale:
- Stability: 20 still supported until April 2026
- No rush: Can upgrade in Q2 2025
- Risk minimization: Avoid potential Node 22 issues

Downside:
- Less future-proof
- Missing performance gains
- Migration tax later

Timeline: Save for Phase 12
```

### → **Your Decision**:
- [ ] **A: Upgrade to Node 22 LTS (do in Phase 12)**
- [ ] **B: Keep Node 20 (defer upgrade)**
- [ ] **Clarification needed** (ask below)

---

## Decision 4: Test Coverage Target

### Current Situation
```
Tests: 0 (no test files exist)
Coverage: 0%
```

### Your Options

**Option A: 60% Coverage (Realistic)** ✅ RECOMMENDED
```
Target: 60% of statements covered
Time: 3-5 days to build suite
What: Cover critical paths + components

Examples:
- SpotifyWidget: fetch, render, error states
- SocialHub: link generation, icons
- Form validation: Zod schemas
- Utility functions: formatters, helpers

Pros:
- Achievable quickly
- Catches regressions
- Team morale: "we test"

Cons:
- Edge cases missed
- Some untested code
```

**Option B: 80% Coverage (Ambitious)**
```
Target: 80% of statements covered
Time: 2-3 weeks
What: Comprehensive coverage, edge cases

Pros:
- High confidence
- Catches subtle bugs
- Industry standard

Cons:
- Time-consuming
- Diminishing ROI past 80%
- Difficult to maintain
```

**Option C: 100% Coverage (Perfectionistic)**
```
Not recommended:
- Typically waste of time
- Impossible dead code always exists
- Slows development
- Test maintenance burden exceeds value
```

### → **Your Decision**:
- [ ] **A: 60% coverage (quick, realistic)**
- [ ] **B: 80% coverage (ambitious)**
- [ ] **Clarification needed** (ask below)

---

## Decision 5: ESLint Strictness Level

### Current Situation
```
ESLint: Not configured
Linting: 0 rules enforced
```

### Your Options

**Option A: Balanced (Team Productivity)** ✅ RECOMMENDED FOR PORTFOLIO
```
Includes:
- React best practices
- TypeScript rules
- No console/debugger in production
- Sorting imports
- No unused variables

Excludes:
- Complexity rules (too strict)
- Line length limits (subjective)
- Comment requirements
- Naming conventions

Config: eslint-plugin-react, @typescript-eslint

Pros:
- Catches real bugs
- Doesn't slow development
- Accepted industry standard

Time to fix: 1-2 hours
```

**Option B: Strict (High Quality, Slower)**
```
Includes:
- All balanced rules
- Complexity limits (cyclomatic complexity)
- File size limits
- Naming conventions
- Comment documentation
- Line length limits

Pros:
- Very high code quality
- Consistent style
- Educational

Cons:
- Takes 3-5 hours to fix
- Can feel pedantic
- Slows development

Time to fix: 3-5 hours
```

**Option C: Maximum Strictness (AirBnB Style)**
```
Includes:
- All strict rules
- AirBnB preset
- No implicit returns
- No underscore in names
- No certain patterns

Pros:
- Industry-standard
- Very consistent

Cons:
- Takes 6-8 hours to fix
- Very opinionated
- Requires buy-in from team

Time to fix: 6-8 hours
```

### → **Your Decision**:
- [ ] **A: Balanced (recommended)**
- [ ] **B: Strict (high quality)**
- [ ] **C: Maximum/AirBnB (industry standard)**
- [ ] **Clarification needed** (ask below)

---

## Summary Matrix

| Decision | Option | Timeline | Impact | Your Choice |
|----------|--------|----------|--------|-------------|
| Deploy Target | GitHub Pages (A) / Netlify (B) | 0.5h / 4h | Major | [ ] |
| Server Code | Remove (A) / Keep (B) | 0.5h / 0h | Minor | [ ] |
| Node Version | Upgrade to 22 (A) / Keep 20 (B) | 1d / 0d | Low | [ ] |
| Test Coverage | 60% (A) / 80% (B) | 5d / 15d | High | [ ] |
| ESLint Level | Balanced (A) / Strict (B) / Max (C) | 2h / 5h / 8h | High | [ ] |

---

## Next Steps

1. **Fill Out This Checklist** ← You are here
   - [ ] Select each option (A, B, or C)
   - [ ] Ask clarifying questions if needed

2. **Confirm Your Choices**
   - [ ] Send back filled checklist
   - [ ] Confirm all decisions lock in

3. **Phase 2 Begins**
   - Redesign GitHub Actions workflow based on your deploy target choice
   - Estimated time: 1-2 days
   - Critical for unblocking visual redesign

---

## Questions?

**Unclear on any decision?** Add your question below:

- [ ] Question about deploy targets? (Ask here)
- [ ] Question about server code? (Ask here)
- [ ] Question about Node version? (Ask here)
- [ ] Question about test coverage? (Ask here)
- [ ] Question about ESLint? (Ask here)

---

## Important Reminders

✅ **This Phase Only**: Infrastructure decisions  
❌ **NOT Yet**: Visual design, content, UX changes  

✅ **After Phase 2-6**: Critical infrastructure locked in  
✅ **Then**: We can safely redesign the visual portfolio  

✅ **Timeline**: These 5 decisions determine Week 1 timeline  
- All option A selections: ~1-2 days
- Mixed selections: ~3-4 days
- Option B/C selections: ~5-7 days

---

**Please fill out this checklist and confirm. I'll then proceed to Phase 2 based on your decisions.** ✨

