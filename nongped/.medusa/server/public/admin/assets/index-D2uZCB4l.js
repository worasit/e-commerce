import{r as n,j as x}from"./index-CJZ0utKv.js";import{M as I,u as P,P as L,i as $,a as b,L as A}from"./proxy-A1DgzL5D.js";class S extends n.Component{getSnapshotBeforeUpdate(r){const t=this.props.childRef.current;if(t&&r.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=t.offsetHeight||0,s.width=t.offsetWidth||0,s.top=t.offsetTop,s.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function B({children:o,isPresent:r}){const t=n.useId(),s=n.useRef(null),p=n.useRef({width:0,height:0,top:0,left:0}),{nonce:C}=n.useContext(I);return n.useInsertionEffect(()=>{const{width:d,height:e,top:a,left:f}=p.current;if(r||!s.current||!d||!e)return;s.current.dataset.motionPopId=t;const c=document.createElement("style");return C&&(c.nonce=C),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${e}px !important;
            top: ${a}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[r]),x.jsx(S,{isPresent:r,childRef:s,sizeRef:p,children:n.cloneElement(o,{ref:s})})}const D=({children:o,initial:r,isPresent:t,onExitComplete:s,custom:p,presenceAffectsLayout:C,mode:d})=>{const e=P(K),a=n.useId(),f=n.useCallback(l=>{e.set(l,!0);for(const g of e.values())if(!g)return;s&&s()},[e,s]),c=n.useMemo(()=>({id:a,initial:r,isPresent:t,custom:p,onExitComplete:f,register:l=>(e.set(l,!1),()=>e.delete(l))}),C?[Math.random(),f]:[t,f]);return n.useMemo(()=>{e.forEach((l,g)=>e.set(g,!1))},[t]),n.useEffect(()=>{!t&&!e.size&&s&&s()},[t]),d==="popLayout"&&(o=x.jsx(B,{isPresent:t,children:o})),x.jsx(L.Provider,{value:c,children:o})};function K(){return new Map}const w=o=>o.key||"";function j(o){const r=[];return n.Children.forEach(o,t=>{n.isValidElement(t)&&r.push(t)}),r}const F=({children:o,exitBeforeEnter:r,custom:t,initial:s=!0,onExitComplete:p,presenceAffectsLayout:C=!0,mode:d="sync"})=>{$(!r,"Replace exitBeforeEnter with mode='wait'");const e=n.useMemo(()=>j(o),[o]),a=e.map(w),f=n.useRef(!0),c=n.useRef(e),l=P(()=>new Map),[g,z]=n.useState(e),[h,v]=n.useState(e);b(()=>{f.current=!1,c.current=e;for(let u=0;u<h.length;u++){const i=w(h[u]);a.includes(i)?l.delete(i):l.get(i)!==!0&&l.set(i,!1)}},[h,a.length,a.join("-")]);const y=[];if(e!==g){let u=[...e];for(let i=0;i<h.length;i++){const m=h[i],R=w(m);a.includes(R)||(u.splice(i,0,m),y.push(m))}d==="wait"&&y.length&&(u=y),v(j(u)),z(e);return}d==="wait"&&h.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);const{forceRender:E}=n.useContext(A);return x.jsx(x.Fragment,{children:h.map(u=>{const i=w(u),m=e===h||a.includes(i),R=()=>{if(l.has(i))l.set(i,!0);else return;let M=!0;l.forEach(k=>{k||(M=!1)}),M&&(E==null||E(),v(c.current),p&&p())};return x.jsx(D,{isPresent:m,initial:!f.current||s?void 0:!1,custom:m?void 0:t,presenceAffectsLayout:C,mode:d,onExitComplete:m?void 0:R,children:u},i)})})};export{F as A};
