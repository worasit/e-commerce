import{b as n,u,eQ as i,t as s}from"./index-CJZ0utKv.js";import{u as l}from"./use-prompt-Bi7FceQH.js";var v=({productTag:t})=>{const{t:e}=n(),a=l(),o=u(),{mutateAsync:r}=i(t.id);return async()=>{await a({title:e("general.areYouSure"),description:e("productTags.delete.confirmation",{value:t.value}),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await r(void 0,{onSuccess:()=>{s.success(e("productTags.delete.successToast",{value:t.value})),o("/settings/product-tags",{replace:!0})},onError:c=>{s.error(c.message)}})}};export{v as u};
