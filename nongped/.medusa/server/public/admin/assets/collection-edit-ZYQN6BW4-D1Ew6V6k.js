import{a1 as u,a3 as d,R as p,b as h,dI as f,j as e,H as b,a8 as g,a9 as v,dM as y,w as s,x as m,T as C,B as x}from"./index-CJZ0utKv.js";import{K as F}from"./chunk-6HTZNHPT-DAtm5oB_.js";import{b as a,u as E}from"./chunk-KL22UNUW-BusAggzY.js";import"./prompt-Di3JszOJ.js";var N=u({title:d().min(1),handle:d().min(1)}),w=({collection:n})=>{const{t:l}=h(),{handleSuccess:i}=E(),t=g({defaultValues:{title:n.title,handle:n.handle},resolver:v(N)}),{mutateAsync:o,isPending:c}=y(n.id),j=t.handleSubmit(async r=>{await o(r,{onSuccess:()=>{i()}})});return e.jsx(a.Form,{form:t,children:e.jsxs(F,{onSubmit:j,className:"flex flex-1 flex-col",children:[e.jsx(a.Body,{children:e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:t.control,name:"title",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.title")}),e.jsx(s.Control,{children:e.jsx(m,{...r})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:t.control,name:"handle",render:({field:r})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{tooltip:l("collections.handleTooltip"),children:l("fields.handle")}),e.jsx(s.Control,{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 z-10 flex w-8 items-center justify-center border-r",children:e.jsx(C,{className:"text-ui-fg-muted",size:"small",leading:"compact",weight:"plus",children:"/"})}),e.jsx(m,{...r,className:"pl-10"})]})}),e.jsx(s.ErrorMessage,{})]})})]})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(a.Close,{asChild:!0,children:e.jsx(x,{size:"small",variant:"secondary",children:l("actions.cancel")})}),e.jsx(x,{size:"small",type:"submit",isLoading:c,children:l("actions.save")})]})})]})})},L=()=>{const{id:n}=p(),{t:l}=h(),{collection:i,isLoading:t,isError:o,error:c}=f(n);if(o)throw c;return e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsx(b,{children:l("collections.editCollection")})}),!t&&i&&e.jsx(w,{collection:i})]})};export{L as Component};