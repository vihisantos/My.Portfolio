import{j as e,m as V,n as E,C as P,ac as Q,X as G,ad as S,ae as z,O as M,Q as H,v as $,af as T,T as J,a5 as W}from"./ui-KYr5DQa0.js";import{a as l}from"./vendor-CyIqNf1X.js";import{c as p,u as R}from"./index-CLZDtw5R.js";import{B as Z}from"./button-Dwb2KLCY.js";function de({technologies:a,onFilterChange:s}){const[r,c]=l.useState([]),x=t=>{const i=r.includes(t)?r.filter(u=>u!==t):[...r,t];c(i),s(i)};return e.jsxs("div",{className:"flex flex-wrap gap-3 mb-8 justify-center",children:[a.map(t=>e.jsx("button",{onClick:()=>x(t),className:`px-4 py-2 rounded-lg smooth-transition font-medium ${r.includes(t)?"bg-gradient-to-r from-primary to-secondary text-white shadow-lg":"bg-slate-100 dark:bg-slate-800 text-foreground hover:bg-slate-200 dark:hover:bg-slate-700"}`,children:t},t)),r.length>0&&e.jsx("button",{onClick:()=>{c([]),s([])},className:"px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground smooth-transition underline",children:"Clear"})]})}const A=V,K=E,I=l.forwardRef(({className:a,...s},r)=>e.jsx(M,{ref:r,className:p("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s}));I.displayName=M.displayName;const f=l.forwardRef(({className:a,children:s,...r},c)=>e.jsxs(K,{children:[e.jsx(I,{}),e.jsxs(P,{ref:c,className:p("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...r,children:[s,e.jsxs(Q,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[e.jsx(G,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));f.displayName=P.displayName;const h=({className:a,...s})=>e.jsx("div",{className:p("flex flex-col space-y-1.5 text-center sm:text-left",a),...s});h.displayName="DialogHeader";const b=l.forwardRef(({className:a,...s},r)=>e.jsx(S,{ref:r,className:p("text-lg font-semibold leading-none tracking-tight",a),...s}));b.displayName=S.displayName;const v=l.forwardRef(({className:a,...s},r)=>e.jsx(z,{ref:r,className:p("text-sm text-muted-foreground",a),...s}));v.displayName=z.displayName;const X=({href:a,text:s,download:r})=>e.jsxs("div",{className:"galaxy-button-wrapper w-full",children:[e.jsx("style",{children:`
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
        `}),e.jsx("a",{href:a,download:r,className:"no-underline block w-full",children:e.jsx("div",{className:"uiverse w-full",children:e.jsxs("div",{className:"wrapper",children:[e.jsx("span",{children:s}),e.jsx("div",{className:"circle circle-12"}),e.jsx("div",{className:"circle circle-11"}),e.jsx("div",{className:"circle circle-10"}),e.jsx("div",{className:"circle circle-9"}),e.jsx("div",{className:"circle circle-8"}),e.jsx("div",{className:"circle circle-7"}),e.jsx("div",{className:"circle circle-6"}),e.jsx("div",{className:"circle circle-5"}),e.jsx("div",{className:"circle circle-4"}),e.jsx("div",{className:"circle circle-3"}),e.jsx("div",{className:"circle circle-2"}),e.jsx("div",{className:"circle circle-1"})]})})})]});function Y({isOpen:a,onClose:s}){const{t:r}=R();return e.jsx(A,{open:a,onOpenChange:s,children:e.jsxs(f,{className:"sm:max-w-xl",children:[e.jsxs(h,{children:[e.jsxs(b,{className:"text-2xl font-bold flex items-center gap-2",children:[e.jsx(H,{className:"text-primary"}),r("instructions.title")||"Como Instalar e Usar"]}),e.jsx(v,{children:r("instructions.subtitle")||"Guia rápido para começar a usar o Mizin Youtube App"})]}),e.jsxs("div",{className:"space-y-6 py-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"flex-none mt-1",children:e.jsx("span",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-lg",children:r("instructions.step1.title")||"Baixe o Arquivo"}),e.jsx("p",{className:"text-muted-foreground",children:r("instructions.step1.desc")||"Clique no botão 'Baixar Ferramenta Gratuita' para salvar o arquivo .zip no seu computador."})]})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"flex-none mt-1",children:e.jsx("span",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-lg",children:r("instructions.step2.title")||"Extraia os Arquivos"}),e.jsx("p",{className:"text-muted-foreground",children:r("instructions.step2.desc")||"Clique com o botão direito no arquivo baixado e selecione 'Extrair Tudo' ou use seu descompactador preferido."})]})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"flex-none mt-1",children:e.jsx("span",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-lg",children:r("instructions.step3.title")||"Execute o Aplicativo"}),e.jsx("p",{className:"text-muted-foreground",children:r("instructions.step3.desc")||"Abra a pasta extraída e clique duas vezes em 'MizinYoutubeApp.exe' para iniciar. Não é necessário instalação!"})]})]})]}),e.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex gap-3",children:[e.jsx($,{className:"w-5 h-5 text-amber-500 flex-none"}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[e.jsx("p",{className:"font-medium text-amber-500 mb-1",children:r("instructions.note.title")||"Nota Importante"}),r("instructions.note.desc")||"O Windows pode exibir um aviso de proteção. Como é um aplicativo independente, clique em 'Mais informações' e depois em 'Executar mesmo assim'."]})]})]})]})})}function pe({project:a,isOpen:s,onClose:r}){const[c,x]=l.useState(!1),t=o=>{o&&s&&setTimeout(()=>{const m=o,n=m.closest(".overflow-y-auto");if(!m||!n)return;const F=m.getBoundingClientRect(),L=n.getBoundingClientRect(),w=n.scrollTop,q=F.top-L.top+w-n.clientHeight/2+m.clientHeight/2,y=w,O=q-y,j=2e3;let g=null;function N(k){g||(g=k);const C=k-g,d=Math.min(C/j,1),U=d<.5?4*d*d*d:1-Math.pow(-2*d+2,3)/2;n.scrollTop=y+O*U,C<j&&window.requestAnimationFrame(N)}window.requestAnimationFrame(N)},600)};if(!a)return null;const{t:i}=R(),u="5511937507066",B=`Olá Vitor! Vi seu projeto "${a.title}" no seu site e tenho interesse em saber mais ${a.badgeType==="sale"?"sobre o template":"sobre como desenvolver algo parecido"}.`,D=`https://wa.me/${u}?text=${encodeURIComponent(B)}`;return e.jsx(A,{open:s,onOpenChange:r,children:e.jsx(f,{className:"sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl shadow-primary/10 rounded-3xl p-0 gap-0",children:e.jsxs("div",{className:"p-6",children:[e.jsxs(h,{children:[e.jsxs("div",{className:"w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-inner relative group",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 z-10"}),e.jsx("img",{src:a.image,alt:a.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"}),e.jsx("div",{className:"absolute top-4 right-4 z-20",children:a.badgeType==="sale"?e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white border border-emerald-400 shadow-lg",children:a.badge}):a.badgeType==="new"?e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/90 backdrop-blur-md text-white border border-blue-400 shadow-lg",children:i("uiLibrary.newFreeApp")}):a.badge&&e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 shadow-lg",children:a.badge})})]}),e.jsx("div",{className:"mb-2",children:e.jsx(b,{className:"text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300",children:a.title})}),e.jsxs(v,{className:"text-base text-muted-foreground leading-relaxed mb-8",children:[a.description,a.downloadLink&&e.jsxs("span",{onClick:()=>x(!0),className:"text-primary hover:underline cursor-pointer font-bold ml-1 inline-flex items-center gap-1",children:[e.jsx(T,{size:14})," ",i("uiLibrary.learnToUse")||"Aprenda a usar"]})]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2",children:[e.jsx(J,{size:14})," Tecnologias"]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a.technologies.map(o=>e.jsx("span",{className:"px-3 py-1.5 rounded-lg bg-secondary/5 text-secondary text-sm font-medium border border-secondary/10 hover:bg-secondary/10 transition-colors cursor-default",children:o},o))})]}),e.jsxs("div",{className:"pt-4 border-t border-border flex flex-col gap-3",children:[a.demoUrl&&e.jsx(Z,{className:"w-full gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-[24px]",asChild:!0,children:e.jsxs("a",{href:a.demoUrl,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(T,{className:"w-5 h-5"})," ",i("projects.viewProject")||"Ver Projeto"]})}),e.jsx(Z,{className:"w-full gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 rounded-[24px]",asChild:!0,children:e.jsxs("a",{href:D,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(W,{className:"w-5 h-5"})," Tenho Interesse"]})})]}),a.downloadLink&&e.jsx("div",{className:"pt-2",ref:t,children:e.jsx(X,{href:a.downloadLink,text:i("uiLibrary.downloadFreeTool")||"Baixar Ferramenta Gratuita",download:!0})}),e.jsx(Y,{isOpen:c,onClose:()=>x(!1)})]})]})})})}const _="/My.Portfolio/assets/ecommerce-BJl65fv1.png",ee="/My.Portfolio/assets/task-management-BTKZg-wH.png",ae="/My.Portfolio/assets/ai-chat-BstFzShe.png",re="/My.Portfolio/assets/ColorFlick-0w7vbQwb.png",se="/My.Portfolio/assets/capyflowacademy-Dr0g-iLk.png",te="/My.Portfolio/assets/Mizin-B1AX7ehP.png",xe=a=>[{id:8,title:a("projects.ecommerce.title"),description:a("projects.ecommerce.description"),technologies:["React","Vite","Tailwind CSS","Supabase","PWA"],image:_},{id:2,title:a("projects.taskmanagement.title"),description:a("projects.taskmanagement.description"),technologies:["React","Vite","CSS Vanilla"],image:ee,badge:a("projects.taskmanagement.badge"),badgeType:"sale",demoUrl:"https://vihisantos.github.io/portfolio-profissional/"},{id:5,title:a("projects.aichat.title"),description:a("projects.aichat.description"),technologies:["React","Tailwind CSS","Node.js","Express","PostgreSQL","Supabase","JWT"],image:ae},{id:6,title:a("projects.colorflicks.title"),description:a("projects.colorflicks.description"),technologies:["React","Vite","Tailwind CSS","TMDB API","ColorThief"],image:re,demoUrl:"https://vihisantos.github.io/ColorFlicks/"},{id:7,title:a("projects.capyflow.title"),description:a("projects.capyflow.description"),technologies:["Next.js 16","NestJS 11","TypeScript","PostgreSQL","Tailwind CSS"],image:se,demoUrl:"https://vihisantos.github.io/CapyFlow-Academy/"},{id:1,title:a("projects.mizinapp.title"),description:a("projects.mizinapp.description"),technologies:["Python 3.14","CustomTkinter"],image:te,badgeType:"new",downloadLink:"https://drive.google.com/file/d/1dGPSta5n3k7fQQsaPdVg72K0ztsUT-9C/view?usp=sharing"}];export{A as D,de as P,f as a,h as b,b as c,v as d,pe as e,xe as g};
