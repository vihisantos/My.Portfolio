import{j as e,a3 as g}from"./ui-yGusNLVf.js";import{S as b}from"./SEO-Qm9oUlZ5.js";import{u as x}from"./index-BmdWvkIt.js";import{L as f}from"./vendor-CsjJJW-d.js";import"./framer-Cte30bYD.js";const y=`
# Professional Portfolio — Capybara Holding

<p align="center">
  <strong>Engineering the pulse of the digital ecosystem.</strong>
  <br>
  Portfolio oficial da Capybara Holding — uma vitrine de engenharia premium,
  <br>
  design de alta fidelidade e produtos digitais com alma.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js">
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages">
</p>

---

## Sobre

Este repositorio e o portfolio flagship da Capybara Holding, uma iniciativa que reune produtos digitais de alto nivel — de plataformas educacionais gamificadas a ferramentas de inteligencia de cores, aplicacoes desktop e componentes de UI premium.

Cada projeto aqui reflete os principios da Holding: engenharia precisa, design com alma e experiencia do usuario impecavel.

---

## Tech Stack

### Frontend

| Tecnologia | Proposito |
|---|---|
| **React 18** | Biblioteca de interface |
| **TypeScript** | Tipagem estatica em toda a codebase |
| **Vite 7** | Build tool e dev server |
| **React Router 6** | Roteamento SPA |
| **Tailwind CSS 3** | Estilizacao utilitaria |
| **Framer Motion** | Animacoes e transicoes fisicas |
| **Radix UI** | Componentes primitivos acessiveis (Dialog, Dropdown, Tabs, Toast, etc.) |
| **Three.js + React Three Fiber + Drei** | Renderizacao 3D interativa |
| **GSAP** | Animacoes de alta performance |
| **Lucide React** | Iconografia |
| **React Helmet Async** | Gerenciamento de meta tags e SEO |
| **Recharts** | Graficos e visualizacao de dados |
| **React Hook Form + Zod** | Formularios e validacao |
| **TanStack React Query** | Gerenciamento de estado servidor |
| **Styled Components** | Estilizacao CSS-in-JS |
| **Embla Carousel** | Carrossel performatico |
| **Sonner** | Notificacoes toast |
| **date-fns** | Manipulacao de datas |
| **jsPDF** | Geracao de PDF |
| **next-themes** | Tema dark/light |
| **cmdk + vaul + input-otp + react-day-picker** | Componentes especializados |
| **class-variance-authority + clsx + tailwind-merge** | Utilitarios de classe |

### Backend (Integrado)

| Tecnologia | Proposito |
|---|---|
| **Express 5** | Servidor HTTP |
| **Helmet** | Seguranca (headers) |
| **express-rate-limit** | Rate limiting |
| **cors** | Cross-origin requests |
| **dotenv** | Variaveis de ambiente |
| **serverless-http** | Deploy serverless |

### Infraestrutura & Ferramentas

| Tecnologia | Proposito |
|---|---|
| **GitHub Pages** | Deploy estático |
| **Docker** | Containerizacao |
| **Vitest** | Testes unitarios |
| **Prettier** | Formatacao de codigo |
| **pnpm** | Gerenciador de pacotes |

---

## Projetos no Portfolio

### ColorFlicks
Ferramenta cinematica de extracao de paletas de cores a partir de posters de filmes.
- **Stack:** React 18, Vite, Tailwind CSS v4, ColorThief, TVMaze API
- **Destaques:** Extracao client-side, suporte biligue (EN/PT), modo escuro/claro, compartilhamento social com html2canvas

### CapyFlow Academy
Plataforma de ensino gamificada focada em desenvolvimento de software.
- **Stack:** Next.js 16, NestJS 11, TypeScript, Tailwind CSS v4, PostgreSQL, Firebase
- **Destaques:** Editor Monaco ao vivo, autenticacao hibrida Firebase + JWT, sistema de XP e niveis

### Mizin Youtube App
Aplicacao desktop para download de audio/video do YouTube.
- **Stack:** Python, CustomTkinter, yt-dlp
- **Destaques:** Interface moderna, multiplas qualidades, modo portatil

---

## Estrutura do Projeto

\`\`\`
My.Portfolio/
  client/                  Frontend React SPA
    pages/                 Componentes de rota
    components/            Componentes reutilizaveis
      ui/                  Biblioteca de componentes Radix UI
    contexts/              Contextos React (ThemeContext)
    hooks/                 Custom hooks
    lib/                   Utilitarios e servicos
    data/                  Dados estaticos
    assets/                Imagens e assets bundlados
    App.tsx                Entry point + rotas
    global.css             Tema Tailwind e estilos globais
  server/                  Backend API Express
    index.ts               Configuracao do servidor
    routes/                Manipuladores de API
    node-build.ts          Build para producao
  shared/                  Tipos compartilhados
    api.ts                 Interfaces de API
  public/                  Assets estaticos
  dist/                    Build de producao
\`\`\`

---

## Arquitetura

\`\`\`
[Cliente React SPA] ---- fetch /api/* ---- [Servidor Express]
       |                                          |
       | React Router 6                    Helmet + Rate Limit
       | Framer Motion                     Rotas da API
       | Radix UI + Tailwind               Tipos compartilhados
       v                                          v
[GitHub Pages Deploy]                             [Serverless / Docker]
\`\`\`

Desenvolvimento em porta unica (8080) com integracao Vite + Express, hot reload completo e tipos compartilhados entre frontend e backend via alias \`@shared/*\`.

---

## Componentes de Destaque

- **FunMetrics** — Dashboard animado com estatisticas (Cafe, Codigo, Bugs)
- **SpotifyWidget** — Player de musica simulado com playlist interna e visualizador de audio
- **Interactive Playground** — Area com fisica de icones arrastaveis (framer-motion)
- **Timeline Expandida** — Linha do tempo com multiplos tipos de eventos (Educacao, Trabalho, Livros)
- **PageLoadingWrapper** — Transicoes suaves entre rotas com loader animado
- **Sponsorship System** — Sistema de patrocinio com 3 tiers e Wall of Fame
- **Capybara Holding Page** — Pagina institucional com visao, missao e servicos

---

<p align="center">
  <br>
  <sub>Desenvolvido por <a href="https://capybaraholding.com.br" target="_blank"><strong>Capybara Holding</strong></a></sub>
  <br>
  <sub>&copy; 2026 Capybara Holding. Todos os direitos reservados.</sub>
</p>
`,v=({content:l})=>{const u=l.split(`
`),i=[];let r=[],c=!1,d=[];const h=(t,s)=>{if(t.trim().startsWith("```")){c?(i.push(e.jsx("div",{className:"my-4 bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto font-mono text-sm shadow-inner border border-zinc-800",children:e.jsx("pre",{children:e.jsx("code",{children:d.join(`
`)})})},`code-${s}`)),d=[],c=!1):c=!0;return}if(c){d.push(t);return}const a=t.match(/!\[(.*?)\]\((.*?)\)/);if(a){let o=a[2];if(o.startsWith("public/")){const n=o.replace("public/","");o=`${"/My.Portfolio/".endsWith("/")?"/My.Portfolio/".slice(0,-1):"/My.Portfolio/"}${n.startsWith("/")?n:"/"+n}`}else!o.startsWith("http")&&!o.startsWith("/")&&(o="/"+o);i.push(e.jsxs("div",{className:"my-6",children:[e.jsx("img",{src:o,alt:a[1],loading:"lazy",decoding:"async",className:"rounded-xl shadow-lg border border-black/10 dark:border-white/10 w-full max-w-3xl mx-auto"}),a[1]&&e.jsx("p",{className:"text-center text-sm text-custom-gray mt-2 italic",children:a[1]})]},`img-${s}`));return}if(t.startsWith("# ")){i.push(e.jsx("h1",{className:"text-4xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block",children:t.replace("# ","")},`h1-${s}`));return}if(t.startsWith("## ")){i.push(e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-border",children:t.replace("## ","")},`h2-${s}`));return}if(t.startsWith("### ")){i.push(e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-2",children:t.replace("### ","")},`h3-${s}`));return}if(t.trim()==="---"){i.push(e.jsx("hr",{className:"my-8 border-border"},`hr-${s}`));return}if(t.trim().startsWith("- ")){const o=t.trim().substring(2);r.push(e.jsx("li",{className:"ml-4 pl-2 border-l-2 border-primary/50",children:p(o)},`li-${s}`));return}else r.length>0&&(i.push(e.jsx("ul",{className:"space-y-2 my-4 pl-4",children:[...r]},`ul-${s}`)),r=[]);t.trim()!==""&&i.push(e.jsx("p",{className:"leading-relaxed mb-4 text-custom-gray dark:text-zinc-300",children:p(t)},`p-${s}`))},p=t=>t.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\)|`.*?`)/g).map((a,o)=>{if(a.startsWith("**")&&a.endsWith("**"))return e.jsx("strong",{className:"font-bold text-foreground",children:a.slice(2,-2)},o);if(a.startsWith("*")&&a.endsWith("*"))return e.jsx("em",{className:"italic",children:a.slice(1,-1)},o);if(a.startsWith("`")&&a.endsWith("`"))return e.jsx("code",{className:"px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-primary",children:a.slice(1,-1)},o);const n=a.match(/\[(.*?)\]\((.*?)\)/);if(n){const m=n[2].startsWith("http");return e.jsx("a",{href:n[2],className:"text-primary hover:underline underline-offset-4 decoration-primary/30",target:m?"_blank":void 0,rel:m?"noopener noreferrer":void 0,children:n[1]},o)}return a});return u.forEach((t,s)=>h(t,s)),r.length>0&&i.push(e.jsx("ul",{className:"space-y-2 my-4 pl-4",children:[...r]},"ul-last")),e.jsx("div",{className:"max-w-4xl mx-auto",children:i})};function k(){const{t:l}=x();return e.jsxs("div",{className:"min-h-screen pt-24 pb-20 px-4",children:[e.jsx(b,{title:l("seo.documentation.title"),description:l("seo.documentation.description"),keywords:l("seo.documentation.keywords")}),e.jsxs("div",{className:"container-custom mx-auto",children:[e.jsx("div",{className:"mb-8",children:e.jsxs(f,{to:"/",className:"inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group",children:[e.jsx(g,{size:20,className:"group-hover:-translate-x-1 transition-transform"}),"Voltar para Home"]})}),e.jsxs("div",{className:"mb-12 text-center",children:[e.jsx("span",{className:"inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4",children:"Docs"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:"Documentação do Projeto"}),e.jsx("p",{className:"text-xl text-custom-gray max-w-2xl mx-auto",children:"Visão geral técnica, instalação e guia de uso."})]}),e.jsx("div",{className:"bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-white/20",children:e.jsx(v,{content:y})})]})]})}export{k as default};
