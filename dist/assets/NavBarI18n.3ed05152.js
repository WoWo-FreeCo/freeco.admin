import{o as r,b as l,w as a,p as o,V as p,c as m,F as g,a as f,z as _,x as d,t as L}from"./index.81a573ca.js";import{V as h}from"./VMenu.366f1be2.js";import{V,a as b,b as v}from"./VList.e682e2be.js";import{V as x}from"./VBtn.b672f002.js";import"./forwardRefs.54bb1675.js";import"./scopeId.2f150327.js";import"./index.d28f26f2.js";import"./VDivider.250021f4.js";const C={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(i,{emit:c}){const t=i,{locale:s}=useI18n({useScope:"global"});return(n,u)=>(r(),l(x,{icon:"",variant:"text",color:"default",size:"small"},{default:a(()=>[o(p,{icon:"tabler-language",size:"24"}),o(h,{activator:"parent",location:t.location,offset:"14px"},{default:a(()=>[o(V,{"min-width":"175px"},{default:a(()=>[(r(!0),m(g,null,f(t.languages,e=>(r(),l(b,{key:e.i18nLang,value:e.i18nLang,onClick:k=>{s.value=e.i18nLang,n.$emit("change",e.i18nLang)}},{default:a(()=>[o(v,null,{default:a(()=>[_(d(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}},T={__name:"NavBarI18n",setup(i){const{isAppRtl:c}=L(),t=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],s=n=>{c.value=n==="ar"};return(n,u)=>(r(),l(C,{languages:t,onChange:s}))}};export{T as default};
