import{y as w,k as r,ay as D,o as C,b as q,w as a,p as i,q as l,$ as S,a0 as g,z as f,bo as U,bp as B,j as F}from"./index.814ba5dc.js";import{a as R,s as T}from"./requestURL.4ab77af1.js";import{u as z}from"./dailyCheckStore.fac530eb.js";import{V as n}from"./VCol.64655a44.js";import{V as v}from"./VTextField.4b3881bb.js";import{V as A}from"./VSelect.ad81fac4.js";import{V as _}from"./VBtn.15cc7225.js";import{V as E}from"./VRow.116d4872.js";import{V as N}from"./VForm.e0345dcf.js";import"./axios.364130a5.js";import"./index.c82ae7fd.js";import"./forwardRefs.54bb1675.js";import"./VList.3902500a.js";import"./VDivider.4f08e55f.js";import"./scopeId.490f9154.js";import"./VMenu.f86191f5.js";import"./VChip.bd7ca155.js";const $={__name:"index",setup(j){const V=[{title:"\u662F",value:!0},{title:"\u5426",value:!1}],y=r(),x=z(),t=r({credit:1,video:"",isMission:!1}),d=r([]),p=r(),h=B(),u=F();D(async()=>{await c()});async function c(){try{const o=await x.fetchDailyChecks();d.value=o.data.data,b()}catch(o){console.log(o)}}async function M(){var o;try{if(parseInt((o=t.value)==null?void 0:o.credit)<0)return alert("\u8ACB\u52FF\u8F38\u5165\u5C0F\u65BC0\u7684\u6578\u5B57");if(t.value.isMission&&!t.value.video)return alert("\u8ACB\u8F38\u5165\u5F71\u7247\u9023\u7D50");const e={...t.value,credit:parseInt(t.value.credit)};await R.put(`/${T(p.value.index)}`,e),alert("\u5DF2\u66F4\u65B0\u9023\u7E8C\u767B\u5165\u8CC7\u6599"),u.push({path:"/apps/daily-check/list"})}catch(e){console.log(e)}}function b(){var s,m;const o=(s=h.query)==null?void 0:s.id;if(!o)return u.push({path:"/apps/daily-check/list"});const e=(m=d.value)==null?void 0:m.find(I=>I.index==o);if(!e)return u.push({path:"/apps/daily-check/list"});p.value=e,t.value={...t.value,video:e==null?void 0:e.video,isMission:e==null?void 0:e.isMission,credit:e==null?void 0:e.credit}}function k(){c()}return(o,e)=>(C(),q(N,{ref_key:"form",ref:y,"lazy-validation":"",onSubmit:e[3]||(e[3]=U(()=>{},["prevent"]))},{default:a(()=>[i(E,null,{default:a(()=>[i(n,{cols:"12"},{default:a(()=>[i(v,{modelValue:l(t).credit,"onUpdate:modelValue":e[0]||(e[0]=s=>l(t).credit=s),label:"\u734E\u52F5\u7D05\u5229",type:"number",required:"",min:"0"},null,8,["modelValue"])]),_:1}),i(n,{cols:"12"},{default:a(()=>[i(A,{modelValue:l(t).isMission,"onUpdate:modelValue":e[1]||(e[1]=s=>l(t).isMission=s),items:V,label:"\u662F\u5426\u9700\u8981\u89C0\u770B\u5F71\u7247",name:"select-isMission",require:""},null,8,["modelValue"])]),_:1}),S(i(n,{cols:"12"},{default:a(()=>[i(v,{modelValue:l(t).video,"onUpdate:modelValue":e[2]||(e[2]=s=>l(t).video=s),label:"\u5F71\u7247\u9023\u7D50",type:"text",required:""},null,8,["modelValue"])]),_:1},512),[[g,l(t).isMission]]),i(n,{cols:"12",class:"d-flex gap-4"},{default:a(()=>[i(_,{type:"submit",onClick:M},{default:a(()=>[f(" \u66F4\u65B0 ")]),_:1}),i(_,{color:"secondary",variant:"tonal",onClick:k},{default:a(()=>[f(" \u5FA9\u539F\u8CC7\u6599 ")]),_:1})]),_:1})]),_:1})]),_:1},512))}},le=w($,[["__scopeId","data-v-0e061171"]]);export{le as default};
