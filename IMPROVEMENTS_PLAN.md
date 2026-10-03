# 📋 Plano de Ação para o Projeto *My.Portfolio*

> **Objetivo** – Consolidar a entrega já publicada no GitHub Pages e elevar a qualidade de segurança, performance, SEO, acessibilidade, testes e observabilidade do código‑fonte (branch `main`).
> **Escopo** – Implementar as melhorias identificadas, integrar ao workflow existente e garantir que tudo permaneça versionado de forma rastreável.

---

## 1️⃣ Preparação & Estruturação
| Etapa | Descrição | Arquivo(s) Impactado(s) | Observação |
|------|------------|--------------------------|------------|
| **1.1** Criar branch de trabalho | `feature/quality‑upgrades` (ou similar) a partir de `main` | – | Permite revisão independente antes de mesclar. |
| **1.2** Atualizar o workflow CI | Inserir passos para lint, format, testes e publicação automática ao `gh-pages`. | `.github/workflows/deploy.yml` | Evita “surpresa” no pipeline e garante que *todos* os checks rodem. |
| **1.3** Definir variáveis de ambiente | `SENTRY_DSN`, `GA_MEASUREMENT_ID`, etc., no GitHub Secrets. | `.github/workflows/deploy.yml` (pass‑through) | Mantém credenciais fora do código. |

---

## 2️⃣ Segurança – CORS, Rate‑Limit & CSP
| Tarefa | Ações concretas | Onde | Dependências |
|-------|----------------|------|--------------|
| **2.1** Configurar CORS | `app.use(cors({ origin: ['http://localhost:3000', 'https://vihisantos.github.io'] }))` | `server/index.ts` (ou `server.ts`) | `npm i cors` (já presente). |
| **2.2** Aplicar Rate‑Limit | `app.use(rateLimit({ windowMs: 60_000, max: 200, standardHeaders: true, legacyHeaders: false }))` | `server/index.ts` | `npm i express-rate-limit`. |
| **2.3** Definir CSP com Helmet | `helmet.contentSecurityPolicy({ directives: { defaultSrc: ["'self'"], scriptSrc: ["'self'", "https://www.google-analytics.com", "https://www.googletagmanager.com"], styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"], imgSrc: ["'self'", "data:", "https://*.githubusercontent.com"], fontSrc: ["https://fonts.gstatic.com"], connectSrc: ["'self'", "https://www.google-analytics.com"], objectSrc: ["'none'"], upgradeInsecureRequests: [] }, })` | `server/index.ts` | `npm i helmet` (já presente). |
| **2.4** Ativar outras cabeçalhos de segurança | `helmet.hsts()`, `helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' })`, `helmet.xssFilter()`, `helmet.hidePoweredBy()` | `server/index.ts` | Já incluído em `helmet`. |
| **2.5** Testar – usar `curl -I <url>` ou `Postman` para validar cabeçalhos. | – | – | Confirma que as políticas estão ativas antes de merge. |

---

## 3️⃣ Performance – Chunk Splitting & Asset Handling
| Tarefa | Ações | Onde | Comentário |
|-------|------|------|------------|
| **3.1** Manual chunks no Vite | Configurar `rollupOptions.output.manualChunks` (ex.: `vendor`, `ui`, `graphics`). | `vite.config.ts` (ou `vite.config.server.ts`). | Reduz bundles > 500 KB. |
| **3.2** Ajustar `chunkSizeWarningLimit` | Aumentar para 800 KB ou manter 500 KB e observar. | `vite.config.ts`. |
| **3.3** Preload de fontes | `<link rel="preload" as="font" href="https://fonts.gstatic.com/..." crossorigin>` | `client/components/SEO.tsx` (ou `index.html`). |
| **3.4** Revisar assets‑heavy | Avaliar arquivos que ainda excedem 500 KB (ex.: `UILibrary`); considerar **dynamic import** ou **svg → webp**. | Diretório `assets/`. |
| **3.5** Cache‑Control para assets | No `express.static` definir `Cache‑Control: public, max-age=31536000, immutable` para `/assets/*`. | `server/index.ts`. |

---

