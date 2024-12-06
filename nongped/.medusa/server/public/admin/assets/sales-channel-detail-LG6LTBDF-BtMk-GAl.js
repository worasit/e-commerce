import{u as q}from"./chunk-RJSD5KRU-B2_DraF_.js";import{h as S,j as a,q as B,d as L,R as z,a as M,dJ as $,p as H,s as O,b as p,u as Q,ev as J,H as y,A as j,T as h,r as b,e as W,k as F,ex as v,L as G,B as K,t as l}from"./index-CJZ0utKv.js";import{u as Y,a as Z}from"./chunk-ZE4FSVPB-BWYL7epW.js";import{S as U}from"./chunk-2RQLKDBF-DdHfvUFV.js";import{u as V,D as X}from"./chunk-W34HOKLZ-C3c-DWJt.js";import"./lodash-r6m_RtXk.js";import"./chunk-VDP2AG2T-lTWCWF6Z.js";import"./chunk-KHOKHZC6-CwL1LPjm.js";import{P as C}from"./pencil-square-CANgz5Uf.js";import{T as P}from"./trash-Dbmfz9SX.js";import{u as w}from"./use-prompt-Bi7FceQH.js";import{C as k}from"./container-CvrRqui1.js";import{S as ee}from"./status-badge-K2cHY97K.js";import{C as x}from"./checkbox-C144Yjdp.js";import{c as se}from"./index-B1m4_RH3.js";import"./chunk-RERSP5B2-CY1D6Z0R.js";import"./chunk-ADOCJB6L-BIsWpor0.js";import"./chunk-P3UUX2T6-iZ3txzdJ.js";import"./chunk-C76H5USB-BpSyh2up.js";import"./Trans-CyKh6hGN.js";import"./x-mark-mini-ysYOSGAt.js";import"./chunk-YEDAFXMB-CRa1E9kp.js";import"./chunk-AOFGTNG6-Do1n8oDW.js";import"./chunk-WX2SMNCD-gsBa7lx4.js";import"./plus-mini-BdX2C9J6.js";import"./command-bar-DKNd8HCa.js";import"./index-poKGl5ZU.js";import"./chunk-HG5TSG3K-BtN5fyyg.js";import"./format-B_KHsbPT.js";import"./date-picker-Celg6WpL.js";import"./clsx-B-dksMZM.js";import"./popover-Dq5pafWl.js";import"./triangle-left-mini-DJxp3gb4.js";import"./prompt-Di3JszOJ.js";var Oe=s=>{const{id:e}=s.params||{},{sales_channel:t}=S(e,{initialData:s.data,enabled:!!e});return t?a.jsx("span",{children:t.name}):null},ae=s=>({queryKey:H.detail(s),queryFn:async()=>O.admin.salesChannel.retrieve(s)}),Qe=async({params:s})=>{const e=s.id,t=ae(e);return B.ensureQueryData(t)},te=({salesChannel:s})=>{const{t:e}=p(),t=w(),r=Q(),{mutateAsync:o}=J(s.id),c=async()=>{await t({title:e("general.areYouSure"),description:e("salesChannels.deleteSalesChannelWarning",{name:s.name}),verificationInstruction:e("general.typeToConfirm"),verificationText:s.name,confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await o(void 0,{onSuccess:()=>{l.success(e("salesChannels.toast.delete")),r("/settings/sales-channels",{replace:!0})},onError:u=>{l.error(u.message)}})};return a.jsxs(k,{className:"divide-y p-0",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[a.jsx(y,{children:s.name}),a.jsxs("div",{className:"flex items-center gap-x-2",children:[a.jsx(ee,{color:s.is_disabled?"red":"green",children:e(`general.${s.is_disabled?"disabled":"enabled"}`)}),a.jsx(j,{groups:[{actions:[{icon:a.jsx(C,{}),label:e("actions.edit"),to:`/settings/sales-channels/${s.id}/edit`}]},{actions:[{icon:a.jsx(P,{}),label:e("actions.delete"),onClick:c}]}]})]})]}),a.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",children:[a.jsx(h,{size:"small",leading:"compact",weight:"plus",children:e("fields.description")}),a.jsx(h,{size:"small",leading:"compact",children:s.description||"-"})]})]})},m=10,ne=({salesChannel:s})=>{const[e,t]=b.useState({}),{searchParams:r,raw:o}=Y({pageSize:m}),{products:c,count:d,isPending:u,isError:T,error:D}=W({...r,sales_channel_id:[s.id]},{placeholderData:F}),g=re(),_=Z(["sales_channel_id"]),{table:R}=V({data:c??[],columns:g,count:d,enablePagination:!0,enableRowSelection:!0,pageSize:m,getRowId:i=>i.id,rowSelection:{state:e,updater:t},meta:{salesChannelId:s.id}}),{mutateAsync:A}=v(s.id),E=w(),{t:n}=p(),N=async()=>{const i=Object.keys(e);await E({title:n("general.areYouSure"),description:n("salesChannels.removeProductsWarning",{count:i.length,sales_channel:s.name}),confirmText:n("actions.delete"),cancelText:n("actions.cancel")})&&await A(i,{onSuccess:()=>{l.success(n("salesChannels.toast.update")),t({})},onError:I=>{l.error(I.message)}})};if(T)throw D;return a.jsxs(k,{className:"divide-y p-0",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[a.jsx(y,{level:"h2",children:n("products.domain")}),a.jsx(G,{to:`/settings/sales-channels/${s.id}/add-products`,children:a.jsx(K,{size:"small",variant:"secondary",children:n("general.add")})})]}),a.jsx(X,{table:R,columns:g,pageSize:m,commands:[{action:N,label:n("actions.remove"),shortcut:"r"}],count:d,pagination:!0,search:!0,filters:_,navigateTo:i=>`/products/${i.id}`,isLoading:u,orderBy:[{key:"title",label:n("fields.title")},{key:"status",label:n("fields.status")},{key:"created_at",label:n("fields.createdAt")},{key:"updated_at",label:n("fields.updatedAt")}],queryObject:o,noRecords:{message:n("salesChannels.products.list.noRecordsMessage")}})]})},f=se(),re=()=>{const s=q();return b.useMemo(()=>[f.display({id:"select",header:({table:e})=>a.jsx(x,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t)}),cell:({row:e})=>a.jsx(x,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),onClick:t=>{t.stopPropagation()}})}),...s,f.display({id:"actions",cell:({row:e,table:t})=>{const{salesChannelId:r}=t.options.meta;return a.jsx(oe,{productId:e.original.id,salesChannelId:r})}})],[s])},oe=({salesChannelId:s,productId:e})=>{const{t}=p(),{mutateAsync:r}=v(s),o=async()=>{await r([e],{onSuccess:()=>{l.success(t("salesChannels.toast.update"))},onError:c=>{l.error(c.message)}})};return a.jsx(j,{groups:[{actions:[{icon:a.jsx(C,{}),label:t("actions.edit"),to:`/products/${e}`}]},{actions:[{icon:a.jsx(P,{}),label:t("actions.remove"),onClick:o}]}]})},Je=()=>{const s=L(),{id:e}=z(),{sales_channel:t,isPending:r}=S(e,{initialData:s}),{getWidgets:o}=M();return r||!t?a.jsx($,{sections:2,showJSON:!0,showMetadata:!0}):a.jsxs(U,{widgets:{before:o("sales_channel.details.before"),after:o("sales_channel.details.after")},showJSON:!0,showMetadata:!0,data:t,children:[a.jsx(te,{salesChannel:t}),a.jsx(ne,{salesChannel:t})]})};export{Oe as Breadcrumb,Je as Component,Qe as loader};
