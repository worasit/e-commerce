import{g as x,p as h,a as _,b as j}from"./chunk-G22WWLPG-C9g-VuwI.js";import{a as g}from"./chunk-B4FQDBC3-4fK9Ok6B.js";import{a as A}from"./chunk-MSDRGCRR-Cd9PHOgd.js";import{S as T}from"./chunk-ADOCJB6L-BIsWpor0.js";import{S as M,a as S}from"./chunk-2RQLKDBF-DdHfvUFV.js";import{c as K,a as w,j as a,b as u,e_ as C,H as P,T as D,L as N,B as E,r as q,Y as z,k as L,e$ as O,f0 as R,A as H,t as m}from"./index-CJZ0utKv.js";import{u as B,D as F}from"./chunk-W34HOKLZ-C3c-DWJt.js";import"./lodash-r6m_RtXk.js";import{u as J}from"./chunk-C76H5USB-BpSyh2up.js";import"./chunk-VDP2AG2T-lTWCWF6Z.js";import"./chunk-KHOKHZC6-CwL1LPjm.js";import{P as Y}from"./pencil-square-CANgz5Uf.js";import{X as I}from"./x-circle-DvpCPk2O.js";import{T as Q}from"./trash-Dbmfz9SX.js";import{u as X}from"./use-prompt-Bi7FceQH.js";import{C as $}from"./container-CvrRqui1.js";import{c as G}from"./index-B1m4_RH3.js";import"./chunk-P3UUX2T6-iZ3txzdJ.js";import"./format-B_KHsbPT.js";import"./Trans-CyKh6hGN.js";import"./x-mark-mini-ysYOSGAt.js";import"./chunk-YEDAFXMB-CRa1E9kp.js";import"./chunk-AOFGTNG6-Do1n8oDW.js";import"./chunk-WX2SMNCD-gsBa7lx4.js";import"./plus-mini-BdX2C9J6.js";import"./command-bar-DKNd8HCa.js";import"./index-poKGl5ZU.js";import"./chunk-HG5TSG3K-BtN5fyyg.js";import"./date-picker-Celg6WpL.js";import"./clsx-B-dksMZM.js";import"./popover-Dq5pafWl.js";import"./triangle-left-mini-DJxp3gb4.js";import"./prompt-Di3JszOJ.js";var U=({apiKey:t})=>{const{mutateAsync:e}=O(t.id),{mutateAsync:r}=R(t.id),{t:s}=u(),o=X(),l=async()=>{await o({title:s("general.areYouSure"),description:s("apiKeyManagement.delete.warning",{title:t.title}),confirmText:s("actions.delete"),cancelText:s("actions.cancel")})&&await r(void 0,{onSuccess:()=>{m.success(s("apiKeyManagement.delete.successToast",{title:t.title}))},onError:c=>{m.error(c.message)}})},i=async()=>{await o({title:s("general.areYouSure"),description:s("apiKeyManagement.revoke.warning",{title:t.title}),confirmText:s("apiKeyManagement.actions.revoke"),cancelText:s("actions.cancel")})&&await e(void 0,{onSuccess:()=>{m.success(s("apiKeyManagement.revoke.successToast",{title:t.title}))},onError:c=>{m.error(c.message)}})},d=()=>{navigator.clipboard.writeText(t.token),m.success(s("apiKeyManagement.actions.copySuccessToast"))};return a.jsx(H,{groups:[{actions:[{icon:a.jsx(Y,{}),label:s("actions.edit"),to:`${t.id}/edit`},...t.type!=="secret"?[{label:s("apiKeyManagement.actions.copy"),onClick:d,icon:a.jsx(S,{})}]:[]]},{actions:[{icon:a.jsx(I,{}),label:s("apiKeyManagement.actions.revoke"),onClick:i,disabled:!!t.revoked_at},{icon:a.jsx(Q,{}),label:s("actions.delete"),onClick:l,disabled:!t.revoked_at}]}]})},n=G(),W=()=>{const{t}=u();return q.useMemo(()=>[n.accessor("title",{header:t("fields.title"),cell:({getValue:e})=>a.jsx("div",{className:"flex size-full items-center",children:a.jsx("span",{className:"truncate",children:e()})})}),n.accessor("redacted",{header:"Token",cell:({getValue:e})=>{const r=e();return a.jsx(z,{size:"2xsmall",children:h(r)})}}),n.accessor("type",{header:t("fields.type"),cell:({getValue:e})=>{const{label:r}=_(e(),t);return a.jsx(A,{text:r})}}),n.accessor("revoked_at",{header:t("fields.status"),cell:({getValue:e})=>{const{color:r,label:s}=j(e(),t);return a.jsx(T,{color:r,children:s})}}),n.accessor("last_used_at",{header:t("apiKeyManagement.table.lastUsedAtHeader"),cell:({getValue:e})=>{const r=e();return a.jsx(g,{date:r})}}),n.accessor("created_at",{header:t("fields.created"),cell:({getValue:e})=>{const r=e();return a.jsx(g,{date:r})}}),n.display({id:"actions",cell:({row:e})=>a.jsx(U,{apiKey:e.original})})],[t])},Z=()=>{const{t}=u();let e=[];const r=[{label:t("fields.createdAt"),key:"created_at",type:"date"},{label:t("fields.updatedAt"),key:"updated_at",type:"date"},{label:t("fields.revokedAt"),key:"revoked_at",type:"date"}];return e=[...e,...r],e},V=({prefix:t,pageSize:e=20})=>{const r=J(["offset","q","created_at","updated_at","revoked_at","order"],t),{offset:s,created_at:o,updated_at:l,revoked_at:i,q:d,order:p}=r;return{searchParams:{limit:e,offset:s?Number(s):0,created_at:o?JSON.parse(o):void 0,updated_at:l?JSON.parse(l):void 0,revoked_at:i?JSON.parse(i):void 0,order:p,q:d},raw:r}},f=20,ee=({keyType:t})=>{const{t:e}=u(),{searchParams:r,raw:s}=V({pageSize:f}),o={...r,type:t,fields:"id,title,redacted,token,type,created_at,updated_at,revoked_at,last_used_at,created_by,revoked_by"},{api_keys:l,count:i,isLoading:d,isError:p,error:c}=C(o,{placeholderData:L}),k=Z(),b=W(),{table:v}=B({data:l||[],columns:b,count:i,enablePagination:!0,getRowId:y=>y.id,pageSize:f});if(p)throw c;return a.jsxs($,{className:"divide-y p-0",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[a.jsxs("div",{children:[a.jsx(P,{level:"h2",children:e(t==="publishable"?"apiKeyManagement.domain.publishable":"apiKeyManagement.domain.secret")}),a.jsx(D,{className:"text-ui-fg-subtle",size:"small",children:e(t==="publishable"?"apiKeyManagement.subtitle.publishable":"apiKeyManagement.subtitle.secret")})]}),a.jsx(N,{to:"create",children:a.jsx(E,{variant:"secondary",size:"small",children:e("actions.create")})})]}),a.jsx(F,{table:v,filters:k,columns:b,count:i,pageSize:f,orderBy:[{key:"title",label:e("fields.title")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")},{key:"revoked_at",label:e("fields.revokedAt")}],navigateTo:y=>y.id,pagination:!0,search:!0,queryObject:s,isLoading:d})]})},Ee=()=>{const{pathname:t}=K(),{getWidgets:e}=w(),r=x(t);return a.jsx(M,{hasOutlet:!0,widgets:{before:e("api_key.list.before"),after:e("api_key.list.after")},children:a.jsx(ee,{keyType:r})})};export{Ee as Component};
