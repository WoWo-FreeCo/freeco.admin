import{a as r}from"./axios.364130a5.js";const i="https://api.wowo.tw",d=r.create({baseURL:i,timeout:3e4,headers:{"Content-Type":"application/json"}});d.interceptors.request.use(async t=>{const e=localStorage.getItem("at");return t!=null&&t.headers&&(t.headers["Access-Control-Allow-Origin"]="*",e&&(t.headers.Authorization=`Bearer ${e}`)),t},t=>{Promise.reject(t)});d.interceptors.response.use(t=>t,async t=>{var o;const e=localStorage.getItem("at");if(t.response&&t.response.status===401&&e){try{const n=await fetch(`${i}/api/v1/admin/user/refresh`,{method:"post",headers:new Headers({authorization:`Bearer ${localStorage.getItem("at")}`})}),{accessToken:s}=await n.json();return localStorage.setItem("at",s),(!t.config||!s)&&c(),(o=t.config)!=null&&o.headers&&(t.config.headers.Authorization=`Bearer ${s}`),r(t.config)}catch{}c()}return Promise.reject(t)});function c(){localStorage.removeItem("at"),setTimeout(()=>{location.reload()},500)}const a="api/v1",T=`${a}/admin/order/details`,_=`${a}/admin/normal-user/profile`,$=t=>`${a}/admin/order/${t}/detail`,m=t=>`${a}/product?categoryId=${t}`,D=`${a}/product`,A=`${a}/web-page`,O=`${a}/product-category`,p=t=>`${a}/product/${t}/detail`,u=`${a}/check-content/sequence`,P=`${a}/home-banner`,R=`${a}/admin/user/login`,U=`${a}/admin/home-banner`,l=`${a}/admin/product`,C=`${a}/image`,h=t=>`${a}/admin/product/${t}/inventory/add`,I=`${a}/admin/product-category`,G=t=>`${a}/admin/home-banner/${t}`,S=t=>`${a}/admin/product/${t}`,g=t=>`${a}/admin/product-category/${t}`,N=t=>`${a}/admin/web-page/${t}`,w=t=>`${a}/admin/product/${t}/markdownInfos`,L=t=>`${a}/admin/product/${t}/images`,M=t=>`${a}/admin/order/${t}/order-status`,f=t=>`${a}/admin/check-content/sequence/${t}`,y=t=>`${a}/admin/home-banner/${t}`,B=t=>`${a}/admin/product/${t}`,b=t=>`${a}/admin/product-category/${t}`;export{R as A,B as D,A as G,C as P,N as U,d as a,_ as b,S as c,l as d,D as e,m as f,O as g,p as h,b as i,g as j,I as k,h as l,w as m,L as n,T as o,$ as p,M as q,u as r,f as s,y as t,P as u,G as v,U as w};
