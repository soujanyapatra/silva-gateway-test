import{d as m,k as h,r as g,o,b as l,w as e,q as t,K as n,ah as x,ai as V,aj as C,I as v,L as y,s as p,ak as S,ar as k,c as A,F as I,a as w,as as B,t as D,J as N,n as d,y as _}from"./index-8e1e3e33.js";import{V as z}from"./VMenu-70c0e6b4.js";import"./forwardRefs-83b3f6ce.js";import"./dialog-transition-48e3f55e.js";const F={class:"text-base font-weight-medium mt-2 mb-0"},M={class:"text-sm"},$=m({__name:"Shortcuts",props:{togglerIcon:{default:"tabler-layout-grid-add"},shortcuts:null},setup(r){const s=r,c=h();return(b,i)=>{const u=g("IconBtn");return o(),l(u,null,{default:e(()=>[t(n,{size:"26",icon:s.togglerIcon},null,8,["icon"]),t(z,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(x,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(V,{class:"py-4"},{append:e(()=>[t(u,null,{default:e(()=>[t(n,{icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(C,null,{default:e(()=>[v("Shortcuts")]),_:1})]),_:1}),t(y),t(p(S),{options:{wheelPropagation:!1}},{default:e(()=>[t(k,{class:"ma-0 mt-n1"},{default:e(()=>[(o(!0),A(I,null,w(s.shortcuts,(a,f)=>(o(),l(B,{key:a.title,cols:"6",class:D(["text-center border-t cursor-pointer pa-4 shortcut-icon",(f+1)%2?"border-e":""]),onClick:L=>p(c).push(a.to)},{default:e(()=>[t(N,{variant:"tonal",size:"48"},{default:e(()=>[t(n,{icon:a.icon},null,8,["icon"])]),_:2},1024),d("h6",F,_(a.title),1),d("span",M,_(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});const j=m({__name:"NavbarShortcuts",setup(r){const s=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-layout",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"tabler-help",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(c,b)=>{const i=$;return o(),l(i,{shortcuts:s})}}});export{j as default};
