import{C as H}from"./chunk-MW4K5NNY-DDkmbitH.js";import{C as R}from"./chunk-BNH57GBH-aOoD9B19.js";import{o as y}from"./chunk-ZQRKUG6J-DDq2L00Z.js";import{a5 as l,d as z,b as P,R as B,a6 as K,a7 as Q,Q as U,j as e,H as C,q as _,a8 as O,a9 as $,aa as A,t as F,w as r,x,D as E,ab as L,B as I,ac as T,s as G}from"./index-CJZ0utKv.js";import{t as J,a as b}from"./chunk-3ISBJK7K-BDgyZg6W.js";import{K as W}from"./chunk-6HTZNHPT-DAtm5oB_.js";import{b as m,u as X}from"./chunk-KL22UNUW-BusAggzY.js";import"./triangles-mini-CxMQ-XTT.js";import"./x-mark-mini-ysYOSGAt.js";import"./plus-mini-BdX2C9J6.js";import"./chunk-6GU6IDUA-CDc7wW5L.js";import"./prompt-Di3JszOJ.js";var Y=l.object({title:l.string().min(1),material:l.string().optional(),sku:l.string().optional(),ean:l.string().optional(),upc:l.string().optional(),barcode:l.string().optional(),manage_inventory:l.boolean(),allow_backorder:l.boolean(),weight:y,height:y,width:y,length:y,mid_code:l.string().optional(),hs_code:l.string().optional(),origin_country:l.string().optional(),options:l.record(l.string())}),Z=({variant:n,product:h})=>{var f,g;const{t:o}=P(),{handleSuccess:p}=X(),j=(f=h.options)==null?void 0:f.reduce((s,d)=>{var c;const a=(c=n.options)==null?void 0:c.find(u=>u.option_id===d.id);return s[d.title]=a==null?void 0:a.value,s},{}),t=O({defaultValues:{title:n.title||"",material:n.material||"",sku:n.sku||"",ean:n.ean||"",upc:n.upc||"",barcode:n.barcode||"",manage_inventory:n.manage_inventory||!1,allow_backorder:n.allow_backorder||!1,weight:n.weight||"",height:n.height||"",width:n.width||"",length:n.length||"",mid_code:n.mid_code||"",hs_code:n.hs_code||"",origin_country:n.origin_country||"",options:j},resolver:$(Y)}),{mutateAsync:i,isPending:w}=A(n.product_id,n.id),v=t.handleSubmit(async s=>{const{title:d,weight:a,height:c,width:u,length:k,allow_backorder:M,manage_inventory:N,options:V,...S}=s,D=J(S);await i({id:n.id,weight:b(a),height:b(c),width:b(u),length:b(k),title:d,allow_backorder:M,manage_inventory:N,options:V,...D},{onSuccess:()=>{p("../"),F.success(o("products.variant.edit.success"))},onError:q=>{F.error(q.message)}})});return e.jsx(m.Form,{form:t,children:e.jsxs(W,{onSubmit:v,className:"flex size-full flex-col overflow-hidden",children:[e.jsxs(m.Body,{className:"flex size-full flex-col gap-y-8 overflow-auto",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(r.Field,{control:t.control,name:"title",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:o("fields.title")}),e.jsx(r.Control,{children:e.jsx(x,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:t.control,name:"material",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.material")}),e.jsx(r.Control,{children:e.jsx(x,{...s})}),e.jsx(r.ErrorMessage,{})]})}),(g=h.options)==null?void 0:g.map(s=>e.jsx(r.Field,{control:t.control,name:`options.${s.title}`,render:({field:{value:d,onChange:a,...c}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:s.title}),e.jsx(r.Control,{children:e.jsx(R,{value:d,onChange:u=>{a(u)},...c,options:s.values.map(u=>({label:u.value,value:u.value}))})})]})},s.id))]}),e.jsx(E,{}),e.jsxs("div",{className:"flex flex-col gap-y-8",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(C,{level:"h2",children:o("products.variant.inventory.header")}),e.jsx(r.Field,{control:t.control,name:"sku",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.sku")}),e.jsx(r.Control,{children:e.jsx(x,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:t.control,name:"ean",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.ean")}),e.jsx(r.Control,{children:e.jsx(x,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:t.control,name:"upc",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.upc")}),e.jsx(r.Control,{children:e.jsx(x,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:t.control,name:"barcode",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.barcode")}),e.jsx(r.Control,{children:e.jsx(x,{...s})}),e.jsx(r.ErrorMessage,{})]})})]}),e.jsx(r.Field,{control:t.control,name:"manage_inventory",render:({field:{value:s,onChange:d,...a}})=>e.jsxs(r.Item,{children:[e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r.Label,{children:o("products.variant.inventory.manageInventoryLabel")}),e.jsx(r.Control,{children:e.jsx(L,{checked:s,onCheckedChange:c=>d(!!c),...a})})]}),e.jsx(r.Hint,{children:o("products.variant.inventory.manageInventoryHint")})]}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:t.control,name:"allow_backorder",render:({field:{value:s,onChange:d,...a}})=>e.jsxs(r.Item,{children:[e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r.Label,{children:o("products.variant.inventory.allowBackordersLabel")}),e.jsx(r.Control,{children:e.jsx(L,{checked:s,onCheckedChange:c=>d(!!c),...a})})]}),e.jsx(r.Hint,{children:o("products.variant.inventory.allowBackordersHint")})]}),e.jsx(r.ErrorMessage,{})]})})]}),e.jsx(E,{}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(C,{level:"h2",children:o("products.attributes")}),e.jsx(r.Field,{control:t.control,name:"weight",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.weight")}),e.jsx(r.Control,{children:e.jsx(x,{type:"number",...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:t.control,name:"width",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.width")}),e.jsx(r.Control,{children:e.jsx(x,{type:"number",...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:t.control,name:"length",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.length")}),e.jsx(r.Control,{children:e.jsx(x,{type:"number",...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:t.control,name:"height",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.height")}),e.jsx(r.Control,{children:e.jsx(x,{type:"number",...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:t.control,name:"mid_code",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.midCode")}),e.jsx(r.Control,{children:e.jsx(x,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:t.control,name:"hs_code",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.hsCode")}),e.jsx(r.Control,{children:e.jsx(x,{...s})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:t.control,name:"origin_country",render:({field:s})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{optional:!0,children:o("fields.countryOfOrigin")}),e.jsx(r.Control,{children:e.jsx(H,{...s})}),e.jsx(r.ErrorMessage,{})]})})]})]}),e.jsx(m.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(m.Close,{asChild:!0,children:e.jsx(I,{variant:"secondary",size:"small",children:o("actions.cancel")})}),e.jsx(I,{type:"submit",size:"small",isLoading:w,children:o("actions.save")})]})})]})})},je=()=>{const n=z(),{t:h}=P(),{id:o,variant_id:p}=B(),[j]=K(),t=j.get("variant_id"),{variant:i,isPending:w,isError:v,error:f}=Q(o,p||t,void 0,{initialData:n}),{product:g,isPending:s,isError:d,error:a}=U(i==null?void 0:i.product_id,{fields:"-variants"},{enabled:!!(i!=null&&i.product_id)}),c=!w&&!!i&&!s&&!!g;if(v)throw f;if(d)throw a;return e.jsxs(m,{children:[e.jsx(m.Header,{children:e.jsx(C,{children:h("products.variant.edit.header")})}),c&&e.jsx(Z,{variant:i,product:g})]})},ee=async(n,h)=>await G.admin.product.retrieveVariant(n,h),re=(n,h)=>({queryKey:T.detail(h),queryFn:async()=>ee(n,h)}),me=async({params:n,request:h})=>{const o=n.id,j=new URL(h.url).searchParams.get("variant_id"),t=n.variant_id||j,i=re(o,t||j);return _.getQueryData(i.queryKey)??await _.fetchQuery(i)};export{je as Component,me as loader};
