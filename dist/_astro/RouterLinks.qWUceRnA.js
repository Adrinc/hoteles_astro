import{r as u,R as V}from"./index.TN5fhnEi.js";var A={exports:{}},k={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=u,Z=Symbol.for("react.element"),q=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,K=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,r){var n,l={},h=null,s=null;r!==void 0&&(h=""+r),t.key!==void 0&&(h=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)G.call(t,n)&&!J.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)l[n]===void 0&&(l[n]=t[n]);return{$$typeof:Z,type:e,key:h,ref:s,props:l,_owner:K.current}}k.Fragment=q;k.jsx=F;k.jsxs=F;A.exports=k;var i=A.exports;/**
 * @remix-run/router v1.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}var y;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(y||(y={}));const I="popstate";function Y(e){e===void 0&&(e={});function t(n,l){let{pathname:h,search:s,hash:d}=n.location;return E("",{pathname:h,search:s,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(n,l){return typeof l=="string"?l:H(l)}return Q(t,r,null,e)}function R(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function D(){return Math.random().toString(36).substr(2,8)}function L(e,t){return{usr:e.state,key:e.key,idx:t}}function E(e,t,r,n){return r===void 0&&(r=null),j({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?B(t):t,{state:r,key:t&&t.key||n||D()})}function H(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function B(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Q(e,t,r,n){n===void 0&&(n={});let{window:l=document.defaultView,v5Compat:h=!1}=n,s=l.history,d=y.Pop,f=null,m=g();m==null&&(m=0,s.replaceState(j({},s.state,{idx:m}),""));function g(){return(s.state||{idx:null}).idx}function x(){d=y.Pop;let a=g(),c=a==null?null:a-m;m=a,f&&f({action:d,location:o.location,delta:c})}function C(a,c){d=y.Push;let p=E(o.location,a,c);r&&r(p,a),m=g()+1;let S=L(p,m),_=o.createHref(p);try{s.pushState(S,"",_)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(_)}h&&f&&f({action:d,location:o.location,delta:1})}function w(a,c){d=y.Replace;let p=E(o.location,a,c);r&&r(p,a),m=g();let S=L(p,m),_=o.createHref(p);s.replaceState(S,"",_),h&&f&&f({action:d,location:o.location,delta:0})}function b(a){let c=l.location.origin!=="null"?l.location.origin:l.location.href,p=typeof a=="string"?a:H(a);return R(c,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,c)}let o={get action(){return d},get location(){return e(l,s)},listen(a){if(f)throw new Error("A history only accepts one active listener");return l.addEventListener(I,x),f=a,()=>{l.removeEventListener(I,x),f=null}},createHref(a){return t(l,a)},createURL:b,encodeLocation(a){let c=b(a);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:C,replace:w,go(a){return s.go(a)}};return o}var M;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(M||(M={}));function X(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const z=["post","put","patch","delete"];new Set(z);const ee=["get",...z];new Set(ee);/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const te=u.createContext(null),N=u.createContext(null);function W(){return u.useContext(N)!=null}function ne(){return W()||R(!1),u.useContext(N).location}function re(e){let{basename:t="/",children:r=null,location:n,navigationType:l=y.Pop,navigator:h,static:s=!1}=e;W()&&R(!1);let d=t.replace(/^\/*/,"/"),f=u.useMemo(()=>({basename:d,navigator:h,static:s}),[d,h,s]);typeof n=="string"&&(n=B(n));let{pathname:m="/",search:g="",hash:x="",state:C=null,key:w="default"}=n,b=u.useMemo(()=>{let o=X(m,d);return o==null?null:{location:{pathname:o,search:g,hash:x,state:C,key:w},navigationType:l}},[d,m,g,x,C,w,l]);return b==null?null:u.createElement(te.Provider,{value:f},u.createElement(N.Provider,{children:r,value:b}))}new Promise(()=>{});/**
 * React Router DOM v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const oe="startTransition",O=V[oe];function le(e){let{basename:t,children:r,future:n,window:l}=e,h=u.useRef();h.current==null&&(h.current=Y({window:l,v5Compat:!0}));let s=h.current,[d,f]=u.useState({action:s.action,location:s.location}),{v7_startTransition:m}=n||{},g=u.useCallback(x=>{m&&O?O(()=>f(x)):f(x)},[f,m]);return u.useLayoutEffect(()=>s.listen(g),[s,g]),u.createElement(re,{basename:t,children:r,location:d.location,navigationType:d.action,navigator:s})}var T;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(T||(T={}));var U;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(U||(U={}));const ae="_mainContainer_gkaen_1",ie="_image_gkaen_18",se="_imagemobile_gkaen_25",ce="_navigation_gkaen_32",ue="_link_gkaen_43",de="_linkmobil_gkaen_53",fe="_hamburgerIcon_gkaen_75",he="_showMenu_gkaen_85",me="_image2_gkaen_106",v={mainContainer:ae,image:ie,imagemobile:se,navigation:ce,link:ue,"selected-link":"_selected-link_gkaen_43","selected-link-mobile":"_selected-link-mobile_gkaen_53",linkmobil:de,hamburgerIcon:fe,showMenu:he,image2:me},ge=()=>{const e=[{name:"HOME",url:"/",alterurl:"/#home"},{name:"PLAN",url:"/#plan",alterurl:"/#plan"},{name:"PLATFORM",url:"/#platform",alterurl:"/platform"},{name:"CloudInn",url:"/cloudInn",alterurl:"/cloudInn"}],t=ne();let r=t.pathname,n=t.hash===""?r:t.hash;const l=e.find(o=>o.url.match(n)||o.alterurl.match(n)),h=l?l.name:"HOME",[s,d]=u.useState(!1),[f,m]=u.useState(!1),[g,x]=u.useState(h),C=()=>d(!s),w=()=>{m(window.innerWidth<=768)},b=o=>{o.includes("platform")?x("PLATFORM"):o.includes("howitworks")?x("HOW IT WORKS"):x(o)};return u.useEffect(()=>(w(),window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)}),[]),u.useEffect(()=>{const o=t.hash.substring(1);if(o){const a=document.getElementById(o);a&&a.scrollIntoView()}},[]),u.useEffect(()=>{const o=new IntersectionObserver(a=>{a.forEach(c=>{c.isIntersecting&&x(c.target.id)})},{threshold:.7});return e.forEach(a=>{const c=document.getElementById(a.name);c&&o.observe(c)}),()=>{e.forEach(a=>{const c=document.getElementById(a.name);c&&o.unobserve(c)})}},[e]),i.jsxs(i.Fragment,{children:[s&&i.jsxs("div",{className:"md:hidden flex flex-col gap-10 absolute top-0 left-0 w-[40vw] h-[100vh] shadow-lg z-50 bg-[#00000070] backdrop-filter backdrop-blur-lg border-x-2 border-tertiaryColor animate-fade-right animate-duration-500",children:[i.jsx("div",{className:"flex flex-row justify-end p-4 ",children:i.jsx("button",{onClick:C,className:" border-2 rounded-lg text-primaryTextColor p-2  font-bold text-lg",children:i.jsx("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fill:"#ffffff",fillRule:"evenodd",clipRule:"evenodd",children:i.jsx("path",{d:"M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"})})})}),i.jsxs("div",{className:"flex flex-col align-middle items-center justify-center p-2",children:[i.jsx("img",{loading:"lazy",src:"/image/hotel/logoblanco.svg",className:v.image}),i.jsx("h1",{className:"text-tertiaryTextColor font-bold  text-sm pt-3",children:"RevPARUP"})]}),i.jsxs("nav",{className:"flex flex-col items-start  gap-6",children:[e.map(o=>i.jsx("a",{href:o.url,className:o.name===g?v["selected-link-mobile"]:v.linkmobil,onClick:()=>b(o.name),children:o.name},o.name)),i.jsx("div",{className:"flex flex-row justify-center  items-center align-middle  w-[100%] ",children:i.jsx("a",{className:"inline-block buttom-shadow py-2 px-4 text-xl font-bold leading-5 text-green-50 buttom-text-shadow drop-shadow-sm bg-primaryColor  hover:bg-tertiaryColor focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md",href:"https://uwifi-web.vercel.app/login",children:"Login"})})]})]}),i.jsxs("div",{className:v.mainContainer,children:[i.jsxs("div",{className:"flex flex-row justify-center align-middle items-center",children:[i.jsx("img",{loading:"lazy",src:"/image/hotel/logoblanco.svg",className:v.image}),i.jsx("h1",{className:"text-tertiaryTextColor font-bold  text-3xl pt-3",children:"RevPARUP"})]}),f&&i.jsx("button",{className:"navbar-burger self-center md:hidden",onClick:C,children:i.jsxs("svg",{width:"35",height:"35",viewBox:"0 0 32 32",fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{className:"text-coolGray-50",width:"32",height:"32",rx:"6",fill:"#ffffff"}),i.jsx("path",{className:"text-coolGray-500",d:"M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z",fill:"currentColor"})]})}),i.jsx("nav",{className:`${v.navigation} ${f&&s?!v.showMenu:""}`,children:e.map(o=>i.jsx("a",{href:o.url,className:o.name===g?v["selected-link"]:v.link,onClick:()=>b(o.name),children:o.name},o.name))}),i.jsx("div",{className:"hidden md:block ",children:i.jsx("div",{className:"flex items-center justify-end",children:i.jsx("a",{className:"inline-block buttom-shadow py-2 px-4 text-xl font-bold leading-5 text-secondaryButtomTextColor border-solid border-2 border-tertiaryColor buttom-text-shadow drop-shadow-xl bg-secondaryColor transition-all rounded-[25px] hover:bg-tertiaryColor hover:rounded-[50px] hover:text-tertiaryTextColor",href:"https://uwifi-web.vercel.app/login",children:"Login"})})})]})]})};function pe(){return i.jsx(le,{children:i.jsx(ge,{})})}export{pe as default};