import{k as i,ay as W,a6 as S,aH as X,q as r,o as I,b as Z,w as s,p as e,m as t,z as m,ba as V,bj as g,c as z,a as ee,F as te,$ as le,a0 as ae,x as c,be as E,bf as se,bg as ne,b7 as oe,j as ie,E as re,D as ce,V as h}from"./index.814ba5dc.js";import{_ as de}from"./DialogCloseBtn.7e778c05.js";import{_ as ue}from"./ConfirmDialog.65048213.js";import{a as U,D as me,l as fe}from"./requestURL.4ab77af1.js";import{u as ve}from"./prodStore.82a1e4b7.js";import{V as y}from"./VBtn.15cc7225.js";import{V as B}from"./VSpacer.32b7e6c3.js";import{V as O}from"./VTextField.4b3881bb.js";import{V as b}from"./VDivider.4f08e55f.js";import{V as _e}from"./VTable.e85ebe62.js";import{V as pe}from"./VPagination.dd4f66aa.js";import{V as Ve}from"./VCol.64655a44.js";import{V as xe}from"./VDialog.cba77d8d.js";import{V as ge}from"./VMenu.f86191f5.js";import{V as he,a as D,b as $}from"./VList.3902500a.js";import"./axios.364130a5.js";import"./index.c82ae7fd.js";import"./forwardRefs.54bb1675.js";import"./scopeId.490f9154.js";const ye={class:"me-3"},be={class:"d-flex align-center flex-wrap gap-4"},Ce={class:"invoice-list-filter"},we=t("thead",{class:"text-uppercase"},[t("tr",null,[t("th",{scope:"col"}," #ID "),t("th",{scope:"col",class:"text-center"}," \u5546\u54C1\u5716 "),t("th",{scope:"col",class:"text-center"}," \u904B\u9001\u985E\u578B "),t("th",{scope:"col",class:"text-center"}," \u5546\u54C1\u540D\u7A31 "),t("th",{scope:"col",class:"text-center"}," \u5B9A\u50F9 "),t("th",{scope:"col",class:"text-center"}," \u6703\u54E1\u50F9 "),t("th",{scope:"col",class:"text-center"}," VIP\u50F9 "),t("th",{scope:"col",class:"text-center"}," SVIP\u50F9 "),t("th",{scope:"col",class:"text-center"}," \u5EAB\u5B58 "),t("th",{scope:"col",class:"text-center"}," \u64CD\u4F5C ")])],-1),Ie={class:"prod-id"},De={class:"prod-img"},$e={class:"text-center prod-name"},Pe={class:"text-center prod-name"},ke={class:"text-center"},Te={class:"text-center"},Ne={class:"text-center"},Le={class:"text-center"},Se={class:"text-center"},ze={style:{width:"4rem"}},Ee=t("tr",null,[t("td",{colspan:"8",class:"text-center text-body-1"}," No data available ")],-1),Ue=[Ee],Be={class:"text-sm text-disabled"},st={__name:"index",setup(Oe){const R=ve(),v=i("");i();const P=i(10),u=i(1),C=i(1),q=i(0),f=i([]),k=i([]),x=i(!1),_=i(),j=ie(),p=i(1),d=i(!1);W(async()=>{await w()});const T=S(()=>{var n;return v.value?(n=f.value)==null?void 0:n.filter(a=>a==null?void 0:a.name.toLowerCase().includes(v.value.toLowerCase())):f.value});X(()=>{u.value>C.value&&(u.value=C.value)});async function w(){R.fetchProducts({}).then(n=>{f.value=n.data.data}).catch(n=>{console.log(n)})}const A=S(()=>{const n=f.value.length?(u.value-1)*P.value+1:0,a=f.value.length+(u.value-1)*P.value;return`Showing ${n} to ${a} of ${q.value} entries`});function F(n){_.value=n,x.value=!0}function H(n){j.push({path:"/apps/product/edit",query:{id:n.id}})}async function M(n){if(n)try{console.log(_.value),await U.delete(`/${me(_.value.id)}`),w()}catch(a){console.log(a)}}function Q(n){return n==="COLD_CHAIN"?"\u51B7\u93C8":"\u4E00\u822C"}function Y(n){d.value=!0,_.value=n}async function G(){d.value=!1;const n=parseInt(p.value);try{await U.post(`/${fe(_.value.id)}`,{quantity:n})}catch(a){console.log(a)}await w(),p.value=1}return(n,a)=>{const J=ue,K=de;return r(T)?(I(),Z(E,{key:0,id:"product-list"},{default:s(()=>[e(g,{class:"d-flex align-center flex-wrap gap-4"},{default:s(()=>[t("div",ye,[e(y,{"prepend-icon":"tabler-plus",to:{name:"apps-product-add"}},{default:s(()=>[m(" \u65B0\u5EFA\u5546\u54C1 ")]),_:1})]),e(B),t("div",be,[t("div",Ce,[e(O,{modelValue:r(v),"onUpdate:modelValue":a[0]||(a[0]=o=>V(v)?v.value=o:null),style:{width:"140px"},placeholder:"\u641C\u5C0B\u5546\u54C1",density:"compact"},null,8,["modelValue"])])])]),_:1}),e(b),e(_e,{class:"text-no-wrap invoice-list-table"},{default:s(()=>{var o;return[we,t("tbody",null,[(I(!0),z(te,null,ee(r(T),l=>{var N;return I(),z("tr",{key:l.id,style:{height:"3.75rem"}},[t("td",Ie,[t("span",null,"#"+c(l==null?void 0:l.id),1)]),t("td",De,[e(re,null,{default:s(()=>[e(ce,{src:l==null?void 0:l.coverImg},null,8,["src"])]),_:2},1024)]),t("td",$e,c(Q(l==null?void 0:l.attribute)),1),t("td",Pe,c(l.name),1),t("td",ke," $"+c(l==null?void 0:l.price),1),t("td",Te," $"+c(l==null?void 0:l.memberPrice),1),t("td",Ne," $"+c(l==null?void 0:l.vipPrice),1),t("td",Le," $"+c(l==null?void 0:l.svipPrice),1),t("td",Se,c(((N=l==null?void 0:l.inventory)==null?void 0:N.quantity)||0),1),t("td",ze,[e(y,{icon:"",variant:"text",color:"primary",size:"x-small"},{default:s(()=>[e(h,{size:22,icon:"tabler-dots-vertical"}),e(ge,{activator:"parent"},{default:s(()=>[e(he,null,{default:s(()=>[e(D,{value:"edit",onClick:L=>H(l)},{prepend:s(()=>[e(h,{color:"success",size:"24",class:"me-3",icon:"tabler-pencil"})]),default:s(()=>[e($,null,{default:s(()=>[m("\u7DE8\u8F2F")]),_:1})]),_:2},1032,["onClick"]),e(D,{value:"delete",onClick:L=>F(l)},{prepend:s(()=>[e(h,{color:"error",size:"24",class:"me-3",icon:"tabler-trash"})]),default:s(()=>[e($,null,{default:s(()=>[m("\u522A\u9664")]),_:1})]),_:2},1032,["onClick"]),e(D,{value:"delete",onClick:L=>Y(l)},{prepend:s(()=>[e(h,{color:"info",size:"24",class:"me-3",icon:"tabler-plus"})]),default:s(()=>[e($,null,{default:s(()=>[m("\u65B0\u589E\u5EAB\u5B58")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])])}),128))]),le(t("tfoot",null,Ue,512),[[ae,!((o=r(f))!=null&&o.length)]])]}),_:1}),e(b),e(g,{class:"d-flex align-center flex-wrap gap-4 py-3"},{default:s(()=>[t("span",Be,c(r(A)),1),e(B),e(pe,{modelValue:r(u),"onUpdate:modelValue":a[1]||(a[1]=o=>V(u)?u.value=o:null),size:"small","total-visible":5,length:r(C),onNext:a[2]||(a[2]=o=>k.value=[]),onPrev:a[3]||(a[3]=o=>k.value=[])},null,8,["modelValue","length"])]),_:1}),e(J,{isDialogVisible:r(x),"onUpdate:isDialogVisible":a[4]||(a[4]=o=>V(x)?x.value=o:null),"confirmation-msg":"\u78BA\u5B9A\u8981\u522A\u9664\u9078\u64C7\u7684\u5546\u54C1\uFF1F",onConfirm:M},null,8,["isDialogVisible"]),e(xe,{modelValue:r(d),"onUpdate:modelValue":a[8]||(a[8]=o=>V(d)?d.value=o:null),scrollable:"","max-width":"320"},{default:s(()=>[e(K,{onClick:a[5]||(a[5]=o=>d.value=!r(d))}),e(E,null,{default:s(()=>[e(se,{class:"pb-5"},{default:s(()=>[e(ne,null,{default:s(()=>[m("\u65B0\u589E\u5EAB\u5B58\u6578\u91CF")]),_:1})]),_:1}),e(b),e(g,{style:{height:"200px"}},{default:s(()=>[e(Ve,null,{default:s(()=>[e(O,{modelValue:r(p),"onUpdate:modelValue":a[6]||(a[6]=o=>V(p)?p.value=o:null),label:"\u6578\u91CF",required:"",min:"1",type:"number"},null,8,["modelValue"])]),_:1})]),_:1}),e(b),e(g,{class:"d-flex justify-end flex-wrap gap-3 pt-5"},{default:s(()=>[e(y,{color:"secondary",variant:"tonal",onClick:a[7]||(a[7]=o=>d.value=!1)},{default:s(()=>[m(" \u53D6\u6D88 ")]),_:1}),e(y,{onClick:G},{default:s(()=>[m(" \u78BA\u5B9A ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})):oe("",!0)}}};export{st as default};
