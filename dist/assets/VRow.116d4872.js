import"./VCol.64655a44.js";import{H as S,I as b,a6 as p,h as V,bi as k}from"./index.814ba5dc.js";const w=["sm","md","lg","xl","xxl"],i=["start","end","center"],d=["space-between","space-around","space-evenly"];function o(t,l){return w.reduce((n,a)=>(n[t+k(a)]=l(),n),{})}const L=[...i,"baseline","stretch"],g=t=>L.includes(t),f=o("align",()=>({type:String,default:null,validator:g})),N=[...i,...d],y=t=>N.includes(t),j=o("justify",()=>({type:String,default:null,validator:y})),A=[...i,...d,"stretch"],v=t=>A.includes(t),C=o("alignContent",()=>({type:String,default:null,validator:v})),r={align:Object.keys(f),justify:Object.keys(j),alignContent:Object.keys(C)},E={align:"align",justify:"justify",alignContent:"align-content"};function h(t,l,n){let a=E[t];if(n!=null){if(l){const e=l.replace(t,"");a+=`-${e}`}return a+=`-${n}`,a.toLowerCase()}}const G=S({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:g},...f,justify:{type:String,default:null,validator:y},...j,alignContent:{type:String,default:null,validator:v},...C,...b()},setup(t,l){let{slots:n}=l;const a=p(()=>{const e=[];let s;for(s in r)r[s].forEach(u=>{const m=t[u],c=h(s,u,m);c&&e.push(c)});return e.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),e});return()=>{var e;return V(t.tag,{class:["v-row",a.value]},(e=n.default)==null?void 0:e.call(n))}}});export{G as V};
