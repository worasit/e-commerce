import{G as x}from"./chunk-W3S7TGRP-BjlPuTNX.js";import{G as j}from"./chunk-T4W4USY7-kvf0YQSU.js";import{a5 as l,R as v,aS as g,ar as S,j as e,b as y,a8 as w,d2 as F,a9 as Z,t as h,H as b,B as _}from"./index-CJZ0utKv.js";import"./chunk-X5VECN6S-BvvQjGj_.js";import"./chunk-W34HOKLZ-C3c-DWJt.js";import"./lodash-r6m_RtXk.js";import"./chunk-VDP2AG2T-lTWCWF6Z.js";import"./chunk-KHOKHZC6-CwL1LPjm.js";import{c as A}from"./chunk-RVOQ4QHC-CNrryUdx.js";import{K as E}from"./chunk-6HTZNHPT-DAtm5oB_.js";import{R as n,u as z,S as L}from"./chunk-KL22UNUW-BusAggzY.js";import"./chunk-NOAFLTPV-C9xeO7sd.js";import"./chunk-C76H5USB-BpSyh2up.js";import"./index-B1m4_RH3.js";import"./checkbox-C144Yjdp.js";import"./x-mark-mini-ysYOSGAt.js";import"./chunk-YEDAFXMB-CRa1E9kp.js";import"./chunk-AOFGTNG6-Do1n8oDW.js";import"./chunk-WX2SMNCD-gsBa7lx4.js";import"./plus-mini-BdX2C9J6.js";import"./command-bar-DKNd8HCa.js";import"./index-poKGl5ZU.js";import"./chunk-HG5TSG3K-BtN5fyyg.js";import"./format-B_KHsbPT.js";import"./date-picker-Celg6WpL.js";import"./clsx-B-dksMZM.js";import"./popover-Dq5pafWl.js";import"./triangle-left-mini-DJxp3gb4.js";import"./chunk-STLKFKTM-Psl18YG9.js";import"./prompt-Di3JszOJ.js";var N=l.object({countries:l.array(l.object({iso_2:l.string().min(2),display_name:l.string()})).min(1)});function C({fulfillmentSetId:a,locationId:d,zone:t}){const{t:o}=y(),{handleSuccess:p}=z(),r=w({defaultValues:{countries:t.geo_zones.map(i=>{const s=F.find(m=>m.iso_2===i.country_code);return{iso_2:i.country_code,display_name:(s==null?void 0:s.display_name)||i.country_code.toUpperCase()}})},resolver:Z(N)}),{mutateAsync:u,isPending:f}=A(a,t.id),c=r.handleSubmit(async i=>{await u({geo_zones:i.countries.map(({iso_2:s})=>({country_code:s,type:"country"}))},{onSuccess:()=>{h.success(o("stockLocations.serviceZones.manageAreas.successToast",{name:t.name})),p(`/settings/locations/${d}`)},onError:s=>{h.error(s.message)}})});return e.jsx(n.Form,{form:r,children:e.jsxs(E,{className:"flex h-full flex-col overflow-hidden",onSubmit:c,children:[e.jsx(n.Header,{}),e.jsx(n.Body,{className:"flex flex-1 flex-col overflow-auto",children:e.jsxs(L,{id:j,children:[e.jsx("div",{className:"flex flex-col items-center p-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsx(b,{children:o("stockLocations.serviceZones.manageAreas.header",{name:t.name})}),e.jsx(x,{form:r})]})}),e.jsx(x.AreaDrawer,{form:r})]})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(_,{variant:"secondary",size:"small",children:o("actions.cancel")})}),e.jsx(_,{type:"submit",size:"small",isLoading:f,children:o("actions.save")})]})})]})})}var me=()=>{var i,s;const{location_id:a,fset_id:d,zone_id:t}=v(),{stock_location:o,isPending:p,isFetching:r,isError:u,error:f}=g(a,{fields:"*fulfillment_sets.service_zones.geo_zones,fulfillment_sets.service_zones.name"}),c=(s=(i=o==null?void 0:o.fulfillment_sets)==null?void 0:i.find(m=>m.id===d))==null?void 0:s.service_zones.find(m=>m.id===t);if(!p&&!r&&!c)throw S({message:`Service zone with ID ${t} was not found`},404);if(u)throw f;return e.jsx(n,{prev:`/settings/locations/${a}`,children:c&&e.jsx(C,{zone:c,fulfillmentSetId:d,locationId:a})})};export{me as Component};