import{j as e,$ as V,a0 as O,a1 as Z,a2 as E,X as G,a3 as P,a4 as S,a5 as M,v as $,C as H,a6 as Q,K as J}from"./ui-Z7efeLqO.js";import{a as l}from"./vendor-DdPwulCh.js";import{c as o,a as K,u as R}from"./index-Dw1FqFXB.js";import{B as T}from"./button-CWNpmQdk.js";function xe({technologies:a,onFilterChange:t}){const[r,c]=l.useState([]),x=s=>{const i=r.includes(s)?r.filter(u=>u!==s):[...r,s];c(i),t(i)};return e.jsxs("div",{className:"flex flex-wrap gap-3 mb-8 justify-center",children:[a.map(s=>e.jsx("button",{onClick:()=>x(s),className:`px-4 py-2 rounded-lg smooth-transition font-medium ${r.includes(s)?"bg-gradient-to-r from-primary to-secondary text-white shadow-lg":"bg-slate-100 dark:bg-slate-800 text-foreground hover:bg-slate-200 dark:hover:bg-slate-700"}`,children:s},s)),r.length>0&&e.jsx("button",{onClick:()=>{c([]),t([])},className:"px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground smooth-transition underline",children:"Clear"})]})}const z=V,W=O,A=l.forwardRef(({className:a,...t},r)=>e.jsx(M,{ref:r,className:o("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...t}));A.displayName=M.displayName;const g=l.forwardRef(({className:a,children:t,...r},c)=>e.jsxs(W,{children:[e.jsx(A,{}),e.jsxs(Z,{ref:c,className:o("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...r,children:[t,e.jsxs(E,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[e.jsx(G,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));g.displayName=Z.displayName;const h=({className:a,...t})=>e.jsx("div",{className:o("flex flex-col space-y-1.5 text-center sm:text-left",a),...t});h.displayName="DialogHeader";const v=l.forwardRef(({className:a,...t},r)=>e.jsx(P,{ref:r,className:o("text-lg font-semibold leading-none tracking-tight",a),...t}));v.displayName=P.displayName;const b=l.forwardRef(({className:a,...t},r)=>e.jsx(S,{ref:r,className:o("text-sm text-muted-foreground",a),...t}));b.displayName=S.displayName;const X=K("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Y({className:a,variant:t,...r}){return e.jsx("div",{className:o(X({variant:t}),a),...r})}const _=({href:a,text:t,download:r})=>e.jsxs("div",{className:"galaxy-button-wrapper w-full",children:[e.jsx("style",{children:`
        .uiverse {
          --duration: 7s;
          --easing: linear;
          /* Mapping to Portfolio Theme */
          --c-color-1: hsl(var(--accent)); 
          --c-color-2: hsl(var(--primary));
          --c-color-3: hsl(var(--secondary));
          --c-color-4: hsl(var(--accent));
          
          --c-shadow: rgba(255, 223, 87, 0.3);
          --c-shadow-inset-top: rgba(255, 255, 255, 0.2);
          --c-shadow-inset-bottom: rgba(0, 0, 0, 0.1);
          
          --c-radial-inner: hsl(var(--accent));
          --c-radial-outer: hsl(var(--secondary));
          --c-color: #fff;
          
          -webkit-tap-highlight-color: transparent;
          -webkit-appearance: none;
          outline: none;
          position: relative;
          cursor: pointer;
          border: none;
          display: table;
          border-radius: 24px;
          padding: 0;
          margin: 0;
          text-align: center;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.02em;
          line-height: 1.5;
          color: var(--c-color);
          
          background: radial-gradient(
            circle at center,
            var(--c-radial-inner),
            var(--c-radial-outer) 80%
          );
          box-shadow: 0 0 14px var(--c-shadow);
          
          width: 100%; 
        }

        .dark .uiverse {
             --c-shadow: rgba(120, 50, 255, 0.4);
             --c-radial-inner: hsl(var(--primary));
             --c-radial-outer: hsl(var(--background));
        }

        .uiverse:before {
          content: "";
          pointer-events: none;
          position: absolute;
          z-index: 3;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border-radius: 24px;
          box-shadow:
            inset 0 3px 12px var(--c-shadow-inset-top),
            inset 0 -3px 4px var(--c-shadow-inset-bottom);
        }

        .uiverse .wrapper {
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          overflow: hidden;
          border-radius: 24px;
          padding: 12px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .uiverse .wrapper span {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          z-index: 1;
        }

        .uiverse:hover {
          --duration: 1400ms;
        }

        .uiverse .wrapper .circle {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          filter: blur(var(--blur, 8px));
          background: var(--background, transparent);
          transform: translate(calc(var(--x, 0) - 50px), calc(var(--y, 0) - 20px)) translateZ(0); /* Center offset */
          animation: var(--animation, none) var(--duration) var(--easing) infinite;
        }

        .uiverse .wrapper .circle.circle-1,
        .uiverse .wrapper .circle.circle-9,
        .uiverse .wrapper .circle.circle-10 {
          --background: var(--c-color-4);
        }

        .uiverse .wrapper .circle.circle-3,
        .uiverse .wrapper .circle.circle-4 {
          --background: var(--c-color-2);
          --blur: 14px;
        }

        .uiverse .wrapper .circle.circle-5,
        .uiverse .wrapper .circle.circle-6 {
          --background: var(--c-color-3);
          --blur: 16px;
        }

        .uiverse .wrapper .circle.circle-2,
        .uiverse .wrapper .circle.circle-7,
        .uiverse .wrapper .circle.circle-8,
        .uiverse .wrapper .circle.circle-11,
        .uiverse .wrapper .circle.circle-12 {
          --background: var(--c-color-1);
          --blur: 12px;
        }

        .uiverse .wrapper .circle.circle-1 {
          --x: 0;
          --y: -40px;
          --animation: circle-1;
        }

        .uiverse .wrapper .circle.circle-2 {
          --x: 92px;
          --y: 8px;
          --animation: circle-2;
        }

        .uiverse .wrapper .circle.circle-3 {
          --x: -12px;
          --y: -12px;
          --animation: circle-3;
        }

        .uiverse .wrapper .circle.circle-4 {
          --x: 80px;
          --y: -12px;
          --animation: circle-4;
        }

        .uiverse .wrapper .circle.circle-5 {
          --x: 12px;
          --y: -4px;
          --animation: circle-5;
        }

        .uiverse .wrapper .circle.circle-6 {
          --x: 56px;
          --y: 16px;
          --animation: circle-6;
        }

        .uiverse .wrapper .circle.circle-7 {
          --x: 8px;
          --y: 28px;
          --animation: circle-7;
        }

        .uiverse .wrapper .circle.circle-8 {
          --x: 28px;
          --y: -4px;
          --animation: circle-8;
        }

        .uiverse .wrapper .circle.circle-9 {
          --x: 20px;
          --y: -12px;
          --animation: circle-9;
        }

        .uiverse .wrapper .circle.circle-10 {
          --x: 64px;
          --y: 16px;
          --animation: circle-10;
        }

        .uiverse .wrapper .circle.circle-11 {
          --x: 4px;
          --y: 4px;
          --animation: circle-11;
        }

        .uiverse .wrapper .circle.circle-12 {
          --blur: 14px;
          --x: 52px;
          --y: 4px;
          --animation: circle-12;
        }

        @keyframes circle-1 {
          33% { transform: translate(calc(0px - 50px), calc(16px - 20px)) translateZ(0); }
          66% { transform: translate(calc(12px - 50px), calc(64px - 20px)) translateZ(0); }
        }

        @keyframes circle-2 {
          33% { transform: translate(calc(80px - 50px), calc(-10px - 20px)) translateZ(0); }
          66% { transform: translate(calc(72px - 50px), calc(-48px - 20px)) translateZ(0); }
        }

        @keyframes circle-3 {
          33% { transform: translate(calc(20px - 50px), calc(12px - 20px)) translateZ(0); }
          66% { transform: translate(calc(12px - 50px), calc(4px - 20px)) translateZ(0); }
        }

        @keyframes circle-4 {
          33% { transform: translate(calc(76px - 50px), calc(-12px - 20px)) translateZ(0); }
          66% { transform: translate(calc(112px - 50px), calc(-8px - 20px)) translateZ(0); }
        }

        @keyframes circle-5 {
          33% { transform: translate(calc(84px - 50px), calc(28px - 20px)) translateZ(0); }
          66% { transform: translate(calc(40px - 50px), calc(-32px - 20px)) translateZ(0); }
        }

        @keyframes circle-6 {
          33% { transform: translate(calc(28px - 50px), calc(-16px - 20px)) translateZ(0); }
          66% { transform: translate(calc(76px - 50px), calc(-56px - 20px)) translateZ(0); }
        }

        @keyframes circle-7 {
          33% { transform: translate(calc(8px - 50px), calc(28px - 20px)) translateZ(0); }
          66% { transform: translate(calc(20px - 50px), calc(-60px - 20px)) translateZ(0); }
        }

        @keyframes circle-8 {
          33% { transform: translate(calc(32px - 50px), calc(-4px - 20px)) translateZ(0); }
          66% { transform: translate(calc(56px - 50px), calc(-20px - 20px)) translateZ(0); }
        }

        @keyframes circle-9 {
          33% { transform: translate(calc(20px - 50px), calc(-12px - 20px)) translateZ(0); }
          66% { transform: translate(calc(80px - 50px), calc(-8px - 20px)) translateZ(0); }
        }

        @keyframes circle-10 {
          33% { transform: translate(calc(68px - 50px), calc(20px - 20px)) translateZ(0); }
          66% { transform: translate(calc(100px - 50px), calc(28px - 20px)) translateZ(0); }
        }

        @keyframes circle-11 {
          33% { transform: translate(calc(4px - 50px), calc(4px - 20px)) translateZ(0); }
          66% { transform: translate(calc(68px - 50px), calc(20px - 20px)) translateZ(0); }
        }

        @keyframes circle-12 {
          33% { transform: translate(calc(56px - 50px), calc(0px - 20px)) translateZ(0); }
          66% { transform: translate(calc(60px - 50px), calc(-32px - 20px)) translateZ(0); }
        }
        `}),e.jsx("a",{href:a,download:r,className:"no-underline block w-full",children:e.jsx("div",{className:"uiverse w-full",children:e.jsxs("div",{className:"wrapper",children:[e.jsx("span",{children:t}),e.jsx("div",{className:"circle circle-12"}),e.jsx("div",{className:"circle circle-11"}),e.jsx("div",{className:"circle circle-10"}),e.jsx("div",{className:"circle circle-9"}),e.jsx("div",{className:"circle circle-8"}),e.jsx("div",{className:"circle circle-7"}),e.jsx("div",{className:"circle circle-6"}),e.jsx("div",{className:"circle circle-5"}),e.jsx("div",{className:"circle circle-4"}),e.jsx("div",{className:"circle circle-3"}),e.jsx("div",{className:"circle circle-2"}),e.jsx("div",{className:"circle circle-1"})]})})})]});function ee({isOpen:a,onClose:t}){const{t:r}=R();return e.jsx(z,{open:a,onOpenChange:t,children:e.jsxs(g,{className:"sm:max-w-xl",children:[e.jsxs(h,{children:[e.jsxs(v,{className:"text-2xl font-bold flex items-center gap-2",children:[e.jsx($,{className:"text-primary"}),r("instructions.title")||"Como Instalar e Usar"]}),e.jsx(b,{children:r("instructions.subtitle")||"Guia rápido para começar a usar o Mizin Youtube App"})]}),e.jsxs("div",{className:"space-y-6 py-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"flex-none mt-1",children:e.jsx("span",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-lg",children:r("instructions.step1.title")||"Baixe o Arquivo"}),e.jsx("p",{className:"text-muted-foreground",children:r("instructions.step1.desc")||"Clique no botão 'Baixar Ferramenta Gratuita' para salvar o arquivo .zip no seu computador."})]})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"flex-none mt-1",children:e.jsx("span",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-lg",children:r("instructions.step2.title")||"Extraia os Arquivos"}),e.jsx("p",{className:"text-muted-foreground",children:r("instructions.step2.desc")||"Clique com o botão direito no arquivo baixado e selecione 'Extrair Tudo' ou use seu descompactador preferido."})]})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"flex-none mt-1",children:e.jsx("span",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-lg",children:r("instructions.step3.title")||"Execute o Aplicativo"}),e.jsx("p",{className:"text-muted-foreground",children:r("instructions.step3.desc")||"Abra a pasta extraída e clique duas vezes em 'MizinYoutubeApp.exe' para iniciar. Não é necessário instalação!"})]})]})]}),e.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex gap-3",children:[e.jsx(H,{className:"w-5 h-5 text-amber-500 flex-none"}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[e.jsx("p",{className:"font-medium text-amber-500 mb-1",children:r("instructions.note.title")||"Nota Importante"}),r("instructions.note.desc")||"O Windows pode exibir um aviso de proteção. Como é um aplicativo independente, clique em 'Mais informações' e depois em 'Executar mesmo assim'."]})]})]})]})})}function me({project:a,isOpen:t,onClose:r}){const[c,x]=l.useState(!1),s=n=>{n&&t&&setTimeout(()=>{const m=n,p=m.closest(".overflow-y-auto");if(!m||!p)return;const D=m.getBoundingClientRect(),F=p.getBoundingClientRect(),w=p.scrollTop,L=D.top-F.top+w-p.clientHeight/2+m.clientHeight/2,y=w,U=L-y,j=2e3;let f=null;function N(k){f||(f=k);const C=k-f,d=Math.min(C/j,1),q=d<.5?4*d*d*d:1-Math.pow(-2*d+2,3)/2;p.scrollTop=y+U*q,C<j&&window.requestAnimationFrame(N)}window.requestAnimationFrame(N)},600)};if(!a)return null;const{t:i}=R(),u="5511937507066",B=`Olá Vitor! Vi seu projeto "${a.title}" no seu site e tenho interesse em saber mais ${a.badge?"sobre o template":"sobre como desenvolver algo parecido"}.`,I=`https://wa.me/${u}?text=${encodeURIComponent(B)}`;return e.jsx(z,{open:t,onOpenChange:r,children:e.jsxs(g,{className:"sm:max-w-2xl max-h-[90vh] overflow-y-auto",children:[e.jsxs(h,{children:[e.jsx("div",{className:"w-full aspect-video rounded-lg overflow-hidden mb-4 border border-border",children:e.jsx("img",{src:a.image,alt:a.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(v,{className:"text-2xl font-bold",children:a.title}),a.badge&&e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",children:a.badge==="New"?i("uiLibrary.newFreeApp")||"Nova Aplicação Gratuita":a.badge})]}),e.jsxs(b,{className:"text-lg mb-6",children:[a.description,a.downloadLink&&e.jsxs("span",{onClick:()=>x(!0),className:"text-primary hover:underline cursor-pointer font-bold ml-1",children:["• ",i("uiLibrary.learnToUse")||"Aprenda a usar"]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-3",children:"Tecnologias Utilizadas"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a.technologies.map(n=>e.jsx(Y,{variant:"secondary",children:n},n))})]}),e.jsxs("div",{className:"pt-4 border-t border-border flex flex-col gap-3",children:[a.demoUrl&&e.jsx(T,{className:"w-full gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-[24px]",asChild:!0,children:e.jsxs("a",{href:a.demoUrl,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(Q,{className:"w-5 h-5"})," ",i("projects.viewProject")||"Ver Projeto"]})}),e.jsx(T,{className:"w-full gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 rounded-[24px]",asChild:!0,children:e.jsxs("a",{href:I,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(J,{className:"w-5 h-5"})," Tenho Interesse"]})})]}),a.downloadLink&&e.jsx("div",{className:"pt-2",ref:s,children:e.jsx(_,{href:a.downloadLink,text:i("uiLibrary.downloadFreeTool")||"Baixar Ferramenta Gratuita",download:!0})}),e.jsx(ee,{isOpen:c,onClose:()=>x(!1)})]})]})})}const ae="/My.Portfolio/assets/ecommerce-BJl65fv1.png",re="/My.Portfolio/assets/task-management-BTKZg-wH.png",te="/My.Portfolio/assets/ai-chat-BstFzShe.png",se="/My.Portfolio/assets/ColorFlick-0w7vbQwb.png",ie="/My.Portfolio/assets/capyflowacademy-Dr0g-iLk.png",ce="/My.Portfolio/assets/Mizin-B1AX7ehP.png",ue=a=>[{id:8,title:a("projects.ecommerce.title"),description:a("projects.ecommerce.description"),technologies:["React","Vite","Tailwind CSS","Supabase","PWA"],image:ae},{id:2,title:a("projects.taskmanagement.title"),description:a("projects.taskmanagement.description"),technologies:["React","Vite","CSS Vanilla"],image:re,badge:a("projects.taskmanagement.badge"),demoUrl:"https://vihisantos.github.io/portfolio-profissional/"},{id:5,title:a("projects.aichat.title"),description:a("projects.aichat.description"),technologies:["React","Tailwind CSS","Node.js","Express","PostgreSQL","Supabase","JWT"],image:te},{id:6,title:a("projects.colorflicks.title"),description:a("projects.colorflicks.description"),technologies:["React","Vite","Tailwind CSS","TMDB API","ColorThief"],image:se,demoUrl:"https://vihisantos.github.io/ColorFlicks/"},{id:7,title:a("projects.capyflow.title"),description:a("projects.capyflow.description"),technologies:["Next.js 16","NestJS 11","TypeScript","PostgreSQL","Tailwind CSS"],image:ie,demoUrl:"https://vihisantos.github.io/CapyFlow-Academy/"},{id:1,title:a("projects.mizinapp.title"),description:a("projects.mizinapp.description"),technologies:["Python 3.14","CustomTkinter"],image:ce,badge:"New",downloadLink:"https://drive.google.com/file/d/1dGPSta5n3k7fQQsaPdVg72K0ztsUT-9C/view?usp=sharing"}];export{Y as B,z as D,xe as P,g as a,h as b,v as c,b as d,me as e,ue as g};
