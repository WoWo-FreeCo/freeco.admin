import{y as S,d as x,t as V,k as l,ay as A,b9 as I,o as p,c as d,m as c,p as i,w as P,q as t,b7 as k,a1 as B,ba as m,F as C,V as D,j as N,bb as q,bc as R,bd as T}from"./index.765b4f7c.js";import{a as L}from"./axios.364130a5.js";import{V as w}from"./VBtn.bed821b9.js";const E=L.create({});const b=n=>(R("data-v-d2275827"),n=n(),T(),n),U={key:0,class:"d-none d-md-flex align-center text-disabled"},z=b(()=>c("span",{class:"me-3"},"Search",-1)),O=b(()=>c("span",{class:"meta-key"},"\u2318K",-1)),j=[z,O],F=x({inheritAttrs:!1}),$=Object.assign(F,{__name:"NavSearchBar",setup(n){const{appContentLayoutNav:g}=V(),e=l(!1),h=[{title:"Popular Searches",content:[{icon:"tabler-chart-donut",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"tabler-chart-bubble",title:"CRM",url:{name:"dashboards-crm"}},{icon:"tabler-file",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"tabler-users",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"tabler-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"tabler-file-plus",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"tabler-currency-dollar",title:"Pricing",url:{name:"pages-pricing"}},{icon:"tabler-user",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"tabler-letter-a",title:"Typography",url:{name:"pages-typography"}},{icon:"tabler-square",title:"Tabs",url:{name:"components-tabs"}},{icon:"tabler-hand-click",title:"Buttons",url:{name:"components-button"}},{icon:"tabler-keyboard",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"tabler-list",title:"Select",url:{name:"forms-select"}},{icon:"tabler-space",title:"Combobox",url:{name:"forms-combobox"}},{icon:"tabler-calendar",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"tabler-hexagon",title:"Rating",url:{name:"forms-rating"}}]}],_=[{title:"Analytics Dashboard",icon:"tabler-shopping-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"tabler-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"tabler-cash",url:{name:"pages-pricing"}}],s=l(""),u=l([]),f=N();A(()=>{E.get("/app-bar/search",{params:{q:s.value}}).then(r=>{u.value=r.data})});const v=r=>{f.push(r.url),e.value=!1,s.value=""},y=I(()=>q(()=>import("./AppBarSearch.849d5665.js"),["assets/AppBarSearch.849d5665.js","assets/index.765b4f7c.js","assets/index.4f7014f1.css","assets/VTextField.d4c5c89c.js","assets/index.5e39d728.js","assets/forwardRefs.54bb1675.js","assets/VTextField.539df929.css","assets/VBtn.bed821b9.js","assets/VBtn.1958adaf.css","assets/scopeId.fa70d95f.js","assets/scopeId.b7a512ff.css","assets/VList.cee23a0a.js","assets/VList.f3553822.css","assets/VRow.aa276d47.js","assets/VCol.2c960eb9.js","assets/VCol.0b79ff68.css","assets/VDialog.6034821f.js","assets/VDialog.0e0bf965.css","assets/AppBarSearch.fae80d89.css"]));return(r,a)=>(p(),d(C,null,[c("div",B({class:"d-flex align-center cursor-pointer"},r.$attrs,{onClick:a[0]||(a[0]=o=>e.value=!t(e))}),[i(w,{icon:"",variant:"text",color:"default",size:"small"},{default:P(()=>[i(D,{icon:"tabler-search",size:"24"})]),_:1}),t(g)==="vertical"?(p(),d("span",U,j)):k("",!0)],16),i(t(y),{isDialogVisible:t(e),"onUpdate:isDialogVisible":a[1]||(a[1]=o=>m(e)?e.value=o:null),"search-query":t(s),"onUpdate:search-query":a[2]||(a[2]=o=>m(s)?s.value=o:null),"search-results":t(u),suggestions:h,"no-data-suggestion":_,onItemSelected:v},null,8,["isDialogVisible","search-query","search-results"])],64))}}),Q=S($,[["__scopeId","data-v-d2275827"]]);export{Q as default};
