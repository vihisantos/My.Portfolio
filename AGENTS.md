# Fusion Starter

Um template de aplicação React full-stack pronto para produção com servidor Express integrado, apresentando React Router 6 em modo SPA, TypeScript, Vitest, Zod e ferramentas modernas.

Embora o starter venha com um servidor express, crie endpoints apenas quando estritamente necessário, por exemplo, para encapsular lógica que deve viver no servidor, como manipulação de chaves privadas ou certas operações de banco de dados, db...

## Tech Stack

- **PNPM**: Dê preferência ao pnpm
- **Frontend**: React 18 + React Router 6 (spa) + TypeScript + Vite + TailwindCSS 3
- **Backend**: Servidor Express integrado com servidor de desenvolvimento Vite
- **Testing**: Vitest
- **UI**: Radix UI + TailwindCSS 3 + ícones Lucide React

## Estrutura do Projeto

```
client/                   # Frontend React SPA
├── pages/                # Componentes de rota (Index.tsx = home)
├── components/ui/        # Biblioteca de componentes de UI pré-construídos
├── App.tsx               # Ponto de entrada do App e configuração de roteamento SPA
└── global.css            # Tematização TailwindCSS 3 e estilos globais

server/                   # Backend API Express
├── index.ts              # Configuração principal do servidor (config express + rotas)
└── routes/               # Manipuladores de API

shared/                   # Tipos usados tanto pelo cliente quanto pelo servidor
└── api.ts                # Exemplo de como compartilhar interfaces de api
```

## Principais Recursos

### Sistema de Roteamento SPA

O sistema de roteamento é alimentado pelo React Router 6:

- `client/pages/Index.tsx` representa a página inicial.
- As rotas são definidas em `client/App.tsx` usando a importação `react-router-dom`
- Os arquivos de rota estão localizados no diretório `client/pages/`

Por exemplo, rotas podem ser definidas com:

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Index />} />
  {/* ADICIONE TODAS AS ROTAS CUSTOMIZADAS ACIMA DA ROTA DE CAPTURA "*" */}
  <Route path="*" element={<NotFound />} />
