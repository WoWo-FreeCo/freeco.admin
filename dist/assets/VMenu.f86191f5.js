import{f as y}from"./forwardRefs.54bb1675.js";import{a2 as C,a3 as S,a4 as M,a5 as O,a6 as b,k as h,a7 as w,a8 as D,C as x,J as $,p as m,a9 as k,a1 as v}from"./index.814ba5dc.js";import{m as A,V as I,u as R,a as p,f as T,b as U}from"./scopeId.490f9154.js";const q=C()({name:"VMenu",props:{id:String,...S(A({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:I}}),["absolute"])},emits:{"update:modelValue":a=>!0},setup(a,f){let{slots:r}=f;const t=M(a,"modelValue"),{scopeId:V}=R(),g=O(),i=b(()=>a.id||`v-menu-${g}`),u=h(),e=w(p,null);let n=0;D(p,{register(){++n},unregister(){--n},closeParents(){setTimeout(()=>{n||(t.value=!1,e==null||e.closeParents())},40)}}),x(t,l=>{l?e==null||e.register():e==null||e.unregister()});function P(){e==null||e.closeParents()}return $(()=>{const[l]=T(a);return m(U,v({ref:u,class:["v-menu"]},l,{modelValue:t.value,"onUpdate:modelValue":o=>t.value=o,absolute:!0,activatorProps:v({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-owns":i.value},a.activatorProps),"onClick:outside":P},V),{activator:r.activator,default:function(){for(var o,c=arguments.length,d=new Array(c),s=0;s<c;s++)d[s]=arguments[s];return m(k,{root:!0},{default:()=>[(o=r.default)==null?void 0:o.call(r,...d)]})}})}),y({id:i},u)}});export{q as V};