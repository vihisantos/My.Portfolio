import{r as ht,a as c,b as pt,v as vt,R as De}from"./vendor-BojDIxtq.js";var te={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me;function yt(){if(me)return W;me=1;var e=ht(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(s,l,u){var f,h={},v=null,y=null;u!==void 0&&(v=""+u),l.key!==void 0&&(v=""+l.key),l.ref!==void 0&&(y=l.ref);for(f in l)r.call(l,f)&&!a.hasOwnProperty(f)&&(h[f]=l[f]);if(s&&s.defaultProps)for(f in l=s.defaultProps,l)h[f]===void 0&&(h[f]=l[f]);return{$$typeof:t,type:s,key:v,ref:y,props:h,_owner:o.current}}return W.Fragment=n,W.jsx=i,W.jsxs=i,W}var ge;function mt(){return ge||(ge=1,te.exports=yt()),te.exports}var g=mt();function A(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e?.(o),n===!1||!o.defaultPrevented)return t?.(o)}}function ke(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Te(...e){return t=>{let n=!1;const r=e.map(o=>{const a=ke(o,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():ke(e[o],null)}}}}function T(...e){return c.useCallback(Te(...e),e)}function gt(e,t){const n=c.createContext(t),r=a=>{const{children:i,...s}=a,l=c.useMemo(()=>s,Object.values(s));return g.jsx(n.Provider,{value:l,children:i})};r.displayName=e+"Provider";function o(a){const i=c.useContext(n);if(i)return i;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${e}\``)}return[r,o]}function kt(e,t=[]){let n=[];function r(a,i){const s=c.createContext(i),l=n.length;n=[...n,i];const u=h=>{const{scope:v,children:y,..._}=h,d=v?.[e]?.[l]||s,m=c.useMemo(()=>_,Object.values(_));return g.jsx(d.Provider,{value:m,children:y})};u.displayName=a+"Provider";function f(h,v){const y=v?.[e]?.[l]||s,_=c.useContext(y);if(_)return _;if(i!==void 0)return i;throw new Error(`\`${h}\` must be used within \`${a}\``)}return[u,f]}const o=()=>{const a=n.map(i=>c.createContext(i));return function(s){const l=s?.[e]||a;return c.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return o.scopeName=e,[r,Et(o,...t)]}function Et(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const i=r.reduce((s,{useScope:l,scopeName:u})=>{const h=l(a)[`__scope${u}`];return{...s,...h}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}function fe(e){const t=bt(e),n=c.forwardRef((r,o)=>{const{children:a,...i}=r,s=c.Children.toArray(a),l=s.find(wt);if(l){const u=l.props.children,f=s.map(h=>h===l?c.Children.count(u)>1?c.Children.only(null):c.isValidElement(u)?u.props.children:null:h);return g.jsx(t,{...i,ref:o,children:c.isValidElement(u)?c.cloneElement(u,void 0,f):null})}return g.jsx(t,{...i,ref:o,children:a})});return n.displayName=`${e}.Slot`,n}var oo=fe("Slot");function bt(e){const t=c.forwardRef((n,r)=>{const{children:o,...a}=n;if(c.isValidElement(o)){const i=_t(o),s=Ct(a,o.props);return o.type!==c.Fragment&&(s.ref=r?Te(r,i):i),c.cloneElement(o,s)}return c.Children.count(o)>1?c.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Le=Symbol("radix.slottable");function ao(e){const t=({children:n})=>g.jsx(g.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Le,t}function wt(e){return c.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Le}function Ct(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...s)=>{const l=a(...s);return o(...s),l}:o&&(n[r]=o):r==="style"?n[r]={...o,...a}:r==="className"&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}function _t(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var xt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],P=xt.reduce((e,t)=>{const n=fe(`Primitive.${t}`),r=c.forwardRef((o,a)=>{const{asChild:i,...s}=o,l=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),g.jsx(l,{...s,ref:a})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Mt(e,t){e&&pt.flushSync(()=>e.dispatchEvent(t))}function B(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...n)=>t.current?.(...n),[])}function St(e,t=globalThis?.document){const n=B(e);c.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Nt="DismissableLayer",le="dismissableLayer.update",Rt="dismissableLayer.pointerDownOutside",Pt="dismissableLayer.focusOutside",Ee,Ie=c.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),he=c.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:i,onDismiss:s,...l}=e,u=c.useContext(Ie),[f,h]=c.useState(null),v=f?.ownerDocument??globalThis?.document,[,y]=c.useState({}),_=T(t,E=>h(E)),d=Array.from(u.layers),[m]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),k=d.indexOf(m),b=f?d.indexOf(f):-1,w=u.layersWithOutsidePointerEventsDisabled.size>0,C=b>=k,x=At(E=>{const R=E.target,F=[...u.branches].some(ee=>ee.contains(R));!C||F||(o?.(E),i?.(E),E.defaultPrevented||s?.())},v),N=Dt(E=>{const R=E.target;[...u.branches].some(ee=>ee.contains(R))||(a?.(E),i?.(E),E.defaultPrevented||s?.())},v);return St(E=>{b===u.layers.size-1&&(r?.(E),!E.defaultPrevented&&s&&(E.preventDefault(),s()))},v),c.useEffect(()=>{if(f)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Ee=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),be(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=Ee)}},[f,v,n,u]),c.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),be())},[f,u]),c.useEffect(()=>{const E=()=>y({});return document.addEventListener(le,E),()=>document.removeEventListener(le,E)},[]),g.jsx(P.div,{...l,ref:_,style:{pointerEvents:w?C?"auto":"none":void 0,...e.style},onFocusCapture:A(e.onFocusCapture,N.onFocusCapture),onBlurCapture:A(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:A(e.onPointerDownCapture,x.onPointerDownCapture)})});he.displayName=Nt;var Ot="DismissableLayerBranch",$e=c.forwardRef((e,t)=>{const n=c.useContext(Ie),r=c.useRef(null),o=T(t,r);return c.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),g.jsx(P.div,{...e,ref:o})});$e.displayName=Ot;function At(e,t=globalThis?.document){const n=B(e),r=c.useRef(!1),o=c.useRef(()=>{});return c.useEffect(()=>{const a=s=>{if(s.target&&!r.current){let l=function(){je(Rt,n,u,{discrete:!0})};const u={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",a),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Dt(e,t=globalThis?.document){const n=B(e),r=c.useRef(!1);return c.useEffect(()=>{const o=a=>{a.target&&!r.current&&je(Pt,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function be(){const e=new CustomEvent(le);document.dispatchEvent(e)}function je(e,t,n,{discrete:r}){const o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Mt(o,a):o.dispatchEvent(a)}var co=he,so=$e,z=globalThis?.document?c.useLayoutEffect:()=>{},Tt="Portal",Fe=c.forwardRef((e,t)=>{const{container:n,...r}=e,[o,a]=c.useState(!1);z(()=>a(!0),[]);const i=n||o&&globalThis?.document?.body;return i?vt.createPortal(g.jsx(P.div,{...r,ref:t}),i):null});Fe.displayName=Tt;function Lt(e,t){return c.useReducer((n,r)=>t[n][r]??n,e)}var X=e=>{const{present:t,children:n}=e,r=It(t),o=typeof n=="function"?n({present:r.isPresent}):c.Children.only(n),a=T(r.ref,$t(o));return typeof n=="function"||r.isPresent?c.cloneElement(o,{ref:a}):null};X.displayName="Presence";function It(e){const[t,n]=c.useState(),r=c.useRef(null),o=c.useRef(e),a=c.useRef("none"),i=e?"mounted":"unmounted",[s,l]=Lt(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const u=q(r.current);a.current=s==="mounted"?u:"none"},[s]),z(()=>{const u=r.current,f=o.current;if(f!==e){const v=a.current,y=q(u);e?l("MOUNT"):y==="none"||u?.display==="none"?l("UNMOUNT"):l(f&&v!==y?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),z(()=>{if(t){let u;const f=t.ownerDocument.defaultView??window,h=y=>{const d=q(r.current).includes(y.animationName);if(y.target===t&&d&&(l("ANIMATION_END"),!o.current)){const m=t.style.animationFillMode;t.style.animationFillMode="forwards",u=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=m)})}},v=y=>{y.target===t&&(a.current=q(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{f.clearTimeout(u),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:c.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function q(e){return e?.animationName||"none"}function $t(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var jt=De[" useInsertionEffect ".trim().toString()]||z;function Ft({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,a,i]=Wt({defaultProp:t,onChange:n}),s=e!==void 0,l=s?e:o;{const f=c.useRef(e!==void 0);c.useEffect(()=>{const h=f.current;h!==s&&console.warn(`${r} is changing from ${h?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=s},[s,r])}const u=c.useCallback(f=>{if(s){const h=Bt(f)?f(e):f;h!==e&&i.current?.(h)}else a(f)},[s,e,a,i]);return[l,u]}function Wt({defaultProp:e,onChange:t}){const[n,r]=c.useState(e),o=c.useRef(n),a=c.useRef(t);return jt(()=>{a.current=t},[t]),c.useEffect(()=>{o.current!==n&&(a.current?.(n),o.current=n)},[n,o]),[n,r,a]}function Bt(e){return typeof e=="function"}/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qt=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),we=e=>{const t=qt(e);return t.charAt(0).toUpperCase()+t.slice(1)},We=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),Ut=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ht={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:i,...s},l)=>c.createElement("svg",{ref:l,...Ht,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:We("lucide",o),...!a&&!Ut(s)&&{"aria-hidden":"true"},...s},[...i.map(([u,f])=>c.createElement(u,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,t)=>{const n=c.forwardRef(({className:r,...o},a)=>c.createElement(Vt,{ref:a,iconNode:t,className:We(`lucide-${zt(we(e))}`,`lucide-${e}`,r),...o}));return n.displayName=we(e),n};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],io=p("arrow-left",Kt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],uo=p("arrow-right",Gt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],lo=p("arrow-up",Yt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],fo=p("award",Zt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ho=p("book-open",Xt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],po=p("book",Jt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],vo=p("briefcase",Qt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]],yo=p("bug",en);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],mo=p("calendar",tn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],go=p("chart-column",nn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ko=p("check",rn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Eo=p("chevron-left",on);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],bo=p("chevron-right",an);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],wo=p("circle-alert",cn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]],Co=p("clapperboard",sn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],_o=p("cloud",un);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],xo=p("code-xml",ln);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Mo=p("code",dn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],So=p("coffee",fn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],No=p("copy",hn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ro=p("cpu",pn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],Po=p("crown",vn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Oo=p("database",yn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ao=p("download",mn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Do=p("external-link",gn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],To=p("eye",kn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Lo=p("git-branch",En);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Io=p("github",bn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],$o=p("globe",wn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],jo=p("graduation-cap",Cn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=[["path",{d:"M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1v1a37"}],["path",{d:"m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95",key:"fhfbnt"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91",key:"1x6kdw"}]],Fo=p("hand-heart",_n);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Wo=p("heart",xn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Bo=p("linkedin",Mn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],zo=p("mail",Sn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],qo=p("message-circle",Nn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Uo=p("message-square",Rn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Ho=p("moon",Pn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Vo=p("music",On);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Ko=p("palette",An);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],Go=p("panels-top-left",Dn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],Yo=p("refresh-ccw",Tn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Zo=p("rocket",Ln);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Xo=p("send",In);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Jo=p("server",$n);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Qo=p("shield-check",jn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ea=p("shield",Fn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],ta=p("shopping-bag",Wn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],na=p("skip-forward",Bn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],ra=p("smartphone",zn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],oa=p("sparkles",qn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],aa=p("star",Un);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ca=p("sun",Hn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],sa=p("terminal",Vn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ia=p("user",Kn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ua=p("users",Gn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],la=p("x",Yn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],da=p("zap",Zn);var Xn=De[" useId ".trim().toString()]||(()=>{}),Jn=0;function ne(e){const[t,n]=c.useState(Xn());return z(()=>{n(r=>r??String(Jn++))},[e]),e||(t?`radix-${t}`:"")}var re="focusScope.autoFocusOnMount",oe="focusScope.autoFocusOnUnmount",Ce={bubbles:!1,cancelable:!0},Qn="FocusScope",Be=c.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...i}=e,[s,l]=c.useState(null),u=B(o),f=B(a),h=c.useRef(null),v=T(t,d=>l(d)),y=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(r){let d=function(w){if(y.paused||!s)return;const C=w.target;s.contains(C)?h.current=C:O(h.current,{select:!0})},m=function(w){if(y.paused||!s)return;const C=w.relatedTarget;C!==null&&(s.contains(C)||O(h.current,{select:!0}))},k=function(w){if(document.activeElement===document.body)for(const x of w)x.removedNodes.length>0&&O(s)};document.addEventListener("focusin",d),document.addEventListener("focusout",m);const b=new MutationObserver(k);return s&&b.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",d),document.removeEventListener("focusout",m),b.disconnect()}}},[r,s,y.paused]),c.useEffect(()=>{if(s){xe.add(y);const d=document.activeElement;if(!s.contains(d)){const k=new CustomEvent(re,Ce);s.addEventListener(re,u),s.dispatchEvent(k),k.defaultPrevented||(er(ar(ze(s)),{select:!0}),document.activeElement===d&&O(s))}return()=>{s.removeEventListener(re,u),setTimeout(()=>{const k=new CustomEvent(oe,Ce);s.addEventListener(oe,f),s.dispatchEvent(k),k.defaultPrevented||O(d??document.body,{select:!0}),s.removeEventListener(oe,f),xe.remove(y)},0)}}},[s,u,f,y]);const _=c.useCallback(d=>{if(!n&&!r||y.paused)return;const m=d.key==="Tab"&&!d.altKey&&!d.ctrlKey&&!d.metaKey,k=document.activeElement;if(m&&k){const b=d.currentTarget,[w,C]=tr(b);w&&C?!d.shiftKey&&k===C?(d.preventDefault(),n&&O(w,{select:!0})):d.shiftKey&&k===w&&(d.preventDefault(),n&&O(C,{select:!0})):k===b&&d.preventDefault()}},[n,r,y.paused]);return g.jsx(P.div,{tabIndex:-1,...i,ref:v,onKeyDown:_})});Be.displayName=Qn;function er(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(O(r,{select:t}),document.activeElement!==n)return}function tr(e){const t=ze(e),n=_e(t,e),r=_e(t.reverse(),e);return[n,r]}function ze(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function _e(e,t){for(const n of e)if(!nr(n,{upTo:t}))return n}function nr(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function rr(e){return e instanceof HTMLInputElement&&"select"in e}function O(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&rr(e)&&t&&e.select()}}var xe=or();function or(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=Me(e,t),e.unshift(t)},remove(t){e=Me(e,t),e[0]?.resume()}}}function Me(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function ar(e){return e.filter(t=>t.tagName!=="A")}var ae=0;function cr(){c.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Se()),document.body.insertAdjacentElement("beforeend",e[1]??Se()),ae++,()=>{ae===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),ae--}},[])}function Se(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var S=function(){return S=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},S.apply(this,arguments)};function qe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function sr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var G="right-scroll-bar-position",Y="width-before-scroll-bar",ir="with-scroll-bars-hidden",ur="--removed-body-scroll-bar-size";function ce(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function lr(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var dr=typeof window<"u"?c.useLayoutEffect:c.useEffect,Ne=new WeakMap;function fr(e,t){var n=lr(null,function(r){return e.forEach(function(o){return ce(o,r)})});return dr(function(){var r=Ne.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(s){a.has(s)||ce(s,null)}),a.forEach(function(s){o.has(s)||ce(s,i)})}Ne.set(n,e)},[e]),n}function hr(e){return e}function pr(e,t){t===void 0&&(t=hr);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(a),i=n}var l=function(){var f=i;i=[],f.forEach(a)},u=function(){return Promise.resolve().then(l)};u(),n={push:function(f){i.push(f),u()},filter:function(f){return i=i.filter(f),n}}}};return o}function vr(e){e===void 0&&(e={});var t=pr(null);return t.options=S({async:!0,ssr:!1},e),t}var Ue=function(e){var t=e.sideCar,n=qe(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return c.createElement(r,S({},n))};Ue.isSideCarExport=!0;function yr(e,t){return e.useMedium(t),Ue}var He=vr(),se=function(){},J=c.forwardRef(function(e,t){var n=c.useRef(null),r=c.useState({onScrollCapture:se,onWheelCapture:se,onTouchMoveCapture:se}),o=r[0],a=r[1],i=e.forwardProps,s=e.children,l=e.className,u=e.removeScrollBar,f=e.enabled,h=e.shards,v=e.sideCar,y=e.noRelative,_=e.noIsolation,d=e.inert,m=e.allowPinchZoom,k=e.as,b=k===void 0?"div":k,w=e.gapMode,C=qe(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=v,N=fr([n,t]),E=S(S({},C),o);return c.createElement(c.Fragment,null,f&&c.createElement(x,{sideCar:He,removeScrollBar:u,shards:h,noRelative:y,noIsolation:_,inert:d,setCallbacks:a,allowPinchZoom:!!m,lockRef:n,gapMode:w}),i?c.cloneElement(c.Children.only(s),S(S({},E),{ref:N})):c.createElement(b,S({},E,{className:l,ref:N}),s))});J.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};J.classNames={fullWidth:Y,zeroRight:G};var mr=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function gr(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=mr();return t&&e.setAttribute("nonce",t),e}function kr(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Er(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var br=function(){var e=0,t=null;return{add:function(n){e==0&&(t=gr())&&(kr(t,n),Er(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},wr=function(){var e=br();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Ve=function(){var e=wr(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Cr={left:0,top:0,right:0,gap:0},ie=function(e){return parseInt(e||"",10)||0},_r=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ie(n),ie(r),ie(o)]},xr=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Cr;var t=_r(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Mr=Ve(),j="data-scroll-locked",Sr=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(ir,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(j,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(G,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Y,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(G," .").concat(G,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Y," .").concat(Y,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(j,`] {
    `).concat(ur,": ").concat(s,`px;
  }
`)},Re=function(){var e=parseInt(document.body.getAttribute(j)||"0",10);return isFinite(e)?e:0},Nr=function(){c.useEffect(function(){return document.body.setAttribute(j,(Re()+1).toString()),function(){var e=Re()-1;e<=0?document.body.removeAttribute(j):document.body.setAttribute(j,e.toString())}},[])},Rr=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Nr();var a=c.useMemo(function(){return xr(o)},[o]);return c.createElement(Mr,{styles:Sr(a,!t,o,n?"":"!important")})},de=!1;if(typeof window<"u")try{var U=Object.defineProperty({},"passive",{get:function(){return de=!0,!0}});window.addEventListener("test",U,U),window.removeEventListener("test",U,U)}catch{de=!1}var L=de?{passive:!1}:!1,Pr=function(e){return e.tagName==="TEXTAREA"},Ke=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Pr(e)&&n[t]==="visible")},Or=function(e){return Ke(e,"overflowY")},Ar=function(e){return Ke(e,"overflowX")},Pe=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Ge(e,r);if(o){var a=Ye(e,r),i=a[1],s=a[2];if(i>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Dr=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Tr=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ge=function(e,t){return e==="v"?Or(t):Ar(t)},Ye=function(e,t){return e==="v"?Dr(t):Tr(t)},Lr=function(e,t){return e==="h"&&t==="rtl"?-1:1},Ir=function(e,t,n,r,o){var a=Lr(e,window.getComputedStyle(t).direction),i=a*r,s=n.target,l=t.contains(s),u=!1,f=i>0,h=0,v=0;do{if(!s)break;var y=Ye(e,s),_=y[0],d=y[1],m=y[2],k=d-m-a*_;(_||k)&&Ge(e,s)&&(h+=k,v+=_);var b=s.parentNode;s=b&&b.nodeType===Node.DOCUMENT_FRAGMENT_NODE?b.host:b}while(!l&&s!==document.body||l&&(t.contains(s)||t===s));return(f&&Math.abs(h)<1||!f&&Math.abs(v)<1)&&(u=!0),u},H=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Oe=function(e){return[e.deltaX,e.deltaY]},Ae=function(e){return e&&"current"in e?e.current:e},$r=function(e,t){return e[0]===t[0]&&e[1]===t[1]},jr=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Fr=0,I=[];function Wr(e){var t=c.useRef([]),n=c.useRef([0,0]),r=c.useRef(),o=c.useState(Fr++)[0],a=c.useState(Ve)[0],i=c.useRef(e);c.useEffect(function(){i.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var d=sr([e.lockRef.current],(e.shards||[]).map(Ae),!0).filter(Boolean);return d.forEach(function(m){return m.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),d.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=c.useCallback(function(d,m){if("touches"in d&&d.touches.length===2||d.type==="wheel"&&d.ctrlKey)return!i.current.allowPinchZoom;var k=H(d),b=n.current,w="deltaX"in d?d.deltaX:b[0]-k[0],C="deltaY"in d?d.deltaY:b[1]-k[1],x,N=d.target,E=Math.abs(w)>Math.abs(C)?"h":"v";if("touches"in d&&E==="h"&&N.type==="range")return!1;var R=Pe(E,N);if(!R)return!0;if(R?x=E:(x=E==="v"?"h":"v",R=Pe(E,N)),!R)return!1;if(!r.current&&"changedTouches"in d&&(w||C)&&(r.current=x),!x)return!0;var F=r.current||x;return Ir(F,m,d,F==="h"?w:C)},[]),l=c.useCallback(function(d){var m=d;if(!(!I.length||I[I.length-1]!==a)){var k="deltaY"in m?Oe(m):H(m),b=t.current.filter(function(x){return x.name===m.type&&(x.target===m.target||m.target===x.shadowParent)&&$r(x.delta,k)})[0];if(b&&b.should){m.cancelable&&m.preventDefault();return}if(!b){var w=(i.current.shards||[]).map(Ae).filter(Boolean).filter(function(x){return x.contains(m.target)}),C=w.length>0?s(m,w[0]):!i.current.noIsolation;C&&m.cancelable&&m.preventDefault()}}},[]),u=c.useCallback(function(d,m,k,b){var w={name:d,delta:m,target:k,should:b,shadowParent:Br(k)};t.current.push(w),setTimeout(function(){t.current=t.current.filter(function(C){return C!==w})},1)},[]),f=c.useCallback(function(d){n.current=H(d),r.current=void 0},[]),h=c.useCallback(function(d){u(d.type,Oe(d),d.target,s(d,e.lockRef.current))},[]),v=c.useCallback(function(d){u(d.type,H(d),d.target,s(d,e.lockRef.current))},[]);c.useEffect(function(){return I.push(a),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:v}),document.addEventListener("wheel",l,L),document.addEventListener("touchmove",l,L),document.addEventListener("touchstart",f,L),function(){I=I.filter(function(d){return d!==a}),document.removeEventListener("wheel",l,L),document.removeEventListener("touchmove",l,L),document.removeEventListener("touchstart",f,L)}},[]);var y=e.removeScrollBar,_=e.inert;return c.createElement(c.Fragment,null,_?c.createElement(a,{styles:jr(o)}):null,y?c.createElement(Rr,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Br(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const zr=yr(He,Wr);var Ze=c.forwardRef(function(e,t){return c.createElement(J,S({},e,{ref:t,sideCar:zr}))});Ze.classNames=J.classNames;var qr=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},$=new WeakMap,V=new WeakMap,K={},ue=0,Xe=function(e){return e&&(e.host||Xe(e.parentNode))},Ur=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Xe(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Hr=function(e,t,n,r){var o=Ur(t,Array.isArray(e)?e:[e]);K[n]||(K[n]=new WeakMap);var a=K[n],i=[],s=new Set,l=new Set(o),u=function(h){!h||s.has(h)||(s.add(h),u(h.parentNode))};o.forEach(u);var f=function(h){!h||l.has(h)||Array.prototype.forEach.call(h.children,function(v){if(s.has(v))f(v);else try{var y=v.getAttribute(r),_=y!==null&&y!=="false",d=($.get(v)||0)+1,m=(a.get(v)||0)+1;$.set(v,d),a.set(v,m),i.push(v),d===1&&_&&V.set(v,!0),m===1&&v.setAttribute(n,"true"),_||v.setAttribute(r,"true")}catch(k){console.error("aria-hidden: cannot operate on ",v,k)}})};return f(t),s.clear(),ue++,function(){i.forEach(function(h){var v=$.get(h)-1,y=a.get(h)-1;$.set(h,v),a.set(h,y),v||(V.has(h)||h.removeAttribute(r),V.delete(h)),y||h.removeAttribute(n)}),ue--,ue||($=new WeakMap,$=new WeakMap,V=new WeakMap,K={})}},Vr=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=qr(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live], script"))),Hr(r,o,n,"aria-hidden")):function(){return null}},Q="Dialog",[Je,fa]=kt(Q),[Kr,M]=Je(Q),Qe=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:i=!0}=e,s=c.useRef(null),l=c.useRef(null),[u,f]=Ft({prop:r,defaultProp:o??!1,onChange:a,caller:Q});return g.jsx(Kr,{scope:t,triggerRef:s,contentRef:l,contentId:ne(),titleId:ne(),descriptionId:ne(),open:u,onOpenChange:f,onOpenToggle:c.useCallback(()=>f(h=>!h),[f]),modal:i,children:n})};Qe.displayName=Q;var et="DialogTrigger",Gr=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=M(et,n),a=T(t,o.triggerRef);return g.jsx(P.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":ye(o.open),...r,ref:a,onClick:A(e.onClick,o.onOpenToggle)})});Gr.displayName=et;var pe="DialogPortal",[Yr,tt]=Je(pe,{forceMount:void 0}),nt=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=M(pe,t);return g.jsx(Yr,{scope:t,forceMount:n,children:c.Children.map(r,i=>g.jsx(X,{present:n||a.open,children:g.jsx(Fe,{asChild:!0,container:o,children:i})}))})};nt.displayName=pe;var Z="DialogOverlay",rt=c.forwardRef((e,t)=>{const n=tt(Z,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=M(Z,e.__scopeDialog);return a.modal?g.jsx(X,{present:r||a.open,children:g.jsx(Xr,{...o,ref:t})}):null});rt.displayName=Z;var Zr=fe("DialogOverlay.RemoveScroll"),Xr=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=M(Z,n);return g.jsx(Ze,{as:Zr,allowPinchZoom:!0,shards:[o.contentRef],children:g.jsx(P.div,{"data-state":ye(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),D="DialogContent",ot=c.forwardRef((e,t)=>{const n=tt(D,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=M(D,e.__scopeDialog);return g.jsx(X,{present:r||a.open,children:a.modal?g.jsx(Jr,{...o,ref:t}):g.jsx(Qr,{...o,ref:t})})});ot.displayName=D;var Jr=c.forwardRef((e,t)=>{const n=M(D,e.__scopeDialog),r=c.useRef(null),o=T(t,n.contentRef,r);return c.useEffect(()=>{const a=r.current;if(a)return Vr(a)},[]),g.jsx(at,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:A(e.onCloseAutoFocus,a=>{a.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:A(e.onPointerDownOutside,a=>{const i=a.detail.originalEvent,s=i.button===0&&i.ctrlKey===!0;(i.button===2||s)&&a.preventDefault()}),onFocusOutside:A(e.onFocusOutside,a=>a.preventDefault())})}),Qr=c.forwardRef((e,t)=>{const n=M(D,e.__scopeDialog),r=c.useRef(!1),o=c.useRef(!1);return g.jsx(at,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{e.onCloseAutoFocus?.(a),a.defaultPrevented||(r.current||n.triggerRef.current?.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{e.onInteractOutside?.(a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const i=a.target;n.triggerRef.current?.contains(i)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),at=c.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...i}=e,s=M(D,n),l=c.useRef(null),u=T(t,l);return cr(),g.jsxs(g.Fragment,{children:[g.jsx(Be,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:g.jsx(he,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":ye(s.open),...i,ref:u,onDismiss:()=>s.onOpenChange(!1)})}),g.jsxs(g.Fragment,{children:[g.jsx(eo,{titleId:s.titleId}),g.jsx(no,{contentRef:l,descriptionId:s.descriptionId})]})]})}),ve="DialogTitle",ct=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=M(ve,n);return g.jsx(P.h2,{id:o.titleId,...r,ref:t})});ct.displayName=ve;var st="DialogDescription",it=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=M(st,n);return g.jsx(P.p,{id:o.descriptionId,...r,ref:t})});it.displayName=st;var ut="DialogClose",lt=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=M(ut,n);return g.jsx(P.button,{type:"button",...r,ref:t,onClick:A(e.onClick,()=>o.onOpenChange(!1))})});lt.displayName=ut;function ye(e){return e?"open":"closed"}var dt="DialogTitleWarning",[ha,ft]=gt(dt,{contentName:D,titleName:ve,docsSlug:"dialog"}),eo=({titleId:e})=>{const t=ft(dt),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return c.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},to="DialogDescriptionWarning",no=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ft(to).contentName}}.`;return c.useEffect(()=>{const o=e.current?.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},pa=Qe,va=nt,ya=rt,ma=ot,ga=ct,ka=it,Ea=lt;export{ma as $,lo as A,so as B,wo as C,he as D,Uo as E,Eo as F,$o as G,bo as H,Ao as I,Do as J,mo as K,qo as L,Ho as M,Vo as N,na as O,P,uo as Q,co as R,ra as S,sa as T,ia as U,Lo as V,io as W,la as X,pa as Y,da as Z,va as _,fe as a,Ea as a0,ga as a1,ka as a2,ya as a3,To as a4,Mo as a5,ko as a6,No as a7,oo as a8,Zo as a9,ea as aa,Go as ab,ua as ac,ta as ad,go as ae,Co as af,Ko as ag,oa as ah,Fo as ai,Po as aj,Qo as ak,Wo as al,Xo as am,Io as an,Bo as ao,ca as ap,po as aq,Ft as b,kt as c,X as d,A as e,B as f,Fe as g,z as h,Mt as i,g as j,ao as k,Yo as l,xo as m,Oo as n,Jo as o,Ro as p,_o as q,So as r,yo as s,aa as t,T as u,ho as v,fo as w,vo as x,jo as y,zo as z};
