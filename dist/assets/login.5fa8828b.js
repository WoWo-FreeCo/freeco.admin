import{k as m,o as I,b as T,w as a,p as e,m as c,D as g,q as l,be as v,bk as h,x as L,v as S,bx as B,ba as b,z as C,bA as D,j as N}from"./index.3e6756d9.js";import{u as V,b as _,m as E,a as M}from"./route-block.8b6a1fe0.js";import{a as q,A as R}from"./requestURL.e8351c03.js";import{a as n,V as y}from"./VRow.f69d03a9.js";import{V as j}from"./VForm.c2441981.js";import{V as k}from"./VTextField.a98f3cc5.js";import{V as z}from"./VBtn.a3be8285.js";import"./axios.364130a5.js";import"./forwardRefs.54bb1675.js";import"./index.9410a6e6.js";const U=t=>t==null||t===""?!0:!!(Array.isArray(t)&&t.length===0),$=t=>t==null,F=t=>Array.isArray(t)&&t.length===0,G="/assets/auth-v2-login-illustration-bordered-dark.a595a9b7.png",O="/assets/auth-v2-login-illustration-bordered-light.47ee3625.png",Z="/assets/auth-v2-login-illustration-dark.0878e8b9.png",P="/assets/auth-v2-login-illustration-light.d1fd488d.png",x=t=>$(t)||F(t)||t===!1?"This field is required":!!String(t).trim().length||"This field is required",H=t=>{if(U(t))return!0;const i=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(t)?t.every(f=>i.test(String(f)))||"The Email field must be a valid email":i.test(String(t))||"The Email field must be a valid email"};const J={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},K={class:"d-flex align-center justify-center w-100 h-100"},Q={class:"text-h5 font-weight-semibold mb-1"},W=c("p",{class:"mb-0"}," \u8ACB\u8F38\u5165\u7BA1\u7406\u5E33\u865F\u8207\u5BC6\u78BC\u4F86\u767B\u5165 ",-1),X={__name:"login",setup(t){const i=V(P,Z,O,G,!0),f=V(M,E),o=m(!1),u=m("admin@wb.mail"),d=m("12345678");m(!1),D();const w=N();async function A(){var p;try{const s=await q.post(`${R}`,{email:u.value,password:d.value}),r=(p=s==null?void 0:s.data)==null?void 0:p.data.accessToken;localStorage.setItem("at",r),w.push({path:"/"})}catch{alert("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u5E33\u865F\u8207\u5BC6\u78BC")}}return(p,s)=>(I(),T(y,{"no-gutters":"",class:"auth-wrapper"},{default:a(()=>[e(n,{lg:"8",class:"d-none d-lg-flex"},{default:a(()=>[c("div",J,[c("div",K,[e(g,{"max-width":"505",src:l(i),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),e(g,{src:l(f),class:"auth-footer-mask"},null,8,["src"])])]),_:1}),e(n,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:a(()=>[e(v,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:a(()=>[e(h,null,{default:a(()=>[c("h5",Q," \u6B61\u8FCE\u4F86\u5230 "+L(l(S).app.title)+" \u5F8C\u53F0\u7BA1\u7406\u7CFB\u7D71 \u{1F44B}\u{1F3FB} ",1),W]),_:1}),e(h,null,{default:a(()=>[e(j,{onSubmit:B(A,["prevent"])},{default:a(()=>[e(y,null,{default:a(()=>[e(n,{cols:"12"},{default:a(()=>[e(k,{modelValue:l(u),"onUpdate:modelValue":s[0]||(s[0]=r=>b(u)?u.value=r:null),label:"Email",type:"email",rules:[l(x),l(H)]},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(k,{modelValue:l(d),"onUpdate:modelValue":s[1]||(s[1]=r=>b(d)?d.value=r:null),label:"\u5BC6\u78BC",class:"mb-4",rules:[l(x)],type:l(o)?"text":"password","append-inner-icon":l(o)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[2]||(s[2]=r=>o.value=!l(o))},null,8,["modelValue","rules","type","append-inner-icon"]),e(z,{block:"",type:"submit"},{default:a(()=>[C(" \u767B\u5165 ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center"})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1}))}};typeof _=="function"&&_(X);export{X as default};
