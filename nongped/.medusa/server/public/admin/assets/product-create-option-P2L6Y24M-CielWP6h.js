import{C as j}from"./chunk-OEMJBX6M-BOr3MQp8.js";import{K as f}from"./chunk-6HTZNHPT-DAtm5oB_.js";import{b as a,u as v}from"./chunk-KL22UNUW-BusAggzY.js";import{a5 as i,R as g,b as p,Q as C,j as s,H as b,a8 as y,a9 as P,aq as F,t as u,w as e,x as S,B as m}from"./index-CJZ0utKv.js";import"./index-D2uZCB4l.js";import"./proxy-A1DgzL5D.js";import"./x-mark-mini-ysYOSGAt.js";import"./prompt-Di3JszOJ.js";var w=i.object({title:i.string().min(1),values:i.array(i.string()).optional()}),E=({product:l})=>{const{t:r}=p(),{handleSuccess:n}=v(),o=y({defaultValues:{title:"",values:[]},resolver:P(w)}),{mutateAsync:c,isPending:d}=F(l.id),x=o.handleSubmit(async t=>{c(t,{onSuccess:()=>{u.success(r("products.options.create.successToast",{title:t.title})),n()},onError:async h=>{u.error(h.message)}})});return s.jsx(a.Form,{form:o,children:s.jsxs(f,{onSubmit:x,className:"flex flex-1 flex-col overflow-hidden",children:[s.jsxs(a.Body,{className:"flex flex-1 flex-col gap-y-4 overflow-auto",children:[s.jsx(e.Field,{control:o.control,name:"title",render:({field:t})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("products.fields.options.optionTitle")}),s.jsx(e.Control,{children:s.jsx(S,{...t,placeholder:r("products.fields.options.optionTitlePlaceholder")})}),s.jsx(e.ErrorMessage,{})]})}),s.jsx(e.Field,{control:o.control,name:"values",render:({field:t})=>s.jsxs(e.Item,{children:[s.jsx(e.Label,{children:r("products.fields.options.variations")}),s.jsx(e.Control,{children:s.jsx(j,{...t,placeholder:r("products.fields.options.variantionsPlaceholder")})}),s.jsx(e.ErrorMessage,{})]})})]}),s.jsx(a.Footer,{children:s.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[s.jsx(a.Close,{asChild:!0,children:s.jsx(m,{variant:"secondary",size:"small",children:r("actions.cancel")})}),s.jsx(m,{type:"submit",size:"small",isLoading:d,children:r("actions.save")})]})})]})})},M=()=>{const{id:l}=g(),{t:r}=p(),{product:n,isLoading:o,isError:c,error:d}=C(l);if(c)throw d;return s.jsxs(a,{children:[s.jsx(a.Header,{children:s.jsx(b,{children:r("products.options.create.header")})}),!o&&n&&s.jsx(E,{product:n})]})};export{M as Component};
