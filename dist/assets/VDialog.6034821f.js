import{a2 as x,a4 as y,k as h,ax as E,C as f,az as P,J as S,p as m,a9 as D,a1 as g}from"./index.765b4f7c.js";import{m as w,a as A,u as B,f as I,c as O}from"./scopeId.fa70d95f.js";import{f as R}from"./forwardRefs.54bb1675.js";const z=x()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...w({origin:"center center",scrollStrategy:"block",transition:{component:A},zIndex:2400})},emits:{"update:modelValue":r=>!0},setup(r,p){let{slots:i}=p;const n=y(r,"modelValue"),{scopeId:V}=B(),a=h();function c(t){var e,l;const s=t.relatedTarget,o=t.target;if(s!==o&&(e=a.value)!=null&&e.contentEl&&(l=a.value)!=null&&l.globalTop&&![document,a.value.contentEl].includes(o)&&!a.value.contentEl.contains(o)){const u=[...a.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(v=>!v.hasAttribute("disabled")&&!v.matches('[tabindex="-1"]'));if(!u.length)return;const d=u[0],b=u[u.length-1];s===d?b.focus():d.focus()}}return E&&f(()=>n.value&&r.retainFocus,t=>{t?document.addEventListener("focusin",c):document.removeEventListener("focusin",c)},{immediate:!0}),f(n,async t=>{if(await P(),t){var e;(e=a.value.contentEl)==null||e.focus({preventScroll:!0})}else{var l;(l=a.value.activatorEl)==null||l.focus({preventScroll:!0})}}),S(()=>{const[t]=I(r);return m(O,g({ref:a,class:["v-dialog",{"v-dialog--fullscreen":r.fullscreen,"v-dialog--scrollable":r.scrollable}]},t,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:g({"aria-haspopup":"dialog","aria-expanded":String(n.value)},r.activatorProps)},V),{activator:i.activator,default:function(){for(var e,l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return m(D,{root:!0},{default:()=>[(e=i.default)==null?void 0:e.call(i,...s)]})}})}),R({},a)}});export{z as V};
