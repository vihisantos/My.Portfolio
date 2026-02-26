import{j as e}from"./ui-qcFD9uuN.js";import{c as m}from"./index-C62QZ5qW.js";import{c as r,m as x,d as f}from"./framer-Bz8kBvrX.js";import"./vendor-BZTSXe9S.js";const j=({children:s,className:n,spotlightColor:a="rgba(255, 255, 255, 0.15)"})=>{const o=r(0),t=r(0);function i({currentTarget:l,clientX:u,clientY:c}){const{left:d,top:p}=l.getBoundingClientRect();o.set(u-d),t.set(c-p)}return e.jsxs("div",{onMouseMove:i,className:m("group relative flex size-full rounded-3xl border border-white/10 bg-black/40 px-8 py-12 shadow-2xl transition-all duration-300 hover:border-white/20",n),children:[e.jsx(x.div,{className:"pointer-events-none absolute -inset-px rounded-3xl transition duration-300 group-hover:opacity-100",style:{background:f`
            radial-gradient(
              650px circle at ${o}px ${t}px,
              ${a},
              transparent 80%
            )
          `}}),e.jsx("div",{className:"relative flex flex-col items-center justify-center gap-4 w-full h-full",children:s})]})};export{j as SpotlightCard};
