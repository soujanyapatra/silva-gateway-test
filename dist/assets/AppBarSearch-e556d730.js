import{aJ as de,X as fe,ax as pe,av as he,G as K,l as _,$ as ve,ay as me,q as s,ag as N,ae as T,az as ge,F as x,b0 as ye,aB as H,aC as _e,d as xe,b1 as Ve,b2 as S,E as J,ao as ke,r as be,o as c,b as F,w as l,ah as Ce,aY as E,s as o,R as Se,b3 as Y,n as d,S as we,K as w,L as De,ak as Ie,c as b,a as M,I as W,y as P,p as Q,af as U,ar as Fe,as as Pe,H as Z,M as Be,N as Re,z as $e}from"./index-f1782c29.js";import{m as Ae,a as Me,u as Te,V as ee,f as ze,b as Le,c as Ke,h as Ne}from"./VDialog-2612f314.js";import{f as Ee}from"./forwardRefs-89227514.js";import{V as te,d as Qe,a as se,b as Ue}from"./VList-039b7e4b.js";import"./dialog-transition-5b0740e6.js";const je=["color","file","time","date","datetime-local","week","month"],Oe=de({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...Ae(),...Me()},"v-text-field"),Xe=fe()({name:"VTextField",directives:{Intersect:pe},inheritAttrs:!1,props:Oe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,V){let{attrs:r,emit:B,slots:u}=V;const f=he(e,"modelValue"),{isFocused:i,focus:z,blur:D}=Te(e),g=K(()=>typeof e.counterValue=="function"?e.counterValue(f.value):(f.value??"").toString().length),C=K(()=>{if(r.maxlength)return r.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function L(n,v){var m,k;!e.autofocus||!n||(k=(m=v[0].target)==null?void 0:m.focus)==null||k.call(m)}const R=_(),$=_(),t=_(),p=K(()=>je.includes(e.type)||e.persistentPlaceholder||i.value);function h(){var n;t.value!==document.activeElement&&((n=t.value)==null||n.focus()),i.value||z()}function a(n){B("mousedown:control",n),n.target!==t.value&&(h(),n.preventDefault())}function y(n){h(),B("click:control",n)}function j(n){n.stopPropagation(),h(),H(()=>{f.value=null,_e(e["onClick:clear"],n)})}function le(n){var m;const v=n.target;if(f.value=v.value,(m=e.modelModifiers)!=null&&m.trim&&["text","search","password","tel","url"].includes(e.type)){const k=[v.selectionStart,v.selectionEnd];H(()=>{v.selectionStart=k[0],v.selectionEnd=k[1]})}}return ve(()=>{const n=!!(u.counter||e.counter||e.counterValue),v=!!(n||u.details),[m,k]=me(r),[{modelValue:ot,...ne}]=ee.filterProps(e),[oe]=ze(e);return s(ee,N({ref:R,modelValue:f.value,"onUpdate:modelValue":I=>f.value=I,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},m,ne,{focused:i.value}),{...u,default:I=>{let{id:A,isDisabled:O,isDirty:X,isReadonly:ie,isValid:re}=I;return s(Le,N({ref:$,onMousedown:a,onClick:y,"onClick:clear":j,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},oe,{id:A.value,active:p.value||X.value,dirty:X.value||e.dirty,disabled:O.value,focused:i.value,error:re.value===!1}),{...u,default:ue=>{let{props:{class:q,...ce}}=ue;const G=T(s("input",N({ref:t,value:f.value,onInput:le,autofocus:e.autofocus,readonly:ie.value,disabled:O.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:h,onBlur:D},ce,k),null),[[ge("intersect"),{handler:L},null,{once:!0}]]);return s(x,null,[e.prefix&&s("span",{class:"v-text-field__prefix"},[e.prefix]),u.default?s("div",{class:q,"data-no-activator":""},[u.default(),G]):ye(G,{class:q}),e.suffix&&s("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:v?I=>{var A;return s(x,null,[(A=u.details)==null?void 0:A.call(u,I),n&&s(x,null,[s("span",null,null),s(Ke,{active:e.persistentCounter||i.value,value:g.value,max:C.value},u.counter)])])}:void 0})}),Ee({},R,$,t)}}),ae=e=>(Be("data-v-8d6e248d"),e=e(),Re(),e),qe={class:"d-flex align-center text-high-emphasis me-1"},Ge={class:"d-flex align-center"},He={class:"h-100"},Je={class:"text-xs text-disabled text-uppercase"},Ye={class:"h-100"},We={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},Ze={class:"d-flex align-center flex-wrap justify-center gap-2 text-h6 my-3"},et=ae(()=>d("span",null,"No Result For ",-1)),tt={key:0,class:"mt-8"},st=ae(()=>d("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),at=["onClick"],lt={class:"text-sm"},nt=xe({__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean},searchQuery:null,searchResults:null,suggestions:null,noDataSuggestion:null},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(e,{emit:V}){const r=e,{ctrl_k:B,meta_k:u}=Ve({passive:!1,onEventFired(t){t.ctrlKey&&t.key==="k"&&t.type==="keydown"&&t.preventDefault()}}),f=_(),i=_(structuredClone(S(r.searchQuery))),z=_(),D=_(structuredClone(S(r.isDialogVisible))),g=_(structuredClone(S(r.searchResults)));J(r,()=>{D.value=structuredClone(S(r.isDialogVisible)),g.value=structuredClone(S(r.searchResults)),i.value=structuredClone(S(r.searchQuery))}),J([B,u],()=>{D.value=!0,V("update:isDialogVisible",!0)});const C=()=>{V("update:isDialogVisible",!1),V("update:searchQuery","")};ke(()=>{i.value.length||(g.value=[])});const L=t=>{var p,h;t.key==="ArrowDown"?(t.preventDefault(),(p=f.value)==null||p.focus("next")):t.key==="ArrowUp"&&(t.preventDefault(),(h=f.value)==null||h.focus("prev"))},R=t=>{V("update:isDialogVisible",t),V("update:searchQuery","")},$=t=>t==="dashboards"?"Dashboards":t==="appsPages"?"Apps & Pages":t==="userInterface"?"User Interface":t==="formsTables"?"Forms Tables":t==="chartsMisc"?"Charts Misc":"Misc";return(t,p)=>{const h=be("IconBtn");return c(),F(Ne,{"max-width":"600","model-value":o(D),height:t.$vuetify.display.smAndUp?"550":"100%",fullscreen:t.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":R,onKeyup:Y(C,["esc"])},{default:l(()=>[s(Ce,{height:"100%",width:"100%",class:"position-relative"},{default:l(()=>[s(E,{class:"pt-1",style:{"min-block-size":"65px"}},{default:l(()=>[s(Xe,{ref_key:"refSearchInput",ref:z,modelValue:o(i),"onUpdate:modelValue":[p[0]||(p[0]=a=>Se(i)?i.value=a:null),p[1]||(p[1]=a=>t.$emit("update:searchQuery",o(i)))],autofocus:"",density:"comfortable",variant:"plain",class:"app-bar-autocomplete-box",onKeyup:Y(C,["esc"]),onKeydown:L},{"prepend-inner":l(()=>[d("div",qe,[s(we,{src:t.authThemeMask,class:"auth-footer-mask"},null,8,["src"])])]),"append-inner":l(()=>[d("div",Ge,[d("div",{class:"text-base text-disabled cursor-pointer me-1",onClick:C}," [esc] "),s(h,{size:"small",onClick:C},{default:l(()=>[s(w,{icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),s(De),s(o(Ie),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:l(()=>[T(s(o(te),{ref_key:"refSearchList",ref:f,density:"compact",class:"app-bar-search-list"},{default:l(()=>[(c(!0),b(x,null,M(o(g),a=>(c(),b(x,{key:a.title},["header"in a?(c(),F(o(Qe),{key:0,class:"text-disabled"},{default:l(()=>[W(P($(a.title)),1)]),_:2},1024)):Q(t.$slots,"searchResult",{key:1,item:a},()=>[s(o(se),{link:"",onClick:y=>t.$emit("itemSelected",a)},{prepend:l(()=>[s(w,{size:"20",icon:a.icon,class:"me-3"},null,8,["icon"])]),append:l(()=>[s(w,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:l(()=>[s(Ue,null,{default:l(()=>[W(P(a.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[U,o(i).length&&!!o(g).length]]),T(d("div",He,[Q(t.$slots,"suggestions",{},()=>[s(E,{class:"app-bar-search-suggestions h-100 pa-10"},{default:l(()=>[r.suggestions?(c(),F(Fe,{key:0,class:"gap-y-4"},{default:l(()=>[(c(!0),b(x,null,M(r.suggestions,a=>(c(),F(Pe,{key:a.title,cols:"12",sm:"6",class:"ps-6"},{default:l(()=>[d("p",Je,P(a.title),1),s(o(te),{class:"card-list"},{default:l(()=>[(c(!0),b(x,null,M(a.content,y=>(c(),F(o(se),{key:y.title,link:"",title:y.title,class:"app-bar-search-suggestion",onClick:j=>t.$emit("itemSelected",y)},{prepend:l(()=>[s(w,{icon:y.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):Z("",!0)]),_:1})],!0)],512),[[U,!!o(g)&&!o(i)]]),T(d("div",Ye,[Q(t.$slots,"noData",{},()=>[s(E,{class:"h-100"},{default:l(()=>[d("div",We,[s(w,{size:"75",icon:"tabler-file-x"}),d("div",Ze,[et,d("span",null,'"'+P(o(i))+'"',1)]),r.noDataSuggestion?(c(),b("div",tt,[st,(c(!0),b(x,null,M(r.noDataSuggestion,a=>(c(),b("h6",{key:a.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:y=>t.$emit("itemSelected",a)},[s(w,{size:"20",icon:a.icon,class:"me-3"},null,8,["icon"]),d("span",lt,P(a.title),1)],8,at))),128))])):Z("",!0)])]),_:1})],!0)],512),[[U,!o(g).length&&o(i).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"])}}});const ft=$e(nt,[["__scopeId","data-v-8d6e248d"]]);export{ft as default};