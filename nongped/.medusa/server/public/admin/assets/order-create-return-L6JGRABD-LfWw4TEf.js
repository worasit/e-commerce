import{R as Me,C as Te}from"./chunk-P3DRE4IY-BKPx0O9G.js";import{M as De}from"./chunk-LHJ6JQGA-DRKvlJmt.js";import{g as me}from"./chunk-PXZ7QYKX-DZ_CHK12.js";import{D as He}from"./chunk-AMJSV3NG-DPKI1Y1t.js";import{m as Le,c as Fe,n as ze,u as Ve,o as Be,p as Oe,q as Ue,s as $e,t as Ge,v as Qe,w as Xe}from"./chunk-P75BH6ZT-BCyrBbuC.js";import{a as z}from"./chunk-FSMQADBD-DQ6u7KYm.js";import{a5 as q,R as Je,u as Ke,b as L,aK as Ze,aN as We,r as j,j as e,b8 as Ye,a8 as et,a9 as tt,y as st,t as J,H as ne,B as X,w as m,T as V,I as Y,ab as nt,de as it,aZ as rt,x as ie,A as at,X as re,s as ot}from"./index-CJZ0utKv.js";import{P as lt,a as dt}from"./chunk-RERSP5B2-CY1D6Z0R.js";import{C as ee}from"./chunk-BNH57GBH-aOoD9B19.js";import{c as ct}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{u as ut,D as mt}from"./chunk-W34HOKLZ-C3c-DWJt.js";import"./lodash-r6m_RtXk.js";import{u as pt}from"./chunk-C76H5USB-BpSyh2up.js";import"./chunk-VDP2AG2T-lTWCWF6Z.js";import"./chunk-KHOKHZC6-CwL1LPjm.js";import{u as ft}from"./chunk-STLKFKTM-Psl18YG9.js";import{K as xt}from"./chunk-6HTZNHPT-DAtm5oB_.js";import{R as A,u as ht,a as gt,S as F}from"./chunk-KL22UNUW-BusAggzY.js";import{P as _t}from"./pencil-square-CANgz5Uf.js";import{C as bt}from"./currency-input-BHCL_9VI.js";import{D as jt}from"./document-text-DhZQsG8W.js";import{X as yt}from"./x-circle-DvpCPk2O.js";import{u as vt}from"./use-prompt-Bi7FceQH.js";import{A as Nt}from"./alert-B1fSnlBT.js";import{C as ae}from"./checkbox-C144Yjdp.js";import{c as It}from"./index-B1m4_RH3.js";import"./Trans-CyKh6hGN.js";import"./chunk-P3UUX2T6-iZ3txzdJ.js";import"./x-mark-mini-ysYOSGAt.js";import"./triangles-mini-CxMQ-XTT.js";import"./plus-mini-BdX2C9J6.js";import"./chunk-YEDAFXMB-CRa1E9kp.js";import"./chunk-AOFGTNG6-Do1n8oDW.js";import"./chunk-WX2SMNCD-gsBa7lx4.js";import"./command-bar-DKNd8HCa.js";import"./index-poKGl5ZU.js";import"./chunk-HG5TSG3K-BtN5fyyg.js";import"./format-B_KHsbPT.js";import"./date-picker-Celg6WpL.js";import"./clsx-B-dksMZM.js";import"./popover-Dq5pafWl.js";import"./triangle-left-mini-DJxp3gb4.js";import"./prompt-Di3JszOJ.js";import"./index.esm-Ls_FBjZZ.js";var H=It(),St=o=>{const{t:d}=L();return j.useMemo(()=>[H.display({id:"select",header:({table:n})=>e.jsx(ae,{checked:n.getIsSomePageRowsSelected()?"indeterminate":n.getIsAllPageRowsSelected(),onCheckedChange:t=>n.toggleAllPageRowsSelected(!!t)}),cell:({row:n})=>{const t=n.getCanSelect();return e.jsx(ae,{disabled:!t,checked:n.getIsSelected(),onCheckedChange:l=>n.toggleSelected(!!l),onClick:l=>{l.stopPropagation()}})}}),H.display({id:"product",header:()=>e.jsx(lt,{}),cell:({row:n})=>e.jsx(dt,{product:{thumbnail:n.original.thumbnail,title:n.original.product_title}})}),H.accessor("variant.sku",{header:d("fields.sku"),cell:({getValue:n})=>n()||"-"}),H.accessor("variant.title",{header:d("fields.variant")}),H.accessor("quantity",{header:()=>e.jsx("div",{className:"flex size-full items-center overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:d("fields.quantity")})}),cell:({getValue:n,row:t})=>me(t.original)}),H.accessor("refundable_total",{header:()=>e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:d("fields.price")})}),cell:({getValue:n})=>{const t=n()||0,l=z(t,o);return e.jsx("div",{className:"flex size-full items-center justify-end overflow-hidden text-right",children:e.jsx("span",{className:"truncate",children:l})})}})],[d,o])},Ct=()=>{const{t:o}=L();return[{key:"returnable_quantity",label:o("orders.returns.returnableQuantityLabel"),type:"number"},{key:"refundable_amount",label:o("orders.returns.refundableAmountLabel"),type:"number"},{key:"created_at",label:o("fields.createdAt"),type:"date"},{key:"updated_at",label:o("fields.updatedAt"),type:"date"}]},Rt=({pageSize:o=50,prefix:d})=>{const n=pt(["q","offset","order","created_at","updated_at","returnable_quantity","refundable_amount"],d),{offset:t,created_at:l,updated_at:u,refundable_amount:c,returnable_quantity:g,...b}=n;return{searchParams:{...b,limit:o,offset:t?Number(t):0,created_at:l?JSON.parse(l):void 0,updated_at:u?JSON.parse(u):void 0,refundable_amount:c?JSON.parse(c):void 0,returnable_quantity:g?JSON.parse(g):void 0},raw:n}},Z=50,oe="rit",wt=({onSelectionChange:o,selectedItems:d,items:n,currencyCode:t})=>{const{t:l}=L(),[u,c]=j.useState(d.reduce((x,v)=>(x[v]=!0,x),{})),g=x=>{const v=typeof x=="function"?x(u):x;c(v),o(Object.keys(v))},{searchParams:b,raw:p}=Rt({pageSize:Z,prefix:oe}),y=j.useMemo(()=>{const{order:x,offset:v,limit:k,q:E,created_at:B,updated_at:O,refundable_amount:U,returnable_quantity:$}=b;let N=n;if(E&&(N=N.filter(P=>{var M;return P.product_title.toLowerCase().includes(E.toLowerCase())||P.variant_title.toLowerCase().includes(E.toLowerCase())||((M=P.variant_sku)==null?void 0:M.toLowerCase().includes(E.toLowerCase()))})),x){const P=x[0]==="-"?"desc":"asc",M=x.replace("-","");N=qt(N,M,P)}return B&&(N=le(N,B,"created_at")),O&&(N=le(N,O,"updated_at")),$&&(N=ce(N,$,"returnable_quantity",t)),U&&(N=ce(N,U,"refundable_amount",t)),N.slice(v,v+k)},[n,t,b]),w=St(t),I=Ct(),{table:_}=ut({data:y,columns:w,count:y.length,enablePagination:!0,getRowId:x=>x.id,pageSize:Z,enableRowSelection:x=>me(x.original)>0,rowSelection:{state:u,updater:g}});return e.jsx("div",{className:"flex size-full flex-col overflow-hidden",children:e.jsx(mt,{table:_,columns:w,pageSize:Z,count:y.length,filters:I,pagination:!0,layout:"fill",search:!0,orderBy:[{key:"product_title",label:l("fields.product")},{key:"variant_title",label:l("fields.variant")},{key:"sku",label:l("fields.sku")},{key:"returnable_quantity",label:l("orders.fields.returnableQuantity")},{key:"refundable_amount",label:l("orders.fields.refundableAmount")}],prefix:oe,queryObject:p})})},qt=(o,d,n)=>o.sort((t,l)=>{let u,c;return d==="product_title"?(u=t.product_title,c=l.product_title):d==="variant_title"?(u=t.variant_title,c=l.variant_title):d==="sku"?(u=t.variant_sku,c=l.variant_sku):d==="returnable_quantity"?(u=t.quantity-(t.returned_quantity||0),c=l.quantity-(l.returned_quantity||0)):d==="refundable_amount"&&(u=t.refundable||0,c=l.refundable||0),u<c?n==="asc"?-1:1:u>c?n==="asc"?1:-1:0}),le=(o,d,n)=>{const{gt:t,gte:l,lt:u,lte:c}=d;return o.filter(g=>{const b=new Date(g[n]);let p=!0;return t&&(p=p&&b>new Date(t)),l&&(p=p&&b>=new Date(l)),u&&(p=p&&b<new Date(u)),c&&(p=p&&b<=new Date(c)),p})},de={eq:void 0,gt:void 0,gte:void 0,lt:void 0,lte:void 0},ce=(o,d,n,t)=>{const{eq:l,gt:u,lt:c,gte:g,lte:b}=typeof d=="object"?{...de,...d}:{...de,eq:d};return o.filter(p=>{const y=p.quantity-(p.returned_quantity||0),w=z(p.refundable||0,t),I=n==="returnable_quantity"?y:w;if(l)return I===l;let _=!0;return u&&(_=_&&I>u),g&&(_=_&&I>=g),c&&(_=_&&I<c),b&&(_=_&&I<=b),_})};function kt({item:o,previewItem:d,currencyCode:n,form:t,onRemove:l,onUpdate:u,index:c}){const{t:g}=L(),{return_reasons:b=[]}=it({fields:"+label"}),p=t.watch(`items.${c}`),y=typeof p.reason_id=="string",w=typeof p.note=="string";return e.jsxs("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl ",children:[e.jsxs("div",{className:"flex flex-col items-center gap-x-2 gap-y-2 border-b p-3 text-sm md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(rt,{src:o.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsxs(V,{className:"txt-small",as:"span",weight:"plus",children:[o.title," "]}),o.variant_sku&&e.jsxs("span",{children:["(",o.variant_sku,")"]})]}),e.jsx(V,{as:"div",className:"text-ui-fg-subtle txt-small",children:o.product_title})]})]}),e.jsxs("div",{className:"flex flex-1 justify-between",children:[e.jsxs("div",{className:"flex flex-grow items-center gap-2",children:[e.jsx(m.Field,{control:t.control,name:`items.${c}.quantity`,render:({field:I})=>e.jsxs(m.Item,{children:[e.jsx(m.Control,{children:e.jsx(ie,{className:"bg-ui-bg-base txt-small w-[67px] rounded-lg",min:1,max:o.quantity,type:"number",...I,onChange:_=>{const x=_.target.value,v=x===""?null:Number(x);I.onChange(v),v&&u({quantity:v})}})}),e.jsx(m.ErrorMessage,{})]})}),e.jsx(V,{className:"txt-small text-ui-fg-subtle",children:g("fields.qty")})]}),e.jsx("div",{className:"text-ui-fg-subtle txt-small mr-2 flex flex-shrink-0",children:e.jsx(De,{currencyCode:n,amount:d.return_requested_total})}),e.jsx(at,{groups:[{actions:[!y&&{label:g("actions.addReason"),onClick:()=>t.setValue(`items.${c}.reason_id`,""),icon:e.jsx(Te,{})},!w&&{label:g("actions.addNote"),onClick:()=>t.setValue(`items.${c}.note`,""),icon:e.jsx(jt,{})},{label:g("actions.remove"),onClick:l,icon:e.jsx(yt,{})}].filter(Boolean)}]})]})]}),e.jsxs(e.Fragment,{children:[y&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(m.Label,{children:g("orders.returns.reason")}),e.jsx(m.Hint,{className:"!mt-1",children:g("orders.returns.reasonHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(m.Field,{control:t.control,name:`items.${c}.reason_id`,render:({field:{ref:I,value:_,onChange:x,...v}})=>e.jsxs(m.Item,{children:[e.jsx(m.Control,{children:e.jsx(ee,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover",value:_,onChange:k=>{u({reason_id:k}),x(k)},...v,options:b.map(k=>({label:k.label,value:k.id}))})}),e.jsx(m.ErrorMessage,{})]})})}),e.jsx(Y,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{u({reason_id:null}),t.setValue(`items.${c}.reason_id`,null)},children:e.jsx(re,{className:"text-ui-fg-muted"})})]})]}),w&&e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-3 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(m.Label,{children:g("orders.returns.note")}),e.jsx(m.Hint,{className:"!mt-1",children:g("orders.returns.noteHint")})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"flex-grow",children:e.jsx(m.Field,{control:t.control,name:`items.${c}.note`,render:({field:{ref:I,onChange:_,...x}})=>e.jsxs(m.Item,{children:[e.jsx(m.Control,{children:e.jsx(ie,{onChange:_,...x,onBlur:()=>u({internal_note:x.value}),className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover"})}),e.jsx(m.ErrorMessage,{})]})})}),e.jsx(Y,{type:"button",className:"flex-shrink",variant:"transparent",onClick:()=>{t.setValue(`items.${c}.note`,{shouldDirty:!0,shouldTouch:!0}),u({internal_note:null})},children:e.jsx(re,{className:"text-ui-fg-muted"})})]})]})]})]})}var Pt=q.object({items:q.array(q.object({item_id:q.string(),quantity:q.number(),reason_id:q.string().optional().nullable(),note:q.string().optional().nullable()})),location_id:q.string().optional(),option_id:q.string(),send_notification:q.boolean().optional(),receive_now:q.boolean().optional()}),ue=[],At=({order:o,preview:d,activeReturn:n})=>{const{t}=L(),{handleSuccess:l}=ht(),u=j.useMemo(()=>new Map((o.items||[]).map(s=>[s.id,s])),[o.items]),c=j.useMemo(()=>d.items.filter(s=>{var i;return!!((i=s.actions)!=null&&i.find(r=>r.return_id===n.id))}),[d.items]),g=j.useMemo(()=>new Map(c.map(s=>[s.id,s])),[c]),{setIsOpen:b}=gt(),[p,y]=j.useState(!1),[w,I]=j.useState(0),[_,x]=j.useState({}),{stock_locations:v=[]}=Ye({limit:999}),{shipping_options:k=[]}=ft({limit:999,fields:"*prices,+service_zone.fulfillment_set.location.id"}),{mutateAsync:E,isPending:B}=ze(n.id,o.id),{mutateAsync:O,isPending:U}=Ve(n.id,o.id),{mutateAsync:$,isPending:N}=Be(n.id,o.id),{mutateAsync:P,isPending:M}=Oe(n.id,o.id),{mutateAsync:pe,isPending:fe}=Ue(n.id,o.id),{mutateAsync:xe,isPending:he}=$e(n.id,o.id),{mutateAsync:ge,isPending:_e}=Ge(n.id,o.id),{mutateAsync:be,isPending:je}=Qe(n.id,o.id),{mutateAsync:ye,isPending:ve}=Xe(n.id,o.id),Ne=B||U||M||fe||he||_e||je||ve||N,C=et({defaultValues:()=>{const s=d.shipping_methods.find(i=>{var r;return!!((r=i.actions)!=null&&r.find(a=>a.action==="SHIPPING_ADD"))});return Promise.resolve({items:c.map(i=>{var r,a,f,h,S;return{item_id:i.id,quantity:i.detail.return_requested_quantity,note:(a=(r=i.actions)==null?void 0:r.find(D=>D.action==="RETURN_ITEM"))==null?void 0:a.internal_note,reason_id:(S=(h=(f=i.actions)==null?void 0:f.find(D=>D.action==="RETURN_ITEM"))==null?void 0:h.details)==null?void 0:S.reason_id}}),option_id:s?s.shipping_option_id:"",location_id:n==null?void 0:n.location_id,send_notification:!1})},resolver:tt(Pt)}),{fields:R,append:Ie,remove:Se,update:Ce}=st({name:"items",control:C.control});j.useEffect(()=>{const s={};c.forEach(i=>{var a,f;const r=R.findIndex(h=>h.item_id===i.id);if(i.detail.return_requested_quantity)if(s[i.id]=!0,r>-1){if(R[r].quantity!==i.detail.return_requested_quantity){const h=(a=i.actions)==null?void 0:a.find(S=>S.action==="RETURN_ITEM");Ce(r,{...R[r],quantity:i.detail.return_requested_quantity,note:h==null?void 0:h.internal_note,reason_id:(f=h==null?void 0:h.details)==null?void 0:f.reason_id})}}else Ie({item_id:i.id,quantity:i.detail.return_requested_quantity})}),R.forEach((i,r)=>{i.item_id in s||Se(r)})},[c]),j.useEffect(()=>{var i;const s=(i=d.shipping_methods)==null?void 0:i.find(r=>{var a;return!!((a=r.actions)!=null&&a.find(f=>f.action==="SHIPPING_ADD"))});s?C.setValue("option_id",s.shipping_option_id):C.setValue("option_id","")},[d.shipping_methods]);const G=!R.length,T=C.watch("location_id"),Re=C.watch("option_id"),we=vt(),qe=C.handleSubmit(async s=>{try{if(!await we({title:t("general.areYouSure"),description:t("orders.returns.confirmText"),confirmText:t("actions.continue"),cancelText:t("actions.cancel"),variant:"confirmation"}))return;await E({no_notification:!s.send_notification}),l()}catch(i){J.error(t("general.error"),{description:i.message,dismissLabel:t("actions.close")})}}),ke=()=>{ge({items:ue.map(s=>({id:s,quantity:1}))}),b("items",!1)},Pe=async s=>{await $({location_id:s})},Ae=async s=>{const i=d.shipping_methods.map(r=>{var a,f;return(f=(a=r.actions)==null?void 0:a.find(h=>h.action==="SHIPPING_ADD"))==null?void 0:f.id}).filter(Boolean).map(xe);await Promise.all(i),await P({shipping_option_id:s})};j.useEffect(()=>{p&&document.getElementById("js-shipping-input").focus()},[p]),j.useEffect(()=>{C.setValue("location_id",(n==null?void 0:n.location_id)||"")},[n]);const Ee=j.useMemo(()=>T?!R.map(i=>{var a,f;const r=u.get(i.item_id);return!(r!=null&&r.variant_id)||!((a=r.variant)!=null&&a.manage_inventory)?!0:(f=_[r.variant_id])==null?void 0:f.find(h=>h.location_id===T)}).every(Boolean):!1,[R,_,T]);j.useEffect(()=>{(async()=>{const i={};return R.length&&(await Promise.all(R.map(async r=>{const a=u.get(r.item_id);if(a.variant_id)return await ot.admin.product.retrieveVariant(a.product_id,a.variant_id,{fields:"*inventory,*inventory.location_levels"})}))).filter(r=>r==null?void 0:r.variant).forEach(r=>{var h;const{variant:a}=r,f=(h=a.inventory[0])==null?void 0:h.location_levels;f&&(i[a.id]=f)}),i})().then(i=>{x(i)})},[R]);const Q=d.return_requested_total,te=j.useMemo(()=>{const s=d.shipping_methods.find(i=>{var r;return!!((r=i.actions)!=null&&r.find(a=>a.action==="SHIPPING_ADD"))});return(s==null?void 0:s.total)||0},[d.shipping_methods]),K=Q-te;return e.jsx(A.Form,{form:C,onClose:s=>{s||O()},children:e.jsxs(xt,{onSubmit:qe,className:"flex h-full flex-col",children:[e.jsx(A.Header,{}),e.jsx(A.Body,{className:"flex size-full justify-center overflow-y-auto",children:e.jsxs("div",{className:"mt-16 w-[720px] max-w-[100%] px-4 md:p-0",children:[e.jsx(ne,{level:"h1",children:t("orders.returns.create")}),e.jsxs("div",{className:"mt-8 flex items-center justify-between",children:[e.jsx(ne,{level:"h2",children:t("orders.returns.inbound")}),e.jsxs(F,{id:"items",children:[e.jsx(F.Trigger,{asChild:!0,children:e.jsx("a",{className:"focus-visible:shadow-borders-focus transition-fg txt-compact-small-plus cursor-pointer text-blue-500 outline-none hover:text-blue-400",children:t("actions.addItems")})}),e.jsxs(F.Content,{children:[e.jsx(F.Header,{}),e.jsx(wt,{items:o.items,selectedItems:R.map(s=>s.item_id),currencyCode:o.currency_code,onSelectionChange:s=>ue=s}),e.jsx(F.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(A.Close,{asChild:!0,children:e.jsx(X,{type:"button",variant:"secondary",size:"small",children:t("actions.cancel")})}),e.jsx(X,{type:"submit",variant:"primary",size:"small",role:"button",onClick:()=>ke(),children:t("actions.save")},"submit-button")]})})})]})]})]}),G&&e.jsx("div",{style:{background:"repeating-linear-gradient(-45deg, rgb(212, 212, 216, 0.15), rgb(212, 212, 216,.15) 10px, transparent 10px, transparent 20px)"},className:"bg-ui-bg-field mt-4 block h-[56px] w-full rounded-lg border border-dashed"}),R.filter(s=>!!g.get(s.item_id)).map((s,i)=>e.jsx(kt,{item:u.get(s.item_id),previewItem:g.get(s.item_id),currencyCode:o.currency_code,form:C,onRemove:()=>{var a,f,h;const r=(h=(f=(a=c.find(S=>S.id===s.item_id))==null?void 0:a.actions)==null?void 0:f.find(S=>S.action==="RETURN_ITEM"))==null?void 0:h.id;r&&be(r)},onUpdate:r=>{var f,h;const a=(h=(f=c.find(S=>S.id===s.item_id))==null?void 0:f.actions)==null?void 0:h.find(S=>S.action==="RETURN_ITEM");a&&ye({...r,actionId:a.id},{onError:S=>{var D,se;(D=a.details)!=null&&D.quantity&&r.quantity&&C.setValue(`items.${i}.quantity`,(se=a.details)==null?void 0:se.quantity),J.error(S.message)}})},index:i},s.id)),!G&&e.jsxs("div",{className:"mt-8 flex flex-col gap-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx(m.Label,{children:t("orders.returns.location")}),e.jsx(m.Hint,{className:"!mt-1",children:t("orders.returns.locationHint")})]}),e.jsx(m.Field,{control:C.control,name:"location_id",render:({field:{value:s,onChange:i,...r}})=>e.jsx(m.Item,{children:e.jsx(m.Control,{children:e.jsx(ee,{value:s,onChange:a=>{i(a),Pe(a)},...r,options:(v??[]).map(a=>({label:a.name,value:a.id}))})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsxs(m.Label,{children:[t("orders.returns.inboundShipping"),e.jsxs(V,{size:"small",leading:"compact",className:"text-ui-fg-muted ml-1 inline",children:["(",t("fields.optional"),")"]})]}),e.jsx(m.Hint,{className:"!mt-1",children:t("orders.returns.inboundShippingHint")})]}),e.jsx(m.Field,{control:C.control,name:"option_id",render:({field:{value:s,onChange:i,...r}})=>e.jsx(m.Item,{children:e.jsx(m.Control,{children:e.jsx(ee,{value:s,onChange:a=>{i(a),Ae(a)},...r,options:(k??[]).filter(a=>(T?a.service_zone.fulfillment_set.location.id===T:!0)&&!!a.rules.find(f=>f.attribute==="is_return"&&f.value==="true")).map(a=>({label:a.name,value:a.id})),disabled:!T,noResultsPlaceholder:e.jsx(Me,{})})})})})]})]}),Ee&&e.jsxs(Nt,{variant:"warning",dismissible:!0,className:"mt-4 p-5",children:[e.jsx("div",{className:"text-ui-fg-subtle txt-small pb-2 font-medium leading-[20px]",children:t("orders.returns.noInventoryLevel")}),e.jsx(V,{className:"text-ui-fg-subtle txt-small leading-normal",children:t("orders.returns.noInventoryLevelDesc")})]}),e.jsxs("div",{className:"mt-8 border-y border-dotted py-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:t("orders.returns.returnTotal")}),e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:z(Q&&-1*Q,o.currency_code)})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"txt-small text-ui-fg-subtle",children:t("orders.returns.inboundShipping")}),e.jsxs("span",{className:"txt-small text-ui-fg-subtle flex items-center",children:[!p&&e.jsx(Y,{onClick:()=>y(!0),variant:"transparent",className:"text-ui-fg-muted",disabled:G||!Re,children:e.jsx(_t,{})}),p?e.jsx(bt,{id:"js-shipping-input",onBlur:()=>{let s;d.shipping_methods.forEach(i=>{if(i.actions)for(const r of i.actions)r.action==="SHIPPING_ADD"&&(s=r.id)}),s&&pe({actionId:s,custom_amount:typeof w=="string"?null:w}),y(!1)},symbol:ct[o.currency_code.toUpperCase()].symbol_native,code:o.currency_code,onValueChange:s=>I(s?parseFloat(s):""),value:w,disabled:G}):z(te,o.currency_code)]})]}),e.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-dotted pt-4",children:[e.jsx("span",{className:"txt-small font-medium",children:t("orders.returns.refundAmount")}),e.jsx("span",{className:"txt-small font-medium",children:z(K&&-1*K,o.currency_code)})]})]}),e.jsx("div",{className:"bg-ui-bg-field mt-8 rounded-lg border py-2 pl-2 pr-4",children:e.jsx(m.Field,{control:C.control,name:"send_notification",render:({field:{onChange:s,value:i,...r}})=>e.jsxs(m.Item,{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(m.Control,{className:"mr-4 self-start",children:e.jsx(nt,{className:"mt-[2px]",checked:!!i,onCheckedChange:s,...r})}),e.jsxs("div",{className:"block",children:[e.jsx(m.Label,{children:t("orders.returns.sendNotification")}),e.jsx(m.Hint,{className:"!mt-1",children:t("orders.returns.sendNotificationHint")})]})]}),e.jsx(m.ErrorMessage,{})]})})}),e.jsx("div",{className:"p-8"})]})}),e.jsx(A.Footer,{children:e.jsx("div",{className:"flex w-full items-center justify-end gap-x-4",children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(A.Close,{asChild:!0,children:e.jsx(X,{type:"button",variant:"secondary",size:"small",children:t("orders.returns.cancel.title")})}),e.jsx(X,{type:"submit",variant:"primary",size:"small",isLoading:Ne,children:t("orders.returns.confirm")},"submit-button")]})})})]})})},W=!1,Ns=()=>{const{id:o}=Je(),d=Ke(),{t:n}=L(),{order:t}=Ze(o,{fields:He}),{order:l}=We(o,void 0,{}),[u,c]=j.useState(),{mutateAsync:g}=Le(t.id),{return:b}=Fe(u,void 0,{enabled:!!u});return j.useEffect(()=>{async function p(){if(!(W||!l)){if(l.order_change){l.order_change.change_type==="return_request"?c(l.order_change.return_id):(d(`/orders/${t.id}`,{replace:!0}),J.error(n("orders.returns.activeChangeError")));return}W=!0;try{const y=await g({order_id:t.id});c(y.id)}catch(y){d(`/orders/${t.id}`,{replace:!0}),J.error(y.message)}finally{W=!1}}}p()},[l]),e.jsx(A,{children:b&&l&&t&&e.jsx(At,{order:t,activeReturn:b,preview:l})})};export{Ns as Component};
