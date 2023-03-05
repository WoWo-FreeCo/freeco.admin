import{k as R,bu as q,H as C,K as V,af as G,ag as w,ai as J,M as O,aZ as X,I as F,N,ak as Z,a4 as j,S as Y,aQ as ee,am as D,av as A,b0 as ae,a6 as h,bv as I,Q as g,J as M,p as s,a1 as x,bw as B,az as p,ap as te,aw as le}from"./index.3e6756d9.js";import{V as P}from"./VBtn.a3be8285.js";function ie(){const e=R([]);q(()=>e.value=[]);function m(t,y){e.value[y]=t}return{refs:e,updateRef:m}}const ue=C({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:V,default:"$first"},prevIcon:{type:V,default:"$prev"},nextIcon:{type:V,default:"$next"},lastIcon:{type:V,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...G(),...w(),...J(),...O(),...X(),...F({tag:"nav"}),...N(),...Z({variant:"text"})},emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,m){let{slots:t,emit:y}=m;const l=j(e,"modelValue"),{t:d,n:_}=Y(),{isRtl:k}=ee(),{themeClasses:T}=D(e),S=R(-1);A(void 0,{scoped:!0});const{resizeRef:z}=ae(a=>{if(!a.length)return;const{target:i,contentRect:n}=a[0],o=i.querySelector(".v-pagination__list > *");if(!o)return;const v=n.width,b=o.offsetWidth+parseFloat(getComputedStyle(o).marginRight)*2,U=e.showFirstLastPage?5:3;S.value=Math.max(0,Math.floor(+((v-b*U)/b).toFixed(2)))}),u=h(()=>parseInt(e.length,10)),r=h(()=>parseInt(e.start,10)),c=h(()=>e.totalVisible?parseInt(e.totalVisible,10):S.value>=0?S.value:u.value),E=h(()=>{if(u.value<=0||isNaN(u.value)||u.value>Number.MAX_SAFE_INTEGER)return[];if(c.value<=1)return[l.value];if(u.value<=c.value)return I(u.value,r.value);const a=c.value%2===0,i=a?c.value/2:Math.floor(c.value/2),n=a?i:i+1,o=u.value-i;if(n-l.value>=0)return[...I(Math.max(1,c.value-1),r.value),e.ellipsis,u.value];if(l.value-o>=(a?1:0)){const v=c.value-1,b=u.value-v+r.value;return[r.value,e.ellipsis,...I(v,b)]}else{const v=Math.max(1,c.value-3),b=v===1?l.value:l.value-Math.ceil(v/2)+r.value;return[r.value,e.ellipsis,...I(v,b),e.ellipsis,u.value]}});function L(a,i,n){a.preventDefault(),l.value=i,n&&y(n,i)}const{refs:H,updateRef:K}=ie();A({VPaginationBtn:{color:g(e,"color"),border:g(e,"border"),density:g(e,"density"),size:g(e,"size"),variant:g(e,"variant"),rounded:g(e,"rounded"),elevation:g(e,"elevation")}});const W=h(()=>E.value.map((a,i)=>{const n=o=>K(o,i);if(typeof a=="string")return{isActive:!1,key:`ellipsis-${i}`,page:a,props:{ref:n,ellipsis:!0,icon:!0,disabled:!0}};{const o=a===l.value;return{isActive:o,key:a,page:_(a),props:{ref:n,ellipsis:!1,icon:!0,disabled:!!e.disabled||e.length<2,color:o?e.activeColor:e.color,ariaCurrent:o,ariaLabel:d(o?e.currentPageAriaLabel:e.pageAriaLabel,i+1),onClick:v=>L(v,a)}}}})),f=h(()=>{const a=!!e.disabled||l.value<=r.value,i=!!e.disabled||l.value>=r.value+u.value-1;return{first:e.showFirstLastPage?{icon:k.value?e.lastIcon:e.firstIcon,onClick:n=>L(n,r.value,"first"),disabled:a,ariaLabel:d(e.firstAriaLabel),ariaDisabled:a}:void 0,prev:{icon:k.value?e.nextIcon:e.prevIcon,onClick:n=>L(n,l.value-1,"prev"),disabled:a,ariaLabel:d(e.previousAriaLabel),ariaDisabled:a},next:{icon:k.value?e.prevIcon:e.nextIcon,onClick:n=>L(n,l.value+1,"next"),disabled:i,ariaLabel:d(e.nextAriaLabel),ariaDisabled:i},last:e.showFirstLastPage?{icon:k.value?e.firstIcon:e.lastIcon,onClick:n=>L(n,r.value+u.value-1,"last"),disabled:i,ariaLabel:d(e.lastAriaLabel),ariaDisabled:i}:void 0}});function $(){var a;const i=l.value-r.value;(a=H.value[i])==null||a.$el.focus()}function Q(a){a.key===B.left&&!e.disabled&&l.value>e.start?(l.value=l.value-1,p($)):a.key===B.right&&!e.disabled&&l.value<r.value+u.value-1&&(l.value=l.value+1,p($))}return M(()=>s(e.tag,{ref:z,class:["v-pagination",T.value],role:"navigation","aria-label":d(e.ariaLabel),onKeydown:Q,"data-test":"v-pagination-root"},{default:()=>[s("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&s("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[t.first?t.first(f.value.first):s(P,x({_as:"VPaginationBtn"},f.value.first),null)]),s("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[t.prev?t.prev(f.value.prev):s(P,x({_as:"VPaginationBtn"},f.value.prev),null)]),W.value.map((a,i)=>s("li",{key:a.key,class:["v-pagination__item",{"v-pagination__item--is-active":a.isActive}],"data-test":"v-pagination-item"},[t.item?t.item(a):s(P,x({_as:"VPaginationBtn"},a.props),{default:()=>[a.page]})])),s("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[t.next?t.next(f.value.next):s(P,x({_as:"VPaginationBtn"},f.value.next),null)]),e.showFirstLastPage&&s("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[t.last?t.last(f.value.last):s(P,x({_as:"VPaginationBtn"},f.value.last),null)])])]})),{}}});const re=C({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...w(),...F(),...N()},setup(e,m){let{slots:t}=m;const{themeClasses:y}=D(e),{densityClasses:l}=te(e);return M(()=>{var d,_;return s(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},y.value,l.value]},{default:()=>[(d=t.top)==null?void 0:d.call(t),t.default&&s("div",{class:"v-table__wrapper",style:{height:le(e.height)}},[s("table",null,[t.default()])]),(_=t.bottom)==null?void 0:_.call(t)]})}),{}}});export{re as V,ue as a};
