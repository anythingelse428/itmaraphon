import{_ as x}from"./nuxt-link.6db91499.js";import{_ as c}from"./_plugin-vue_export-helper.c27b6911.js";import{g as N,w as e,o as l,i as f,c as g,a as s,b as n,n as v,d as a,p as m,e as h}from"./entry.a27faa0e.js";const E={name:"NavigationLink",props:{link:{type:String,default:"/"}}};function B(u,_,i,p,o,r){const t=x;return l(),N(t,{class:"nav-link",to:i.link},{default:e(()=>[f(u.$slots,"default",{},void 0,!0)]),_:3},8,["to"])}const $=c(E,[["render",B],["__scopeId","data-v-97a30665"]]),b={name:"NavigationMenu",components:{NavigationLink:$},data(){return{isOpened:!1}}},y=""+globalThis.__publicAssetsURL("assets/logo.svg"),A=""+globalThis.__publicAssetsURL("assets/icons/search.svg"),L=""+globalThis.__publicAssetsURL("assets/icons/blind.svg");const d=u=>(m("data-v-36f7cef0"),u=u(),h(),u),w={class:"nav",ref:"nav"},C=d(()=>s("div",{class:"nav-brand"},[s("img",{src:y,width:"103",height:"60",alt:"УавиаК-МЦК",srcset:""})],-1)),F={class:"nav-links"},I={class:"nav-tools"},S=d(()=>s("div",{class:"nav-tool"},[s("img",{src:A,alt:"Поиск",width:"18",height:"18"})],-1)),O=d(()=>s("div",{class:"nav-tool"},[s("img",{src:L,alt:"Версия для слабовидящих",width:"26",height:"18"})],-1));function M(u,_,i,p,o,r){const t=$;return l(),g("nav",w,[C,s("div",{class:v(["nav-collapse",o.isOpened&&"active"])},[s("div",F,[n(t,null,{default:e(()=>[a("О колледже")]),_:1}),n(t,null,{default:e(()=>[a("Абитуриентам")]),_:1}),n(t,null,{default:e(()=>[a("Студентам")]),_:1}),n(t,null,{default:e(()=>[a("Преподавателям")]),_:1}),n(t,null,{default:e(()=>[a("Трудоустройство")]),_:1}),n(t,null,{default:e(()=>[a("Автошкола")]),_:1})])],2),s("div",I,[S,O,s("div",{class:v(["nav-toggler",o.isOpened&&"active"]),onClick:_[0]||(_[0]=j=>o.isOpened=!o.isOpened)},null,2)])],512)}const k=c(b,[["render",M],["__scopeId","data-v-36f7cef0"]]),T={components:{NavigationMenu:k}};const R=u=>(m("data-v-274572e7"),u=u(),h(),u),U={class:"layout --default"},V={class:"container"},D=R(()=>s("footer",null,null,-1));function z(u,_,i,p,o,r){const t=k;return l(),g("div",U,[n(t),s("main",V,[f(u.$slots,"default",{},void 0,!0)]),D])}const J=c(T,[["render",z],["__scopeId","data-v-274572e7"]]);export{J as default};