import{y as C,k as s,ay as I,o as T,b as k,w as d,p as l,q as t,z as V,bo as A,bp as D,j as P}from"./index.81a573ca.js";import{a as F,c as N}from"./requestURL.2ee67e65.js";import{u as g}from"./userStore.f085abeb.js";import{V as u}from"./VCol.398b018c.js";import{V as n}from"./VTextField.f6361a39.js";import{V as b}from"./VBtn.b672f002.js";import{V as O}from"./VRow.67af9cc4.js";import{V as R}from"./VForm.5bd79259.js";import"./axios.364130a5.js";import"./index.d28f26f2.js";import"./forwardRefs.54bb1675.js";const S={__name:"index",setup(B){const c=s(),y=g(),o=s({id:"",email:"",nickname:"",taxIDNumber:"",cellphone:"",telephone:"",addressOne:"",addressTwo:"",addressThree:"",rewardCredit:0,recommendCode:"",YouTubeChannelActivated:!1,FacebookGroupActivated:!1,IGFollowActivated:!1,VIPActivated:!1,SVIPActivated:!1,memberLevel:""}),m=s(),v=s(),x=D(),i=P();I(async()=>{await p()});async function p(){try{const r=await y.fetchUsers();m.value=r.data.data,_()}catch(r){console.log(r)}}async function U(){try{const r={...o.value};await F.put(`/${N(curProd.value.id)}`,r),alert("\u5DF2\u66F4\u65B0\u7528\u6236\u8CC7\u8A0A")}catch(r){console.log(r)}}function _(){var a,f;const r=(a=x.query)==null?void 0:a.id;if(!r)return i.push({path:"/apps/user/list"});const e=(f=m.value)==null?void 0:f.find(q=>q.id==r);if(!e)return i.push({path:"/apps/user/list"});v.value=e,o.value={...o.value,...e}}function w(){p()}return(r,e)=>(T(),k(R,{ref_key:"form",ref:c,"lazy-validation":"",onSubmit:e[11]||(e[11]=A(()=>{},["prevent"]))},{default:d(()=>[l(O,null,{default:d(()=>[l(u,{cols:"12"},{default:d(()=>[l(n,{modelValue:t(o).nickname,"onUpdate:modelValue":e[0]||(e[0]=a=>t(o).nickname=a),label:"\u7528\u6236\u540D\u7A31",required:""},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:d(()=>[l(n,{modelValue:t(o).memberLevel,"onUpdate:modelValue":e[1]||(e[1]=a=>t(o).memberLevel=a),label:"\u7528\u6236\u7B49\u7D1A",required:""},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:d(()=>[l(n,{modelValue:t(o).email,"onUpdate:modelValue":e[2]||(e[2]=a=>t(o).email=a),label:"Email",required:""},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:d(()=>[l(n,{modelValue:t(o).taxIDNumber,"onUpdate:modelValue":e[3]||(e[3]=a=>t(o).taxIDNumber=a),label:"\u7D71\u4E00\u7DE8\u865F",required:"",min:"0",type:"number"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:d(()=>[l(n,{modelValue:t(o).cellphone,"onUpdate:modelValue":e[4]||(e[4]=a=>t(o).cellphone=a),label:"\u624B\u6A5F\u865F\u78BC",required:"",type:"number",min:"0"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:d(()=>[l(n,{modelValue:t(o).telephone,"onUpdate:modelValue":e[5]||(e[5]=a=>t(o).telephone=a),label:"\u96FB\u8A71\u865F\u78BC",required:"",type:"number",min:"0"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:d(()=>[l(n,{modelValue:t(o).addressOne,"onUpdate:modelValue":e[6]||(e[6]=a=>t(o).addressOne=a),label:"\u5730\u5740\u4E00",required:"",type:"text"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:d(()=>[l(n,{modelValue:t(o).addressTwo,"onUpdate:modelValue":e[7]||(e[7]=a=>t(o).addressTwo=a),label:"\u5730\u5740\u4E8C",required:"",type:"text"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:d(()=>[l(n,{modelValue:t(o).addressThree,"onUpdate:modelValue":e[8]||(e[8]=a=>t(o).addressThree=a),label:"\u5730\u5740\u4E09",required:"",type:"text"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:d(()=>[l(n,{modelValue:t(o).rewardCredit,"onUpdate:modelValue":e[9]||(e[9]=a=>t(o).rewardCredit=a),label:"\u7D05\u5229\u9EDE\u6578",required:"",type:"number",min:"0"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12"},{default:d(()=>[l(n,{modelValue:t(o).recommendCode,"onUpdate:modelValue":e[10]||(e[10]=a=>t(o).recommendCode=a),label:"\u63A8\u85A6\u78BC",required:"",type:"text"},null,8,["modelValue"])]),_:1}),l(u,{cols:"12",class:"d-flex gap-4"},{default:d(()=>[l(b,{type:"submit",onClick:U},{default:d(()=>[V(" \u66F4\u65B0 ")]),_:1}),l(b,{color:"secondary",variant:"tonal",onClick:w},{default:d(()=>[V(" \u5FA9\u539F\u8CC7\u6599 ")]),_:1})]),_:1})]),_:1})]),_:1},512))}},W=C(S,[["__scopeId","data-v-ba73edd1"]]);export{W as default};
