import{b as c,u as i,aH as u,t as a}from"./index-CJZ0utKv.js";import{u as l}from"./use-prompt-Bi7FceQH.js";var f=t=>{const{t:e}=c(),s=i(),o=l(),{mutateAsync:r}=u(t.id);return async()=>{await o({title:e("general.areYouSure"),description:e("categories.delete.confirmation",{name:t.name}),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await r(void 0,{onSuccess:()=>{a.success(e("categories.delete.successToast",{name:t.name})),s("/categories",{replace:!0})},onError:n=>{a.error(n.message)}})}};export{f as u};