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

## UI Component Library

### Descrição Geral
Uma coleção massiva de componentes de UI altamente interativos, animados e com estética premium, localizados em `client/components/ui-library/`. Esta biblioteca serve como um "showcase" de habilidades técnicas e criativas.

### Principais Categorias
- **Loaders**: Mais de 40 loaders customizados (Ex: `TruckLoader`, `WalkingManLoader`, `HamsterLoader`, `MatrixLoader`).
- **Buttons**: Botões com micro-interações avançadas (Ex: `NatureButton`, `OpenAIButton`, `PlayNowButton`, `ShineButton`).
- **Inputs & Switches**: Componentes de formulário temáticos (Ex: `ThreeDInput`, `DayNightSwitch`, `MinecraftSwitch`, `GooeySwitch`).
- **Cards & Extras**: Componentes complexos como `Error404Card`, `SocialGrid`, e `GlassIcons`.

### Showcase
- **Página**: `client/pages/UILibrary.tsx`
- **Componente Base**: `ComponentShowcase.tsx` (provê visualização de código e estados de animação).

## Mudanças Recentes (29/12/2025)

- **NatureButton Refinement**: Refatoração completa para incluir um SVG de folha de cannabis de alta fidelidade, com animações de hover premium e gradientes suaves.
- **UI Library Expansion**: Adição de dezenas de novos loaders e componentes interativos para o portfólio.
- **GithubStats**: Removido por preferência de design e substituído por métricas mais personalizadas.

## Mudanças Recentes (30/12/2025)

- **Vitrine360 Pivot**: Rebranding completo do projeto "AI Chat Interface" para "Vitrine360 - Gestão de loja", focando em uma solução SaaS com tabelas de preços e funcionalidades de gestão.
- **Dedicated Projects Page**: Implementação de uma página exclusiva para projetos (`/projects`) com filtragem por tecnologia, permitindo uma home mais limpa.
- **Homepage Optimization**: Restruturação da seção de projetos na home para exibir apenas os 6 principais, com link para a galeria completa.
- **Internationalization (i18n)**: Tradução completa da nova página de projetos e elementos de navegação para Português e Inglês.
- **Social Integration**: Atualização dos links de LinkedIn, Instagram e Uiverse no `SocialHub` e no `Footer`.
- **UX Certificate**: Adição do novo certificado de UX da Enap à Timeline, destacando a conquista mais recente.
- **UI Library Refinement**: Ajuste de responsividade e escala do `TruckLoader` e padronização de nomes de tecnologias nos filtros para evitar duplicatas.

## Mudanças Recentes (01/01/2026 - 02/01/2026)

- **Commercial Rebranding**: Transformação do projeto "Portfolio Profissional" em um produto (SaaP). Adição de badges "Template p/ Venda", botões de CTA direto para WhatsApp e remoção de links técnicos (Git/Demo) para focar em conversão.
- **Global Transitions**: Implementação do `PageLoadingWrapper` em todo o ecossistema do app, garantindo que todas as navegações passem por um loader polido.
- **Codebase Purge**: Auditoria completa e remoção de "resíduos" (componentes órfãos, imagens não utilizadas e arquivos de teste legados) para otimização de performance e manutenção.
- **Visual Sync**: Sincronização estética dos badges esmeralda em todas as listagens de projetos (Home e Galeria Completo).
- **Contact Sync**: Atualização global do número de contato e integração direta com WhatsApp em múltiplos pontos de conversão.