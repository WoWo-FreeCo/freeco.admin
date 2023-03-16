import{k as i,ay as M,a6 as L,aH as Q,q as c,o as r,b as u,w as n,p as l,m as t,ba as h,bj as g,c as T,a as O,F as Y,$ as H,a0 as J,x as _,be as $,bf as K,bg as W,z as C,b7 as z,j as X,V as p}from"./index.814ba5dc.js";import{_ as Z}from"./DialogCloseBtn.7e778c05.js";import{_ as ee}from"./ConfirmDialog.65048213.js";import{a as te,D as le}from"./requestURL.4ab77af1.js";import{u as ae}from"./userStore.40020bd3.js";import{V as P}from"./VSpacer.32b7e6c3.js";import{V as B}from"./VTextField.4b3881bb.js";import{V as b}from"./VDivider.4f08e55f.js";import{V as oe}from"./VTable.e85ebe62.js";import{V as se}from"./VPagination.dd4f66aa.js";import{V as ne}from"./VCol.64655a44.js";import{V as U}from"./VBtn.15cc7225.js";import{V as ie}from"./VDialog.cba77d8d.js";import"./VMenu.f86191f5.js";import"./VList.3902500a.js";import"./axios.364130a5.js";import"./index.c82ae7fd.js";import"./forwardRefs.54bb1675.js";import"./scopeId.490f9154.js";const ce=t("div",{class:"me-3"},null,-1),re={class:"d-flex align-center flex-wrap gap-4"},de={class:"invoice-list-filter"},ue=t("thead",{class:"text-uppercase"},[t("tr",null,[t("th",{scope:"col",class:"text-center"}," \u540D\u7A31 "),t("th",{scope:"col",class:"text-center"}," \u7528\u6236\u7B49\u7D1A "),t("th",{scope:"col",class:"text-center"}," Email "),t("th",{scope:"col",class:"text-center"}," \u7D05\u5229\u9EDE\u6578 "),t("th",{scope:"col",class:"text-center"}," FB\u7D81\u5B9A "),t("th",{scope:"col",class:"text-center"}," IG\u7D81\u5B9A "),t("th",{scope:"col",class:"text-center"}," YT\u7D81\u5B9A ")])],-1),me={class:"text-center"},pe={class:"text-center"},fe={class:"text-center"},Ve={class:"text-center"},_e={class:"text-center"},ve={class:"text-center"},xe={class:"text-center"};const he=t("tr",null,[t("td",{colspan:"8",class:"text-center text-body-1"}," No data available ")],-1),ge=[he],be={class:"text-sm text-disabled"},He={__name:"index",setup(ye){const S=ae(),f=i(""),I=i(10),d=i(1),y=i(1),E=i(0),m=i([]),k=i([]),v=i(!1),w=i(),V=i(!1);i(0);const F=X();M(async()=>{await D()});const N=L(()=>{var a;return f.value?(a=m.value)==null?void 0:a.filter(e=>{var x;return(x=e==null?void 0:e.nickname)==null?void 0:x.toLowerCase().includes(f.value.toLowerCase())}):m.value});Q(()=>{d.value>y.value&&(d.value=y.value)});async function D(){S.fetchUsers({}).then(a=>{m.value=a.data.data}).catch(a=>{console.log(a)})}const A=L(()=>{const a=m.value.length?(d.value-1)*I.value+1:0,e=m.value.length+(d.value-1)*I.value;return`Showing ${a} to ${e} of ${E.value} entries`});function we(a){w.value=a,v.value=!0}function Ce(a){F.push({path:"/apps/product/edit",query:{id:a.id}})}async function R(a){if(a)try{console.log(w.value),await te.delete(`/${le(w.value.id)}`),D()}catch(e){console.log(e)}}function j(a){switch(a){case"SVIP":return"SVIP";case"VIP":return"VIP";default:return"\u4E00\u822C\u6703\u54E1"}}return(a,e)=>{const x=ee,q=Z;return c(N)?(r(),u($,{key:0,id:"user-list"},{default:n(()=>[l(g,{class:"d-flex align-center flex-wrap gap-4"},{default:n(()=>[ce,l(P),t("div",re,[t("div",de,[l(B,{modelValue:c(f),"onUpdate:modelValue":e[0]||(e[0]=s=>h(f)?f.value=s:null),style:{width:"140px"},placeholder:"\u641C\u5C0B\u7528\u6236\u540D\u7A31",density:"compact"},null,8,["modelValue"])])])]),_:1}),l(b),l(oe,{class:"text-no-wrap invoice-list-table"},{default:n(()=>{var s;return[ue,t("tbody",null,[(r(!0),T(Y,null,O(c(N),o=>(r(),T("tr",{key:o.id,style:{height:"3.75rem"}},[t("td",me,_(o==null?void 0:o.nickname),1),t("td",pe,_(j(o==null?void 0:o.memberLevel)),1),t("td",fe,_(o.email),1),t("td",Ve,_(o==null?void 0:o.rewardCredit),1),t("td",_e,[o!=null&&o.FacebookGroupActivated?(r(),u(p,{key:0,color:"success",size:22,icon:"tabler-circle-check"})):(r(),u(p,{key:1,color:"error",size:22,icon:"tabler-circle-x"}))]),t("td",ve,[o!=null&&o.IGFollowActivated?(r(),u(p,{key:0,color:"success",size:22,icon:"tabler-circle-check"})):(r(),u(p,{key:1,color:"error",size:22,icon:"tabler-circle-x"}))]),t("td",xe,[o!=null&&o.YouTubeChannelActivated?(r(),u(p,{key:0,color:"success",size:22,icon:"tabler-circle-check"})):(r(),u(p,{key:1,color:"error",size:22,icon:"tabler-circle-x"}))]),z("",!0)]))),128))]),H(t("tfoot",null,ge,512),[[J,!((s=c(m))!=null&&s.length)]])]}),_:1}),l(b),l(g,{class:"d-flex align-center flex-wrap gap-4 py-3"},{default:n(()=>[t("span",be,_(c(A)),1),l(P),l(se,{modelValue:c(d),"onUpdate:modelValue":e[3]||(e[3]=s=>h(d)?d.value=s:null),size:"small","total-visible":5,length:c(y),onNext:e[4]||(e[4]=s=>k.value=[]),onPrev:e[5]||(e[5]=s=>k.value=[])},null,8,["modelValue","length"])]),_:1}),l(x,{isDialogVisible:c(v),"onUpdate:isDialogVisible":e[6]||(e[6]=s=>h(v)?v.value=s:null),"confirmation-msg":"\u78BA\u5B9A\u8981\u522A\u9664\u9078\u64C7\u7684\u5546\u54C1\uFF1F",onConfirm:R},null,8,["isDialogVisible"]),l(ie,{modelValue:c(V),"onUpdate:modelValue":e[10]||(e[10]=s=>h(V)?V.value=s:null),scrollable:"","max-width":"320"},{default:n(()=>[l(q,{onClick:e[7]||(e[7]=s=>V.value=!c(V))}),l($,null,{default:n(()=>[l(K,{class:"pb-5"},{default:n(()=>[l(W,null,{default:n(()=>[C("\u4FEE\u6539\u6703\u54E1\u7D05\u5229\u9EDE\u6578")]),_:1})]),_:1}),l(b),l(g,{style:{height:"200px"}},{default:n(()=>[l(ne,null,{default:n(()=>[l(B,{modelValue:a.addInventoryQuantity,"onUpdate:modelValue":e[8]||(e[8]=s=>a.addInventoryQuantity=s),label:"\u6578\u91CF",required:"",min:"1",type:"number"},null,8,["modelValue"])]),_:1})]),_:1}),l(b),l(g,{class:"d-flex justify-end flex-wrap gap-3 pt-5"},{default:n(()=>[l(U,{color:"secondary",variant:"tonal",onClick:e[9]||(e[9]=s=>a.isInvDialogVisible=!1)},{default:n(()=>[C(" \u53D6\u6D88 ")]),_:1}),l(U,{onClick:a.confirmAddInventory},{default:n(()=>[C(" \u78BA\u5B9A ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})):z("",!0)}}};export{He as default};