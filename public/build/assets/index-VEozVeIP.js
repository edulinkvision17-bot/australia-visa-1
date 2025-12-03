import{j as a,A as n}from"./app-D3iOfVFl.js";import{c as e}from"./createLucideIcon-Ck_TQfJh.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],l=e("file",c);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]],r=e("folder-output",s);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],d=e("redo",p);function m({label:t,icon:i,onClick:o}){return a.jsxs("div",{className:"flex flex-col items-center text-[#152681]",onClick:o,children:[a.jsx("div",{children:i}),a.jsx("p",{className:"underline",children:t})]})}const u=[{label:"New application",icon:a.jsx(l,{}),onClick:()=>{n.visit(route("immi.create"))}},{label:"Import application",icon:a.jsx(r,{}),onClick:()=>{}},{label:"Submit application",icon:a.jsx(d,{}),onClick:()=>{}}];function k(){return a.jsx("div",{className:"w-[40%] flex justify-between cursor-pointer",children:u.map(t=>a.jsx(m,{label:t.label,icon:t.icon,onClick:t.onClick}))})}export{k as default};