## 4️⃣ SEO & Social – Open Graph, Twitter Cards, hreflang & Sitemap
| Tarefa | Ações | Onde | Observação |
|-------|------|------|------------|
| **4.1** Inserir OG/Twitter meta‑tags | `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`. | `client/components/SEO.tsx` (gerador de `<Helmet>`). | Utilizar valores já presentes no `package.json`/`README`. |
| **4.2** Hreflang para idiomas | Gerar `<link rel="alternate" hreflang="pt" href="…">` e `hreflang="en"`. | `SEO.tsx`. |
| **4.3** Sitemap multilíngue | Modificar `scripts/generate-sitemap.mjs` para incluir `/en/…` e `/pt/…`. | `scripts/generate-sitemap.mjs`. |
| **4.4** Validar com Google Search Console | Subir sitemap, testar “Rich Results”. | – |
| **4.5** Atualizar `robots.txt` (se necessário) | Garantir que não bloqueie recursos importantes. | `public/robots.txt`. |

---

## 5️⃣ Acessibilidade (A11Y)
| Tarefa | Ações | Onde | Ferramentas |
|-------|------|------|-------------|
| **5.1** Verificar contraste de cores | Lighthouse → “Contrast ratio”. Ajustar variáveis Tailwind se falhar. | Arquivos CSS/Tailwind (`tailwind.config.ts`). |
| **5.2** Garantir foco visível | Em todos os botões/links (`:focus-visible` ou `focus:ring`). | Componentes UI (ex.: `Button`, `SocialHub`). |
| **5.3** `lang` dinâmico | Alterar `<html lang="pt-BR">` via `react-helmet-async` conforme idioma selecionado. | `SEO.tsx` ou `App.tsx`. |
| **5.4** ARIA avançado | Revisar `aria-label` de ícones, `role="button"` nos elementos custom, validar com **axe**. | Componentes custom (`SpotifyWidget`, `SocialHub`). |
| **5.5** Teste automatizado de a11y | Integrar `jest-axe` ou `cypress-axe` nos testes. | `tests/` (criar). |

---

## 6️⃣ Testes, Lint & Formatação
| Tarefa | Ações | Onde | Comentário |
|-------|------|------|-----------|
| **6.1** Criar testes unitários – Vitest | Cobrir componentes críticos (`SpotifyWidget`, `SocialHub`, formulários). | `client/**/*.test.tsx`. |
| **6.2** Testes de integração (e2e) | **Cypress** ou **Playwright** para fluxo “abrir widget → trocar música”. | `cypress/` ou `tests/e2e/`. |
| **6.3** Lint & prettier – ESLint + Prettier | Configurar `eslint.config.js` (ou `.eslintrc.json`) com regras da comunidade. | Raiz do projeto. |
| **6.4** Integrar ao workflow | Passos: `pnpm lint && pnpm format.fix && pnpm test`. | `.github/workflows/deploy.yml`. |
| **6.5** Cobertura de código | Adicionar `c8` ou `vitest --coverage`. | `package.json` scripts. |

---

## 7️⃣ Observabilidade – Sentry & Web‑Vitals
| Tarefa | Ações | Onde | Observação |
|-------|------|------|------------|
| **7.1** Instalar Sentry (`@sentry/react`, `@sentry/tracing`) | Configurar `Sentry.init({ dsn: process.env.SENTRY_DSN, integrations: [...] })`. | `client/index.tsx` (ou `App.tsx`). |
| **7.2** Envolver raiz com `<Sentry.ErrorBoundary>` | Captura global de exceções. | `client/App.tsx`. |
| **7.3** Reportar métricas de performance | `web-vitals` já importado; enviar a Sentry ou ao GA. | `client/utils/webVitals.ts`. |

---

## 8️⃣ PWA – Manifest & Service Worker
| Tarefa | Ações | Onde | Nota |
|-------|------|------|------|
| **8.1** Criar `manifest.json` | Nome, short_name, start_url (`/`), display (`standalone`), cores, ícones (128‑512 px). | `public/manifest.json`. |
| **8.2** Registrar Service Worker – Workbox | `vite-plugin-pwa` ou `workbox-webpack-plugin`. | `vite.config.ts`. |
| **8.3** Atualizar `<link rel="manifest">` | No `SEO.tsx` ou `index.html`. |
| **8.4** Testar PWA – Lighthouse “Progressive Web App” | Verifica installability, cache, offline. |

