import{r as a,ci as re,cj as se,m as v,cl as oe,cp as b,I as ne,X as ce,bd as de,cn as le,cr as ie,cR as ue,co as pe,bc as d,j as c,u as F,b as me,cS as ve,w as fe}from"./index-CJZ0utKv.js";import{P as g}from"./prompt-Di3JszOJ.js";const S=e=>a.createElement(ie,{...e});S.displayName="FocusModal";const C=a.forwardRef((e,r)=>a.createElement(re,{ref:r,...e}));C.displayName="FocusModal.Trigger";const N=b;N.displayName="FocusModal.Close";const j=e=>a.createElement(ue,{...e});j.displayName="FocusModal.Portal";const D=a.forwardRef(({className:e,...r},s)=>a.createElement(se,{ref:s,className:v("bg-ui-bg-overlay fixed inset-0","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...r}));D.displayName="FocusModal.Overlay";const w=a.forwardRef(({className:e,overlayProps:r,portalProps:s,...t},o)=>a.createElement(j,{...s},a.createElement(D,{...r}),a.createElement(oe,{ref:o,className:v("bg-ui-bg-base shadow-elevation-modal fixed inset-2 flex flex-col overflow-hidden rounded-lg border outline-none","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-in-from-bottom-2  duration-200",e),...t})));w.displayName="FocusModal.Content";const O=a.forwardRef(({children:e,className:r,...s},t)=>a.createElement("div",{ref:t,className:v("border-ui-border-base flex items-center justify-between gap-x-4 border-b px-4 py-2",r),...s},a.createElement("div",{className:"flex items-center gap-x-2"},a.createElement(b,{asChild:!0},a.createElement(ne,{size:"small",type:"button",variant:"transparent"},a.createElement(ce,null))),a.createElement(de,null,"esc")),e));O.displayName="FocusModal.Header";const T=a.forwardRef(({children:e,className:r,...s},t)=>a.createElement("div",{ref:t,className:v("border-ui-border-base flex items-center justify-end gap-x-2 border-t p-4",r),...s},e));T.displayName="FocusModal.Footer";const E=a.forwardRef(({className:e,...r},s)=>a.createElement(le,{ref:s,...r}));E.displayName="FocusModal.Title";const k=pe;k.displayName="FocusModal.Description";const R=a.forwardRef(({className:e,...r},s)=>a.createElement("div",{ref:s,className:v("flex-1",e),...r}));R.displayName="FocusModal.Body";const l=Object.assign(S,{Trigger:C,Title:E,Description:k,Content:w,Header:O,Body:R,Close:N,Footer:T});var B=({form:e,blockSearchParams:r=!1,children:s,onClose:t})=>{const{t:o}=me(),{formState:{isDirty:u}}=e,n=ve(({currentLocation:p,nextLocation:f})=>{const{isSubmitSuccessful:y}=f.state||{};if(y)return t==null||t(!0),!1;const M=p.pathname!==f.pathname,te=p.search!==f.search;if(r){const x=u&&(M||te);return x||t==null||t(y),x}const h=u&&M;return h||t==null||t(y),h}),m=()=>{var p;(p=n==null?void 0:n.reset)==null||p.call(n)},i=()=>{var p;(p=n==null?void 0:n.proceed)==null||p.call(n),t==null||t(!1)};return c.jsxs(fe,{...e,children:[s,c.jsx(g,{open:n.state==="blocked",variant:"confirmation",children:c.jsxs(g.Content,{children:[c.jsxs(g.Header,{children:[c.jsx(g.Title,{children:o("general.unsavedChangesTitle")}),c.jsx(g.Description,{children:o("general.unsavedChangesDescription")})]}),c.jsxs(g.Footer,{children:[c.jsx(g.Cancel,{onClick:m,type:"button",children:o("actions.cancel")}),c.jsx(g.Action,{onClick:i,type:"button",children:o("actions.continue")})]})]})})]})},H=a.createContext(null),P=({prev:e,children:r})=>{const s=F(),[t,o]=a.useState(!0),u=a.useCallback(m=>{s(m||e,{replace:!0,state:{isSubmitSuccessful:!0}})},[s,e]),n=a.useMemo(()=>({handleSuccess:u,setCloseOnEscape:o,__internal:{closeOnEscape:t}}),[u,o,t]);return c.jsx(H.Provider,{value:n,children:r})},I=a.createContext(null),$=({children:e,onOpenChange:r})=>{const[s,t]=a.useState({}),o=i=>s[i]||!1,u=(i,p)=>{t(f=>({...f,[i]:p})),r(p)},n=i=>{t(p=>({...p,[i]:!1}))},m=i=>{t(p=>{const f={...p};return delete f[i],f})};return c.jsx(I.Provider,{value:{getIsOpen:o,setIsOpen:u,register:n,unregister:m},children:e})},_=()=>{const e=a.useContext(I);if(!e)throw new Error("useStackedModal must be used within a StackedModalProvider");return e},ge=({prev:e="..",children:r})=>{const s=F(),[t,o]=a.useState(!1),[u,n]=a.useState(!1);a.useEffect(()=>(o(!0),()=>{o(!1),n(!1)}),[]);const m=i=>{if(!i){document.body.style.pointerEvents="auto",s(e,{replace:!0});return}o(i)};return c.jsx(d,{open:t,onOpenChange:m,children:c.jsx(P,{prev:e,children:c.jsx($,{onOpenChange:n,children:c.jsx(d.Content,{"aria-describedby":void 0,className:v({"!bg-ui-bg-disabled !inset-y-5 !right-5":u}),children:r})})})})},ye=d.Header,Fe=d.Title,Me=d.Description,he=d.Body,xe=d.Footer,be=d.Close,Se=B,$e=Object.assign(ge,{Header:ye,Title:Fe,Body:he,Description:Me,Footer:xe,Close:be,Form:Se}),Ce=()=>{const e=a.useContext(H);if(!e)throw new Error("useRouteModal must be used within a RouteModalProvider");return e},Ne=({prev:e="..",children:r})=>{const s=F(),[t,o]=a.useState(!1),[u,n]=a.useState(!1);a.useEffect(()=>(o(!0),()=>{o(!1),n(!1)}),[]);const m=i=>{if(!i){document.body.style.pointerEvents="auto",s(e,{replace:!0});return}o(i)};return c.jsx(l,{open:t,onOpenChange:m,children:c.jsx(P,{prev:e,children:c.jsx($,{onOpenChange:n,children:c.jsx(je,{stackedModalOpen:u,children:r})})})})},je=({stackedModalOpen:e,children:r})=>{const{__internal:s}=Ce(),t=!s.closeOnEscape;return c.jsx(l.Content,{onEscapeKeyDown:t?o=>{o.preventDefault()}:void 0,className:v({"!bg-ui-bg-disabled !inset-x-5 !inset-y-3":e}),children:r})},De=l.Header,we=l.Title,Oe=l.Description,Te=l.Footer,Ee=l.Body,ke=l.Close,Re=B,_e=Object.assign(Ne,{Header:De,Title:we,Body:Ee,Description:Oe,Footer:Te,Close:ke,Form:Re}),Be=({id:e,children:r})=>{const{register:s,unregister:t,getIsOpen:o,setIsOpen:u}=_();return a.useEffect(()=>(s(e),()=>t(e)),[]),c.jsx(d,{open:o(e),onOpenChange:n=>u(e,n),children:r})},K=d.Close;K.displayName="StackedDrawer.Close";var X=d.Header;X.displayName="StackedDrawer.Header";var z=d.Body;z.displayName="StackedDrawer.Body";var A=d.Trigger;A.displayName="StackedDrawer.Trigger";var q=d.Footer;q.displayName="StackedDrawer.Footer";var G=d.Title;G.displayName="StackedDrawer.Title";var J=d.Description;J.displayName="StackedDrawer.Description";var Q=a.forwardRef(({className:e,...r},s)=>c.jsx(d.Content,{ref:s,className:v(e),overlayProps:{className:"bg-transparent"},...r}));Q.displayName="StackedDrawer.Content";var Ke=Object.assign(Be,{Close:K,Header:X,Body:z,Content:Q,Trigger:A,Footer:q,Description:J,Title:G}),He=({id:e,children:r})=>{const{register:s,unregister:t,getIsOpen:o,setIsOpen:u}=_();return a.useEffect(()=>(s(e),()=>t(e)),[]),c.jsx(l,{open:o(e),onOpenChange:n=>u(e,n),children:r})},U=l.Close;U.displayName="StackedFocusModal.Close";var V=l.Header;V.displayName="StackedFocusModal.Header";var W=l.Body;W.displayName="StackedFocusModal.Body";var Y=l.Trigger;Y.displayName="StackedFocusModal.Trigger";var Z=l.Footer;Z.displayName="StackedFocusModal.Footer";var L=l.Title;L.displayName="StackedFocusModal.Title";var ee=l.Description;ee.displayName="StackedFocusModal.Description";var ae=a.forwardRef(({className:e,...r},s)=>c.jsx(l.Content,{ref:s,className:v("!top-6",e),overlayProps:{className:"bg-transparent"},...r}));ae.displayName="StackedFocusModal.Content";var Xe=Object.assign(He,{Close:U,Header:V,Body:W,Content:ae,Trigger:Y,Footer:Z,Description:ee,Title:L});export{_e as R,Xe as S,_ as a,$e as b,Ke as c,Ce as u};