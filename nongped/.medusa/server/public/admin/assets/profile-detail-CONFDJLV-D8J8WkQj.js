import{S as o}from"./chunk-2RQLKDBF-DdHfvUFV.js";import{eh as c,a as d,j as e,dJ as m,b as g,H as p,T as i,A as x,bP as f}from"./index-CJZ0utKv.js";import{P as j}from"./pencil-square-CANgz5Uf.js";import{C as u}from"./container-CvrRqui1.js";import"./Trans-CyKh6hGN.js";import"./x-mark-mini-ysYOSGAt.js";var h=({user:a})=>{var l;const{i18n:n,t:s}=g(),r=[a.first_name,a.last_name].filter(Boolean).join(" ");return e.jsxs(u,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(p,{children:s("profile.domain")}),e.jsx(i,{className:"text-ui-fg-subtle",size:"small",children:s("profile.manageYourProfileDetails")})]}),e.jsx(x,{groups:[{actions:[{label:s("actions.edit"),to:"edit",icon:e.jsx(j,{})}]}]})]}),e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(i,{size:"small",leading:"compact",weight:"plus",children:s("fields.name")}),e.jsx(i,{size:"small",leading:"compact",children:r||"-"})]}),e.jsxs("div",{className:"grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(i,{size:"small",leading:"compact",weight:"plus",children:s("fields.email")}),e.jsx(i,{size:"small",leading:"compact",children:a.email})]}),e.jsxs("div",{className:"grid grid-cols-2 items-center px-6 py-4",children:[e.jsx(i,{size:"small",leading:"compact",weight:"plus",children:s("profile.fields.languageLabel")}),e.jsx(i,{size:"small",leading:"compact",children:((l=f.find(t=>t.code===n.language))==null?void 0:l.display_name)||"-"})]})]})},N=()=>{const{user:a,isPending:n,isError:s,error:r}=c(),{getWidgets:l}=d();if(n||!a)return e.jsx(m,{sections:1});if(s)throw r;return e.jsx(o,{widgets:{after:l("profile.details.after"),before:l("profile.details.before")},children:e.jsx(h,{user:a})})};export{N as Component};