---

## 9️⃣ Documentação & Comunicação
| Tarefa | Ações | Onde | Dicas |
|-------|------|------|------|
| **9.1** Atualizar `README.md` | Incluir sessão “Deploy & CI/CD”, instruções para rodar localmente, explicação das novas variáveis (`SENTRY_DSN`, `GA_MEASUREMENT_ID`). |
| **9.2** Gerar `CHANGELOG.md` | Registrar cada commit de melhoria (CORS, CSP, SEO, etc.) usando **Conventional Commits**. |
| **9.3** Adicionar seção “Contributing” | Guia de lint, testes, PR. |

---

## 📅 Cronograma Sugerido (Estimativa)

---

## 🚨 PHASE 0: CI/CD INFRASTRUCTURE HARDENING (NEW - PRIORITY)

> **Status**: ACTIVE  
> **Rationale**: Professional portfolios require bulletproof CI/CD before visual redesign  
> **Constraint**: NO visual/UX changes during this phase  

### Deliverables
- ✅ CI/CD Audit Report (complete) → `CI_CD_AUDIT_REPORT.md`
- Phase 2-16: Implement 16 hardening phases

### Key Decisions Made
- Deploy target: **GitHub Pages** (consolidate on current)
- Server code: **Keep as "future-ready"** (unused but configured)
- Node version: **Upgrade to 22 LTS** during Phase 12
- Test coverage: **Target 60%** minimum

### Critical Gaps Identified
1. ❌ PRs and Deploy conflated (same job)
2. ❌ TypeScript `strict: false` (type safety disabled)
3. ❌ No ESLint (linting rules missing)
4. ❌ Tests optional (not enforced)
5. ❌ No branch protection on main
6. ❌ No security scanning (dependencies)
7. ❌ No performance baseline
8. ❌ No observability/tracing

### Next Phase (Phase 2)
**CI/CD Architecture Redesign** - Separate PR validation from production deploy
- Split single job into two: `pr-validate` (build only) and `deploy` (build + push)
- Update GitHub Actions workflow
- Add concurrency rules
- Change runner to `ubuntu-latest`

---


| Semana | Foco | Tarefas Principais |
|--------|------|--------------------|
| **1** | Segurança | 2.1‑2.5 (CORS, Rate‑Limit, CSP, HSTS). |
| **2** | Performance | 3.1‑3.5 (Chunk‑splitting, preload, cache‑control). |
| **3** | SEO & Social | 4.1‑4.5 (OG tags, hreflang, sitemap multilíngue). |
| **4** | Acessibilidade | 5.1‑5.5 (Contraste, foco, ARIA, testes a11y). |
| **5** | Testes & CI | 6.1‑6.5 (Vitest, Cypress, lint, CI steps). |
| **6** | Observabilidade | 7.1‑7.3 (Sentry, Web‑Vitals). |
| **7** | PWA | 8.1‑8.4 (manifest, service worker). |
| **8** | Docs & Final Checks | 9.1‑9.3, auditoria completa (Lighthouse, Search Console). |
| **9** | Release | Merge `feature/quality-upgrades` → `main`, tag `vX.X.X`, CI publica `gh-pages`. |

> Cada semana pode ser adaptada ao ritmo da equipe. As tarefas são independentes e podem ser paralelizadas (ex.: 5 e 6 podem acontecer simultaneamente).

---

## ❓ Perguntas de Clarificação (para refinar o plano)
1. **Qual provedor de observabilidade prefere?** (Sentry já citado, ou apenas GA Web‑Vitals?).
2. **Quais idiomas precisam suportar o site?** Apenas `pt` e `en` ou há outros?
3. **Deseja que o Service Worker faça precaching de rotas dinâmicas (ex.: API) ou somente assets estáticos?**
4. **Existe um padrão de commit que a equipe segue?** (ex.: Conventional Commits) – ajudará a gerar o `CHANGELOG`.
5. **Algum requisito de acessibilidade específico (WCAG 2.2 AAA, ou apenas AA)?**
6. **Qual nível de cobertura de testes deseja?** 80 %? 90 %?

> Responder a essas perguntas permitirá ajustar o escopo e priorizar corretamente. Quando estiver pronto, podemos iniciar a implementação!