import{f as u,r as g,g as w,h as k,i as x,o as d,c as _,a as r,t as y,n as D,p as N,e as I,F as B,j as H,k as C,b as m,l as S}from"./entry.53200b7c.js";import{_ as p}from"./_plugin-vue_export-helper.c27b6911.js";const q=(e,s=500)=>{let o,n,i;return function(){const t=this,a=arguments;o?(clearTimeout(n),n=setTimeout(()=>{Date.now()-i>=s&&(e.apply(t,a),i=Date.now())},Math.max(s-(Date.now()-i),0))):(e.apply(t,a),i=Date.now(),o=!0)}},h=e=>(N("data-v-ee7c491a"),e=e(),I(),e),A={class:"history-item__header"},P={class:"history-item__year"},$={class:"history-item__description"},L={class:"history-item__step",ref:"start"},R=h(()=>r("div",{class:"small-light"},null,-1)),T=h(()=>r("div",{class:"big-light"},null,-1)),E=[R,T],Q={class:"history-item__line"},Y=h(()=>r("div",{class:"history-item__line --main"},[r("div",{class:"svg"})],-1)),z={class:"history-item__line --sub"},F=h(()=>r("div",{class:"svg"},null,-1)),M={class:"history-item__info"},V=u({__name:"HistoryItem",props:{year:{type:Number,requred:!0},shortDescripton:{type:String,requred:!0},info:{type:String,requred:!0},currentArea:{type:Number,default:1985},isReversed:{type:Boolean,requred:!0}},setup(e){const s=e,o=g(!0);w(()=>{o.value=window.innerWidth>1350,window.addEventListener("resize",()=>{o.value=window.innerWidth>1350})}),k(()=>{window.removeEventListener("resize",()=>{o.value=window.innerWidth>1350})});const n=x({get(){return s.currentArea===s.year},set(){return s.currentArea===s.year}});return(i,t)=>(d(),_("section",{class:D((n.value?"--current":"--muted")+(e.isReversed&&o.value?" --reversed":"")+" history-item")},[r("div",A,[r("div",P,y(e.year),1),r("div",$,y(e.shortDescripton),1)]),r("div",L,E,512),r("div",Q,[Y,r("div",z,[F,r("div",M,y(e.info),1)])])],2))}});const W=p(V,[["__scopeId","data-v-ee7c491a"]]),j=u({__name:"PaginationBullet",props:{order:{type:Number,required:!0},active:{type:Number,default:0}},setup(e){const s=e;function o(i){const t=document.querySelector("#page_"+i),a=Number(t==null?void 0:t.clientHeight);Number(t==null?void 0:t.getBoundingClientRect().y)&&a&&t&&window.scrollTo({top:(t==null?void 0:t.getBoundingClientRect().y)+window.scrollY-a/1.2})}const n=x({get(){return s.active===s.order},set(){return s.active===s.order}});return(i,t)=>(d(),_("div",{onClick:t[0]||(t[0]=a=>o(e.order)),class:D("pagination-bullet"+(n.value?" active":""))},null,2))}});const O=p(j,[["__scopeId","data-v-816707de"]]),U={class:"pagination"},G=u({__name:"PaginationNav",props:{pagesQty:{type:Number,required:!0},current:{type:Number,default:0}},setup(e){return(s,o)=>(d(),_("div",U,[(d(!0),_(B,null,H(e.pagesQty,n=>(d(),C(O,{key:n,order:n-1,active:e.current},null,8,["order","active"]))),128))]))}});const J=p(G,[["__scopeId","data-v-06f3ead5"]]),K={key:0,class:"history"},X={class:"history__pagination"},Z={class:"history__row"},ee=u({__name:"HistoryLine",setup(e){const s=[{id:0,year:1985,shortDescription:"Дата создания образовательной организации",info:"Ульяновский авиационный колледж ведет свою историю с 9 июля 1985 года, с даты, когда приказом Министра авиационной промышленности СССР №200 на базе строящегося гиганта авиационной промышленности страны Ульяновского авиационного промышленного комплекса им. Д. Ф. Устинова был образован Ульяновский авиационный техникум."},{id:1,year:1988,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:2,year:1989,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:3,year:1990,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:4,year:1996,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:5,year:1999,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:6,year:2e3,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."}],o=g(1985),n=g(0);function i(){const t={threshold:window.innerHeight>740?.1:0,rootMargin:"-45% 0% -45% 0%"},a=(v,ie)=>{q(()=>{v.forEach(f=>{const b=f.target;f.isIntersecting&&(o.value=Number(b.getAttribute("aria-label")),n.value=Number(b.id.replace("page_","")))})})()},l=new IntersectionObserver(a,t);document.querySelectorAll("section.history-item").forEach(v=>{l.observe(v)})}return w(()=>{i()}),(t,a)=>{var l;return((l=s[0])==null?void 0:l.info.length)>0?(d(),_("div",K,[r("div",X,[m(J,{pagesQty:s.length,current:n.value},null,8,["pagesQty","current"])]),r("div",Z,[(d(),_(B,null,H(s,c=>m(W,{key:c.id,year:c.year,"short-descripton":c.shortDescription,info:c.info,id:"page_"+c.id,"aria-label":c.year,currentArea:o.value,isReversed:c.id%2>0},null,8,["year","short-descripton","info","id","aria-label","currentArea","isReversed"])),64))])])):S("",!0)}}});const te=p(ee,[["__scopeId","data-v-51d5f5c9"]]),se=e=>(N("data-v-694d5a6b"),e=e(),I(),e),re={class:"mainpage"},oe=se(()=>r("div",{class:"hero"},[r("h1",{class:"hero__title"},"ОГАПОУ «УАвиаК-МЦК»"),r("div",{class:"hero__description"}," Областное государственное автономное профессиональное образовательное учреждение «Ульяновский авиационный колледж — Межрегиональный центр компетенций» ")],-1)),ne=u({__name:"index",setup(e){return(s,o)=>(d(),_("div",re,[oe,m(te)]))}});const de=p(ne,[["__scopeId","data-v-694d5a6b"]]);export{de as default};
