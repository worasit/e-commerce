import{P as i,a as o}from"./chunk-RERSP5B2-CY1D6Z0R.js";import{S as d}from"./chunk-ADOCJB6L-BIsWpor0.js";import{P as c}from"./chunk-P3UUX2T6-iZ3txzdJ.js";import{r as u,j as l,b as t,V as x}from"./index-CJZ0utKv.js";import{c as h}from"./index-B1m4_RH3.js";var p=({collection:e})=>e?l.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:l.jsx("span",{className:"truncate",children:e.title})}):l.jsx(c,{}),f=()=>{const{t:e}=t();return l.jsx("div",{className:"flex h-full w-full items-center",children:l.jsx("span",{children:e("fields.collection")})})},m=({status:e})=>{const{t:r}=t(),[n,s]={draft:["grey",r("products.productStatus.draft")],proposed:["orange",r("products.productStatus.proposed")],published:["green",r("products.productStatus.published")],rejected:["red",r("products.productStatus.rejected")]}[e];return l.jsx(d,{color:n,children:s})},j=()=>{const{t:e}=t();return l.jsx("div",{className:"flex h-full w-full items-center",children:l.jsx("span",{children:e("fields.status")})})},v=({salesChannels:e})=>{const{t:r}=t();if(!e||!e.length)return l.jsx(c,{});if(e.length>2)return l.jsxs("div",{className:"flex h-full w-full items-center gap-x-1 overflow-hidden",children:[l.jsx("span",{className:"truncate",children:e.slice(0,2).map(s=>s.name).join(", ")}),l.jsx(x,{content:l.jsx("ul",{children:e.slice(2).map(s=>l.jsx("li",{children:s.name},s.id))}),children:l.jsx("span",{className:"text-xs",children:r("general.plusCountMore",{count:e.length-2})})})]});const n=e.map(s=>s.name).join(", ");return l.jsx("div",{className:"flex h-full w-full items-center overflow-hidden max-w-[250px]",children:l.jsx("span",{title:n,className:"truncate",children:n})})},g=()=>{const{t:e}=t();return l.jsx("div",{className:"flex h-full w-full items-center",children:l.jsx("span",{children:e("fields.salesChannels")})})},w=({variants:e})=>{const{t:r}=t();return!e||!e.length?l.jsx(c,{}):l.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:l.jsx("span",{className:"truncate",children:r("products.variantCount",{count:e.length})})})},N=()=>{const{t:e}=t();return l.jsx("div",{className:"flex h-full w-full items-center",children:l.jsx("span",{children:e("fields.variants")})})},a=h(),T=()=>u.useMemo(()=>[a.display({id:"product",header:()=>l.jsx(i,{}),cell:({row:e})=>l.jsx(o,{product:e.original})}),a.accessor("collection",{header:()=>l.jsx(f,{}),cell:({row:e})=>l.jsx(p,{collection:e.original.collection})}),a.accessor("sales_channels",{header:()=>l.jsx(g,{}),cell:({row:e})=>l.jsx(v,{salesChannels:e.original.sales_channels})}),a.accessor("variants",{header:()=>l.jsx(N,{}),cell:({row:e})=>l.jsx(w,{variants:e.original.variants})}),a.accessor("status",{header:()=>l.jsx(j,{}),cell:({row:e})=>l.jsx(m,{status:e.original.status})})],[]);export{T as u};