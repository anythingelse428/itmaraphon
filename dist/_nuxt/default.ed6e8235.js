import{_ as i,l as d,m as u,z as n,k as c,x as l,y as _,H as h,q as m,I as g}from"./entry.e59de0ad.js";const k={name:"NavigationMenu",data(){return{isOpened:!1}},methods:{doSticky(){var t;const s=this.$refs.nav;window.scrollY>=s.offsetTop?(s.classList.add("sticky"),(t=s.parentElement)==null||t.classList.add("sticky")):s.classList.remove("sticky")}},mounted(){this.doSticky()}},$=""+globalThis.__publicAssetsURL("assets/logo.svg"),E=""+globalThis.__publicAssetsURL("assets/icons/search.svg"),b=""+globalThis.__publicAssetsURL("assets/icons/blind.svg");const e=s=>(l("data-v-d71514ff"),s=s(),_(),s),y={class:"nav",ref:"nav"},B=e(()=>u("div",{class:"nav-brand"},[u("img",{src:$,width:"103",height:"60",alt:"УавиаК-МЦК",srcset:""})],-1)),A=h('<div class="nav-links" data-v-d71514ff><div class="nav-link" data-v-d71514ff>О колледже</div><div class="nav-link" data-v-d71514ff>Абитуриентам</div><div class="nav-link" data-v-d71514ff>Студентам</div><div class="nav-link" data-v-d71514ff>Преподавателям</div><div class="nav-link" data-v-d71514ff>Трудоустройство</div><div class="nav-link" data-v-d71514ff>Автошкола</div></div>',1),S=[A],w={class:"nav-tools"},x=e(()=>u("div",{class:"nav-tool"},[u("img",{src:E,alt:"Поиск",width:"18",height:"18"})],-1)),F=e(()=>u("div",{class:"nav-tool"},[u("img",{src:b,alt:"Версия для слабовидящих",width:"26",height:"18"})],-1));function I(s,t,r,p,a,f){return c(),d("nav",y,[B,u("div",{class:n(["nav-collapse",a.isOpened&&"active"])},S,2),u("div",w,[x,F,u("div",{class:n(["nav-toggler",a.isOpened&&"active"]),onClick:t[0]||(t[0]=o=>a.isOpened=!a.isOpened)},null,2)])],512)}const v=i(k,[["render",I],["__scopeId","data-v-d71514ff"]]),N={components:{NavigationMenu:v}};const C=s=>(l("data-v-2a5b62d5"),s=s(),_(),s),L={class:"layout --default"},O={class:"container"},M=C(()=>u("footer",null,null,-1));function T(s,t,r,p,a,f){const o=v;return c(),d("div",L,[m(o),u("main",O,[g(s.$slots,"default",{},void 0,!0)]),M])}const U=i(N,[["render",T],["__scopeId","data-v-2a5b62d5"]]);export{U as default};
