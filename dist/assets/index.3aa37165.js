import{y as x,k as n,C as I,o as f,b as _,w as o,p as a,q as i,ba as k,D as C,b7 as P,z as V,bo as R,bD as T}from"./index.81a573ca.js";import{P as D,a as F,u as N}from"./requestURL.2ee67e65.js";import{V as c}from"./VCol.398b018c.js";import{V as O}from"./VFileInput.8b81b37a.js";import{V as S}from"./VTextField.f6361a39.js";import{V as b}from"./VBtn.b672f002.js";import{V as U}from"./VRow.67af9cc4.js";import{V as $}from"./VForm.5bd79259.js";import"./axios.364130a5.js";import"./forwardRefs.54bb1675.js";import"./VChip.9fb5519d.js";import"./index.d28f26f2.js";const B={__name:"index",setup(z){const m="https://api.wowo.tw",v=n(),t=n(),w=n(!0),r=n(""),p={img:"",href:""},s=n(p);I(t,async l=>{w.value=!t.value[0];try{const e=new FormData;e.append("image",t.value[0]);const d=await(await fetch(`${m}/${D}`,{method:"POST",body:e})).json();console.log("\u5716\u7247 response: ",d),r.value=`${m}/${d.filenames[0]}`}catch(e){console.log(e)}});async function g(){try{if(!r.value)return alert("\u8ACB\u4E0A\u50B3\u6A6B\u5E45\u5716\u7247");if(!s.value.href)return alert("\u8ACB\u4E0A\u50B3\u6A6B\u5E45\u5B50\u9801\u9762\u8DEF\u5F91");const l={...s.value,img:r.value},e=await F.post(`/${N}`,l);alert("\u5DF2\u5EFA\u7ACB\u6A6B\u5E45"),T.push({path:"/apps/banner/list"})}catch(l){console.log(l)}}function y(){r.value=""}function h(){s.value={...p}}return(l,e)=>(f(),_($,{ref_key:"form",ref:v,"lazy-validation":"",onSubmit:R(g,["prevent"])},{default:o(()=>[a(U,null,{default:o(()=>[a(c,{cols:"12",class:"gap-4"},{default:o(()=>[a(O,{modelValue:i(t),"onUpdate:modelValue":e[0]||(e[0]=u=>k(t)?t.value=u:null),accept:"image/*","show-size":"",counter:"",color:"primary",label:"\u4E0A\u50B3\u6A6B\u5E45\u5716\u7247","onClick:clear":y},null,8,["modelValue"]),i(r)?(f(),_(C,{key:0,width:"200",src:i(r)},null,8,["src"])):P("",!0)]),_:1}),a(c,{cols:"12"},{default:o(()=>[a(S,{modelValue:i(s).href,"onUpdate:modelValue":e[1]||(e[1]=u=>i(s).href=u),label:"\u6A6B\u5E45\u5B50\u9801\u9762\u8DEF\u5F91",required:""},null,8,["modelValue"])]),_:1}),a(c,{cols:"12",class:"d-flex gap-4"},{default:o(()=>[a(b,{type:"submit"},{default:o(()=>[V(" \u5EFA\u7ACB ")]),_:1}),a(b,{color:"secondary",variant:"tonal",onClick:h},{default:o(()=>[V(" \u6E05\u9664 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},X=x(B,[["__scopeId","data-v-72bdb476"]]);export{X as default};
