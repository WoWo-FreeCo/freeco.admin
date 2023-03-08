import{H as Re,p as L,a1 as W,T as ie,aa as q,aN as F,k as C,a6 as k,a7 as Pe,C as T,aH as J,aI as U,aO as De,ac as K,aP as ue,aQ as D,aR as He,aS as Me,aT as de,aU as ee,aV as te,aW as me,aX as Ne,aY as ye,aw as B,aZ as ge,ay as Ie,ax as Ce,a8 as Ve,a_ as Ae,a$ as We,ah as qe,N as je,O as ze,a2 as Ye,a4 as Ue,am as Xe,b0 as Ze,P as Qe,Q as Je,aq as Ke,b1 as Ge,b2 as et,J as tt,b3 as ne,b4 as nt,Z as ot,$ as at,a0 as it,as as rt,F as lt,Y as st}from"./index.81a573ca.js";import{a as z,d as ct,s as re,b as ut,n as _e,B as oe,g as he}from"./forwardRefs.54bb1675.js";function Le(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function ft(e){for(;e;){if(fe(e))return e;e=e.parentElement}return document.scrollingElement}function Z(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(fe(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function fe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function vt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const qt=Re({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:n}=t;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,s){var i;await new Promise(y=>requestAnimationFrame(y)),await new Promise(y=>requestAnimationFrame(y)),a.style.visibility="";const{x:l,y:c,sx:f,sy:u,speed:m}=we(e.target,a),h=z(a,[{transform:`translate(${l}px, ${c}px) scale(${f}, ${u})`,opacity:0},{transform:""}],{duration:225*m,easing:ct});(i=pe(a))==null||i.forEach(y=>{z(y,[{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:225*2*m,easing:re})}),h.finished.then(()=>s())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,s){var i;await new Promise(y=>requestAnimationFrame(y));const{x:l,y:c,sx:f,sy:u,speed:m}=we(e.target,a);z(a,[{transform:""},{transform:`translate(${l}px, ${c}px) scale(${f}, ${u})`,opacity:0}],{duration:125*m,easing:ut}).finished.then(()=>s()),(i=pe(a))==null||i.forEach(y=>{z(y,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*m,easing:re})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?L(ie,W({name:"dialog-transition"},o,{css:!1}),n):L(ie,{name:"dialog-transition"},n)}});function pe(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function we(e,t){const n=e.getBoundingClientRect(),o=_e(t),[a,s]=getComputedStyle(t).transformOrigin.split(" ").map(S=>parseFloat(S)),[i,l]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=n.left+n.width/2;i==="left"||l==="left"?c-=n.width/2:(i==="right"||l==="right")&&(c+=n.width/2);let f=n.top+n.height/2;i==="top"||l==="top"?f-=n.height/2:(i==="bottom"||l==="bottom")&&(f+=n.height/2);const u=n.width/o.width,m=n.height/o.height,h=Math.max(1,u,m),y=u/h||0,p=m/h||0,d=o.width*o.height/(window.innerWidth*window.innerHeight),O=d>.12?Math.min(1.5,(d-.12)*10+1):1;return{x:c-(a+o.left),y:f-(s+o.top),sx:y,sy:p,speed:O}}const dt=q({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function mt(e,t){const n={},o=a=>()=>{if(!F)return Promise.resolve(!0);const s=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(i=>{var c;const l=parseInt((c=e[a])!=null?c:0,10);n[a]=window.setTimeout(()=>{t==null||t(s),i(s)},l)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const yt=Symbol.for("vuetify:v-menu"),gt=q({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...dt()},"v-overlay-activator");function ht(e,t){let{isActive:n,isTop:o}=t;const a=C();let s=!1,i=!1,l=!0;const c=k(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=k(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:u,runCloseDelay:m}=mt(e,r=>{r===(e.openOnHover&&s||c.value&&i)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==r&&(l=!0),n.value=r)}),h={click:r=>{r.stopPropagation(),a.value=r.currentTarget||r.target,n.value=!n.value},mouseenter:r=>{s=!0,a.value=r.currentTarget||r.target,u()},mouseleave:r=>{s=!1,m()},focus:r=>{He&&!r.target.matches(":focus-visible")||(i=!0,r.stopPropagation(),a.value=r.currentTarget||r.target,u())},blur:r=>{i=!1,r.stopPropagation(),m()}},y=k(()=>{const r={};return f.value&&(r.click=h.click),e.openOnHover&&(r.mouseenter=h.mouseenter,r.mouseleave=h.mouseleave),c.value&&(r.focus=h.focus,r.blur=h.blur),r}),p=k(()=>{const r={};if(e.openOnHover&&(r.mouseenter=()=>{s=!0,u()},r.mouseleave=()=>{s=!1,m()}),e.closeOnContentClick){const H=Pe(yt,null);r.click=()=>{n.value=!1,H==null||H.closeParents()}}return r}),d=k(()=>{const r={};return e.openOnHover&&(r.mouseenter=()=>{l&&(s=!0,l=!1,u())},r.mouseleave=()=>{s=!1,m()}),r});T(o,r=>{r&&(e.openOnHover&&!s&&(!c.value||!i)||c.value&&!i&&(!e.openOnHover||!s))&&(n.value=!1)});const O=C();J(()=>{!O.value||U(()=>{const r=O.value;a.value=De(r)?r.$el:r})});const S=K("useActivator");let b;return T(()=>!!e.activator,r=>{r&&F?(b=ue(),b.run(()=>{pt(e,S,{activatorEl:a,activatorEvents:y})})):b&&b.stop()},{flush:"post",immediate:!0}),D(()=>{var r;(r=b)==null||r.stop()}),{activatorEl:a,activatorRef:O,activatorEvents:y,contentEvents:p,scrimEvents:d}}function pt(e,t,n){let{activatorEl:o,activatorEvents:a}=n;T(()=>e.activator,(c,f)=>{if(f&&c!==f){const u=l(f);u&&i(u)}c&&U(()=>s())},{immediate:!0}),T(()=>e.activatorProps,()=>{s()}),D(()=>{i()});function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!c||(Object.entries(a.value).forEach(u=>{let[m,h]=u;c.addEventListener(m,h)}),Object.keys(f).forEach(u=>{f[u]==null?c.removeAttribute(u):c.setAttribute(u,f[u])}))}function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!c||(Object.entries(a.value).forEach(u=>{let[m,h]=u;c.removeEventListener(m,h)}),Object.keys(f).forEach(u=>{c.removeAttribute(u)}))}function l(){var c;let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,u;if(f)if(f==="parent"){var m,h;let y=t==null||(m=t.proxy)==null||(h=m.$el)==null?void 0:h.parentNode;for(;y.hasAttribute("data-no-activator");)y=y.parentNode;u=y}else typeof f=="string"?u=document.querySelector(f):"$el"in f?u=f.$el:u=f;return o.value=((c=u)==null?void 0:c.nodeType)===Node.ELEMENT_NODE?u:null,o.value}}const wt=q({eager:Boolean},"lazy");function bt(e,t){const n=C(!1),o=k(()=>n.value||e.eager||t.value);T(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}function ae(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Et(e,t){return{x:e.x-t.x,y:e.y-t.y}}function be(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,s=n==="top"?0:n==="bottom"?t.height:n;return ae({x:a,y:s},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,s=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return ae({x:a,y:s},t)}return ae({x:t.width/2,y:t.height/2},t)}const Te={static:Ot,connected:Pt},xt=q({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Te},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function St(e,t){const n=C({}),o=C();let a;J(async()=>{var i;(i=a)==null||i.stop(),o.value=void 0,F&&t.isActive.value&&e.locationStrategy&&(a=ue(),e.locationStrategy!=="connected"&&await U(),a.run(()=>{if(typeof e.locationStrategy=="function"){var l;o.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation}else{var c;o.value=(c=Te[e.locationStrategy](t,e,n))==null?void 0:c.updateLocation}}))}),F&&window.addEventListener("resize",s,{passive:!0}),D(()=>{var i;F&&window.removeEventListener("resize",s),o.value=void 0,(i=a)==null||i.stop()});function s(i){var l;(l=o.value)==null||l.call(o,i)}return{contentStyles:n,updateLocation:o}}function Ot(){}function kt(e){const t=_e(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Pt(e,t,n){const o=vt(e.activatorEl.value);o&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:s}=Me(()=>{const p=de(t.location,e.isRtl.value),d=t.origin==="overlap"?p:t.origin==="auto"?ee(p):de(t.origin,e.isRtl.value);return p.side===d.side&&p.align===te(d).align?{preferredAnchor:me(p),preferredOrigin:me(d)}:{preferredAnchor:p,preferredOrigin:d}}),[i,l,c,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(p=>k(()=>{const d=parseFloat(t[p]);return isNaN(d)?1/0:d})),u=k(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const p=t.offset.split(" ").map(parseFloat);return p.length<2&&p.push(0),p}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let m=!1;const h=new ResizeObserver(()=>{m&&y()});T([e.activatorEl,e.contentEl],(p,d)=>{let[O,S]=p,[b,r]=d;b&&h.unobserve(b),O&&h.observe(O),r&&h.unobserve(r),S&&h.observe(S)},{immediate:!0}),D(()=>{h.disconnect()});function y(){if(m=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>m=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const p=e.activatorEl.value.getBoundingClientRect(),d=kt(e.contentEl.value),O=Z(e.contentEl.value),S=12;O.length||(O.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(d.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),d.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const b=O.reduce((x,E)=>{const g=E.getBoundingClientRect(),w=new oe({x:E===document.documentElement?0:g.x,y:E===document.documentElement?0:g.y,width:E.clientWidth,height:E.clientHeight});return x?new oe({x:Math.max(x.left,w.left),y:Math.max(x.top,w.top),width:Math.min(x.right,w.right)-Math.max(x.left,w.left),height:Math.min(x.bottom,w.bottom)-Math.max(x.top,w.top)}):w},void 0);b.x+=S,b.y+=S,b.width-=S*2,b.height-=S*2;let r={anchor:a.value,origin:s.value};function H(x){const E=new oe(d),g=be(x.anchor,p),w=be(x.origin,E);let{x:_,y:A}=Et(g,w);switch(x.anchor.side){case"top":A-=u.value[0];break;case"bottom":A+=u.value[0];break;case"left":_-=u.value[0];break;case"right":_+=u.value[0];break}switch(x.anchor.align){case"top":A-=u.value[1];break;case"bottom":A+=u.value[1];break;case"left":_-=u.value[1];break;case"right":_+=u.value[1];break}return E.x+=_,E.y+=A,E.width=Math.min(E.width,c.value),E.height=Math.min(E.height,f.value),{overflows:he(E,b),x:_,y:A}}let M=0,N=0;const V={x:0,y:0},I={x:!1,y:!1};let $=-1;for(;;){if($++>10){Ne("Infinite loop detected in connectedLocationStrategy");break}const{x,y:E,overflows:g}=H(r);M+=x,N+=E,d.x+=x,d.y+=E;{const w=ye(r.anchor),_=g.x.before||g.x.after,A=g.y.before||g.y.after;let R=!1;if(["x","y"].forEach(v=>{if(v==="x"&&_&&!I.x||v==="y"&&A&&!I.y){const P={anchor:{...r.anchor},origin:{...r.origin}},ve=v==="x"?w==="y"?te:ee:w==="y"?ee:te;P.anchor=ve(P.anchor),P.origin=ve(P.origin);const{overflows:X}=H(P);(X[v].before<=g[v].before&&X[v].after<=g[v].after||X[v].before+X[v].after<(g[v].before+g[v].after)/2)&&(r=P,R=I[v]=!0)}}),R)continue}g.x.before&&(M+=g.x.before,d.x+=g.x.before),g.x.after&&(M-=g.x.after,d.x-=g.x.after),g.y.before&&(N+=g.y.before,d.y+=g.y.before),g.y.after&&(N-=g.y.after,d.y-=g.y.after);{const w=he(d,b);V.x=b.width-w.x.before-w.x.after,V.y=b.height-w.y.before-w.y.after,M+=w.x.before,d.x+=w.x.before,N+=w.y.before,d.y+=w.y.before}break}const G=ye(r.anchor);Object.assign(n.value,{"--v-overlay-anchor-origin":`${r.anchor.side} ${r.anchor.align}`,transformOrigin:`${r.origin.side} ${r.origin.align}`,top:B(Ee(N)),left:B(Ee(M)),minWidth:B(G==="y"?Math.min(i.value,p.width):i.value),maxWidth:B(xe(ge(V.x,i.value===1/0?0:i.value,c.value))),maxHeight:B(xe(ge(V.y,l.value===1/0?0:l.value,f.value)))})}return T(()=>[a.value,s.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>y(),{immediate:!o}),o&&U(()=>y()),requestAnimationFrame(()=>{n.value.maxHeight&&y()}),{updateLocation:y}}function Ee(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function xe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let le=!0;const Q=[];function Ct(e){!le||Q.length?(Q.push(e),se()):(le=!1,e(),se())}let Se=-1;function se(){cancelAnimationFrame(Se),Se=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?se():le=!0})}const ce={none:null,close:Lt,block:Tt,reposition:Bt},At=q({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ce}},"v-overlay-scroll-strategies");function _t(e,t){if(!F)return;let n;J(async()=>{var o;(o=n)==null||o.stop(),t.isActive.value&&e.scrollStrategy&&(n=ue(),await U(),n.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t,e);else{var a;(a=ce[e.scrollStrategy])==null||a.call(ce,t,e)}}))}),D(()=>{var o;(o=n)==null||o.stop()})}function Lt(e){var n;function t(o){e.isActive.value=!1}Be((n=e.activatorEl.value)!=null?n:e.contentEl.value,t)}function Tt(e,t){var n;const o=(n=e.root.value)==null?void 0:n.offsetParent,a=[...new Set([...Z(e.activatorEl.value,t.contained?o:void 0),...Z(e.contentEl.value,t.contained?o:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),s=window.innerWidth-document.documentElement.offsetWidth,i=(l=>fe(l)&&l)(o||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((l,c)=>{l.style.setProperty("--v-body-scroll-x",B(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",B(-l.scrollTop)),l.style.setProperty("--v-scrollbar-offset",B(s)),l.classList.add("v-overlay-scroll-blocked")}),D(()=>{a.forEach((l,c)=>{const f=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-f,l.scrollTop=-u}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Bt(e){var a;let t=!1,n=-1;function o(s){Ct(()=>{var i,l;const c=performance.now();(i=(l=e.updateLocation).value)==null||i.call(l,s),t=(performance.now()-c)/(1e3/60)>2})}Be((a=e.activatorEl.value)!=null?a:e.contentEl.value,s=>{t?(cancelAnimationFrame(n),n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{o(s)})})):o(s)})}function Be(e,t){const n=[document,...Z(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),D(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}function Ft(){var e,t,n;if(!F)return C(!1);const o=K("useHydration"),a=o==null||(e=o.root)==null||(t=e.appContext)==null||(n=t.app)==null?void 0:n._container,s=C(!!(a!=null&&a.__vue_app__));return s.value||Ie(()=>s.value=!0),s}const Oe=Symbol.for("vuetify:stack"),j=Ce([]);function $t(e,t){const n=K("useStack"),o=Pe(Oe,void 0),a=Ce({activeChildren:new Set});Ve(Oe,a);const s=C(+t.value);Ae(e,()=>{var c;const f=(c=j.at(-1))==null?void 0:c[1];s.value=f?f+10:+t.value,j.push([n.uid,s.value]),o==null||o.activeChildren.add(n.uid),D(()=>{const u=j.findIndex(m=>m[0]===n.uid);j.splice(u,1),o==null||o.activeChildren.delete(n.uid)})});const i=C(!0);J(()=>{var c;const f=((c=j.at(-1))==null?void 0:c[0])===n.uid;setTimeout(()=>i.value=f)});const l=k(()=>!a.activeChildren.size);return{globalTop:We(i),localTop:l,stackStyles:k(()=>({zIndex:s.value}))}}function Y(e){return{teleportTarget:k(()=>{const n=e.value;if(n===!0||!F)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o!=null){if(!Y.cache.has(o)){const a=document.createElement("div");a.className="v-overlay-container",o.appendChild(a),Y.cache.set(o,a)}return Y.cache.get(o)}})}}Y.cache=new WeakMap;function Rt(){return!0}function Fe(e,t,n){if(!e||$e(e,n)===!1)return!1;const o=Le(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(s=>s==null?void 0:s.contains(e.target))}function $e(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Rt)(e)}function Dt(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Fe(e,t,n)&&setTimeout(()=>{$e(e,n)&&o&&o(e)},0)}function ke(e,t){const n=Le(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Ht={mounted(e,t){const n=a=>Dt(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Fe(a,e,t)};ke(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){!e._clickOutside||(ke(e,n=>{var o;if(!n||!((o=e._clickOutside)!=null&&o[t.instance.$.uid]))return;const{onClick:a,onMousedown:s}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",a,!0),n.removeEventListener("mousedown",s,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Mt(e){const{modelValue:t,color:n,...o}=e;return L(ie,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&L("div",W({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Nt=q({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...gt(),...qe(),...wt(),...xt(),...At(),...je(),...ze()},"v-overlay"),It=Ye()({name:"VOverlay",directives:{ClickOutside:Ht},inheritAttrs:!1,props:Nt(),emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const s=Ue(e,"modelValue"),i=k({get:()=>s.value,set:v=>{v&&e.disabled||(s.value=v)}}),{teleportTarget:l}=Y(k(()=>e.attach||e.contained)),{themeClasses:c}=Xe(e),{rtlClasses:f,isRtl:u}=Ze(),{hasContent:m,onAfterLeave:h}=bt(e,i),y=Qe(k(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:p,localTop:d,stackStyles:O}=$t(i,Je(e,"zIndex")),{activatorEl:S,activatorRef:b,activatorEvents:r,contentEvents:H,scrimEvents:M}=ht(e,{isActive:i,isTop:d}),{dimensionStyles:N}=Ke(e),V=Ft();T(()=>e.disabled,v=>{v&&(i.value=!1)});const I=C(),$=C(),{contentStyles:G,updateLocation:x}=St(e,{isRtl:u,contentEl:$,activatorEl:S,isActive:i});_t(e,{root:I,contentEl:$,activatorEl:S,isActive:i,updateLocation:x});function E(v){a("click:outside",v),e.persistent?R():i.value=!1}function g(){return i.value&&p.value}F&&T(i,v=>{v?window.addEventListener("keydown",w):window.removeEventListener("keydown",w)},{immediate:!0});function w(v){v.key==="Escape"&&p.value&&(e.persistent?R():i.value=!1)}const _=Ge();Ae(()=>e.closeOnBack,()=>{et(_,v=>{p.value&&i.value?(v(!1),e.persistent?R():i.value=!1):v()})});const A=C();T(()=>i.value&&(e.absolute||e.contained)&&l.value==null,v=>{if(v){const P=ft(I.value);P&&P!==document.scrollingElement&&(A.value=P.scrollTop)}});function R(){e.noClickAnimation||$.value&&z($.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:re})}return tt(()=>{var v,P;return L(lt,null,[(v=n.activator)==null?void 0:v.call(n,{isActive:i.value,props:W({ref:b},ne(r.value),e.activatorProps)}),V.value&&L(nt,{disabled:!l.value,to:l.value},{default:()=>[m.value&&L("div",W({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},c.value,f.value],style:[O.value,{top:B(A.value)}],ref:I},o),[L(Mt,W({color:y,modelValue:i.value&&!!e.scrim},ne(M.value)),null),L(ot,{appear:!0,persisted:!0,transition:e.transition,target:S.value,onAfterLeave:()=>{h(),a("afterLeave")}},{default:()=>[at(L("div",W({ref:$,class:["v-overlay__content",e.contentClass],style:[N.value,G.value]},ne(H.value),e.contentProps),[(P=n.default)==null?void 0:P.call(n,{isActive:i})]),[[it,i.value],[rt("click-outside"),{handler:E,closeConditional:g,include:()=>[S.value]}]])]})])]})])}),{activatorEl:S,animateClick:R,contentEl:$,globalTop:p,localTop:d,updateLocation:x}}});function jt(e){return st(e,Object.keys(It.props))}function zt(){const t=K("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}export{qt as V,yt as a,It as b,jt as f,Nt as m,zt as u};
