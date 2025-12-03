import{r as i,j as e}from"./app-BGmg6Jx7.js";import{B as l}from"./Button-gs5ox5nN.js";import{S as n}from"./Select-nZo5mvH7.js";import{c as s}from"./createLucideIcon-C5_F0BDZ.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]],h=s("arrow-down-wide-narrow",c);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],x=s("refresh-cw",p);function y(){const[a,o]=i.useState("last_updated"),r=[{value:"last_updated",label:"Last updated"},{value:"last_added",label:"Last added"}],d=t=>{console.log("Value",t),o(t)};return e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("p",{children:"Sort by"}),e.jsx("div",{children:e.jsxs("div",{className:"flex",children:[e.jsx(n,{value:a,onChange:d,placeholder:"Choose an option",options:r}),e.jsx(l,{label:e.jsx(h,{size:15})})]})}),e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx(x,{size:15}),e.jsx("p",{className:"underline",children:"Refresh"})]})]})}export{y as ApplicationFilter};
