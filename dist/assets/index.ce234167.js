import{k as i,ay as y,a6 as h,aH as B,q as u,o as d,b as f,w as l,p as t,bj as w,m as e,c as b,a as T,F as M,$ as R,a0 as j,x as p,ba as q,be as E,b7 as F,j as H,V as m,z as Q}from"./index.814ba5dc.js";import{u as U}from"./dailyCheckStore.fac530eb.js";import{V as D}from"./VSpacer.32b7e6c3.js";import{V as z}from"./VDivider.4f08e55f.js";import{V as A}from"./VTable.e85ebe62.js";import{V as G}from"./VPagination.dd4f66aa.js";import{V as J}from"./VBtn.15cc7225.js";import{V as K}from"./VMenu.f86191f5.js";import{V as O,a as W,b as X}from"./VList.3902500a.js";import"./requestURL.4ab77af1.js";import"./axios.364130a5.js";import"./forwardRefs.54bb1675.js";import"./scopeId.490f9154.js";import"./index.c82ae7fd.js";const Y=e("div",{class:"me-3"},null,-1),Z=e("div",{class:"d-flex align-center flex-wrap gap-4"},null,-1),k=e("thead",{class:"text-uppercase"},[e("tr",null,[e("th",{scope:"col",class:"text-center"}," \u9023\u7E8C\u767B\u5165\u5929\u6578 "),e("th",{scope:"col",class:"text-center"}," \u734E\u52F5\u7D05\u5229 "),e("th",{scope:"col",class:"text-center"}," \u662F\u5426\u89C0\u770B\u5F71\u7247 "),e("th",{scope:"col",class:"text-center"}," \u5F71\u7247\u9023\u7D50 "),e("th",{scope:"col",class:"text-center"}," \u64CD\u4F5C ")])],-1),C={class:"text-center"},ee={class:"text-center"},te={class:"text-center row-content"},se={class:"text-center row-content"},ae={style:{width:"3rem"}},oe=e("tr",null,[e("td",{colspan:"8",class:"text-center text-body-1"}," No data available ")],-1),le=[oe],ne={class:"text-sm text-disabled"},De={__name:"index",setup(re){const $=U(),v=i(""),x=i(10),r=i(1),_=i(1),I=i(0),c=i([]),V=i([]),L=H();y(async()=>{await N()});const g=h(()=>{var a;return v.value?(a=c.value)==null?void 0:a.filter(o=>{var n;return(n=o==null?void 0:o.nickname)==null?void 0:n.toLowerCase().includes(v.value.toLowerCase())}):c.value});B(()=>{r.value>_.value&&(r.value=_.value)});async function N(){$.fetchDailyChecks({}).then(a=>{console.log(a),c.value=a.data.data,console.log(c.value)}).catch(a=>{console.log(a)})}const P=h(()=>{const a=c.value.length?(r.value-1)*x.value+1:0,o=c.value.length+(r.value-1)*x.value;return`Showing ${a} to ${o} of ${I.value} entries`});function S(a){L.push({path:"/apps/daily-check/edit",query:{id:a.index}})}return(a,o)=>u(g)?(d(),f(E,{key:0,id:"daily-check-list"},{default:l(()=>[t(w,{class:"d-flex align-center flex-wrap gap-4"},{default:l(()=>[Y,t(D),Z]),_:1}),t(z),t(A,{class:"text-no-wrap invoice-list-table"},{default:l(()=>{var n;return[k,e("tbody",null,[(d(!0),b(M,null,T(u(g),s=>(d(),b("tr",{key:s==null?void 0:s.index,style:{height:"3.75rem"}},[e("td",C,p((s==null?void 0:s.index)+1),1),e("td",ee,p(s==null?void 0:s.credit),1),e("td",te,[s.isMission?(d(),f(m,{key:0,color:"success",size:22,icon:"tabler-circle-check"})):(d(),f(m,{key:1,color:"error",size:22,icon:"tabler-circle-x"}))]),e("td",se,p(s==null?void 0:s.video),1),e("td",ae,[t(J,{icon:"",variant:"text",color:"primary",size:"x-small"},{default:l(()=>[t(m,{size:22,icon:"tabler-dots-vertical"}),t(K,{activator:"parent"},{default:l(()=>[t(O,null,{default:l(()=>[t(W,{value:"edit",onClick:ce=>S(s)},{prepend:l(()=>[t(m,{color:"success",size:"24",class:"me-3",icon:"tabler-pencil"})]),default:l(()=>[t(X,null,{default:l(()=>[Q("\u7DE8\u8F2F")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))]),R(e("tfoot",null,le,512),[[j,!((n=u(c))!=null&&n.length)]])]}),_:1}),t(z),t(w,{class:"d-flex align-center flex-wrap gap-4 py-3"},{default:l(()=>[e("span",ne,p(u(P)),1),t(D),t(G,{modelValue:u(r),"onUpdate:modelValue":o[0]||(o[0]=n=>q(r)?r.value=n:null),size:"small","total-visible":5,length:u(_),onNext:o[1]||(o[1]=n=>V.value=[]),onPrev:o[2]||(o[2]=n=>V.value=[])},null,8,["modelValue","length"])]),_:1})]),_:1})):F("",!0)}};export{De as default};
