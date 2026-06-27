
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

```
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
```

---

## Arquitetura

```
[Cliente React SPA] ---- fetch /api/* ---- [Servidor Express]
       |                                          |
       | React Router 6                    Helmet + Rate Limit
       | Framer Motion                     Rotas da API
       | Radix UI + Tailwind               Tipos compartilhados
       v                                          v
[GitHub Pages Deploy]                             [Serverless / Docker]
```

Desenvolvimento em porta unica (8080) com integracao Vite + Express, hot reload completo e tipos compartilhados entre frontend e backend via alias `@shared/*`.

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
