import{d3 as ut,bV as pt,bW as Pe,r as t,bY as L,j as c,bX as ft,bZ as A,b_ as N,d4 as U,aC as Ne,c0 as mt,c3 as ht,c1 as gt,c2 as vt,c4 as xt,c5 as St,c6 as wt,ca as ye,c7 as bt,c_ as Ct,d5 as yt,d6 as It,cb as Tt,cU as Et,c8 as Te,c9 as Pt,bU as Nt,m as X,ai as Rt}from"./index-CJZ0utKv.js";import{T as _t}from"./triangles-mini-CxMQ-XTT.js";function Ee(o,[n,e]){return Math.min(e,Math.max(n,o))}var Mt=[" ","Enter","ArrowUp","ArrowDown"],At=[" ","Enter"],se="Select",[ce,de,Ot]=ut(se),[te,ho]=pt(se,[Ot,Pe]),ue=Pe(),[jt,K]=te(se),[Dt,Lt]=te(se),Re=o=>{const{__scopeSelect:n,children:e,open:a,defaultOpen:s,onOpenChange:d,value:l,defaultValue:i,onValueChange:r,dir:u,name:v,autoComplete:b,disabled:E,required:T}=o,m=ue(n),[g,y]=t.useState(null),[h,p]=t.useState(null),[x,H]=t.useState(!1),O=Et(u),[oe=!1,R]=Te({prop:a,defaultProp:s,onChange:d}),[M,$]=Te({prop:l,defaultProp:i,onChange:r}),J=t.useRef(null),z=g?!!g.closest("form"):!0,[j,B]=t.useState(new Set),F=Array.from(j).map(P=>P.props.value).join(";");return c.jsx(Pt,{...m,children:c.jsxs(jt,{required:T,scope:n,trigger:g,onTriggerChange:y,valueNode:h,onValueNodeChange:p,valueNodeHasChildren:x,onValueNodeHasChildrenChange:H,contentId:ye(),value:M,onValueChange:$,open:oe,onOpenChange:R,dir:O,triggerPointerDownPosRef:J,disabled:E,children:[c.jsx(ce.Provider,{scope:n,children:c.jsx(Dt,{scope:o.__scopeSelect,onNativeOptionAdd:t.useCallback(P=>{B(D=>new Set(D).add(P))},[]),onNativeOptionRemove:t.useCallback(P=>{B(D=>{const V=new Set(D);return V.delete(P),V})},[]),children:e})}),z?c.jsxs(Qe,{"aria-hidden":!0,required:T,tabIndex:-1,name:v,autoComplete:b,value:M,onChange:P=>$(P.target.value),disabled:E,children:[M===void 0?c.jsx("option",{value:""}):null,Array.from(j)]},F):null]})})};Re.displayName=se;var _e="SelectTrigger",Me=t.forwardRef((o,n)=>{const{__scopeSelect:e,disabled:a=!1,...s}=o,d=ue(e),l=K(_e,e),i=l.disabled||a,r=L(n,l.onTriggerChange),u=de(e),[v,b,E]=et(m=>{const g=u().filter(p=>!p.disabled),y=g.find(p=>p.value===l.value),h=tt(g,m,y);h!==void 0&&l.onValueChange(h.value)}),T=()=>{i||(l.onOpenChange(!0),E())};return c.jsx(ft,{asChild:!0,...d,children:c.jsx(A.button,{type:"button",role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":Je(l.value)?"":void 0,...s,ref:r,onClick:N(s.onClick,m=>{m.currentTarget.focus()}),onPointerDown:N(s.onPointerDown,m=>{const g=m.target;g.hasPointerCapture(m.pointerId)&&g.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&(T(),l.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)},m.preventDefault())}),onKeyDown:N(s.onKeyDown,m=>{const g=v.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&b(m.key),!(g&&m.key===" ")&&Mt.includes(m.key)&&(T(),m.preventDefault())})})})});Me.displayName=_e;var Ae="SelectValue",Oe=t.forwardRef((o,n)=>{const{__scopeSelect:e,className:a,style:s,children:d,placeholder:l="",...i}=o,r=K(Ae,e),{onValueNodeHasChildrenChange:u}=r,v=d!==void 0,b=L(n,r.onValueNodeChange);return U(()=>{u(v)},[u,v]),c.jsx(A.span,{...i,ref:b,style:{pointerEvents:"none"},children:Je(r.value)?c.jsx(c.Fragment,{children:l}):d})});Oe.displayName=Ae;var Vt="SelectIcon",je=t.forwardRef((o,n)=>{const{__scopeSelect:e,children:a,...s}=o;return c.jsx(A.span,{"aria-hidden":!0,...s,ref:n,children:a||"▼"})});je.displayName=Vt;var kt="SelectPortal",De=o=>c.jsx(Tt,{asChild:!0,...o});De.displayName=kt;var Z="SelectContent",Le=t.forwardRef((o,n)=>{const e=K(Z,o.__scopeSelect),[a,s]=t.useState();if(U(()=>{s(new DocumentFragment)},[]),!e.open){const d=a;return d?Ne.createPortal(c.jsx(Ve,{scope:o.__scopeSelect,children:c.jsx(ce.Slot,{scope:o.__scopeSelect,children:c.jsx("div",{children:o.children})})}),d):null}return c.jsx(ke,{...o,ref:n})});Le.displayName=Z;var k=10,[Ve,G]=te(Z),Ht="SelectContentImpl",ke=t.forwardRef((o,n)=>{const{__scopeSelect:e,position:a="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:d,onPointerDownOutside:l,side:i,sideOffset:r,align:u,alignOffset:v,arrowPadding:b,collisionBoundary:E,collisionPadding:T,sticky:m,hideWhenDetached:g,avoidCollisions:y,...h}=o,p=K(Z,e),[x,H]=t.useState(null),[O,oe]=t.useState(null),R=L(n,f=>H(f)),[M,$]=t.useState(null),[J,z]=t.useState(null),j=de(e),[B,F]=t.useState(!1),P=t.useRef(!1);t.useEffect(()=>{if(x)return mt(x)},[x]),ht();const D=t.useCallback(f=>{const[I,..._]=j().map(w=>w.ref.current),[C]=_.slice(-1),S=document.activeElement;for(const w of f)if(w===S||(w==null||w.scrollIntoView({block:"nearest"}),w===I&&O&&(O.scrollTop=0),w===C&&O&&(O.scrollTop=O.scrollHeight),w==null||w.focus(),document.activeElement!==S))return},[j,O]),V=t.useCallback(()=>D([M,x]),[D,M,x]);t.useEffect(()=>{B&&V()},[B,V]);const{onOpenChange:Q,triggerPointerDownPosRef:W}=p;t.useEffect(()=>{if(x){let f={x:0,y:0};const I=C=>{var S,w;f={x:Math.abs(Math.round(C.pageX)-(((S=W.current)==null?void 0:S.x)??0)),y:Math.abs(Math.round(C.pageY)-(((w=W.current)==null?void 0:w.y)??0))}},_=C=>{f.x<=10&&f.y<=10?C.preventDefault():x.contains(C.target)||Q(!1),document.removeEventListener("pointermove",I),W.current=null};return W.current!==null&&(document.addEventListener("pointermove",I),document.addEventListener("pointerup",_,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",I),document.removeEventListener("pointerup",_,{capture:!0})}}},[x,Q,W]),t.useEffect(()=>{const f=()=>Q(!1);return window.addEventListener("blur",f),window.addEventListener("resize",f),()=>{window.removeEventListener("blur",f),window.removeEventListener("resize",f)}},[Q]);const[pe,ae]=et(f=>{const I=j().filter(S=>!S.disabled),_=I.find(S=>S.ref.current===document.activeElement),C=tt(I,f,_);C&&setTimeout(()=>C.ref.current.focus())}),fe=t.useCallback((f,I,_)=>{const C=!P.current&&!_;(p.value!==void 0&&p.value===I||C)&&($(f),C&&(P.current=!0))},[p.value]),me=t.useCallback(()=>x==null?void 0:x.focus(),[x]),ee=t.useCallback((f,I,_)=>{const C=!P.current&&!_;(p.value!==void 0&&p.value===I||C)&&z(f)},[p.value]),le=a==="popper"?xe:He,ne=le===xe?{side:i,sideOffset:r,align:u,alignOffset:v,arrowPadding:b,collisionBoundary:E,collisionPadding:T,sticky:m,hideWhenDetached:g,avoidCollisions:y}:{};return c.jsx(Ve,{scope:e,content:x,viewport:O,onViewportChange:oe,itemRefCallback:fe,selectedItem:M,onItemLeave:me,itemTextRefCallback:ee,focusSelectedItem:V,selectedItemText:J,position:a,isPositioned:B,searchRef:pe,children:c.jsx(gt,{as:vt,allowPinchZoom:!0,children:c.jsx(xt,{asChild:!0,trapped:p.open,onMountAutoFocus:f=>{f.preventDefault()},onUnmountAutoFocus:N(s,f=>{var I;(I=p.trigger)==null||I.focus({preventScroll:!0}),f.preventDefault()}),children:c.jsx(St,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:d,onPointerDownOutside:l,onFocusOutside:f=>f.preventDefault(),onDismiss:()=>p.onOpenChange(!1),children:c.jsx(le,{role:"listbox",id:p.contentId,"data-state":p.open?"open":"closed",dir:p.dir,onContextMenu:f=>f.preventDefault(),...h,...ne,onPlaced:()=>F(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...h.style},onKeyDown:N(h.onKeyDown,f=>{const I=f.ctrlKey||f.altKey||f.metaKey;if(f.key==="Tab"&&f.preventDefault(),!I&&f.key.length===1&&ae(f.key),["ArrowUp","ArrowDown","Home","End"].includes(f.key)){let C=j().filter(S=>!S.disabled).map(S=>S.ref.current);if(["ArrowUp","End"].includes(f.key)&&(C=C.slice().reverse()),["ArrowUp","ArrowDown"].includes(f.key)){const S=f.target,w=C.indexOf(S);C=C.slice(w+1)}setTimeout(()=>D(C)),f.preventDefault()}})})})})})})});ke.displayName=Ht;var Bt="SelectItemAlignedPosition",He=t.forwardRef((o,n)=>{const{__scopeSelect:e,onPlaced:a,...s}=o,d=K(Z,e),l=G(Z,e),[i,r]=t.useState(null),[u,v]=t.useState(null),b=L(n,R=>v(R)),E=de(e),T=t.useRef(!1),m=t.useRef(!0),{viewport:g,selectedItem:y,selectedItemText:h,focusSelectedItem:p}=l,x=t.useCallback(()=>{if(d.trigger&&d.valueNode&&i&&u&&g&&y&&h){const R=d.trigger.getBoundingClientRect(),M=u.getBoundingClientRect(),$=d.valueNode.getBoundingClientRect(),J=h.getBoundingClientRect();if(d.dir!=="rtl"){const S=J.left-M.left,w=$.left-S,Y=R.left-w,q=R.width+Y,he=Math.max(q,M.width),ge=window.innerWidth-k,ve=Ee(w,[k,ge-he]);i.style.minWidth=q+"px",i.style.left=ve+"px"}else{const S=M.right-J.right,w=window.innerWidth-$.right-S,Y=window.innerWidth-R.right-w,q=R.width+Y,he=Math.max(q,M.width),ge=window.innerWidth-k,ve=Ee(w,[k,ge-he]);i.style.minWidth=q+"px",i.style.right=ve+"px"}const z=E(),j=window.innerHeight-k*2,B=g.scrollHeight,F=window.getComputedStyle(u),P=parseInt(F.borderTopWidth,10),D=parseInt(F.paddingTop,10),V=parseInt(F.borderBottomWidth,10),Q=parseInt(F.paddingBottom,10),W=P+D+B+Q+V,pe=Math.min(y.offsetHeight*5,W),ae=window.getComputedStyle(g),fe=parseInt(ae.paddingTop,10),me=parseInt(ae.paddingBottom,10),ee=R.top+R.height/2-k,le=j-ee,ne=y.offsetHeight/2,f=y.offsetTop+ne,I=P+D+f,_=W-I;if(I<=ee){const S=y===z[z.length-1].ref.current;i.style.bottom="0px";const w=u.clientHeight-g.offsetTop-g.offsetHeight,Y=Math.max(le,ne+(S?me:0)+w+V),q=I+Y;i.style.height=q+"px"}else{const S=y===z[0].ref.current;i.style.top="0px";const Y=Math.max(ee,P+g.offsetTop+(S?fe:0)+ne)+_;i.style.height=Y+"px",g.scrollTop=I-ee+g.offsetTop}i.style.margin=`${k}px 0`,i.style.minHeight=pe+"px",i.style.maxHeight=j+"px",a==null||a(),requestAnimationFrame(()=>T.current=!0)}},[E,d.trigger,d.valueNode,i,u,g,y,h,d.dir,a]);U(()=>x(),[x]);const[H,O]=t.useState();U(()=>{u&&O(window.getComputedStyle(u).zIndex)},[u]);const oe=t.useCallback(R=>{R&&m.current===!0&&(x(),p==null||p(),m.current=!1)},[x,p]);return c.jsx(Wt,{scope:e,contentWrapper:i,shouldExpandOnScrollRef:T,onScrollButtonChange:oe,children:c.jsx("div",{ref:r,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:H},children:c.jsx(A.div,{...s,ref:b,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});He.displayName=Bt;var Ft="SelectPopperPosition",xe=t.forwardRef((o,n)=>{const{__scopeSelect:e,align:a="start",collisionPadding:s=k,...d}=o,l=ue(e);return c.jsx(wt,{...l,...d,ref:n,align:a,collisionPadding:s,style:{boxSizing:"border-box",...d.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});xe.displayName=Ft;var[Wt,Ie]=te(Z,{}),Se="SelectViewport",Be=t.forwardRef((o,n)=>{const{__scopeSelect:e,nonce:a,...s}=o,d=G(Se,e),l=Ie(Se,e),i=L(n,d.onViewportChange),r=t.useRef(0);return c.jsxs(c.Fragment,{children:[c.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),c.jsx(ce.Slot,{scope:e,children:c.jsx(A.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:i,style:{position:"relative",flex:1,overflow:"auto",...s.style},onScroll:N(s.onScroll,u=>{const v=u.currentTarget,{contentWrapper:b,shouldExpandOnScrollRef:E}=l;if(E!=null&&E.current&&b){const T=Math.abs(r.current-v.scrollTop);if(T>0){const m=window.innerHeight-k*2,g=parseFloat(b.style.minHeight),y=parseFloat(b.style.height),h=Math.max(g,y);if(h<m){const p=h+T,x=Math.min(m,p),H=p-x;b.style.height=x+"px",b.style.bottom==="0px"&&(v.scrollTop=H>0?H:0,b.style.justifyContent="flex-end")}}}r.current=v.scrollTop})})})]})});Be.displayName=Se;var Fe="SelectGroup",[Ut,Kt]=te(Fe),We=t.forwardRef((o,n)=>{const{__scopeSelect:e,...a}=o,s=ye();return c.jsx(Ut,{scope:e,id:s,children:c.jsx(A.div,{role:"group","aria-labelledby":s,...a,ref:n})})});We.displayName=Fe;var Ue="SelectLabel",Ke=t.forwardRef((o,n)=>{const{__scopeSelect:e,...a}=o,s=Kt(Ue,e);return c.jsx(A.div,{id:s.id,...a,ref:n})});Ke.displayName=Ue;var ie="SelectItem",[Gt,Ge]=te(ie),$e=t.forwardRef((o,n)=>{const{__scopeSelect:e,value:a,disabled:s=!1,textValue:d,...l}=o,i=K(ie,e),r=G(ie,e),u=i.value===a,[v,b]=t.useState(d??""),[E,T]=t.useState(!1),m=L(n,h=>{var p;return(p=r.itemRefCallback)==null?void 0:p.call(r,h,a,s)}),g=ye(),y=()=>{s||(i.onValueChange(a),i.onOpenChange(!1))};if(a==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return c.jsx(Gt,{scope:e,value:a,disabled:s,textId:g,isSelected:u,onItemTextChange:t.useCallback(h=>{b(p=>p||((h==null?void 0:h.textContent)??"").trim())},[]),children:c.jsx(ce.ItemSlot,{scope:e,value:a,disabled:s,textValue:v,children:c.jsx(A.div,{role:"option","aria-labelledby":g,"data-highlighted":E?"":void 0,"aria-selected":u&&E,"data-state":u?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...l,ref:m,onFocus:N(l.onFocus,()=>T(!0)),onBlur:N(l.onBlur,()=>T(!1)),onPointerUp:N(l.onPointerUp,y),onPointerMove:N(l.onPointerMove,h=>{var p;s?(p=r.onItemLeave)==null||p.call(r):h.currentTarget.focus({preventScroll:!0})}),onPointerLeave:N(l.onPointerLeave,h=>{var p;h.currentTarget===document.activeElement&&((p=r.onItemLeave)==null||p.call(r))}),onKeyDown:N(l.onKeyDown,h=>{var x;((x=r.searchRef)==null?void 0:x.current)!==""&&h.key===" "||(At.includes(h.key)&&y(),h.key===" "&&h.preventDefault())})})})})});$e.displayName=ie;var re="SelectItemText",ze=t.forwardRef((o,n)=>{const{__scopeSelect:e,className:a,style:s,...d}=o,l=K(re,e),i=G(re,e),r=Ge(re,e),u=Lt(re,e),[v,b]=t.useState(null),E=L(n,h=>b(h),r.onItemTextChange,h=>{var p;return(p=i.itemTextRefCallback)==null?void 0:p.call(i,h,r.value,r.disabled)}),T=v==null?void 0:v.textContent,m=t.useMemo(()=>c.jsx("option",{value:r.value,disabled:r.disabled,children:T},r.value),[r.disabled,r.value,T]),{onNativeOptionAdd:g,onNativeOptionRemove:y}=u;return U(()=>(g(m),()=>y(m)),[g,y,m]),c.jsxs(c.Fragment,{children:[c.jsx(A.span,{id:r.textId,...d,ref:E}),r.isSelected&&l.valueNode&&!l.valueNodeHasChildren?Ne.createPortal(d.children,l.valueNode):null]})});ze.displayName=re;var Ye="SelectItemIndicator",qe=t.forwardRef((o,n)=>{const{__scopeSelect:e,...a}=o;return Ge(Ye,e).isSelected?c.jsx(A.span,{"aria-hidden":!0,...a,ref:n}):null});qe.displayName=Ye;var we="SelectScrollUpButton",$t=t.forwardRef((o,n)=>{const e=G(we,o.__scopeSelect),a=Ie(we,o.__scopeSelect),[s,d]=t.useState(!1),l=L(n,a.onScrollButtonChange);return U(()=>{if(e.viewport&&e.isPositioned){let i=function(){const u=r.scrollTop>0;d(u)};const r=e.viewport;return i(),r.addEventListener("scroll",i),()=>r.removeEventListener("scroll",i)}},[e.viewport,e.isPositioned]),s?c.jsx(Xe,{...o,ref:l,onAutoScroll:()=>{const{viewport:i,selectedItem:r}=e;i&&r&&(i.scrollTop=i.scrollTop-r.offsetHeight)}}):null});$t.displayName=we;var be="SelectScrollDownButton",zt=t.forwardRef((o,n)=>{const e=G(be,o.__scopeSelect),a=Ie(be,o.__scopeSelect),[s,d]=t.useState(!1),l=L(n,a.onScrollButtonChange);return U(()=>{if(e.viewport&&e.isPositioned){let i=function(){const u=r.scrollHeight-r.clientHeight,v=Math.ceil(r.scrollTop)<u;d(v)};const r=e.viewport;return i(),r.addEventListener("scroll",i),()=>r.removeEventListener("scroll",i)}},[e.viewport,e.isPositioned]),s?c.jsx(Xe,{...o,ref:l,onAutoScroll:()=>{const{viewport:i,selectedItem:r}=e;i&&r&&(i.scrollTop=i.scrollTop+r.offsetHeight)}}):null});zt.displayName=be;var Xe=t.forwardRef((o,n)=>{const{__scopeSelect:e,onAutoScroll:a,...s}=o,d=G("SelectScrollButton",e),l=t.useRef(null),i=de(e),r=t.useCallback(()=>{l.current!==null&&(window.clearInterval(l.current),l.current=null)},[]);return t.useEffect(()=>()=>r(),[r]),U(()=>{var v;const u=i().find(b=>b.ref.current===document.activeElement);(v=u==null?void 0:u.ref.current)==null||v.scrollIntoView({block:"nearest"})},[i]),c.jsx(A.div,{"aria-hidden":!0,...s,ref:n,style:{flexShrink:0,...s.style},onPointerDown:N(s.onPointerDown,()=>{l.current===null&&(l.current=window.setInterval(a,50))}),onPointerMove:N(s.onPointerMove,()=>{var u;(u=d.onItemLeave)==null||u.call(d),l.current===null&&(l.current=window.setInterval(a,50))}),onPointerLeave:N(s.onPointerLeave,()=>{r()})})}),Yt="SelectSeparator",Ze=t.forwardRef((o,n)=>{const{__scopeSelect:e,...a}=o;return c.jsx(A.div,{"aria-hidden":!0,...a,ref:n})});Ze.displayName=Yt;var Ce="SelectArrow",qt=t.forwardRef((o,n)=>{const{__scopeSelect:e,...a}=o,s=ue(e),d=K(Ce,e),l=G(Ce,e);return d.open&&l.position==="popper"?c.jsx(bt,{...s,...a,ref:n}):null});qt.displayName=Ce;function Je(o){return o===""||o===void 0}var Qe=t.forwardRef((o,n)=>{const{value:e,...a}=o,s=t.useRef(null),d=L(n,s),l=Ct(e);return t.useEffect(()=>{const i=s.current,r=window.HTMLSelectElement.prototype,v=Object.getOwnPropertyDescriptor(r,"value").set;if(l!==e&&v){const b=new Event("change",{bubbles:!0});v.call(i,e),i.dispatchEvent(b)}},[l,e]),c.jsx(yt,{asChild:!0,children:c.jsx("select",{...a,ref:d,defaultValue:e})})});Qe.displayName="BubbleSelect";function et(o){const n=It(o),e=t.useRef(""),a=t.useRef(0),s=t.useCallback(l=>{const i=e.current+l;n(i),function r(u){e.current=u,window.clearTimeout(a.current),u!==""&&(a.current=window.setTimeout(()=>r(""),1e3))}(i)},[n]),d=t.useCallback(()=>{e.current="",window.clearTimeout(a.current)},[]);return t.useEffect(()=>()=>window.clearTimeout(a.current),[]),[e,s,d]}function tt(o,n,e){const s=n.length>1&&Array.from(n).every(u=>u===n[0])?n[0]:n,d=e?o.indexOf(e):-1;let l=Xt(o,Math.max(d,0));s.length===1&&(l=l.filter(u=>u!==e));const r=l.find(u=>u.textValue.toLowerCase().startsWith(s.toLowerCase()));return r!==e?r:void 0}function Xt(o,n){return o.map((e,a)=>o[(n+a)%o.length])}var Zt=Re,Jt=Me,Qt=Oe,eo=je,to=De,oo=Le,no=Be,ro=We,so=Ke,ao=$e,lo=ze,io=qe,co=Ze;const ot=t.createContext(null),uo=()=>{const o=t.useContext(ot);if(o===null)throw new Error("useSelectContext must be used within a SelectProvider");return o},nt=({children:o,size:n="base",...e})=>t.createElement(ot.Provider,{value:t.useMemo(()=>({size:n}),[n])},t.createElement(Zt,{...e},o));nt.displayName="Select";const rt=ro;rt.displayName="Select.Group";const st=Qt;st.displayName="Select.Value";const po=Nt({base:X("bg-ui-bg-field shadow-buttons-neutral transition-fg flex w-full select-none items-center justify-between rounded-md outline-none","data-[placeholder]:text-ui-fg-muted text-ui-fg-base","hover:bg-ui-bg-field-hover","focus-visible:shadow-borders-interactive-with-active data-[state=open]:!shadow-borders-interactive-with-active","aria-[invalid=true]:border-ui-border-error aria-[invalid=true]:shadow-borders-error","invalid:border-ui-border-error invalid:shadow-borders-error","disabled:!bg-ui-bg-disabled disabled:!text-ui-fg-disabled","group/trigger"),variants:{size:{base:"h-8 px-2 py-1.5 txt-compact-small",small:"h-7 px-2 py-1 txt-compact-small"}}}),at=t.forwardRef(({className:o,children:n,...e},a)=>{const{size:s}=uo();return t.createElement(Jt,{ref:a,className:X(po({size:s}),o),...e},n,t.createElement(eo,{asChild:!0},t.createElement(_t,{className:"text-ui-fg-muted group-disabled/trigger:text-ui-fg-disabled"})))});at.displayName="Select.Trigger";const lt=t.forwardRef(({className:o,children:n,position:e="popper",sideOffset:a=8,collisionPadding:s=24,...d},l)=>t.createElement(to,null,t.createElement(oo,{ref:l,className:X("bg-ui-bg-component text-ui-fg-base shadow-elevation-flyout relative max-h-[200px] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg","data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",{"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1":e==="popper"},o),position:e,sideOffset:a,collisionPadding:s,...d},t.createElement(no,{className:X("p-1",e==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")},n))));lt.displayName="Select.Content";const it=t.forwardRef(({className:o,...n},e)=>t.createElement(so,{ref:e,className:X("txt-compact-xsmall-plus text-ui-fg-muted px-2 py-1.5",o),...n}));it.displayName="Select.Label";const ct=t.forwardRef(({className:o,children:n,...e},a)=>t.createElement(ao,{ref:a,className:X("bg-ui-bg-component grid cursor-pointer grid-cols-[15px_1fr] gap-x-2 rounded-[4px] px-2 py-1.5 outline-none transition-colors txt-compact-small items-center","focus-visible:bg-ui-bg-component-hover","active:bg-ui-bg-component-pressed","data-[state=checked]:txt-compact-small-plus","disabled:text-ui-fg-disabled",o),...e},t.createElement("span",{className:"flex h-[15px] w-[15px] items-center justify-center"},t.createElement(io,{className:"flex items-center justify-center"},t.createElement(Rt,null))),t.createElement(lo,{className:"flex-1 truncate"},n)));ct.displayName="Select.Item";const dt=t.forwardRef(({className:o,...n},e)=>t.createElement(co,{ref:e,className:X("bg-ui-border-component -mx-1 my-1 h-0.5 border-t border-t-ui-border-menu-top border-b border-b-ui-border-menu-bot",o),...n}));dt.displayName="Select.Separator";const go=Object.assign(nt,{Group:rt,Value:st,Trigger:at,Content:lt,Label:it,Item:ct,Separator:dt});export{go as S};
