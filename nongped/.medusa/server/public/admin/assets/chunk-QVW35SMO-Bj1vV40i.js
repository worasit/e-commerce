import{b as a,eV as n,t}from"./index-CJZ0utKv.js";import{u}from"./use-prompt-Bi7FceQH.js";var m=s=>{const{t:e}=a(),o=u(),{mutateAsync:r}=n(s);return async()=>{await o({title:e("general.areYouSure"),description:e("productTypes.delete.confirmation"),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await r(void 0,{onSuccess:()=>{t.success(e("productTypes.delete.successToast"))},onError:c=>{t.error(c.message)}})}};export{m as u};
