import{aJ as q,be as W,l as C,G as k,aQ as Se,E as T,ao as le,aB as Q,bx as Te,bg as ce,by as pe,aN as B,aT as Fe,bd as ue,bz as Le,bA as ve,bB as Z,bC as ee,bD as de,bE as Be,bF as me,aD as L,aE as ye,bG as De,D as Me,W as Oe,aM as Ie,bh as _e,b2 as He,Y as Ne,bl as We,a3 as ze,a4 as Ve,X as qe,av as je,b7 as $e,bH as Ge,a5 as Ye,a6 as Ue,bs as Je,bI as Ke,$ as Xe,q as _,ag as Y,bJ as te,bK as Qe,ad as Ze,ae as et,af as tt,az as nt,F as ot,T as at,bL as rt}from"./index-8e1e3e33.js";class V{constructor(t){let{x:n,y:o,width:a,height:r}=t;this.x=n,this.y=o,this.width=a,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function he(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function it(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),o=n.transform;if(o){let a,r,i,s,c;if(o.startsWith("matrix3d("))a=o.slice(9,-1).split(/, /),r=+a[0],i=+a[5],s=+a[12],c=+a[13];else if(o.startsWith("matrix("))a=o.slice(7,-1).split(/, /),r=+a[0],i=+a[3],s=+a[4],c=+a[5];else return new V(t);const f=n.transformOrigin,u=t.x-s-(1-r)*parseFloat(f),v=t.y-c-(1-i)*parseFloat(f.slice(f.indexOf(" ")+1)),m=r?t.width/r:e.offsetWidth+1,E=i?t.height/i:e.offsetHeight+1;return new V({x:u,y:v,width:m,height:E})}else return new V(t)}function st(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let o;try{o=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof o.finished>"u"&&(o.finished=new Promise(a=>{o.onfinish=()=>{a(o)}})),o}function Pe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const lt="cubic-bezier(0.4, 0, 0.2, 1)",zt="cubic-bezier(0.0, 0, 0.2, 1)",Vt="cubic-bezier(0.4, 0, 1, 1)";function ct(e){for(;e;){if(fe(e))return e;e=e.parentElement}return document.scrollingElement}function K(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(fe(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function fe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function ut(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const ft=q({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function vt(e,t){const n={},o=a=>()=>{if(!W)return Promise.resolve(!0);const r=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(i=>{const s=parseInt(e[a]??0,10);n[a]=window.setTimeout(()=>{t==null||t(r),i(r)},s)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const dt=Symbol.for("vuetify:v-menu"),mt=q({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...ft()},"v-overlay-activator");function yt(e,t){let{isActive:n,isTop:o}=t;const a=C();let r=!1,i=!1,s=!0;const c=k(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=k(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:u,runCloseDelay:v}=vt(e,l=>{l===(e.openOnHover&&r||c.value&&i)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==l&&(s=!0),n.value=l)}),m={click:l=>{l.stopPropagation(),a.value=l.currentTarget||l.target,n.value=!n.value},mouseenter:l=>{var A;(A=l.sourceCapabilities)!=null&&A.firesTouchEvents||(r=!0,a.value=l.currentTarget||l.target,u())},mouseleave:l=>{r=!1,v()},focus:l=>{Fe&&!l.target.matches(":focus-visible")||(i=!0,l.stopPropagation(),a.value=l.currentTarget||l.target,u())},blur:l=>{i=!1,l.stopPropagation(),v()}},E=k(()=>{const l={};return f.value&&(l.click=m.click),e.openOnHover&&(l.mouseenter=m.mouseenter,l.mouseleave=m.mouseleave),c.value&&(l.focus=m.focus,l.blur=m.blur),l}),y=k(()=>{const l={};if(e.openOnHover&&(l.mouseenter=()=>{r=!0,u()},l.mouseleave=()=>{r=!1,v()}),e.closeOnContentClick){const A=Se(dt,null);l.click=()=>{n.value=!1,A==null||A.closeParents()}}return l}),d=k(()=>{const l={};return e.openOnHover&&(l.mouseenter=()=>{s&&(r=!0,s=!1,u())},l.mouseleave=()=>{r=!1,v()}),l});T(o,l=>{l&&(e.openOnHover&&!r&&(!c.value||!i)||c.value&&!i&&(!e.openOnHover||!r))&&(n.value=!1)});const P=C();le(()=>{P.value&&Q(()=>{const l=P.value;a.value=Te(l)?l.$el:l})});const O=ce("useActivator");let w;return T(()=>!!e.activator,l=>{l&&W?(w=pe(),w.run(()=>{ht(e,O,{activatorEl:a,activatorEvents:E})})):w&&w.stop()},{flush:"post",immediate:!0}),B(()=>{w==null||w.stop()}),{activatorEl:a,activatorRef:P,activatorEvents:E,contentEvents:y,scrimEvents:d}}function ht(e,t,n){let{activatorEl:o,activatorEvents:a}=n;T(()=>e.activator,(c,f)=>{if(f&&c!==f){const u=s(f);u&&i(u)}c&&Q(()=>r())},{immediate:!0}),T(()=>e.activatorProps,()=>{r()}),B(()=>{i()});function r(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&(Object.entries(a.value).forEach(u=>{let[v,m]=u;c.addEventListener(v,m)}),Object.keys(f).forEach(u=>{f[u]==null?c.removeAttribute(u):c.setAttribute(u,f[u])}))}function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&(Object.entries(a.value).forEach(u=>{let[v,m]=u;c.removeEventListener(v,m)}),Object.keys(f).forEach(u=>{c.removeAttribute(u)}))}function s(){var u,v;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,f;if(c)if(c==="parent"){let m=(v=(u=t==null?void 0:t.proxy)==null?void 0:u.$el)==null?void 0:v.parentNode;for(;m.hasAttribute("data-no-activator");)m=m.parentNode;f=m}else typeof c=="string"?f=document.querySelector(c):"$el"in c?f=c.$el:f=c;return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:null,o.value}}const gt=q({eager:Boolean},"lazy");function bt(e,t){const n=C(!1),o=k(()=>n.value||e.eager||t.value);T(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}function ne(e,t){return{x:e.x+t.x,y:e.y+t.y}}function wt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ge(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,r=n==="top"?0:n==="bottom"?t.height:n;return ne({x:a,y:r},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,r=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return ne({x:a,y:r},t)}return ne({x:t.width/2,y:t.height/2},t)}const ke={static:St,connected:Ot},xt=q({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in ke},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function Et(e,t){const n=C({}),o=C();W&&(ue(()=>!!(t.isActive.value&&e.locationStrategy),r=>{var i,s;T(()=>e.locationStrategy,r),B(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(i=e.locationStrategy(t,e,n))==null?void 0:i.updateLocation:o.value=(s=ke[e.locationStrategy](t,e,n))==null?void 0:s.updateLocation}),window.addEventListener("resize",a,{passive:!0}),B(()=>{window.removeEventListener("resize",a),o.value=void 0}));function a(r){var i;(i=o.value)==null||i.call(o,r)}return{contentStyles:n,updateLocation:o}}function St(){}function pt(e,t){const n=it(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function Ot(e,t,n){ut(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:r}=Le(()=>{const y=ve(t.location,e.isRtl.value),d=t.origin==="overlap"?y:t.origin==="auto"?Z(y):ve(t.origin,e.isRtl.value);return y.side===d.side&&y.align===ee(d).align?{preferredAnchor:de(y),preferredOrigin:de(d)}:{preferredAnchor:y,preferredOrigin:d}}),[i,s,c,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(y=>k(()=>{const d=parseFloat(t[y]);return isNaN(d)?1/0:d})),u=k(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const y=t.offset.split(" ").map(parseFloat);return y.length<2&&y.push(0),y}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let v=!1;const m=new ResizeObserver(()=>{v&&E()});T([e.activatorEl,e.contentEl],(y,d)=>{let[P,O]=y,[w,l]=d;w&&m.unobserve(w),P&&m.observe(P),l&&m.unobserve(l),O&&m.observe(O)},{immediate:!0}),B(()=>{m.disconnect()});function E(){if(v=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>v=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const y=e.activatorEl.value.getBoundingClientRect(),d=pt(e.contentEl.value,e.isRtl.value),P=K(e.contentEl.value),O=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(d.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),d.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=P.reduce((S,x)=>{const h=x.getBoundingClientRect(),b=new V({x:x===document.documentElement?0:h.x,y:x===document.documentElement?0:h.y,width:x.clientWidth,height:x.clientHeight});return S?new V({x:Math.max(S.left,b.left),y:Math.max(S.top,b.top),width:Math.min(S.right,b.right)-Math.max(S.left,b.left),height:Math.min(S.bottom,b.bottom)-Math.max(S.top,b.top)}):b},void 0);w.x+=O,w.y+=O,w.width-=O*2,w.height-=O*2;let l={anchor:a.value,origin:r.value};function A(S){const x=new V(d),h=ge(S.anchor,y),b=ge(S.origin,x);let{x:R,y:F}=wt(h,b);switch(S.anchor.side){case"top":F-=u.value[0];break;case"bottom":F+=u.value[0];break;case"left":R-=u.value[0];break;case"right":R+=u.value[0];break}switch(S.anchor.align){case"top":F-=u.value[1];break;case"bottom":F+=u.value[1];break;case"left":R-=u.value[1];break;case"right":R+=u.value[1];break}return x.x+=R,x.y+=F,x.width=Math.min(x.width,c.value),x.height=Math.min(x.height,f.value),{overflows:he(x,w),x:R,y:F}}let M=0,H=0;const N={x:0,y:0},j={x:!1,y:!1};let $=-1;for(;;){if($++>10){Be("Infinite loop detected in connectedLocationStrategy");break}const{x:S,y:x,overflows:h}=A(l);M+=S,H+=x,d.x+=S,d.y+=x;{const b=me(l.anchor),R=h.x.before||h.x.after,F=h.y.before||h.y.after;let z=!1;if(["x","y"].forEach(p=>{if(p==="x"&&R&&!j.x||p==="y"&&F&&!j.y){const g={anchor:{...l.anchor},origin:{...l.origin}},D=p==="x"?b==="y"?ee:Z:b==="y"?Z:ee;g.anchor=D(g.anchor),g.origin=D(g.origin);const{overflows:U}=A(g);(U[p].before<=h[p].before&&U[p].after<=h[p].after||U[p].before+U[p].after<(h[p].before+h[p].after)/2)&&(l=g,z=j[p]=!0)}}),z)continue}h.x.before&&(M+=h.x.before,d.x+=h.x.before),h.x.after&&(M-=h.x.after,d.x-=h.x.after),h.y.before&&(H+=h.y.before,d.y+=h.y.before),h.y.after&&(H-=h.y.after,d.y-=h.y.after);{const b=he(d,w);N.x=w.width-b.x.before-b.x.after,N.y=w.height-b.y.before-b.y.after,M+=b.x.before,d.x+=b.x.before,H+=b.y.before,d.y+=b.y.before}break}const I=me(l.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${l.anchor.side} ${l.anchor.align}`,transformOrigin:`${l.origin.side} ${l.origin.align}`,top:L(oe(H)),left:e.isRtl.value?void 0:L(oe(M)),right:e.isRtl.value?L(oe(-M)):void 0,minWidth:L(I==="y"?Math.min(i.value,y.width):i.value),maxWidth:L(be(ye(N.x,i.value===1/0?0:i.value,c.value))),maxHeight:L(be(ye(N.y,s.value===1/0?0:s.value,f.value)))}),{available:N,contentBox:d}}return T(()=>[a.value,r.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>E()),Q(()=>{const y=E();if(!y)return;const{available:d,contentBox:P}=y;P.height>d.y&&requestAnimationFrame(()=>{E(),requestAnimationFrame(()=>{E()})})}),{updateLocation:E}}function oe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function be(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ie=!0;const X=[];function Pt(e){!ie||X.length?(X.push(e),se()):(ie=!1,e(),se())}let we=-1;function se(){cancelAnimationFrame(we),we=requestAnimationFrame(()=>{const e=X.shift();e&&e(),X.length?se():ie=!0})}const J={none:null,close:At,block:Rt,reposition:Tt},kt=q({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"v-overlay-scroll-strategies");function Ct(e,t){if(!W)return;let n;le(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=pe(),await Q(),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=J[e.scrollStrategy])==null||o.call(J,t,e,n)}))}),B(()=>{n==null||n.stop()})}function At(e){function t(n){e.isActive.value=!1}Ce(e.activatorEl.value??e.contentEl.value,t)}function Rt(e,t){var i;const n=(i=e.root.value)==null?void 0:i.offsetParent,o=[...new Set([...K(e.activatorEl.value,t.contained?n:void 0),...K(e.contentEl.value,t.contained?n:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(s=>fe(s)&&s)(n||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((s,c)=>{s.style.setProperty("--v-body-scroll-x",L(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",L(-s.scrollTop)),s.style.setProperty("--v-scrollbar-offset",L(a)),s.classList.add("v-overlay-scroll-blocked")}),B(()=>{o.forEach((s,c)=>{const f=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-f,s.scrollTop=-u}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Tt(e,t,n){let o=!1,a=-1,r=-1;function i(s){Pt(()=>{var u,v;const c=performance.now();(v=(u=e.updateLocation).value)==null||v.call(u,s),o=(performance.now()-c)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{n.run(()=>{Ce(e.activatorEl.value??e.contentEl.value,s=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{i(s)})})):i(s)})})}),B(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function Ce(e,t){const n=[document,...K(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),B(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}function Ft(){if(!W)return C(!1);const{ssr:e}=De();if(e){const t=C(!1);return Me(()=>{t.value=!0}),t}else return C(!0)}function Lt(){const t=ce("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const xe=Symbol.for("vuetify:stack"),G=Oe([]);function Bt(e,t,n){const o=ce("useStack"),a=!n,r=Se(xe,void 0),i=Oe({activeChildren:new Set});Ie(xe,i);const s=C(+t.value);ue(e,()=>{var v;const u=(v=G.at(-1))==null?void 0:v[1];s.value=u?u+10:+t.value,a&&G.push([o.uid,s.value]),r==null||r.activeChildren.add(o.uid),B(()=>{if(a){const m=He(G).findIndex(E=>E[0]===o.uid);G.splice(m,1)}r==null||r.activeChildren.delete(o.uid)})});const c=C(!0);a&&le(()=>{var v;const u=((v=G.at(-1))==null?void 0:v[0])===o.uid;setTimeout(()=>c.value=u)});const f=k(()=>!i.activeChildren.size);return{globalTop:_e(c),localTop:f,stackStyles:k(()=>({zIndex:s.value}))}}function Dt(e){return{teleportTarget:k(()=>{const n=e.value;if(n===!0||!W)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Mt(){return!0}function Ae(e,t,n){if(!e||Re(e,n)===!1)return!1;const o=Pe(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(r=>r==null?void 0:r.contains(e.target))}function Re(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Mt)(e)}function It(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Ae(e,t,n)&&setTimeout(()=>{Re(e,n)&&o&&o(e)},0)}function Ee(e,t){const n=Pe(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const _t={mounted(e,t){const n=a=>It(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Ae(a,e,t)};Ee(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(Ee(e,n=>{var r;if(!n||!((r=e._clickOutside)!=null&&r[t.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Ht(e){const{modelValue:t,color:n,...o}=e;return _(at,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&_("div",Y({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Nt=q({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...mt(),...Ne(),...We(),...gt(),...xt(),...kt(),...ze(),...Ve()},"v-overlay"),qt=qe()({name:"VOverlay",directives:{ClickOutside:_t},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Nt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const r=je(e,"modelValue"),i=k({get:()=>r.value,set:g=>{g&&e.disabled||(r.value=g)}}),{teleportTarget:s}=Dt(k(()=>e.attach||e.contained)),{themeClasses:c}=$e(e),{rtlClasses:f,isRtl:u}=Ge(),{hasContent:v,onAfterLeave:m}=bt(e,i),E=Ye(k(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:y,localTop:d,stackStyles:P}=Bt(i,Ue(e,"zIndex"),e._disableGlobalStack),{activatorEl:O,activatorRef:w,activatorEvents:l,contentEvents:A,scrimEvents:M}=yt(e,{isActive:i,isTop:d}),{dimensionStyles:H}=Je(e),N=Ft(),{scopeId:j}=Lt();T(()=>e.disabled,g=>{g&&(i.value=!1)});const $=C(),I=C(),{contentStyles:S,updateLocation:x}=Et(e,{isRtl:u,contentEl:I,activatorEl:O,isActive:i});Ct(e,{root:$,contentEl:I,activatorEl:O,isActive:i,updateLocation:x});function h(g){a("click:outside",g),e.persistent?p():i.value=!1}function b(){return i.value&&y.value}W&&T(i,g=>{g?window.addEventListener("keydown",R):window.removeEventListener("keydown",R)},{immediate:!0});function R(g){g.key==="Escape"&&y.value&&(e.persistent?p():i.value=!1)}const F=Ke();ue(()=>e.closeOnBack,()=>{rt(F,g=>{y.value&&i.value?(g(!1),e.persistent?p():i.value=!1):g()})});const z=C();T(()=>i.value&&(e.absolute||e.contained)&&s.value==null,g=>{if(g){const D=ct($.value);D&&D!==document.scrollingElement&&(z.value=D.scrollTop)}});function p(){e.noClickAnimation||I.value&&st(I.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:lt})}return Xe(()=>{var g;return _(ot,null,[(g=n.activator)==null?void 0:g.call(n,{isActive:i.value,props:Y({ref:w},te(l.value),e.activatorProps)}),N.value&&_(Qe,{disabled:!s.value,to:s.value},{default:()=>[v.value&&_("div",Y({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},c.value,f.value,e.class],style:[P.value,{top:L(z.value)},e.style],ref:$},j,o),[_(Ht,Y({color:E,modelValue:i.value&&!!e.scrim},te(M.value)),null),_(Ze,{appear:!0,persisted:!0,transition:e.transition,target:O.value,onAfterLeave:()=>{m(),a("afterLeave")}},{default:()=>{var D;return[et(_("div",Y({ref:I,class:["v-overlay__content",e.contentClass],style:[H.value,S.value]},te(A.value),e.contentProps),[(D=n.default)==null?void 0:D.call(n,{isActive:i})]),[[tt,i.value],[nt("click-outside"),{handler:h,closeConditional:b,include:()=>[O.value]}]])]}})])]})])}),{activatorEl:O,animateClick:p,contentEl:I,globalTop:y,localTop:d,updateLocation:x}}}),ae=Symbol("Forwarded refs");function re(e,t){let n=e;for(;n;){const o=Reflect.getOwnPropertyDescriptor(n,t);if(o)return o;n=Object.getPrototypeOf(n)}}function jt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return e[ae]=n,new Proxy(e,{get(a,r){if(Reflect.has(a,r))return Reflect.get(a,r);if(!(typeof r=="symbol"||r.startsWith("__"))){for(const i of n)if(i.value&&Reflect.has(i.value,r)){const s=Reflect.get(i.value,r);return typeof s=="function"?s.bind(i.value):s}}},has(a,r){if(Reflect.has(a,r))return!0;if(typeof r=="symbol"||r.startsWith("__"))return!1;for(const i of n)if(i.value&&Reflect.has(i.value,r))return!0;return!1},getOwnPropertyDescriptor(a,r){var s;const i=Reflect.getOwnPropertyDescriptor(a,r);if(i)return i;if(!(typeof r=="symbol"||r.startsWith("__"))){for(const c of n){if(!c.value)continue;const f=re(c.value,r)??("_"in c.value?re((s=c.value._)==null?void 0:s.setupState,r):void 0);if(f)return f}for(const c of n){const f=c.value&&c.value[ae];if(!f)continue;const u=f.slice();for(;u.length;){const v=u.shift(),m=re(v.value,r);if(m)return m;const E=v.value&&v.value[ae];E&&u.push(...E)}}}}})}export{qt as V,dt as a,st as b,Vt as c,zt as d,jt as f,Nt as m,it as n,lt as s,Lt as u};
