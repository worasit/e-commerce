import{bm as z,bH as J,bI as M,aD as V,r as k,bJ as D,bK as I,bb as U,bL as X}from"./index-CJZ0utKv.js";var Y={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};const Z=z(Y);var _=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function B(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(Z[n[1]]||e.charAt(e.length-2)==="/")&&(t.voidElement=!0),t.name.startsWith("!--"))){var o=e.indexOf("-->");return{type:"comment",comment:o!==-1?e.slice(4,o):""}}for(var f=new RegExp(_),s=null;(s=f.exec(e))!==null;)if(s[0].trim())if(s[1]){var l=s[1].trim(),p=[l,""];l.indexOf("=")>-1&&(p=l.split("=")),t.attrs[p[0]]=p[1],f.lastIndex--}else s[2]&&(t.attrs[s[2]]=s[3].trim().substring(1,s[3].length-1));return t}var q=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,G=/^\s*$/,Q=Object.create(null);function L(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(n){var o=[];for(var f in n)o.push(f+'="'+n[f]+'"');return o.length?" "+o.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(L,"")+"</"+t.name+">";case"comment":return e+"<!--"+t.comment+"-->"}}var R={parse:function(e,t){t||(t={}),t.components||(t.components=Q);var n,o=[],f=[],s=-1,l=!1;if(e.indexOf("<")!==0){var p=e.indexOf("<");o.push({type:"text",content:p===-1?e:e.substring(0,p)})}return e.replace(q,function(m,u){if(l){if(m!=="</"+n.name+">")return;l=!1}var b,j=m.charAt(1)!=="/",C=m.startsWith("<!--"),g=u+m.length,x=e.charAt(g);if(C){var h=B(m);return s<0?(o.push(h),o):((b=f[s]).children.push(h),o)}if(j&&(s++,(n=B(m)).type==="tag"&&t.components[n.name]&&(n.type="component",l=!0),n.voidElement||l||!x||x==="<"||n.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),s===0&&o.push(n),(b=f[s-1])&&b.children.push(n),f[s]=n),(!j||n.voidElement)&&(s>-1&&(n.voidElement||n.name===m.slice(2,-1))&&(s--,n=s===-1?o:f[s]),!l&&x!=="<"&&x)){b=s===-1?o:f[s].children;var c=e.indexOf("<",g),i=e.slice(g,c===-1?void 0:c);G.test(i)&&(i=" "),(c>-1&&s+b.length>=0||i!==" ")&&b.push({type:"text",content:i})}}),o},stringify:function(e){return e.reduce(function(t,n){return t+L("",n)},"")}};function H(e,t){if(!e)return!1;const n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function S(e){if(!e)return[];const t=e.props?e.props.children:e.children;return e.props&&e.props.i18nIsDynamicList?P(t):t}function ee(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(t=>k.isValidElement(t))}function P(e){return Array.isArray(e)?e:[e]}function te(e,t){const n={...t};return n.props=Object.assign(e.props,t.props),n}function W(e,t){if(!e)return"";let n="";const o=P(e),f=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return o.forEach((s,l)=>{if(typeof s=="string")n+=`${s}`;else if(k.isValidElement(s)){const p=Object.keys(s.props).length,m=f.indexOf(s.type)>-1,u=s.props.children;if(!u&&m&&p===0)n+=`<${s.type}/>`;else if(!u&&(!m||p!==0))n+=`<${l}></${l}>`;else if(s.props.i18nIsDynamicList)n+=`<${l}></${l}>`;else if(m&&p===1&&typeof u=="string")n+=`<${s.type}>${u}</${s.type}>`;else{const b=W(u,t);n+=`<${l}>${b}</${l}>`}}else if(s===null)D("Trans: the passed in value is invalid - seems you passed in a null child.");else if(typeof s=="object"){const{format:p,...m}=s,u=Object.keys(m);if(u.length===1){const b=p?`${u[0]}, ${p}`:u[0];n+=`{{${b}}}`}else D("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",s)}else D("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",s)}),n}function ne(e,t,n,o,f,s){if(t==="")return[];const l=o.transKeepBasicHtmlNodesFor||[],p=t&&new RegExp(l.map(c=>`<${c}`).join("|")).test(t);if(!e&&!p&&!s)return[t];const m={};function u(c){P(c).forEach(a=>{typeof a!="string"&&(H(a)?u(S(a)):typeof a=="object"&&!k.isValidElement(a)&&Object.assign(m,a))})}u(e);const b=R.parse(`<0>${t}</0>`),j={...m,...f};function C(c,i,a){const v=S(c),O=x(v,i.children,a);return ee(v)&&O.length===0||c.props&&c.props.i18nIsDynamicList?v:O}function g(c,i,a,v,O){c.dummy?(c.children=i,a.push(k.cloneElement(c,{key:v},O?void 0:i))):a.push(...k.Children.map([c],y=>{const r={...y.props};return delete r.i18nIsDynamicList,V.createElement(y.type,U({},r,{key:v,ref:y.ref},O?{}:{children:i}))}))}function x(c,i,a){const v=P(c);return P(i).reduce((y,r,A)=>{const N=r.children&&r.children[0]&&r.children[0].content&&n.services.interpolator.interpolate(r.children[0].content,j,n.language);if(r.type==="tag"){let $=v[parseInt(r.name,10)];a.length===1&&!$&&($=a[0][r.name]),$||($={});const d=Object.keys(r.attrs).length!==0?te({props:r.attrs},$):$,w=k.isValidElement(d),T=w&&H(r,!0)&&!r.voidElement,F=p&&typeof d=="object"&&d.dummy&&!w,K=typeof e=="object"&&e!==null&&Object.hasOwnProperty.call(e,r.name);if(typeof d=="string"){const E=n.services.interpolator.interpolate(d,j,n.language);y.push(E)}else if(H(d)||T){const E=C(d,r,a);g(d,E,y,A)}else if(F){const E=x(v,r.children,a);g(d,E,y,A)}else if(Number.isNaN(parseFloat(r.name)))if(K){const E=C(d,r,a);g(d,E,y,A,r.voidElement)}else if(o.transSupportBasicHtmlNodes&&l.indexOf(r.name)>-1)if(r.voidElement)y.push(k.createElement(r.name,{key:`${r.name}-${A}`}));else{const E=x(v,r.children,a);y.push(k.createElement(r.name,{key:`${r.name}-${A}`},E))}else if(r.voidElement)y.push(`<${r.name} />`);else{const E=x(v,r.children,a);y.push(`<${r.name}>${E}</${r.name}>`)}else if(typeof d=="object"&&!w){const E=r.children[0]?N:null;E&&y.push(E)}else g(d,N,y,A,r.children.length!==1||!N)}else if(r.type==="text"){const $=o.transWrapTextNodes,d=s?o.unescape(n.services.interpolator.interpolate(r.content,j,n.language)):n.services.interpolator.interpolate(r.content,j,n.language);$?y.push(k.createElement($,{key:`${r.name}-${A}`},d)):y.push(d)}return y},[])}const h=x([{dummy:!0,children:e||[]}],b,P(e||[]));return S(h[0])}function se(e){let{children:t,count:n,parent:o,i18nKey:f,context:s,tOptions:l={},values:p,defaults:m,components:u,ns:b,i18n:j,t:C,shouldUnescape:g,...x}=e;const h=j||I();if(!h)return J("You will need to pass in an i18next instance by using i18nextReactModule"),t;const c=C||h.t.bind(h)||(T=>T);s&&(l.context=s);const i={...M(),...h.options&&h.options.react};let a=b||c.ns||h.options&&h.options.defaultNS;a=typeof a=="string"?[a]:a||["translation"];const v=W(t,i),O=m||v||i.transEmptyNodeValue||f,{hashTransKey:y}=i,r=f||(y?y(v||O):v||O);h.options&&h.options.interpolation&&h.options.interpolation.defaultVariables&&(p=p&&Object.keys(p).length>0?{...p,...h.options.interpolation.defaultVariables}:{...h.options.interpolation.defaultVariables});const A=p?l.interpolation:{interpolation:{...l.interpolation,prefix:"#$?",suffix:"?$#"}},N={...l,count:n,...p,...A,defaultValue:O,ns:a},$=r?c(r,N):O;u&&Object.keys(u).forEach(T=>{const F=u[T];if(typeof F.type=="function"||!F.props||!F.props.children||$.indexOf(`${T}/>`)<0&&$.indexOf(`${T} />`)<0)return;function K(){return V.createElement(V.Fragment,null,F)}u[T]=V.createElement(K,null)});const d=ne(u||t,$,h,i,N,g),w=o!==void 0?o:i.defaultTransParent;return w?k.createElement(w,x,d):d}function ae(e){let{children:t,count:n,parent:o,i18nKey:f,context:s,tOptions:l={},values:p,defaults:m,components:u,ns:b,i18n:j,t:C,shouldUnescape:g,...x}=e;const{i18n:h,defaultNS:c}=k.useContext(X)||{},i=j||h||I(),a=C||i&&i.t.bind(i);return se({children:t,count:n,parent:o,i18nKey:f,context:s,tOptions:l,values:p,defaults:m,components:u,ns:b||a&&a.ns||c||i&&i.options&&i.options.defaultNS,i18n:i,t:C,shouldUnescape:g,...x})}export{ae as T};
