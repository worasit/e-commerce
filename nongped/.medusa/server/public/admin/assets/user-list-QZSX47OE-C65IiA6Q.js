import{S as g}from"./chunk-2RQLKDBF-DdHfvUFV.js";import{u as x,D as b}from"./chunk-W34HOKLZ-C3c-DWJt.js";import{a as h,j as s,es as j,b as c,H as v,B as y,L as P,r as C,k as S,A as T}from"./index-CJZ0utKv.js";import"./lodash-r6m_RtXk.js";import{u as k}from"./chunk-C76H5USB-BpSyh2up.js";import"./chunk-VDP2AG2T-lTWCWF6Z.js";import"./chunk-KHOKHZC6-CwL1LPjm.js";import{P as w}from"./pencil-square-CANgz5Uf.js";import{C as D}from"./container-CvrRqui1.js";import{c as E}from"./index-B1m4_RH3.js";import"./Trans-CyKh6hGN.js";import"./x-mark-mini-ysYOSGAt.js";import"./chunk-YEDAFXMB-CRa1E9kp.js";import"./chunk-AOFGTNG6-Do1n8oDW.js";import"./chunk-WX2SMNCD-gsBa7lx4.js";import"./plus-mini-BdX2C9J6.js";import"./command-bar-DKNd8HCa.js";import"./index-poKGl5ZU.js";import"./chunk-HG5TSG3K-BtN5fyyg.js";import"./format-B_KHsbPT.js";import"./date-picker-Celg6WpL.js";import"./clsx-B-dksMZM.js";import"./popover-Dq5pafWl.js";import"./triangle-left-mini-DJxp3gb4.js";var U=({user:e})=>{const{t:r}=c();return s.jsx(T,{groups:[{actions:[{icon:s.jsx(w,{}),label:r("actions.edit"),to:`${e.id}/edit`}]}]})},l=E(),L=()=>{const{t:e}=c();return C.useMemo(()=>[l.accessor("email",{header:e("fields.email"),cell:({row:r})=>r.original.email}),l.display({id:"name",header:e("fields.name"),cell:({row:r})=>{const a=[r.original.first_name,r.original.last_name].filter(Boolean).join(" ");return a||s.jsx("span",{className:"text-ui-fg-muted",children:"-"})}}),l.display({id:"actions",cell:({row:r})=>s.jsx(U,{user:r.original})})],[e])},N=({pageSize:e=20,prefix:r})=>{const a=k(["q","order","offset"],r),{offset:t,...o}=a;return{searchParams:{limit:e,offset:t?parseInt(t):0,...o},raw:a}},m=20,_=()=>{const{raw:e,searchParams:r}=N({pageSize:m}),{users:a,count:t,isPending:o,isError:u,error:d}=j(r,{placeholderData:S}),p=L(),{table:f}=x({data:a??[],columns:p,count:t,enablePagination:!0,getRowId:n=>n.id,pageSize:m}),{t:i}=c();if(u)throw d;return s.jsxs(D,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsx(v,{children:i("users.domain")}),s.jsx(y,{size:"small",variant:"secondary",asChild:!0,children:s.jsx(P,{to:"invite",children:i("users.invite")})})]}),s.jsx(b,{table:f,columns:p,count:t,pageSize:m,isLoading:o,orderBy:[{key:"email",label:i("fields.email")},{key:"first_name",label:i("fields.firstName")},{key:"last_name",label:i("fields.lastName")}],navigateTo:n=>`${n.id}`,search:!0,pagination:!0,queryObject:e})]})},te=()=>{const{getWidgets:e}=h();return s.jsx(g,{widgets:{after:e("user.list.after"),before:e("user.list.before")},children:s.jsx(_,{})})};export{te as Component};