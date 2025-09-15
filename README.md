Projeto: Portfolio moderno (Vanilla HTML/CSS/JS módulos)

Requisitos atendidos

Gradiente principal (#5A2A27 → #9A4D42) aplicado em hero, CTAs e identidade.
Tipografia com GASDRIFO (custom) + Inter fallback.
Animações: typing effect com opção de pular, liquid animation (Canvas), microinterações (ripple, hover), parallax/blur na foto ao scroll, motion-reduced respeitado.
Navegação sticky + hamburger, light/dark com persistência (localStorage).
Seções: Hero, Sobre, Projetos (grid, filtro, busca, modal + carousel), Contato (validação + Formspree + fallback), Redes Sociais, Admin (login mock + registro de alterações + histórico com filtros/ordenação + export CSV).
Modais acessíveis com focus trap e ESC.
A11y: estrutura semântica, aria-atributos, foco visível, contraste.
Performance: lazy load de imagens, PWA (service worker + manifest), CSS modular.
PWA: offline básico de páginas/ativos.
Como rodar localmente

Baixe/clonar este repositório.
Sirva com um servidor estático (para fetch dos JSONs). Exemplos:
Node: npx http-server -p 5173 .
Python: python3 -m http.server 5173
Acesse http://localhost:5173
Build e deploy (Vercel/Netlify)

Vercel:
Novo projeto → Importar do GitHub.
Framework = Outros; Build Command: none; Output: ./
Configurar Domains. Após deploy, ative PWA (já automático).
Netlify:
New site from Git → configuração padrão.
Defina a variável de ambiente FORMSPREE_ID no código (opcional) se quiser substituir o endpoint; ou edite action do formulário.
GitHub Pages: habilitar Pages no branch main (cuidado com caminhos absolutos; se usar subpasta, ajuste fetch/paths).