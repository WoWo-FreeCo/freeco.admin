import{o as s,c as p,F as g,a as w,b as f,e as b,_ as $,f as k,g as C,i as N,j as R,k as S,l as V,m as t,n as m,p as o,q as e,s as v,d as z,t as L,w as i,v as h,x as I,T as x,r as y}from"./index.814ba5dc.js";import B from"./Footer.fe2f00fb.js";import q from"./NavbarThemeSwitcher.29aa4bdc.js";import E from"./UserProfile.a56d6e7f.js";import{V as H}from"./VSpacer.32b7e6c3.js";import"./VBtn.15cc7225.js";import"./VBadge.ef94202f.js";import"./VMenu.f86191f5.js";import"./forwardRefs.54bb1675.js";import"./scopeId.490f9154.js";import"./VList.3902500a.js";import"./index.c82ae7fd.js";import"./VDivider.4f08e55f.js";const T={class:"nav-items"},W={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(r){const l=c=>"children"in c?$:k;return(c,d)=>(s(),p("ul",T,[(s(!0),p(g,null,w(r.navItems,(a,u)=>(s(),f(b(l(a)),{key:u,item:a},null,8,["item"]))),128))]))}},D={class:"layout-navbar"},F={class:"navbar-content-container"},j={class:"layout-horizontal-nav"},A={class:"horizontal-nav-content-container"},O={class:"layout-page-content"},P={class:"layout-footer"},Y={class:"footer-content-container"},G={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(r){const{y:l}=C(),{width:c}=N(),d=R(),a=S(!1);d.beforeEach(()=>{a.value=!0}),d.afterEach(()=>{a.value=!1});const{_layoutClasses:u,isNavbarBlurEnabled:_}=V();return(n,Q)=>(s(),p("div",{class:v(["layout-wrapper",e(u)(e(c),e(l))])},[t("div",{class:v(["layout-navbar-and-nav-container",e(_)&&"header-blur"])},[t("div",D,[t("div",F,[m(n.$slots,"navbar")])]),t("div",j,[t("div",A,[o(e(W),{"nav-items":r.navItems},null,8,["nav-items"])])])],2),t("main",O,[n.$slots["content-loading"]?(s(),p(g,{key:0},[e(a)?m(n.$slots,"content-loading",{key:0}):m(n.$slots,"default",{key:1})],64)):m(n.$slots,"default",{key:1})]),t("footer",P,[t("div",Y,[m(n.$slots,"footer")])])],2))}},J=[{title:"Home",to:{name:"index"},icon:{icon:"tabler-smart-home"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"tabler-file"}}],K=z({name:"VNodeRenderer",props:{nodes:{type:[Array,Object],required:!0}},setup(r){return()=>r.nodes}}),M={class:"app-title font-weight-bold leading-normal text-xl"},ue={__name:"DefaultLayoutWithHorizontalNav",setup(r){const{appRouteTransition:l}=L();return(c,d)=>{const a=y("RouterLink"),u=y("RouterView");return s(),f(e(G),{"nav-items":e(J)},{navbar:i(()=>[o(a,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:i(()=>[o(e(K),{nodes:e(h).app.logo},null,8,["nodes"]),t("h1",M,I(e(h).app.title),1)]),_:1}),o(H),o(q,{class:"me-2"}),o(E)]),footer:i(()=>[o(B)]),default:i(()=>[o(u,null,{default:i(({Component:_,route:n})=>[o(x,{name:e(l),mode:"out-in"},{default:i(()=>[(s(),f(b(_),{key:n.path}))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{ue as default};
