import{y as h,k as l,ay as k,o as I,b as B,w as s,p as a,q as i,z as m,bo as C,bp as E,j as R}from"./index.81a573ca.js";import{_ as S}from"./RichTextEditor.2ccb2d51.js";import{a as T,U}from"./requestURL.2ee67e65.js";import{u as W}from"./webpageStore.73590b75.js";import{V as f}from"./VCol.398b018c.js";import{V as q}from"./VTextField.f6361a39.js";import{V as _}from"./VBtn.b672f002.js";import{V as F}from"./VRow.67af9cc4.js";import{V as z}from"./VForm.5bd79259.js";import"./axios.364130a5.js";import"./index.d28f26f2.js";import"./forwardRefs.54bb1675.js";const A={__name:"index",setup(D){const V=l(),y=W(),o=l({name:"",content:""}),p=l([]),c=l(),v=E(),u=R();k(async()=>{await d()});async function d(){try{const e=await y.fetchWebpages();p.value=e.data.content,b()}catch(e){console.log(e)}}async function x(){try{if(!o.value.content)return alert("\u8ACB\u8F38\u5165\u6587\u5B57\u5167\u5BB9");const e={...o.value};await T.put(`/${U(c.value.id)}`,e),alert("\u5DF2\u66F4\u65B0\u9801\u5C3E\u5167\u5BB9"),u.push({path:"/apps/webpage/list"})}catch(e){console.log(e)}}function b(){var r,n;const e=(r=v.query)==null?void 0:r.id;if(!e)return u.push({path:"/apps/webpage/list"});const t=(n=p.value)==null?void 0:n.find(w=>w.id==e);if(!t)return u.push({path:"/apps/webpage/list"});c.value=t,o.value={...o.value,name:t==null?void 0:t.name,content:t==null?void 0:t.content}}function g(){d()}return(e,t)=>{const r=S;return I(),B(z,{ref_key:"form",ref:V,"lazy-validation":"",onSubmit:t[2]||(t[2]=C(()=>{},["prevent"]))},{default:s(()=>[a(F,null,{default:s(()=>[a(f,{cols:"12"},{default:s(()=>[a(q,{modelValue:i(o).name,"onUpdate:modelValue":t[0]||(t[0]=n=>i(o).name=n),label:"\u9801\u5C3E\u540D\u7A31",required:"",disabled:""},null,8,["modelValue"])]),_:1}),a(r,{modelValue:i(o).content,"onUpdate:modelValue":t[1]||(t[1]=n=>i(o).content=n),class:"editor","max-limit":999999},null,8,["modelValue"]),a(f,{cols:"12",class:"d-flex gap-4"},{default:s(()=>[a(_,{type:"submit",onClick:x},{default:s(()=>[m(" \u66F4\u65B0 ")]),_:1}),a(_,{color:"secondary",variant:"tonal",onClick:g},{default:s(()=>[m(" \u5FA9\u539F\u8CC7\u6599 ")]),_:1})]),_:1})]),_:1})]),_:1},512)}}},Y=h(A,[["__scopeId","data-v-f6d1f410"]]);export{Y as default};
