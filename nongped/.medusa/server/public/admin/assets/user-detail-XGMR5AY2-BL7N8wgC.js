import{S as d}from"./chunk-2RQLKDBF-DdHfvUFV.js";import{d7 as c,j as s,q as u,d as m,R as p,a as f,dJ as x,p as g,s as y,b as j,u as h,eu as v,H as b,A as w,T as l}from"./index-CJZ0utKv.js";import{P as D}from"./pencil-square-CANgz5Uf.js";import{T as S}from"./trash-Dbmfz9SX.js";import{u as T}from"./use-prompt-Bi7FceQH.js";import{C}from"./container-CvrRqui1.js";import"./Trans-CyKh6hGN.js";import"./x-mark-mini-ysYOSGAt.js";import"./prompt-Di3JszOJ.js";var Q=e=>{const{id:a}=e.params||{},{user:t}=c(a,void 0,{initialData:e.data,enabled:!!a});if(!t)return null;const r=[t.first_name,t.last_name].filter(Boolean).join(" ")||t.email;return s.jsx("span",{children:r})},P=e=>({queryKey:g.detail(e),queryFn:async()=>y.admin.user.retrieve(e)}),z=async({params:e})=>{const a=e.id,t=P(a);return u.ensureQueryData(t)},U=({user:e})=>{const{t:a}=j(),t=h(),n=T(),{mutateAsync:r}=v(e.id),i=[e.first_name,e.last_name].filter(Boolean).join(" "),o=async()=>{await n({title:a("general.areYouSure"),description:a("users.deleteUserWarning",{name:i??e.email}),verificationText:i??e.email,verificationInstruction:a("general.typeToConfirm"),confirmText:a("actions.delete"),cancelText:a("actions.cancel")})&&await r(void 0,{onSuccess:()=>{t("..")}})};return s.jsxs(C,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsx(b,{children:e.email}),s.jsx(w,{groups:[{actions:[{label:a("actions.edit"),to:"edit",icon:s.jsx(D,{})}]},{actions:[{label:a("actions.delete"),onClick:o,icon:s.jsx(S,{})}]}]})]}),s.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[s.jsx(l,{size:"small",leading:"compact",weight:"plus",children:a("fields.name")}),s.jsx(l,{size:"small",leading:"compact",children:i??"-"})]})]})},H=()=>{const e=m(),{id:a}=p(),{user:t,isPending:n,isError:r,error:i}=c(a,void 0,{initialData:e}),{getWidgets:o}=f();if(n||!t)return s.jsx(x,{sections:1,showJSON:!0,showMetadata:!0});if(r)throw i;return s.jsx(d,{data:t,showJSON:!0,showMetadata:!0,widgets:{after:o("user.details.after"),before:o("user.details.before")},children:s.jsx(U,{user:t})})};export{Q as Breadcrumb,H as Component,z as loader};