</Routes>;
```

### Sistema de Estilização

- **Primário**: Classes utilitárias TailwindCSS 3
- **Tema e tokens de design**: Configure em `client/global.css`
- **Componentes de UI**: Biblioteca pré-construída em `client/components/ui/`
- **Utilitário**: Função `cn()` combina `clsx` + `tailwind-merge` para classes condicionais

```typescript
// uso do utilitário cn
className={cn(
  "base-classes",
  { "conditional-class": condition },
  props.className  // Sobrescritas do usuário
)}
```

### Integração do Servidor Express

- **Desenvolvimento**: Porta única (8080) para frontend e backend
- **Hot reload**: Código do cliente e do servidor
- **Endpoints da API**: Prefixados com `/api/`

#### Exemplo de Rotas da API
- `GET /api/ping` - Api de ping simples
- `GET /api/demo` - Endpoint de demonstração

### Tipos Compartilhados
Importe tipos consistentes tanto no cliente quanto no servidor:
```typescript
import { DemoResponse } from '@shared/api';
```

Aliases de caminho:
- `@shared/*` - Pasta shared
- `@/*` - Pasta client

## Comandos de Desenvolvimento

```bash
pnpm dev        # Iniciar servidor de dev (cliente + servidor)
pnpm build      # Build de produção
pnpm start      # Iniciar servidor de produção
pnpm typecheck  # Validação TypeScript
pnpm test       # Rodar testes Vitest
```

## Adicionando Funcionalidades

### Adicionar novas cores ao tema

Abra `client/global.css` e `tailwind.config.ts` e adicione novas cores tailwind.

### Nova Rota de API
1. **Opcional**: Crie uma interface compartilhada em `shared/api.ts`:
```typescript
export interface MyRouteResponse {
  message: string;
  // Adicione outras propriedades de resposta aqui
}
```

2. Crie um novo manipulador de rota em `server/routes/my-route.ts`:
```typescript
import { RequestHandler } from "express";
import { MyRouteResponse } from "@shared/api"; // Opcional: para segurança de tipo

export const handleMyRoute: RequestHandler = (req, res) => {
  const response: MyRouteResponse = {
    message: 'Olá do meu endpoint!'
  };
  res.json(response);
};
```

3. Registre a rota em `server/index.ts`:
```typescript
import { handleMyRoute } from "./routes/my-route";

// Adicione à função createServer:
app.get("/api/my-endpoint", handleMyRoute);
```

4. Use em componentes React com segurança de tipo:
```typescript
import { MyRouteResponse } from '@shared/api'; // Opcional: para segurança de tipo

const response = await fetch('/api/my-endpoint');
const data: MyRouteResponse = await response.json();
```

### Nova Rota de Página
1. Crie o componente em `client/pages/MyPage.tsx`
2. Adicione a rota em `client/App.tsx`:
```typescript
<Route path="/my-page" element={<MyPage />} />
```

## Deploy de Produção

- **Padrão**: `pnpm build`
- **Binário**: Executáveis independentes (Linux, macOS, Windows)
- **Deploy na Nuvem**: Use Netlify ou Vercel via suas integrações MCP para deploy fácil. Ambos os provedores funcionam bem com este template starter.

## Notas de Arquitetura

- Desenvolvimento em porta única com integração Vite + Express
- TypeScript em tudo (cliente, servidor, compartilhado)
- Hot reload completo para desenvolvimento rápido
- Pronto para produção com múltiplas opções de deploy
- Biblioteca de componentes de UI abrangente incluída
- Comunicação de API segura por tipo via interfaces compartilhadas

## Componentes Personalizados (Portfolio)

### FunMetrics
- Localização: `client/components/FunMetrics.tsx`
- Descrição: Dashboard animado com estatísticas divertidas (Café, Código, Bugs, etc). Substitui o antigo componente `Stats`.

### SpotifyWidget
- Localização: `client/components/SpotifyWidget.tsx`
- Descrição: Widget fixo simulando um player do Spotify. Conta com playlist interna com rotação automática (2-4 min) e visualizador de áudio animado.

### Interactive Playground
- Localização: `client/components/Playground.tsx`
- Descrição: Área interativa com ícones de tecnologias que possuem física (arrastar e soltar). Usa `framer-motion` para gestos.

### Timeline Expandida
- Localização: `client/components/Timeline.tsx`
- Atualização: Refatorado para suportar múltiplos tipos de eventos (Educação, Trabalho, Livros, Certificações) com ícones e cores distintos.

### PageLoadingWrapper
- Localização: `client/components/PageLoadingWrapper.tsx`
- Descrição: Wrapper global que gerencia transições suaves entre rotas. Exibe a animação de loader (passarinho) com um delay artificial para garantir um "feel" premium e reseta o scroll para o topo automaticamente.

### Capybara Holding Page
- Localização: `client/pages/CapybaraHolding.tsx`
- Descrição: Página institucional dedicada à iniciativa Capybara Holding. Apresenta visão, missão e serviços com animações de fade-in e estética minimalista dark/light.

### Sponsorship System
- Localização: `client/pages/Sponsorship.tsx`
- Descrição: Sistema completo de patrocínio com 3 tiers (Visionário, Guardião, Comunidade).
- Features: Integração com Formspree para pagamentos/contato, "Wall of Fame" dinâmico renderizado via array de dados, e cartões de patrocinadores com estilização única (Coroa para Visionários, Escudo para Guardiões, Coração para Comunidade).
- Dados: Lista de patrocinadores centralizada no arquivo para fácil adição (`sponsors` array).

## Mudanças Recentes (04/01/2026)

### ColorFlicks
- **Visão Geral**: Ferramenta de inteligência de cores cinemática que analisa pôsteres de filmes para extrair paletas e "humor".
- **Tech Stack**: React 18, Vite, Tailwind CSS v4, ColorThief, TVMaze API.
- **Destaques**: Extração de cores client-side, suporte bilarngue (EN/PT), modo escuro/claro robusto e compartilhamento social com html2canvas.
- **Status**: Adicionado ao portfólio e à página da Capybara Holding.

### CapyFlow Academy
- **Visão Geral**: Plataforma de ensino gamificada focada em desenvolvimento de software (Monorepo).
- **Tech Stack**: Next.js 16, NestJS 11, TypeScript, Tailwind CSS v4, Postgres, Firebase.
- **Destaques**: Editor de código (Monaco), autenticação híbrida, arquitetura em camadas.
- **Status**: Adicionado ao portfólio e à página da Capybara Holding.

### Sponsorship & Ecosystem
- **Capybara Holding**: Lançamento da página "holding" unificando os projetos (Commerce, Education, Creative).
- **Sponsorship**: Lançamento da página de apoiadores com integração Formspree funcional, tiers definidos e grid de "Wall of Fame" escalável.
- **Visual Polish**: Refinamento visual dos cards de patrocinadores com ícones temáticos (Crown, Shield, Heart) e animações de hover.

### Optimization & Completeness (06/01/2026)
- **Performance**: Implementação de **Code Splitting** e **Lazy Loading** em todas as rotas principais, garantindo carregamento inicial mais rápido. Configuração de chunks manuais no Vite.
- **SEO Dinâmico**: Integração do `react-helmet-async` com componente `<SEO />` reutilizável para gestão de meta tags (OG, Twitter) página por página.
- **Acessibilidade (A11y)**: Auditoria e correção de rótulos (`aria-label`) em navegação, botões de ícone e links sociais.
- **Robustez**: Adicionado `ErrorBoundary` global para capturar falhas de renderização e exibir uma interface amigável.

### Documentation & UX Polish (06/01/2026)
- **Documentation Page**: Lançamento da rota `/docs` que renderiza automaticamente o `README.md` do projeto com estilização rica (Tailwind Typography), garantindo documentação sempre atualizada e acessível via rodapé.
- **Identidade Visual**: Correção definitiva do carregamento do logo na navegação, movendo assets para `client/assets` para garantir bundling correto em produção e desenvolvimento.
- **Theme Persistence**: Implementação de persistência de preferência de tema (Dark/Light) via `localStorage`, garantindo consistência na recarga da página.
- **Loader Themes**: Refinamento visual dos componentes de carregamento (`MusicEqualizer`, `BouncingBall`, etc.) para se adaptarem dinamicamente às cores do tema do cartão e fundo.
- **Micro-interações**: Adição de animação "Dot Expansion" (ponto que estica) em todos os links do rodapé para padronização visual com o link de documentação.
- **Refinamento de Logo**: Troca do logo SVG para PNG (`logo.png`) na barra de navegação garantindo fidelidade visual conforme solicitado.

### Mizin Youtube App Integration (18/01/2026)
- **Integração de Projeto Desktop**: Adição do "Mizin Youtube App" (Python/CustomTkinter) ao portfólio web.
- **User Experience**: 
  - Criação de **Modal Dedicado** com instruções passo-a-passo.
  - **Scroll Suave Automático** que guia o usuário até o botão de download.
  - **Badges Traduzidos**: "Nova Aplicação Gratuita" / "New Free App" com suporte i18n.
- **Infraestrutura**:
  - Download via Google Drive (External Link) para garantir alta disponibilidade e evitar limites de LFS do GitHub.
  - Componentização do botão de download (`GalaxyButton`) e modal de instruções (`InstructionModal`).