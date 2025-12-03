import{r as i,j as e}from"./app-BGmg6Jx7.js";import{c as n}from"./createLucideIcon-C5_F0BDZ.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]],a=n("circle-chevron-down",l);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]],x=n("circle-chevron-right",d);function h({name:t,subCategories:o,onClick:m}){const[c,s]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:"flex gap-1 items-center text-[13px] font-semibold cursor-pointer",onClick:()=>s(!c),children:[c?e.jsx(a,{size:13,className:"bg-brand-dark text-[#fff] rounded-full"}):e.jsx(x,{size:13,className:"bg-brand-dark text-[#fff] rounded-full"}),e.jsx("p",{children:t})]}),e.jsx("ul",{children:c&&o.map(r=>e.jsx("li",{className:"text-[12px] cursor-pointer font-medium",onClick:()=>{r.onClick&&r.onClick()},children:r.name}))})]})}export{h as default};
