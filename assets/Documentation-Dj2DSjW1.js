import{j as e,_ as g}from"./ui-BpQ-T0JO.js";import{S as b}from"./SEO-yt4J-mc4.js";import{u as f}from"./index-B-iZa3N5.js";import{L as x}from"./vendor-BZTSXe9S.js";import"./framer-DCobejFE.js";const y=`\r
# Capybara Holding — Portfolio\r
\r
<p align="center">\r
  <strong>Engineering the pulse of the digital ecosystem.</strong>\r
  <br>\r
  Portfolio oficial da Capybara Holding — uma vitrine de engenharia premium,\r
  <br>\r
  design de alta fidelidade e produtos digitais com alma.\r
</p>\r
\r
<p align="center">\r
  <img src="https://img.shields.io/badge/React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18">\r
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">\r
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">\r
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">\r
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">\r
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js">\r
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify">\r
</p>\r
\r
---\r
\r
## Sobre\r
\r
Este repositorio e o portfolio flagship da Capybara Holding, uma iniciativa que reune produtos digitais de alto nivel — de plataformas educacionais gamificadas a ferramentas de inteligencia de cores, aplicacoes desktop e componentes de UI premium.\r
\r
Cada projeto aqui reflete os principios da Holding: engenharia precisa, design com alma e experiencia do usuario impecavel.\r
\r
---\r
\r
## Tech Stack\r
\r
### Frontend\r
\r
| Tecnologia | Proposito |\r
|---|---|\r
| **React 18** | Biblioteca de interface |\r
| **TypeScript** | Tipagem estatica em toda a codebase |\r
| **Vite 7** | Build tool e dev server |\r
| **React Router 6** | Roteamento SPA |\r
| **Tailwind CSS 3** | Estilizacao utilitaria |\r
| **Framer Motion** | Animacoes e transicoes fisicas |\r
| **Radix UI** | Componentes primitivos acessiveis (Dialog, Dropdown, Tabs, Toast, etc.) |\r
| **Three.js + React Three Fiber + Drei** | Renderizacao 3D interativa |\r
| **GSAP** | Animacoes de alta performance |\r
| **Lucide React** | Iconografia |\r
| **React Helmet Async** | Gerenciamento de meta tags e SEO |\r
| **Recharts** | Graficos e visualizacao de dados |\r
| **React Hook Form + Zod** | Formularios e validacao |\r
| **TanStack React Query** | Gerenciamento de estado servidor |\r
| **Styled Components** | Estilizacao CSS-in-JS |\r
| **Embla Carousel** | Carrossel performatico |\r
| **Sonner** | Notificacoes toast |\r
| **date-fns** | Manipulacao de datas |\r
| **jsPDF** | Geracao de PDF |\r
| **next-themes** | Tema dark/light |\r
| **cmdk + vaul + input-otp + react-day-picker** | Componentes especializados |\r
| **class-variance-authority + clsx + tailwind-merge** | Utilitarios de classe |\r
\r
### Backend (Integrado)\r
\r
| Tecnologia | Proposito |\r
|---|---|\r
| **Express 5** | Servidor HTTP |\r
| **Helmet** | Seguranca (headers) |\r
| **express-rate-limit** | Rate limiting |\r
| **cors** | Cross-origin requests |\r
| **dotenv** | Variaveis de ambiente |\r
| **serverless-http** | Deploy serverless |\r
\r
### Infraestrutura & Ferramentas\r
\r
| Tecnologia | Proposito |\r
|---|---|\r
| **Netlify** | Deploy e hosting |\r
| **Docker** | Containerizacao |\r
| **Vitest** | Testes unitarios |\r
| **Prettier** | Formatacao de codigo |\r
| **pnpm** | Gerenciador de pacotes |\r
\r
---\r
\r
## Projetos no Portfolio\r
\r
### ColorFlicks\r
Ferramenta cinematica de extracao de paletas de cores a partir de posters de filmes.\r
- **Stack:** React 18, Vite, Tailwind CSS v4, ColorThief, TVMaze API\r
- **Destaques:** Extracao client-side, suporte biligue (EN/PT), modo escuro/claro, compartilhamento social com html2canvas\r
\r
### CapyFlow Academy\r
Plataforma de ensino gamificada focada em desenvolvimento de software.\r
- **Stack:** Next.js 16, NestJS 11, TypeScript, Tailwind CSS v4, PostgreSQL, Firebase\r
- **Destaques:** Editor Monaco ao vivo, autenticacao hibrida Firebase + JWT, sistema de XP e niveis\r
\r
### Mizin Youtube App\r
Aplicacao desktop para download de audio/video do YouTube.\r
- **Stack:** Python, CustomTkinter, yt-dlp\r
- **Destaques:** Interface moderna, multiplas qualidades, modo portatil\r
\r
---\r
\r
## Estrutura do Projeto\r
\r
\`\`\`\r
My.Portfolio/\r
  client/                  Frontend React SPA\r
    pages/                 Componentes de rota\r
    components/            Componentes reutilizaveis\r
      ui/                  Biblioteca de componentes Radix UI\r
    contexts/              Contextos React (ThemeContext)\r
    hooks/                 Custom hooks\r
    lib/                   Utilitarios e servicos\r
    data/                  Dados estaticos\r
    assets/                Imagens e assets bundlados\r
    App.tsx                Entry point + rotas\r
    global.css             Tema Tailwind e estilos globais\r
  server/                  Backend API Express\r
    index.ts               Configuracao do servidor\r
    routes/                Manipuladores de API\r
    node-build.ts          Build para producao\r
  shared/                  Tipos compartilhados\r
    api.ts                 Interfaces de API\r
  public/                  Assets estaticos\r
  dist/                    Build de producao\r
\`\`\`\r
\r
---\r
\r
## Arquitetura\r
\r
\`\`\`\r
[Cliente React SPA] ---- fetch /api/* ---- [Servidor Express]\r
       |                                          |\r
       | React Router 6                    Helmet + Rate Limit\r
       | Framer Motion                     Rotas da API\r
       | Radix UI + Tailwind               Tipos compartilhados\r
       v                                          v\r
[Netlify Deploy]                             [Serverless / Docker]\r
\`\`\`\r
\r
Desenvolvimento em porta unica (8080) com integracao Vite + Express, hot reload completo e tipos compartilhados entre frontend e backend via alias \`@shared/*\`.\r
\r
---\r
\r
## Componentes de Destaque\r
\r
- **FunMetrics** — Dashboard animado com estatisticas (Cafe, Codigo, Bugs)\r
- **SpotifyWidget** — Player de musica simulado com playlist interna e visualizador de audio\r
- **Interactive Playground** — Area com fisica de icones arrastaveis (framer-motion)\r
- **Timeline Expandida** — Linha do tempo com multiplos tipos de eventos (Educacao, Trabalho, Livros)\r
- **PageLoadingWrapper** — Transicoes suaves entre rotas com loader animado\r
- **Sponsorship System** — Sistema de patrocinio com 3 tiers e Wall of Fame\r
- **Capybara Holding Page** — Pagina institucional com visao, missao e servicos\r
\r
---\r
\r
<p align="center">\r
  <br>\r
  <sub>Desenvolvido por <a href="https://capybaraholding.com.br" target="_blank"><strong>Capybara Holding</strong></a></sub>\r
  <br>\r
  <sub>&copy; 2026 Capybara Holding. Todos os direitos reservados.</sub>\r
</p>\r
`,v=({content:l})=>{const u=l.split(`
`),s=[];let n=[],c=!1,d=[];const h=(r,o)=>{if(r.trim().startsWith("```")){c?(s.push(e.jsx("div",{className:"my-4 bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto font-mono text-sm shadow-inner border border-zinc-800",children:e.jsx("pre",{children:e.jsx("code",{children:d.join(`
`)})})},`code-${o}`)),d=[],c=!1):c=!0;return}if(c){d.push(r);return}const t=r.match(/!\[(.*?)\]\((.*?)\)/);if(t){let a=t[2];if(a.startsWith("public/")){const i=a.replace("public/","");a=`${"/My.Portfolio/".endsWith("/")?"/My.Portfolio/".slice(0,-1):"/My.Portfolio/"}${i.startsWith("/")?i:"/"+i}`}else!a.startsWith("http")&&!a.startsWith("/")&&(a="/"+a);s.push(e.jsxs("div",{className:"my-6",children:[e.jsx("img",{src:a,alt:t[1],loading:"lazy",decoding:"async",className:"rounded-xl shadow-lg border border-black/10 dark:border-white/10 w-full max-w-3xl mx-auto"}),t[1]&&e.jsx("p",{className:"text-center text-sm text-custom-gray mt-2 italic",children:t[1]})]},`img-${o}`));return}if(r.startsWith("# ")){s.push(e.jsx("h1",{className:"text-4xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block",children:r.replace("# ","")},`h1-${o}`));return}if(r.startsWith("## ")){s.push(e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-border",children:r.replace("## ","")},`h2-${o}`));return}if(r.startsWith("### ")){s.push(e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-2",children:r.replace("### ","")},`h3-${o}`));return}if(r.trim()==="---"){s.push(e.jsx("hr",{className:"my-8 border-border"},`hr-${o}`));return}if(r.trim().startsWith("- ")){const a=r.trim().substring(2);n.push(e.jsx("li",{className:"ml-4 pl-2 border-l-2 border-primary/50",children:p(a)},`li-${o}`));return}else n.length>0&&(s.push(e.jsx("ul",{className:"space-y-2 my-4 pl-4",children:[...n]},`ul-${o}`)),n=[]);r.trim()!==""&&s.push(e.jsx("p",{className:"leading-relaxed mb-4 text-custom-gray dark:text-zinc-300",children:p(r)},`p-${o}`))},p=r=>r.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\)|`.*?`)/g).map((t,a)=>{if(t.startsWith("**")&&t.endsWith("**"))return e.jsx("strong",{className:"font-bold text-foreground",children:t.slice(2,-2)},a);if(t.startsWith("*")&&t.endsWith("*"))return e.jsx("em",{className:"italic",children:t.slice(1,-1)},a);if(t.startsWith("`")&&t.endsWith("`"))return e.jsx("code",{className:"px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-primary",children:t.slice(1,-1)},a);const i=t.match(/\[(.*?)\]\((.*?)\)/);if(i){const m=i[2].startsWith("http");return e.jsx("a",{href:i[2],className:"text-primary hover:underline underline-offset-4 decoration-primary/30",target:m?"_blank":void 0,rel:m?"noopener noreferrer":void 0,children:i[1]},a)}return t});return u.forEach((r,o)=>h(r,o)),n.length>0&&s.push(e.jsx("ul",{className:"space-y-2 my-4 pl-4",children:[...n]},"ul-last")),e.jsx("div",{className:"max-w-4xl mx-auto",children:s})};function P(){const{t:l}=f();return e.jsxs("div",{className:"min-h-screen pt-24 pb-20 px-4",children:[e.jsx(b,{title:l("seo.documentation.title"),description:l("seo.documentation.description"),keywords:l("seo.documentation.keywords")}),e.jsxs("div",{className:"container-custom mx-auto",children:[e.jsx("div",{className:"mb-8",children:e.jsxs(x,{to:"/",className:"inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group",children:[e.jsx(g,{size:20,className:"group-hover:-translate-x-1 transition-transform"}),"Voltar para Home"]})}),e.jsxs("div",{className:"mb-12 text-center",children:[e.jsx("span",{className:"inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4",children:"Docs"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:"Documentação do Projeto"}),e.jsx("p",{className:"text-xl text-custom-gray max-w-2xl mx-auto",children:"Visão geral técnica, instalação e guia de uso."})]}),e.jsx("div",{className:"bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-white/20",children:e.jsx(v,{content:y})})]})]})}export{P as default};
