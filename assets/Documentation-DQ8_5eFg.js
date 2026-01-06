import{j as e,W as x}from"./ui-D5t1Lhu1.js";import{H as f}from"./index-BQOwaguL.js";import{L as b}from"./vendor-BojDIxtq.js";const g=`# Portfolio | Vitor.dev

Bem-vindo ao repositório do meu portfólio profissional! Este projeto foi desenvolvido para demonstrar minhas habilidades técnicas como desenvolvedor full-stack, apresentando uma interface moderna, interativa e de alta fidelidade.

![Vitor.dev Banner](public/logo.png)

## 🔗 Link Direto
Acesse o site online aqui: **[https://vihisantos.github.io/My.Portfolio/](https://vihisantos.github.io/My.Portfolio/)**

📚 **Documentação Online:** Você também pode ler esta documentação formatada diretamente no site em: [https://vihisantos.github.io/My.Portfolio/docs](https://vihisantos.github.io/My.Portfolio/docs)

---

- **🎨 Design Moderno & Premium**: Interface construída com **React 18** e **TailwindCSS**, focada em estética de alta fidelidade e experiência do usuário (UX).
- **🐊 Capybara Holding**: Nova seção institucional integrando projetos de todas as verticais (Commerce, Education, Creative).
- **💚 Sponsorship System**: Sistema completo de apoiadores com integração de pagamentos e mural da fama dinâmico.
- **🛍️ Portfolio as a Product (SaaP)**: O template do portfólio foi transformado em um produto comercial, pronto para venda e customização.
- **✨ Transições Globais**: Sistema de carregamento fluido com animações personalizadas em todas as trocas de página.
- **📱 Responsivo & Otimizado**: Adaptado para qualquer dispositivo e livre de "resíduos" de código (codebase auditada).
- **🛠️ UI Library**: Uma galeria exclusiva de componentes interativos e animados (loaders, botões, switches).
- **🌍 Internacionalização**: Suporte completo a **Português (PT)** e **Inglês (EN)**.
- **⚡ Performance SPA**: Navegação ultra rápida usando **React Router 6** com **Lazy Loading** e **Code Splitting**.
- **🔍 SEO Ready**: Meta tags dinâmicas e suporte a redes sociais (Open Graph) em todas as páginas.
- **♿ Acessível**: Componentes otimizados para leitores de tela e navegação por teclado.

## 🛠️ Tech Stack

### Frontend
- **React 18 + TypeScript**
- **Vite** (Build tool)
- **TailwindCSS** (Estilização)
- **Framer Motion** (Animações complexas)
- **Lucide React** (Ícones)
- **Radix UI** (Componentes acessíveis)

### Backend (Serverless Ready)
- **Express / Node.js** (API integrada)
- **Netlify Functions** (Pronto para ambiente cloud)

---

## 🚀 Como rodar localmente

1. **Clone o repositório:**
   \`\`\`bash
   git clone https://github.com/vihisantos/My.Portfolio.git
   cd My.Portfolio
   \`\`\`

2. **Instale as dependências:**
   \`\`\`bash
   pnpm install
   \`\`\`

3. **Inicie o servidor de desenvolvimento:**
   \`\`\`bash
   pnpm dev
   \`\`\`
   Acesse \`http://localhost:8080\`.

---

## 📁 Estrutura do Projeto

- \`client/\`: Todo o código do frontend (Páginas, Componentes, Estilos).
- \`server/\`: Backend Express para lógica de servidor e rotas de API.
- \`shared/\`: Tipos e interfaces compartilhadas entre cliente e servidor.
- \`public/\`: Ativos estáticos como o Favicon e robos.txt.

---

## 📄 Licença

**© 2026 Vitor Santos. Todos os direitos reservados.**

Este repositório existe exclusivamente para fins de demonstração de portfólio. O código-fonte, design e ativos **não são de código aberto**. É proibida a cópia, redistribuição ou uso de qualquer parte deste projeto para fins comerciais ou pessoais sem autorização prévia.

Desenvolvido por [Vitor Santos](https://github.com/vihisantos).
`,v=({content:p})=>{const u=p.split(`
`),r=[];let i=[],d=!1,l=[];const h=(t,a)=>{if(t.trim().startsWith("```")){d?(r.push(e.jsx("div",{className:"my-4 bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto font-mono text-sm shadow-inner border border-zinc-800",children:e.jsx("pre",{children:e.jsx("code",{children:l.join(`
`)})})},`code-${a}`)),l=[],d=!1):d=!0;return}if(d){l.push(t);return}const o=t.match(/!\[(.*?)\]\((.*?)\)/);if(o){let s=o[2];if(s.startsWith("public/")){const n=s.replace("public/","");s=`${"/My.Portfolio/".endsWith("/")?"/My.Portfolio/".slice(0,-1):"/My.Portfolio/"}${n.startsWith("/")?n:"/"+n}`}else!s.startsWith("http")&&!s.startsWith("/")&&(s="/"+s);r.push(e.jsxs("div",{className:"my-6",children:[e.jsx("img",{src:s,alt:o[1],className:"rounded-xl shadow-lg border border-black/10 dark:border-white/10 w-full max-w-3xl mx-auto"}),o[1]&&e.jsx("p",{className:"text-center text-sm text-custom-gray mt-2 italic",children:o[1]})]},`img-${a}`));return}if(t.startsWith("# ")){r.push(e.jsx("h1",{className:"text-4xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block",children:t.replace("# ","")},`h1-${a}`));return}if(t.startsWith("## ")){r.push(e.jsx("h2",{className:"text-2xl font-semibold mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-border",children:t.replace("## ","")},`h2-${a}`));return}if(t.startsWith("### ")){r.push(e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-2",children:t.replace("### ","")},`h3-${a}`));return}if(t.trim()==="---"){r.push(e.jsx("hr",{className:"my-8 border-border"},`hr-${a}`));return}if(t.trim().startsWith("- ")){const s=t.trim().substring(2);i.push(e.jsx("li",{className:"ml-4 pl-2 border-l-2 border-primary/50",children:m(s)},`li-${a}`));return}else i.length>0&&(r.push(e.jsx("ul",{className:"space-y-2 my-4 pl-4",children:[...i]},`ul-${a}`)),i=[]);t.trim()!==""&&r.push(e.jsx("p",{className:"leading-relaxed mb-4 text-custom-gray dark:text-zinc-300",children:m(t)},`p-${a}`))},m=t=>t.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\)|`.*?`)/g).map((o,s)=>{if(o.startsWith("**")&&o.endsWith("**"))return e.jsx("strong",{className:"font-bold text-foreground",children:o.slice(2,-2)},s);if(o.startsWith("*")&&o.endsWith("*"))return e.jsx("em",{className:"italic",children:o.slice(1,-1)},s);if(o.startsWith("`")&&o.endsWith("`"))return e.jsx("code",{className:"px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-primary",children:o.slice(1,-1)},s);const n=o.match(/\[(.*?)\]\((.*?)\)/);if(n){const c=n[2].startsWith("http");return e.jsx("a",{href:n[2],className:"text-primary hover:underline underline-offset-4 decoration-primary/30",target:c?"_blank":void 0,rel:c?"noopener noreferrer":void 0,children:n[1]},s)}return o});return u.forEach((t,a)=>h(t,a)),i.length>0&&r.push(e.jsx("ul",{className:"space-y-2 my-4 pl-4",children:[...i]},"ul-last")),e.jsx("div",{className:"max-w-4xl mx-auto",children:r})};function P(){return e.jsxs("div",{className:"min-h-screen pt-24 pb-20 px-4",children:[e.jsxs(f,{children:[e.jsx("title",{children:"Documentação | Vitor.dev"}),e.jsx("meta",{name:"description",content:"Documentação oficial e detalhes técnicos do projeto Portfolio."})]}),e.jsxs("div",{className:"container-custom mx-auto",children:[e.jsx("div",{className:"mb-8",children:e.jsxs(b,{to:"/",className:"inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group",children:[e.jsx(x,{size:20,className:"group-hover:-translate-x-1 transition-transform"}),"Voltar para Home"]})}),e.jsxs("div",{className:"mb-12 text-center",children:[e.jsx("span",{className:"inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4",children:"Docs"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:"Documentação do Projeto"}),e.jsx("p",{className:"text-xl text-custom-gray max-w-2xl mx-auto",children:"Visão geral técnica, instalação e guia de uso."})]}),e.jsx("div",{className:"bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-white/20",children:e.jsx(v,{content:g})})]})]})}export{P as default};
