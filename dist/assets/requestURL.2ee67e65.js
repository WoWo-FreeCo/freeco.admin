import{a as c}from"./axios.364130a5.js";const i="https://api.wowo.tw",d=c.create({baseURL:i,timeout:3e4,headers:{"Content-Type":"application/json"}});d.interceptors.request.use(async a=>{const e=localStorage.getItem("at");return a!=null&&a.headers&&(a.headers["Access-Control-Allow-Origin"]="*",e&&(a.headers.Authorization=`Bearer ${e}`)),a},a=>{Promise.reject(a)});d.interceptors.response.use(a=>a,async a=>{var o;const e=localStorage.getItem("at");if(a.response&&a.response.status===401&&e){try{const n=await fetch(`${i}/api/v1/admin/user/refresh`,{method:"post",headers:new Headers({authorization:`Bearer ${localStorage.getItem("at")}`})}),{accessToken:s}=await n.json();return localStorage.setItem("at",s),(!a.config||!s)&&r(),(o=a.config)!=null&&o.headers&&(a.config.headers.Authorization=`Bearer ${s}`),c(a.config)}catch{}r()}return Promise.reject(a)});function r(){localStorage.removeItem("at"),setTimeout(()=>{location.reload()},500)}const t="api/v1",T=`${t}/admin/order/details`,_=`${t}/admin/normal-user/profile`,$=a=>`${t}/admin/order/${a}/detail`,m=a=>`${t}/product?categoryId=${a}`,D=`${t}/product`,O=`${t}/web-page`,p=`${t}/product-category`,A=a=>`${t}/product/${a}/detail`,P=`${t}/home-banner`,R=`${t}/admin/user/login`,u=`${t}/admin/home-banner`,U=`${t}/admin/product`,l=`${t}/image`,h=a=>`${t}/admin/product/${a}/inventory/add`,C=`${t}/admin/product-category`,G=a=>`${t}/admin/home-banner/${a}`,I=a=>`${t}/admin/product/${a}`,S=a=>`${t}/admin/product-category/${a}`,g=a=>`${t}/admin/web-page/${a}`,N=a=>`${t}/admin/product/${a}/markdownInfos`,M=a=>`${t}/admin/product/${a}/images`,f=a=>`${t}/admin/order/${a}/order-status`,w=a=>`${t}/admin/home-banner/${a}`,y=a=>`${t}/admin/product/${a}`,B=a=>`${t}/admin/product-category/${a}`;export{R as A,y as D,O as G,l as P,g as U,d as a,_ as b,I as c,U as d,D as e,m as f,p as g,A as h,B as i,S as j,C as k,h as l,N as m,M as n,T as o,$ as p,f as q,w as r,P as s,G as t,u};
