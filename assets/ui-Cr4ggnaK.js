import{r as ht,a as c,b as pt,v as vt,R as De}from"./vendor-BZTSXe9S.js";var te={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me;function yt(){if(me)return W;me=1;var e=ht(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(s,l,u){var h,p={},v=null,y=null;u!==void 0&&(v=""+u),l.key!==void 0&&(v=""+l.key),l.ref!==void 0&&(y=l.ref);for(h in l)r.call(l,h)&&!a.hasOwnProperty(h)&&(p[h]=l[h]);if(s&&s.defaultProps)for(h in l=s.defaultProps,l)p[h]===void 0&&(p[h]=l[h]);return{$$typeof:t,type:s,key:v,ref:y,props:p,_owner:o.current}}return W.Fragment=n,W.jsx=i,W.jsxs=i,W}var ge;function mt(){return ge||(ge=1,te.exports=yt()),te.exports}var g=mt();function O(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e?.(o),n===!1||!o.defaultPrevented)return t?.(o)}}function ke(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Le(...e){return t=>{let n=!1;const r=e.map(o=>{const a=ke(o,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():ke(e[o],null)}}}}function L(...e){return c.useCallback(Le(...e),e)}function gt(e,t){const n=c.createContext(t),r=a=>{const{children:i,...s}=a,l=c.useMemo(()=>s,Object.values(s));return g.jsx(n.Provider,{value:l,children:i})};r.displayName=e+"Provider";function o(a){const i=c.useContext(n);if(i)return i;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${e}\``)}return[r,o]}function kt(e,t=[]){let n=[];function r(a,i){const s=c.createContext(i),l=n.length;n=[...n,i];const u=p=>{const{scope:v,children:y,...C}=p,d=v?.[e]?.[l]||s,m=c.useMemo(()=>C,Object.values(C));return g.jsx(d.Provider,{value:m,children:y})};u.displayName=a+"Provider";function h(p,v){const y=v?.[e]?.[l]||s,C=c.useContext(y);if(C)return C;if(i!==void 0)return i;throw new Error(`\`${p}\` must be used within \`${a}\``)}return[u,h]}const o=()=>{const a=n.map(i=>c.createContext(i));return function(s){const l=s?.[e]||a;return c.useMemo(()=>({[`__scope${e}`]:{...s,[e]:l}}),[s,l])}};return o.scopeName=e,[r,Et(o,...t)]}function Et(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const i=r.reduce((s,{useScope:l,scopeName:u})=>{const p=l(a)[`__scope${u}`];return{...s,...p}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}function fe(e){const t=bt(e),n=c.forwardRef((r,o)=>{const{children:a,...i}=r,s=c.Children.toArray(a),l=s.find(wt);if(l){const u=l.props.children,h=s.map(p=>p===l?c.Children.count(u)>1?c.Children.only(null):c.isValidElement(u)?u.props.children:null:p);return g.jsx(t,{...i,ref:o,children:c.isValidElement(u)?c.cloneElement(u,void 0,h):null})}return g.jsx(t,{...i,ref:o,children:a})});return n.displayName=`${e}.Slot`,n}var yo=fe("Slot");function bt(e){const t=c.forwardRef((n,r)=>{const{children:o,...a}=n;if(c.isValidElement(o)){const i=Ct(o),s=_t(a,o.props);return o.type!==c.Fragment&&(s.ref=r?Le(r,i):i),c.cloneElement(o,s)}return c.Children.count(o)>1?c.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Te=Symbol("radix.slottable");function mo(e){const t=({children:n})=>g.jsx(g.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Te,t}function wt(e){return c.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Te}function _t(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...s)=>{const l=a(...s);return o(...s),l}:o&&(n[r]=o):r==="style"?n[r]={...o,...a}:r==="className"&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}function Ct(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var xt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],A=xt.reduce((e,t)=>{const n=fe(`Primitive.${t}`),r=c.forwardRef((o,a)=>{const{asChild:i,...s}=o,l=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),g.jsx(l,{...s,ref:a})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Mt(e,t){e&&pt.flushSync(()=>e.dispatchEvent(t))}function z(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...n)=>t.current?.(...n),[])}function Nt(e,t=globalThis?.document){const n=z(e);c.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var St="DismissableLayer",le="dismissableLayer.update",Rt="dismissableLayer.pointerDownOutside",At="dismissableLayer.focusOutside",Ee,$e=c.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),he=c.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:i,onDismiss:s,...l}=e,u=c.useContext($e),[h,p]=c.useState(null),v=h?.ownerDocument??globalThis?.document,[,y]=c.useState({}),C=L(t,E=>p(E)),d=Array.from(u.layers),[m]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),k=d.indexOf(m),b=h?d.indexOf(h):-1,w=u.layersWithOutsidePointerEventsDisabled.size>0,_=b>=k,x=Ot(E=>{const R=E.target,F=[...u.branches].some(ee=>ee.contains(R));!_||F||(o?.(E),i?.(E),E.defaultPrevented||s?.())},v),S=Dt(E=>{const R=E.target;[...u.branches].some(ee=>ee.contains(R))||(a?.(E),i?.(E),E.defaultPrevented||s?.())},v);return Nt(E=>{b===u.layers.size-1&&(r?.(E),!E.defaultPrevented&&s&&(E.preventDefault(),s()))},v),c.useEffect(()=>{if(h)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Ee=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(h)),u.layers.add(h),be(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=Ee)}},[h,v,n,u]),c.useEffect(()=>()=>{h&&(u.layers.delete(h),u.layersWithOutsidePointerEventsDisabled.delete(h),be())},[h,u]),c.useEffect(()=>{const E=()=>y({});return document.addEventListener(le,E),()=>document.removeEventListener(le,E)},[]),g.jsx(A.div,{...l,ref:C,style:{pointerEvents:w?_?"auto":"none":void 0,...e.style},onFocusCapture:O(e.onFocusCapture,S.onFocusCapture),onBlurCapture:O(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:O(e.onPointerDownCapture,x.onPointerDownCapture)})});he.displayName=St;var Pt="DismissableLayerBranch",Ie=c.forwardRef((e,t)=>{const n=c.useContext($e),r=c.useRef(null),o=L(t,r);return c.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),g.jsx(A.div,{...e,ref:o})});Ie.displayName=Pt;function Ot(e,t=globalThis?.document){const n=z(e),r=c.useRef(!1),o=c.useRef(()=>{});return c.useEffect(()=>{const a=s=>{if(s.target&&!r.current){let l=function(){je(Rt,n,u,{discrete:!0})};const u={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",a),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Dt(e,t=globalThis?.document){const n=z(e),r=c.useRef(!1);return c.useEffect(()=>{const o=a=>{a.target&&!r.current&&je(At,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function be(){const e=new CustomEvent(le);document.dispatchEvent(e)}function je(e,t,n,{discrete:r}){const o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Mt(o,a):o.dispatchEvent(a)}var go=he,ko=Ie,B=globalThis?.document?c.useLayoutEffect:()=>{},Lt="Portal",Fe=c.forwardRef((e,t)=>{const{container:n,...r}=e,[o,a]=c.useState(!1);B(()=>a(!0),[]);const i=n||o&&globalThis?.document?.body;return i?vt.createPortal(g.jsx(A.div,{...r,ref:t}),i):null});Fe.displayName=Lt;function Tt(e,t){return c.useReducer((n,r)=>t[n][r]??n,e)}var X=e=>{const{present:t,children:n}=e,r=$t(t),o=typeof n=="function"?n({present:r.isPresent}):c.Children.only(n),a=L(r.ref,It(o));return typeof n=="function"||r.isPresent?c.cloneElement(o,{ref:a}):null};X.displayName="Presence";function $t(e){const[t,n]=c.useState(),r=c.useRef(null),o=c.useRef(e),a=c.useRef("none"),i=e?"mounted":"unmounted",[s,l]=Tt(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const u=q(r.current);a.current=s==="mounted"?u:"none"},[s]),B(()=>{const u=r.current,h=o.current;if(h!==e){const v=a.current,y=q(u);e?l("MOUNT"):y==="none"||u?.display==="none"?l("UNMOUNT"):l(h&&v!==y?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,l]),B(()=>{if(t){let u;const h=t.ownerDocument.defaultView??window,p=y=>{const d=q(r.current).includes(y.animationName);if(y.target===t&&d&&(l("ANIMATION_END"),!o.current)){const m=t.style.animationFillMode;t.style.animationFillMode="forwards",u=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=m)})}},v=y=>{y.target===t&&(a.current=q(r.current))};return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{h.clearTimeout(u),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:c.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function q(e){return e?.animationName||"none"}function It(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var jt=De[" useInsertionEffect ".trim().toString()]||B;function Ft({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,a,i]=Wt({defaultProp:t,onChange:n}),s=e!==void 0,l=s?e:o;{const h=c.useRef(e!==void 0);c.useEffect(()=>{const p=h.current;p!==s&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),h.current=s},[s,r])}const u=c.useCallback(h=>{if(s){const p=zt(h)?h(e):h;p!==e&&i.current?.(p)}else a(h)},[s,e,a,i]);return[l,u]}function Wt({defaultProp:e,onChange:t}){const[n,r]=c.useState(e),o=c.useRef(n),a=c.useRef(t);return jt(()=>{a.current=t},[t]),c.useEffect(()=>{o.current!==n&&(a.current?.(n),o.current=n)},[n,o]),[n,r,a]}function zt(e){return typeof e=="function"}/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qt=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),we=e=>{const t=qt(e);return t.charAt(0).toUpperCase()+t.slice(1)},We=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),Ht=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ut={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:i,...s},l)=>c.createElement("svg",{ref:l,...Ut,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:We("lucide",o),...!a&&!Ht(s)&&{"aria-hidden":"true"},...s},[...i.map(([u,h])=>c.createElement(u,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(e,t)=>{const n=c.forwardRef(({className:r,...o},a)=>c.createElement(Vt,{ref:a,iconNode:t,className:We(`lucide-${Bt(we(e))}`,`lucide-${e}`,r),...o}));return n.displayName=we(e),n};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Eo=f("arrow-left",Kt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],bo=f("arrow-right",Gt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],wo=f("arrow-up",Yt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],_o=f("award",Zt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]],Co=f("beaker",Xt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xo=f("book-open",Jt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Mo=f("book",Qt);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],No=f("briefcase",en);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]],So=f("bug",tn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Ro=f("building-2",nn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Ao=f("calendar",rn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Po=f("chart-column",on);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Oo=f("check",an);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Do=f("chevron-left",cn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Lo=f("chevron-right",sn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],To=f("circle-alert",un);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]],$o=f("clapperboard",ln);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Io=f("cloud",dn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],jo=f("code-xml",fn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Fo=f("code",hn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],Wo=f("coffee",pn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0",key:"suqz9p"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],zo=f("contact-round",vn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Bo=f("copy",yn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],qo=f("cpu",mn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Ho=f("credit-card",gn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],Uo=f("crown",kn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Vo=f("database",En);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ko=f("download",bn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Go=f("external-link",wn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Yo=f("eye",_n);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Zo=f("funnel",Cn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Xo=f("git-branch",xn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Jo=f("github",Mn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Qo=f("globe",Nn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],ea=f("graduation-cap",Sn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=[["path",{d:"M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1v1a37"}],["path",{d:"m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95",key:"fhfbnt"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91",key:"1x6kdw"}]],ta=f("hand-heart",Rn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],na=f("heart",An);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],ra=f("house",Pn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],oa=f("languages",On);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aa=f("layers",Dn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],ca=f("linkedin",Ln);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],sa=f("loader-circle",Tn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ia=f("mail",$n);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],ua=f("message-circle",In);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],la=f("message-square",jn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],da=f("moon",Fn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],fa=f("music",Wn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],ha=f("palette",zn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],pa=f("panels-top-left",Bn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],va=f("refresh-ccw",qn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],ya=f("rocket",Hn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ma=f("search",Un);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],ga=f("send",Vn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],ka=f("server",Kn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ea=f("shield-check",Gn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ba=f("shield",Yn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],wa=f("shopping-bag",Zn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],_a=f("skip-forward",Xn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Ca=f("smartphone",Jn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],xa=f("sparkles",Qn);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ma=f("star",er);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Na=f("sun",tr);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Sa=f("terminal",nr);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ra=f("user",rr);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Aa=f("users",or);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Pa=f("x",ar);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Oa=f("youtube",cr);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Da=f("zap",sr);var ir=De[" useId ".trim().toString()]||(()=>{}),ur=0;function ne(e){const[t,n]=c.useState(ir());return B(()=>{n(r=>r??String(ur++))},[e]),e||(t?`radix-${t}`:"")}var re="focusScope.autoFocusOnMount",oe="focusScope.autoFocusOnUnmount",_e={bubbles:!1,cancelable:!0},lr="FocusScope",ze=c.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...i}=e,[s,l]=c.useState(null),u=z(o),h=z(a),p=c.useRef(null),v=L(t,d=>l(d)),y=c.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;c.useEffect(()=>{if(r){let d=function(w){if(y.paused||!s)return;const _=w.target;s.contains(_)?p.current=_:P(p.current,{select:!0})},m=function(w){if(y.paused||!s)return;const _=w.relatedTarget;_!==null&&(s.contains(_)||P(p.current,{select:!0}))},k=function(w){if(document.activeElement===document.body)for(const x of w)x.removedNodes.length>0&&P(s)};document.addEventListener("focusin",d),document.addEventListener("focusout",m);const b=new MutationObserver(k);return s&&b.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",d),document.removeEventListener("focusout",m),b.disconnect()}}},[r,s,y.paused]),c.useEffect(()=>{if(s){xe.add(y);const d=document.activeElement;if(!s.contains(d)){const k=new CustomEvent(re,_e);s.addEventListener(re,u),s.dispatchEvent(k),k.defaultPrevented||(dr(yr(Be(s)),{select:!0}),document.activeElement===d&&P(s))}return()=>{s.removeEventListener(re,u),setTimeout(()=>{const k=new CustomEvent(oe,_e);s.addEventListener(oe,h),s.dispatchEvent(k),k.defaultPrevented||P(d??document.body,{select:!0}),s.removeEventListener(oe,h),xe.remove(y)},0)}}},[s,u,h,y]);const C=c.useCallback(d=>{if(!n&&!r||y.paused)return;const m=d.key==="Tab"&&!d.altKey&&!d.ctrlKey&&!d.metaKey,k=document.activeElement;if(m&&k){const b=d.currentTarget,[w,_]=fr(b);w&&_?!d.shiftKey&&k===_?(d.preventDefault(),n&&P(w,{select:!0})):d.shiftKey&&k===w&&(d.preventDefault(),n&&P(_,{select:!0})):k===b&&d.preventDefault()}},[n,r,y.paused]);return g.jsx(A.div,{tabIndex:-1,...i,ref:v,onKeyDown:C})});ze.displayName=lr;function dr(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(P(r,{select:t}),document.activeElement!==n)return}function fr(e){const t=Be(e),n=Ce(t,e),r=Ce(t.reverse(),e);return[n,r]}function Be(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Ce(e,t){for(const n of e)if(!hr(n,{upTo:t}))return n}function hr(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function pr(e){return e instanceof HTMLInputElement&&"select"in e}function P(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&pr(e)&&t&&e.select()}}var xe=vr();function vr(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=Me(e,t),e.unshift(t)},remove(t){e=Me(e,t),e[0]?.resume()}}}function Me(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function yr(e){return e.filter(t=>t.tagName!=="A")}var ae=0;function mr(){c.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Ne()),document.body.insertAdjacentElement("beforeend",e[1]??Ne()),ae++,()=>{ae===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),ae--}},[])}function Ne(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var N=function(){return N=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},N.apply(this,arguments)};function qe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function gr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var G="right-scroll-bar-position",Y="width-before-scroll-bar",kr="with-scroll-bars-hidden",Er="--removed-body-scroll-bar-size";function ce(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function br(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var wr=typeof window<"u"?c.useLayoutEffect:c.useEffect,Se=new WeakMap;function _r(e,t){var n=br(null,function(r){return e.forEach(function(o){return ce(o,r)})});return wr(function(){var r=Se.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(s){a.has(s)||ce(s,null)}),a.forEach(function(s){o.has(s)||ce(s,i)})}Se.set(n,e)},[e]),n}function Cr(e){return e}function xr(e,t){t===void 0&&(t=Cr);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(a),i=n}var l=function(){var h=i;i=[],h.forEach(a)},u=function(){return Promise.resolve().then(l)};u(),n={push:function(h){i.push(h),u()},filter:function(h){return i=i.filter(h),n}}}};return o}function Mr(e){e===void 0&&(e={});var t=xr(null);return t.options=N({async:!0,ssr:!1},e),t}var He=function(e){var t=e.sideCar,n=qe(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return c.createElement(r,N({},n))};He.isSideCarExport=!0;function Nr(e,t){return e.useMedium(t),He}var Ue=Mr(),se=function(){},J=c.forwardRef(function(e,t){var n=c.useRef(null),r=c.useState({onScrollCapture:se,onWheelCapture:se,onTouchMoveCapture:se}),o=r[0],a=r[1],i=e.forwardProps,s=e.children,l=e.className,u=e.removeScrollBar,h=e.enabled,p=e.shards,v=e.sideCar,y=e.noRelative,C=e.noIsolation,d=e.inert,m=e.allowPinchZoom,k=e.as,b=k===void 0?"div":k,w=e.gapMode,_=qe(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=v,S=_r([n,t]),E=N(N({},_),o);return c.createElement(c.Fragment,null,h&&c.createElement(x,{sideCar:Ue,removeScrollBar:u,shards:p,noRelative:y,noIsolation:C,inert:d,setCallbacks:a,allowPinchZoom:!!m,lockRef:n,gapMode:w}),i?c.cloneElement(c.Children.only(s),N(N({},E),{ref:S})):c.createElement(b,N({},E,{className:l,ref:S}),s))});J.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};J.classNames={fullWidth:Y,zeroRight:G};var Sr=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Rr(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Sr();return t&&e.setAttribute("nonce",t),e}function Ar(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Pr(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Or=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Rr())&&(Ar(t,n),Pr(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Dr=function(){var e=Or();return function(t,n){c.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Ve=function(){var e=Dr(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Lr={left:0,top:0,right:0,gap:0},ie=function(e){return parseInt(e||"",10)||0},Tr=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ie(n),ie(r),ie(o)]},$r=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Lr;var t=Tr(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Ir=Ve(),j="data-scroll-locked",jr=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(kr,` {
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
    `).concat(Er,": ").concat(s,`px;
  }
`)},Re=function(){var e=parseInt(document.body.getAttribute(j)||"0",10);return isFinite(e)?e:0},Fr=function(){c.useEffect(function(){return document.body.setAttribute(j,(Re()+1).toString()),function(){var e=Re()-1;e<=0?document.body.removeAttribute(j):document.body.setAttribute(j,e.toString())}},[])},Wr=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Fr();var a=c.useMemo(function(){return $r(o)},[o]);return c.createElement(Ir,{styles:jr(a,!t,o,n?"":"!important")})},de=!1;if(typeof window<"u")try{var H=Object.defineProperty({},"passive",{get:function(){return de=!0,!0}});window.addEventListener("test",H,H),window.removeEventListener("test",H,H)}catch{de=!1}var T=de?{passive:!1}:!1,zr=function(e){return e.tagName==="TEXTAREA"},Ke=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!zr(e)&&n[t]==="visible")},Br=function(e){return Ke(e,"overflowY")},qr=function(e){return Ke(e,"overflowX")},Ae=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Ge(e,r);if(o){var a=Ye(e,r),i=a[1],s=a[2];if(i>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Hr=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Ur=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ge=function(e,t){return e==="v"?Br(t):qr(t)},Ye=function(e,t){return e==="v"?Hr(t):Ur(t)},Vr=function(e,t){return e==="h"&&t==="rtl"?-1:1},Kr=function(e,t,n,r,o){var a=Vr(e,window.getComputedStyle(t).direction),i=a*r,s=n.target,l=t.contains(s),u=!1,h=i>0,p=0,v=0;do{if(!s)break;var y=Ye(e,s),C=y[0],d=y[1],m=y[2],k=d-m-a*C;(C||k)&&Ge(e,s)&&(p+=k,v+=C);var b=s.parentNode;s=b&&b.nodeType===Node.DOCUMENT_FRAGMENT_NODE?b.host:b}while(!l&&s!==document.body||l&&(t.contains(s)||t===s));return(h&&Math.abs(p)<1||!h&&Math.abs(v)<1)&&(u=!0),u},U=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Pe=function(e){return[e.deltaX,e.deltaY]},Oe=function(e){return e&&"current"in e?e.current:e},Gr=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Yr=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Zr=0,$=[];function Xr(e){var t=c.useRef([]),n=c.useRef([0,0]),r=c.useRef(),o=c.useState(Zr++)[0],a=c.useState(Ve)[0],i=c.useRef(e);c.useEffect(function(){i.current=e},[e]),c.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var d=gr([e.lockRef.current],(e.shards||[]).map(Oe),!0).filter(Boolean);return d.forEach(function(m){return m.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),d.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=c.useCallback(function(d,m){if("touches"in d&&d.touches.length===2||d.type==="wheel"&&d.ctrlKey)return!i.current.allowPinchZoom;var k=U(d),b=n.current,w="deltaX"in d?d.deltaX:b[0]-k[0],_="deltaY"in d?d.deltaY:b[1]-k[1],x,S=d.target,E=Math.abs(w)>Math.abs(_)?"h":"v";if("touches"in d&&E==="h"&&S.type==="range")return!1;var R=Ae(E,S);if(!R)return!0;if(R?x=E:(x=E==="v"?"h":"v",R=Ae(E,S)),!R)return!1;if(!r.current&&"changedTouches"in d&&(w||_)&&(r.current=x),!x)return!0;var F=r.current||x;return Kr(F,m,d,F==="h"?w:_)},[]),l=c.useCallback(function(d){var m=d;if(!(!$.length||$[$.length-1]!==a)){var k="deltaY"in m?Pe(m):U(m),b=t.current.filter(function(x){return x.name===m.type&&(x.target===m.target||m.target===x.shadowParent)&&Gr(x.delta,k)})[0];if(b&&b.should){m.cancelable&&m.preventDefault();return}if(!b){var w=(i.current.shards||[]).map(Oe).filter(Boolean).filter(function(x){return x.contains(m.target)}),_=w.length>0?s(m,w[0]):!i.current.noIsolation;_&&m.cancelable&&m.preventDefault()}}},[]),u=c.useCallback(function(d,m,k,b){var w={name:d,delta:m,target:k,should:b,shadowParent:Jr(k)};t.current.push(w),setTimeout(function(){t.current=t.current.filter(function(_){return _!==w})},1)},[]),h=c.useCallback(function(d){n.current=U(d),r.current=void 0},[]),p=c.useCallback(function(d){u(d.type,Pe(d),d.target,s(d,e.lockRef.current))},[]),v=c.useCallback(function(d){u(d.type,U(d),d.target,s(d,e.lockRef.current))},[]);c.useEffect(function(){return $.push(a),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:v}),document.addEventListener("wheel",l,T),document.addEventListener("touchmove",l,T),document.addEventListener("touchstart",h,T),function(){$=$.filter(function(d){return d!==a}),document.removeEventListener("wheel",l,T),document.removeEventListener("touchmove",l,T),document.removeEventListener("touchstart",h,T)}},[]);var y=e.removeScrollBar,C=e.inert;return c.createElement(c.Fragment,null,C?c.createElement(a,{styles:Yr(o)}):null,y?c.createElement(Wr,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function Jr(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Qr=Nr(Ue,Xr);var Ze=c.forwardRef(function(e,t){return c.createElement(J,N({},e,{ref:t,sideCar:Qr}))});Ze.classNames=J.classNames;var eo=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},I=new WeakMap,V=new WeakMap,K={},ue=0,Xe=function(e){return e&&(e.host||Xe(e.parentNode))},to=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Xe(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},no=function(e,t,n,r){var o=to(t,Array.isArray(e)?e:[e]);K[n]||(K[n]=new WeakMap);var a=K[n],i=[],s=new Set,l=new Set(o),u=function(p){!p||s.has(p)||(s.add(p),u(p.parentNode))};o.forEach(u);var h=function(p){!p||l.has(p)||Array.prototype.forEach.call(p.children,function(v){if(s.has(v))h(v);else try{var y=v.getAttribute(r),C=y!==null&&y!=="false",d=(I.get(v)||0)+1,m=(a.get(v)||0)+1;I.set(v,d),a.set(v,m),i.push(v),d===1&&C&&V.set(v,!0),m===1&&v.setAttribute(n,"true"),C||v.setAttribute(r,"true")}catch(k){console.error("aria-hidden: cannot operate on ",v,k)}})};return h(t),s.clear(),ue++,function(){i.forEach(function(p){var v=I.get(p)-1,y=a.get(p)-1;I.set(p,v),a.set(p,y),v||(V.has(p)||p.removeAttribute(r),V.delete(p)),y||p.removeAttribute(n)}),ue--,ue||(I=new WeakMap,I=new WeakMap,V=new WeakMap,K={})}},ro=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=eo(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live], script"))),no(r,o,n,"aria-hidden")):function(){return null}},Q="Dialog",[Je,La]=kt(Q),[oo,M]=Je(Q),Qe=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:i=!0}=e,s=c.useRef(null),l=c.useRef(null),[u,h]=Ft({prop:r,defaultProp:o??!1,onChange:a,caller:Q});return g.jsx(oo,{scope:t,triggerRef:s,contentRef:l,contentId:ne(),titleId:ne(),descriptionId:ne(),open:u,onOpenChange:h,onOpenToggle:c.useCallback(()=>h(p=>!p),[h]),modal:i,children:n})};Qe.displayName=Q;var et="DialogTrigger",ao=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=M(et,n),a=L(t,o.triggerRef);return g.jsx(A.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":ye(o.open),...r,ref:a,onClick:O(e.onClick,o.onOpenToggle)})});ao.displayName=et;var pe="DialogPortal",[co,tt]=Je(pe,{forceMount:void 0}),nt=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=M(pe,t);return g.jsx(co,{scope:t,forceMount:n,children:c.Children.map(r,i=>g.jsx(X,{present:n||a.open,children:g.jsx(Fe,{asChild:!0,container:o,children:i})}))})};nt.displayName=pe;var Z="DialogOverlay",rt=c.forwardRef((e,t)=>{const n=tt(Z,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=M(Z,e.__scopeDialog);return a.modal?g.jsx(X,{present:r||a.open,children:g.jsx(io,{...o,ref:t})}):null});rt.displayName=Z;var so=fe("DialogOverlay.RemoveScroll"),io=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=M(Z,n);return g.jsx(Ze,{as:so,allowPinchZoom:!0,shards:[o.contentRef],children:g.jsx(A.div,{"data-state":ye(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),D="DialogContent",ot=c.forwardRef((e,t)=>{const n=tt(D,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=M(D,e.__scopeDialog);return g.jsx(X,{present:r||a.open,children:a.modal?g.jsx(uo,{...o,ref:t}):g.jsx(lo,{...o,ref:t})})});ot.displayName=D;var uo=c.forwardRef((e,t)=>{const n=M(D,e.__scopeDialog),r=c.useRef(null),o=L(t,n.contentRef,r);return c.useEffect(()=>{const a=r.current;if(a)return ro(a)},[]),g.jsx(at,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:O(e.onCloseAutoFocus,a=>{a.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:O(e.onPointerDownOutside,a=>{const i=a.detail.originalEvent,s=i.button===0&&i.ctrlKey===!0;(i.button===2||s)&&a.preventDefault()}),onFocusOutside:O(e.onFocusOutside,a=>a.preventDefault())})}),lo=c.forwardRef((e,t)=>{const n=M(D,e.__scopeDialog),r=c.useRef(!1),o=c.useRef(!1);return g.jsx(at,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{e.onCloseAutoFocus?.(a),a.defaultPrevented||(r.current||n.triggerRef.current?.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{e.onInteractOutside?.(a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const i=a.target;n.triggerRef.current?.contains(i)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),at=c.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...i}=e,s=M(D,n),l=c.useRef(null),u=L(t,l);return mr(),g.jsxs(g.Fragment,{children:[g.jsx(ze,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:g.jsx(he,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":ye(s.open),...i,ref:u,onDismiss:()=>s.onOpenChange(!1)})}),g.jsxs(g.Fragment,{children:[g.jsx(fo,{titleId:s.titleId}),g.jsx(po,{contentRef:l,descriptionId:s.descriptionId})]})]})}),ve="DialogTitle",ct=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=M(ve,n);return g.jsx(A.h2,{id:o.titleId,...r,ref:t})});ct.displayName=ve;var st="DialogDescription",it=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=M(st,n);return g.jsx(A.p,{id:o.descriptionId,...r,ref:t})});it.displayName=st;var ut="DialogClose",lt=c.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=M(ut,n);return g.jsx(A.button,{type:"button",...r,ref:t,onClick:O(e.onClick,()=>o.onOpenChange(!1))})});lt.displayName=ut;function ye(e){return e?"open":"closed"}var dt="DialogTitleWarning",[Ta,ft]=gt(dt,{contentName:D,titleName:ve,docsSlug:"dialog"}),fo=({titleId:e})=>{const t=ft(dt),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return c.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},ho="DialogDescriptionWarning",po=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ft(ho).contentName}}.`;return c.useEffect(()=>{const o=e.current?.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},$a=Qe,Ia=nt,ja=rt,Fa=ot,Wa=ct,za=it,Ba=lt;export{la as $,wo as A,ko as B,Fa as C,he as D,Ca as E,ka as F,Qo as G,ra as H,qo as I,Io as J,Wo as K,oa as L,da as M,So as N,ja as O,A as P,Ma as Q,go as R,ma as S,Sa as T,xo as U,_o as V,No as W,Pa as X,ea as Y,Ra as Z,ia as _,fe as a,Da as a0,ha as a1,sa as a2,Ko as a3,Ba as a4,Wa as a5,za as a6,Go as a7,Ao as a8,ua as a9,ga as aA,Jo as aB,ca as aC,Mo as aD,fa as aa,_a as ab,Lo as ac,Do as ad,Xo as ae,Eo as af,aa as ag,yo as ah,Yo as ai,Fo as aj,Oo as ak,Bo as al,Co as am,pa as an,Zo as ao,ba as ap,Aa as aq,wa as ar,Po as as,$o as at,Oa as au,xa as av,ta as aw,Uo as ax,Ea as ay,na as az,Ft as b,kt as c,X as d,O as e,z as f,Fe as g,B as h,Mt as i,g as j,mo as k,ne as l,$a as m,Ia as n,Le as o,Ho as p,Ro as q,zo as r,Na as s,ya as t,L as u,bo as v,To as w,va as x,jo as y,Vo as z};
