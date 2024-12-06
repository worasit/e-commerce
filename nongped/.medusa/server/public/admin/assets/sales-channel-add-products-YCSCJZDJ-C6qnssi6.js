import{u as z}from"./chunk-RJSD5KRU-B2_DraF_.js";import{a1 as F,ad as I,a3 as D,R as B,h as H,j as e,b as C,a8 as M,a9 as N,ez as L,r as b,e as V,k as K,t as S,E as O,B as y,V as q}from"./index-CJZ0utKv.js";import{u as G,a as Q}from"./chunk-ZE4FSVPB-BWYL7epW.js";import{u as Z,D as $}from"./chunk-W34HOKLZ-C3c-DWJt.js";import"./lodash-r6m_RtXk.js";import"./chunk-VDP2AG2T-lTWCWF6Z.js";import"./chunk-KHOKHZC6-CwL1LPjm.js";import{K as J}from"./chunk-6HTZNHPT-DAtm5oB_.js";import{R as l,u as U}from"./chunk-KL22UNUW-BusAggzY.js";import{C as j}from"./checkbox-C144Yjdp.js";import{c as W}from"./index-B1m4_RH3.js";import"./chunk-RERSP5B2-CY1D6Z0R.js";import"./chunk-ADOCJB6L-BIsWpor0.js";import"./chunk-P3UUX2T6-iZ3txzdJ.js";import"./chunk-C76H5USB-BpSyh2up.js";import"./chunk-YEDAFXMB-CRa1E9kp.js";import"./chunk-AOFGTNG6-Do1n8oDW.js";import"./chunk-WX2SMNCD-gsBa7lx4.js";import"./plus-mini-BdX2C9J6.js";import"./command-bar-DKNd8HCa.js";import"./index-poKGl5ZU.js";import"./chunk-HG5TSG3K-BtN5fyyg.js";import"./format-B_KHsbPT.js";import"./date-picker-Celg6WpL.js";import"./clsx-B-dksMZM.js";import"./popover-Dq5pafWl.js";import"./x-mark-mini-ysYOSGAt.js";import"./triangle-left-mini-DJxp3gb4.js";import"./prompt-Di3JszOJ.js";var X=F({product_ids:I(D()).min(1)}),f=50,Y=({salesChannel:r})=>{const{t:s}=C(),{handleSuccess:t}=U(),a=M({defaultValues:{product_ids:[]},resolver:N(X)}),{setValue:d}=a,{mutateAsync:c,isPending:p}=L(r.id),[u,m]=b.useState({}),n=o=>{const i=typeof o=="function"?o(u):o,h=Object.keys(i);d("product_ids",h,{shouldDirty:!0,shouldTouch:!0}),m(i)},{searchParams:P,raw:v}=G({pageSize:f}),{products:_,count:g,isPending:k,isError:A,error:R}=V({fields:"*variants,*sales_channels",...P},{placeholderData:K}),x=se(),T=Q(["sales_channel_id"]),{table:w}=Z({data:_??[],columns:x,enableRowSelection:o=>{var i;return!((i=o.original.sales_channels)!=null&&i.map(h=>h.id).includes(r.id))},enablePagination:!0,getRowId:o=>o.id,pageSize:f,count:g,rowSelection:{state:u,updater:n},meta:{salesChannelId:r.id}}),E=a.handleSubmit(async o=>{await c(o.product_ids,{onSuccess:()=>{S.success(s("salesChannels.toast.update")),t()},onError:i=>S.error(i.message)})});if(A)throw R;return e.jsx(l.Form,{form:a,children:e.jsxs(J,{onSubmit:E,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(l.Header,{children:e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:a.formState.errors.product_ids&&e.jsx(O,{variant:"error",children:a.formState.errors.product_ids.message})})}),e.jsx(l.Body,{className:"flex size-full flex-col overflow-y-auto",children:e.jsx($,{table:w,count:g,columns:x,pageSize:f,isLoading:k,filters:T,orderBy:[{key:"title",label:s("fields.title")},{key:"status",label:s("fields.status")},{key:"created_at",label:s("fields.createdAt")},{key:"updated_at",label:s("fields.updatedAt")}],queryObject:v,layout:"fill",pagination:!0,search:"autofocus",noRecords:{message:s("salesChannels.products.add.list.noRecordsMessage")}})}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(y,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(y,{size:"small",type:"submit",isLoading:p,children:s("actions.save")})]})})]})})},ee=W(),se=()=>{const r=z(),{t:s}=C();return b.useMemo(()=>[ee.display({id:"select",header:({table:t})=>e.jsx(j,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:a=>t.toggleAllPageRowsSelected(!!a)}),cell:({row:t,table:a})=>{var m;const{salesChannelId:d}=a.options.meta,c=(m=t.original.sales_channels)==null?void 0:m.map(n=>n.id).includes(d),p=t.getIsSelected()||c,u=e.jsx(j,{checked:p,disabled:c,onCheckedChange:n=>t.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}});return c?e.jsx(q,{content:s("salesChannels.productAlreadyAdded"),side:"right",children:u}):u}}),...r],[s,r])},Ee=()=>{const{id:r}=B(),{sales_channel:s,isPending:t,isError:a,error:d}=H(r);if(a)throw d;return e.jsx(l,{children:!t&&s&&e.jsx(Y,{salesChannel:s})})};export{Ee as Component};