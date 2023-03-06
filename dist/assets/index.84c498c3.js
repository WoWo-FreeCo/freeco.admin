import{k as n,aM as O,a6 as C,ay as j,q as i,o as v,b as q,w as l,p as e,m as a,z as _,ba as g,bj as D,c as k,a as A,F as G,$ as Q,a0 as Y,x as V,be as H,b7 as J,j as K,V as x}from"./index.765b4f7c.js";import{_ as W}from"./ConfirmDialog.ac9655dc.js";import{a as X,g as Z}from"./requestURL.e234a58b.js";import{u as ee}from"./prodStore.7411be82.js";import{V as I}from"./VBtn.bed821b9.js";import{V as $}from"./VSpacer.52c5364c.js";import{V as te}from"./VTextField.d4c5c89c.js";import{V as P}from"./scopeId.fa70d95f.js";import{V as ae,a as oe}from"./VTable.cc1447c2.js";import{V as le}from"./VMenu.a10eb0bc.js";import{V as se,a as T,b as L}from"./VList.cee23a0a.js";import"./VDialog.6034821f.js";import"./forwardRefs.54bb1675.js";import"./axios.364130a5.js";import"./index.5e39d728.js";const ne={class:"me-3"},ie={class:"d-flex align-center flex-wrap gap-4"},re={class:"invoice-list-filter"},ce=a("thead",{class:"text-uppercase"},[a("tr",null,[a("th",{scope:"col"}," #ID "),a("th",{scope:"col",class:"text-center"}," \u5206\u985E\u540D\u7A31 "),a("th",{scope:"col",class:"text-center"}," \u64CD\u4F5C ")])],-1),de={class:"prod-id"},ue={class:"text-center prod-name"},pe={style:{width:"4rem"}},me=a("tr",null,[a("td",{colspan:"8",class:"text-center text-body-1"}," No data available ")],-1),fe=[me],ve={class:"text-sm text-disabled"},ze={__name:"index",setup(_e){const z=ee(),d=n("");n();const h=n(10),r=n(1),m=n(1),E=n(0),c=n([]),y=n([]),p=n(!1),f=n(),N=K();O(async()=>{await b()});async function b(){z.fetchProductCategory({}).then(o=>{c.value=o.data.data,console.log(c.value)}).catch(o=>{console.log(o)})}const w=C(()=>{var o;return d.value?(o=c.value)==null?void 0:o.filter(t=>t==null?void 0:t.name.toLowerCase().includes(d.value.toLowerCase())):c.value});j(()=>{r.value>m.value&&(r.value=m.value)});const S=C(()=>{const o=c.value.length?(r.value-1)*h.value+1:0,t=c.value.length+(r.value-1)*h.value;return`Showing ${o} to ${t} of ${E.value} entries`});function B(o){f.value=o,p.value=!0}function R(o){N.push({path:"/apps/product-category/edit",query:{id:o.id}})}async function U(o){if(o)try{console.log(f.value),await X.delete(`/${Z(f.value.id)}`),b()}catch(t){console.log(t)}}return(o,t)=>{const F=W;return i(w)?(v(),q(H,{key:0,id:"product-list"},{default:l(()=>[e(D,{class:"d-flex align-center flex-wrap gap-4"},{default:l(()=>[a("div",ne,[e(I,{"prepend-icon":"tabler-plus",to:{name:"apps-product-category-add"}},{default:l(()=>[_(" \u65B0\u5EFA\u5546\u54C1\u5206\u985E ")]),_:1})]),e($),a("div",ie,[a("div",re,[e(te,{modelValue:i(d),"onUpdate:modelValue":t[0]||(t[0]=s=>g(d)?d.value=s:null),style:{width:"140px"},placeholder:"\u641C\u5C0B\u5546\u54C1",density:"compact"},null,8,["modelValue"])])])]),_:1}),e(P),e(ae,{class:"text-no-wrap invoice-list-table"},{default:l(()=>{var s;return[ce,a("tbody",null,[(v(!0),k(G,null,A(i(w),u=>(v(),k("tr",{key:u.id,style:{height:"3.75rem"}},[a("td",de,[a("span",null,"#"+V(u.id),1)]),a("td",ue,V(u.name),1),a("td",pe,[e(I,{icon:"",variant:"text",color:"primary",size:"x-small"},{default:l(()=>[e(x,{size:22,icon:"tabler-dots-vertical"}),e(le,{activator:"parent"},{default:l(()=>[e(se,null,{default:l(()=>[e(T,{value:"edit",onClick:M=>R(u)},{prepend:l(()=>[e(x,{color:"success",size:"24",class:"me-3",icon:"tabler-pencil"})]),default:l(()=>[e(L,null,{default:l(()=>[_("\u7DE8\u8F2F")]),_:1})]),_:2},1032,["onClick"]),e(T,{value:"delete",onClick:M=>B(u)},{prepend:l(()=>[e(x,{color:"error",size:"24",class:"me-3",icon:"tabler-trash"})]),default:l(()=>[e(L,null,{default:l(()=>[_("\u522A\u9664")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))]),Q(a("tfoot",null,fe,512),[[Y,!((s=i(c))!=null&&s.length)]])]}),_:1}),e(P),e(D,{class:"d-flex align-center flex-wrap gap-4 py-3"},{default:l(()=>[a("span",ve,V(i(S)),1),e($),e(oe,{modelValue:i(r),"onUpdate:modelValue":t[1]||(t[1]=s=>g(r)?r.value=s:null),size:"small","total-visible":5,length:i(m),onNext:t[2]||(t[2]=s=>y.value=[]),onPrev:t[3]||(t[3]=s=>y.value=[])},null,8,["modelValue","length"])]),_:1}),e(F,{isDialogVisible:i(p),"onUpdate:isDialogVisible":t[4]||(t[4]=s=>g(p)?p.value=s:null),"confirmation-msg":"\u78BA\u5B9A\u8981\u522A\u9664\u9078\u64C7\u7684\u5546\u54C1\u5206\u985E\uFF1F",onConfirm:U},null,8,["isDialogVisible"])]),_:1})):J("",!0)}}};export{ze as default};
