import{_ as b}from"./nuxt-link.a78671a8.js";import{_ as c}from"./_plugin-vue_export-helper.c27b6911.js";import{k as y,w as n,o as l,q as f,c as m,a as t,b as o,n as v,d as _,p as h,e as g}from"./entry.bd5f8dd0.js";const x={name:"NavigationLink",props:{link:{type:String,default:"/"}}};function E(s,e,i,r,a,p){const u=b;return l(),y(u,{class:"nav-link",to:i.link},{default:n(()=>[f(s.$slots,"default",{},void 0,!0)]),_:3},8,["to"])}const $=c(x,[["render",E],["__scopeId","data-v-10ad8f7b"]]),N={name:"NavigationMenu",components:{NavigationLink:$},data(){return{isOpened:!1}},methods:{doSticky(){var e;const s=this.$refs.nav;window.scrollY>=s.offsetTop?(s.classList.add("sticky"),(e=s.parentElement)==null||e.classList.add("sticky")):s.classList.remove("sticky")}},mounted(){this.doSticky()}},L=""+globalThis.__publicAssetsURL("assets/logo.svg"),B=""+globalThis.__publicAssetsURL("assets/icons/search.svg"),w=""+globalThis.__publicAssetsURL("assets/icons/blind.svg");const d=s=>(h("data-v-58f92674"),s=s(),g(),s),A={class:"nav",ref:"nav"},S=d(()=>t("div",{class:"nav-brand"},[t("img",{src:L,width:"103",height:"60",alt:"УавиаК-МЦК",srcset:""})],-1)),C={class:"nav-links"},F={class:"nav-tools"},I=d(()=>t("div",{class:"nav-tool"},[t("img",{src:B,alt:"Поиск",width:"18",height:"18"})],-1)),O=d(()=>t("div",{class:"nav-tool"},[t("img",{src:w,alt:"Версия для слабовидящих",width:"26",height:"18"})],-1));function T(s,e,i,r,a,p){const u=$;return l(),m("nav",A,[S,t("div",{class:v(["nav-collapse",a.isOpened&&"active"])},[t("div",C,[o(u,null,{default:n(()=>[_("О колледже")]),_:1}),o(u,null,{default:n(()=>[_("Абитуриентам")]),_:1}),o(u,null,{default:n(()=>[_("Студентам")]),_:1}),o(u,null,{default:n(()=>[_("Преподавателям")]),_:1}),o(u,null,{default:n(()=>[_("Трудоустройство")]),_:1}),o(u,null,{default:n(()=>[_("Автошкола")]),_:1})])],2),t("div",F,[I,O,t("div",{class:v(["nav-toggler",a.isOpened&&"active"]),onClick:e[0]||(e[0]=z=>a.isOpened=!a.isOpened)},null,2)])],512)}const k=c(N,[["render",T],["__scopeId","data-v-58f92674"]]),M={components:{NavigationMenu:k}};const R=s=>(h("data-v-f364b942"),s=s(),g(),s),U={class:"layout --default"},V={class:"container"},D=R(()=>t("footer",null,null,-1));function q(s,e,i,r,a,p){const u=k;return l(),m("div",U,[o(u),t("main",V,[f(s.$slots,"default",{},void 0,!0)]),D])}const H=c(M,[["render",q],["__scopeId","data-v-f364b942"]]);export{H as default};
