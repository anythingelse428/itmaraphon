import{f as m,o,c as _,n as v,g as N,r as A,h as $,i as H,F as g,j as f,k as b,l as k,a as r,t as h,p as D,e as B,b as E,m as w}from"./entry.50ea3e5c.js";import{_ as l}from"./_plugin-vue_export-helper.c27b6911.js";const P={name:"PaginationBullet",props:{order:{type:Number,required:!0},active:{type:Number,default:0}},methods:{scrollTo(t){const e=document.querySelector("#page_"+t),s=Number(e==null?void 0:e.clientHeight),n=Number(e==null?void 0:e.getBoundingClientRect().y);m().replace({hash:"#page"+this.order}),n&&s&&e&&window.scrollTo({top:(e==null?void 0:e.getBoundingClientRect().y)+window.scrollY-s/1.2})}},computed:{isActive(){return this.active===this.order}}};function R(t,e,s,n,u,i){return o(),_("div",{onClick:e[0]||(e[0]=c=>i.scrollTo(s.order)),class:v("pagination-bullet"+(i.isActive?" active":""))},null,2)}const S=l(P,[["render",R],["__scopeId","data-v-1b915a84"]]),q={class:"pagination"},F=N({__name:"PaginationNav",props:{pagesQty:{type:Number,required:!0}},setup(t){let e=A(Number($().hash.replace("#page","")));return H(s=>{e.value=Number(s.hash.replace("#page",""))}),(s,n)=>(o(),_("div",q,[(o(!0),_(g,null,f(t.pagesQty,u=>(o(),b(S,{key:u,order:u-1,active:k(e)},null,8,["order","active"]))),128))]))}});const x=l(F,[["__scopeId","data-v-e5f8574e"]]),L={name:"HistoryItem",props:{year:{type:Number,requred:!0},shortDescripton:{type:String,requred:!0},info:{type:String,requred:!0},currentArea:{type:Number,default:1985},isReversed:{type:Boolean,requred:!0}},data(){return{itemHeight:0,isDesktop:!0}},mounted(){this.isDesktop=window.innerWidth>1350,addEventListener("resize",()=>{this.isDesktop=window.innerWidth>1350})},computed:{isCurrent(){return this.currentArea==this.year}}};const p=t=>(D("data-v-c5cf4717"),t=t(),B(),t),T={class:"history-item__header"},Y={class:"history-item__year"},Q={class:"history-item__description"},V={class:"history-item__step",ref:"start"},z=p(()=>r("div",{class:"small-light"},null,-1)),M=p(()=>r("div",{class:"big-light"},null,-1)),W=[z,M],j={class:"history-item__line"},O=p(()=>r("div",{class:"history-item__line --main"},[r("div",{class:"svg"})],-1)),U={class:"history-item__line --sub"},G=p(()=>r("div",{class:"svg"},null,-1)),J={class:"history-item__info"};function K(t,e,s,n,u,i){return o(),_("section",{class:v((i.isCurrent?"--current":"--muted")+(s.isReversed&&u.isDesktop?" --reversed":"")+" history-item")},[r("div",T,[r("div",Y,h(s.year),1),r("div",Q,h(s.shortDescripton),1)]),r("div",V,W,512),r("div",j,[O,r("div",U,[G,r("div",J,h(s.info),1)])])],2)}const C=l(L,[["render",K],["__scopeId","data-v-c5cf4717"]]),X=(t,e=300)=>{let s;return function(){clearTimeout(s),s=setTimeout(()=>t(),e)}},Z={name:"HistoryLine",components:{HistoryItem:C,PaginationNav:x},data(){return{history:[{id:0,year:1985,shortDescription:"Дата создания образовательной организации",info:"Ульяновский авиационный колледж ведет свою историю с 9 июля 1985 года, с даты, когда приказом Министра авиационной промышленности СССР №200 на базе строящегося гиганта авиационной промышленности страны Ульяновского авиационного промышленного комплекса им. Д. Ф. Устинова был образован Ульяновский авиационный техникум."},{id:1,year:1988,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:2,year:1989,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:3,year:1990,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:4,year:1996,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:5,year:1999,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:6,year:2e3,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."}],currentYear:1985,currentPage:0}},methods:{changeCurrentHistoryItem(){const t={threshold:[.9],rootMargin:"-15% 0% -15% 0%"},e=(u,i)=>{u.forEach(c=>{const d=c.target;c.isIntersecting&&X(()=>{this.currentYear=Number(d.getAttribute("aria-label")),this.currentPage=Number(d.id.replace("page_","")),m().replace({hash:"#"+d.id.replace("_","")})})()})},s=new IntersectionObserver(e,t);document.querySelectorAll("section.history-item").forEach(u=>{s.observe(u)})}},mounted(){this.changeCurrentHistoryItem()}};const ee={key:0,class:"history"},te={class:"history__pagination"},se={class:"history__row"};function re(t,e,s,n,u,i){var y;const c=x,d=C;return((y=u.history[0])==null?void 0:y.info.length)>0?(o(),_("div",ee,[r("div",te,[E(c,{pagesQty:u.history.length},null,8,["pagesQty"])]),r("div",se,[(o(!0),_(g,null,f(u.history,a=>(o(),b(d,{key:a.id,year:a.year,"short-descripton":a.shortDescription,info:a.info,id:"page_"+a.id,"aria-label":a.year,currentArea:u.currentYear,ref_for:!0,ref:"historyitems",isReversed:a.id%2>0},null,8,["year","short-descripton","info","id","aria-label","currentArea","isReversed"]))),128))])])):w("",!0)}const I=l(Z,[["render",re],["__scopeId","data-v-57783c73"]]),ue={name:"MainPage",components:{HistoryLine:I}};const oe=t=>(D("data-v-9dcba07b"),t=t(),B(),t),ne={class:"mainpage"},ie=oe(()=>r("div",{class:"hero"},[r("h1",{class:"hero__title"},"ОГАПОУ «УАвиаК-МЦК»"),r("div",{class:"hero__description"}," Областное государственное автономное профессиональное образовательное учреждение «Ульяновский авиационный колледж — Межрегиональный центр компетенций» ")],-1));function ce(t,e,s,n,u,i){const c=I;return o(),_("div",ne,[ie,E(c)])}const de=l(ue,[["render",ce],["__scopeId","data-v-9dcba07b"]]);export{de as default};
