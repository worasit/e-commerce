import{u as q}from"./chunk-AH23RLTS-CBEmvXsJ.js";import{S as B}from"./chunk-T4W4USY7-kvf0YQSU.js";import{f as H}from"./chunk-IR5DHEKS-aVJcUHa1.js";import{u as F}from"./chunk-6CNRNROJ-t0zWnP4-.js";import{C as k}from"./chunk-BNH57GBH-aOoD9B19.js";import{D as K}from"./chunk-TWS5C22H-CR1zo3YM.js";import{a5 as p,R as A,a6 as G,aS as Z,ar as J,j as e,r as O,b as I,a8 as Q,a9 as U,t as z,B as P,s as D,H as W,T as X,w as i,x as Y,D as ee,g as se,i as ie,l as re}from"./index-CJZ0utKv.js";import{b as oe}from"./chunk-STLKFKTM-Psl18YG9.js";import{S as ne}from"./chunk-JLD5AXG6-DMeKEtHT.js";import{c as V}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K as te}from"./chunk-6HTZNHPT-DAtm5oB_.js";import{R as S,u as R}from"./chunk-KL22UNUW-BusAggzY.js";import{P as y}from"./progress-tabs-xF6bypyH.js";import{R as N}from"./radio-group-B0rUunxU.js";import"./x-mark-mini-ysYOSGAt.js";import"./triangles-mini-CxMQ-XTT.js";import"./plus-mini-BdX2C9J6.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./index.esm-Ls_FBjZZ.js";import"./index-B1m4_RH3.js";import"./checkbox-C144Yjdp.js";import"./prompt-Di3JszOJ.js";var ae=({form:n,isReturn:t=!1,zone:h,locationId:g})=>{const{t:r}=I(),a=F({queryFn:s=>D.admin.shippingProfile.list(s),queryKey:["shipping_profiles"],getOptions:s=>s.shipping_profiles.map(u=>({label:u.name,value:u.id}))}),l=F({queryFn:s=>D.admin.fulfillmentProvider.list({...s,stock_location_id:g}),queryKey:["fulfillment_providers"],getOptions:s=>s.fulfillment_providers.map(u=>({label:H(u.id),value:u.id}))});return e.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[e.jsxs("div",{children:[e.jsx(W,{children:r(`stockLocations.shippingOptions.create.${t?"returns":"shipping"}.header`,{zone:h.name})}),e.jsx(X,{size:"small",className:"text-ui-fg-subtle",children:r(`stockLocations.shippingOptions.create.${t?"returns":"shipping"}.hint`)})]}),e.jsx(i.Field,{control:n.control,name:"price_type",render:({field:s})=>e.jsxs(i.Item,{children:[e.jsx(i.Label,{children:r("stockLocations.shippingOptions.fields.priceType.label")}),e.jsx(i.Control,{children:e.jsxs(N,{className:"grid grid-cols-1 gap-4 md:grid-cols-2",...s,onValueChange:s.onChange,children:[e.jsx(N.ChoiceBox,{className:"flex-1",value:"flat",label:r("stockLocations.shippingOptions.fields.priceType.options.fixed.label"),description:r("stockLocations.shippingOptions.fields.priceType.options.fixed.hint")}),e.jsx(N.ChoiceBox,{className:"flex-1",value:"calculated",label:r("stockLocations.shippingOptions.fields.priceType.options.calculated.label"),description:r("stockLocations.shippingOptions.fields.priceType.options.calculated.hint")})]})}),e.jsx(i.ErrorMessage,{})]})}),e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:e.jsx(i.Field,{control:n.control,name:"name",render:({field:s})=>e.jsxs(i.Item,{children:[e.jsx(i.Label,{children:r("fields.name")}),e.jsx(i.Control,{children:e.jsx(Y,{...s})}),e.jsx(i.ErrorMessage,{})]})})}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(i.Field,{control:n.control,name:"shipping_profile_id",render:({field:s})=>e.jsxs(i.Item,{children:[e.jsx(i.Label,{children:r("stockLocations.shippingOptions.fields.profile")}),e.jsx(i.Control,{children:e.jsx(k,{...s,options:a.options,searchValue:a.searchValue,onSearchValueChange:a.onSearchValueChange,disabled:a.disabled})}),e.jsx(i.ErrorMessage,{})]})}),e.jsx(i.Field,{control:n.control,name:"provider_id",render:({field:s})=>e.jsxs(i.Item,{children:[e.jsx(i.Label,{tooltip:r("stockLocations.fulfillmentProviders.shippingOptionsTooltip"),children:r("stockLocations.shippingOptions.fields.provider")}),e.jsx(i.Control,{children:e.jsx(k,{...s,options:l.options,searchValue:l.searchValue,onSearchValueChange:l.onSearchValueChange,disabled:l.disabled})}),e.jsx(i.ErrorMessage,{})]})})]}),e.jsx(ee,{}),e.jsx(ne,{control:n.control,name:"enabled_in_store",label:r("stockLocations.shippingOptions.fields.enableInStore.label"),description:r("stockLocations.shippingOptions.fields.enableInStore.hint")})]})})},le=({form:n})=>{const{store:t,isLoading:h,isError:g,error:r}=se(),a=O.useMemo(()=>{var v;return((v=t==null?void 0:t.supported_currencies)==null?void 0:v.map(L=>L.currency_code))||[]},[t]),{regions:l,isLoading:s,isError:u,error:o}=ie({fields:"id,name,currency_code",limit:999}),{price_preferences:f}=re({}),{setCloseOnEscape:_}=R(),j=q({currencies:a,regions:l,pricePreferences:f}),b=h||!t||s||!l,x=O.useMemo(()=>[[...a||[],...l||[]]],[a,l]);if(g)throw r;if(u)throw o;return e.jsx("div",{className:"flex size-full flex-col divide-y overflow-hidden",children:e.jsx(K,{isLoading:b,data:x,columns:j,state:n,onEditingChange:v=>_(!v)})})},M=p.object({name:p.string().min(1),price_type:p.nativeEnum(B),enabled_in_store:p.boolean(),shipping_profile_id:p.string().min(1),provider_id:p.string().min(1)}),ce=p.object({region_prices:p.record(p.string(),p.string().optional()),currency_prices:p.record(p.string(),p.string().optional())}).merge(M);function pe({zone:n,isReturn:t,locationId:h}){var E,T;const[g,r]=O.useState("details"),[a,l]=O.useState(!1),{t:s}=I(),{handleSuccess:u}=R(),o=Q({defaultValues:{name:"",price_type:"flat",enabled_in_store:!0,shipping_profile_id:"",provider_id:"",region_prices:{},currency_prices:{}},resolver:U(ce)}),f=o.watch("price_type")==="calculated",{mutateAsync:_,isPending:j}=oe(),b=o.handleSubmit(async d=>{const w=Object.entries(d.currency_prices).map(([c,m])=>{if(!(m===""||m===void 0))return{currency_code:c,amount:V(m)}}).filter(c=>!!c),C=Object.entries(d.region_prices).map(([c,m])=>{if(!(m===""||m===void 0))return{region_id:c,amount:V(m)}}).filter(c=>!!c);await _({name:d.name,price_type:d.price_type,service_zone_id:n.id,shipping_profile_id:d.shipping_profile_id,provider_id:d.provider_id,prices:[...w,...C],rules:[{value:t?'"true"':'"false"',attribute:"is_return",operator:"eq"},{value:d.enabled_in_store?'"true"':'"false"',attribute:"enabled_in_store",operator:"eq"}],type:{label:"Type label",description:"Type description",code:"type-code"}},{onSuccess:({shipping_option:c})=>{z.success(s(`stockLocations.shippingOptions.create.${t?"returns":"shipping"}.successToast`,{name:c.name})),u(`/settings/locations/${h}`)},onError:c=>{z.error(c.message)}})}),x=d=>{if(d==="pricing"){o.clearErrors();const w=M.safeParse({...o.getValues()});if(!w.success){const[C,...c]=w.error.errors;for(const m of c){const $=m.path.join(".");o.setError($,{message:m.message,type:m.code})}o.setError(C.path.join("."),{message:C.message,type:C.code},{shouldFocus:!0}),l(!1);return}l(!0)}r(d)},v=(E=o.getFieldState("currency_prices"))!=null&&E.isDirty||(T=o.getFieldState("region_prices"))!=null&&T.isDirty||g==="pricing"?"in-progress":"not-started",L=a?"completed":"in-progress";return e.jsx(S.Form,{form:o,children:e.jsx(y,{value:g,className:"flex h-full flex-col overflow-hidden",onValueChange:d=>x(d),children:e.jsxs(te,{className:"flex h-full flex-col",onSubmit:b,children:[e.jsx(S.Header,{children:e.jsxs(y.List,{className:"border-ui-border-base -my-2 ml-2 min-w-0 flex-1 border-l",children:[e.jsx(y.Trigger,{value:"details",status:L,className:"w-full max-w-[200px]",children:e.jsx("span",{className:"w-full cursor-auto overflow-hidden text-ellipsis whitespace-nowrap",children:s("stockLocations.shippingOptions.create.tabs.details")})}),!f&&e.jsx(y.Trigger,{value:"pricing",status:v,className:"w-full max-w-[200px]",children:e.jsx("span",{className:"w-full overflow-hidden text-ellipsis whitespace-nowrap",children:s("stockLocations.shippingOptions.create.tabs.prices")})})]})}),e.jsxs(S.Body,{className:"size-full overflow-hidden",children:[e.jsx(y.Content,{value:"details",className:"size-full overflow-y-auto",children:e.jsx(ae,{form:o,zone:n,isReturn:t,locationId:h})}),e.jsx(y.Content,{value:"pricing",className:"size-full",children:e.jsx(le,{form:o})})]}),e.jsx(S.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(S.Close,{asChild:!0,children:e.jsx(P,{variant:"secondary",size:"small",children:s("actions.cancel")})}),g==="pricing"||f?e.jsx(P,{size:"small",className:"whitespace-nowrap",isLoading:j,type:"submit",children:s("actions.save")},"submit-btn"):e.jsx(P,{size:"small",className:"whitespace-nowrap",isLoading:j,onClick:()=>x("pricing"),type:"button",children:s("actions.continue")},"continue-btn")]})})]})})})}var de="*fulfillment_sets,*fulfillment_sets.service_zones,*fulfillment_sets.service_zones.shipping_options";function ze(){var _,j,b;const{location_id:n,fset_id:t,zone_id:h}=A(),[g]=G(),r=g.has("is_return"),{stock_location:a,isPending:l,isFetching:s,isError:u,error:o}=Z(n,{fields:de}),f=(b=(j=(_=a==null?void 0:a.fulfillment_sets)==null?void 0:_.find(x=>x.id===t))==null?void 0:j.service_zones)==null?void 0:b.find(x=>x.id===h);if(!l&&!s&&!f)throw J({message:`Service zone with ID ${h} was not found`},404);if(u)throw o;return e.jsx(S,{prev:`/settings/locations/${n}`,children:f&&e.jsx(pe,{zone:f,isReturn:r,locationId:n})})}export{ze as Component};
