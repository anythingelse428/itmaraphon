import{a as v,_ as p,k as i,l as _,z as m,d as N,r as A,A as H,B as $,F as g,C as f,D as b,E as R,m as r,t as y,x as D,y as B,q as E,G as q}from"./entry.8a4fbab3.js";const w={name:"PaginationBullet",props:{order:{type:Number,required:!0},active:{type:Number,default:0}},methods:{scrollTo(s){const e=document.querySelector("#page_"+s),t=Number(e==null?void 0:e.clientHeight),c=Number(e==null?void 0:e.getBoundingClientRect().y);v().replace({hash:"#page"+this.order}),c&&t&&e&&window.scrollTo({top:(e==null?void 0:e.getBoundingClientRect().y)+window.scrollY-t/1.2})}},computed:{isActive(){return this.active===this.order}}};function P(s,e,t,c,u,o){return i(),_("div",{onClick:e[0]||(e[0]=d=>o.scrollTo(t.order)),class:m("pagination-bullet"+(o.isActive?" active":""))},null,2)}const S=p(w,[["render",P],["__scopeId","data-v-1b915a84"]]),k={class:"pagination"},L=N({__name:"PaginationNav",props:{pagesQty:{type:Number,required:!0}},setup(s){let e=A(Number(H().hash.replace("#page","")));return $(t=>{e.value=Number(t.hash.replace("#page",""))}),(t,c)=>(i(),_("div",k,[(i(!0),_(g,null,f(s.pagesQty,u=>(i(),b(S,{key:u,order:u-1,active:R(e)},null,8,["order","active"]))),128))]))}});const x=p(L,[["__scopeId","data-v-e5f8574e"]]);const F={name:"HistoryItem",props:{year:{type:Number,requred:!0},shortDescripton:{type:String,requred:!0},info:{type:String,requred:!0},currentArea:{type:Number,default:1985},isReversed:{type:Boolean,requred:!0}},data(){return{itemHeight:0}},computed:{isCurrent(){return this.currentArea==this.year}}},h=s=>(D("data-v-c2143b0d"),s=s(),B(),s),T={class:"history-item__header"},Y={class:"history-item__year"},Q={class:"history-item__description"},V={class:"history-item__step",ref:"start"},z=h(()=>r("div",{class:"small-light"},null,-1)),M=h(()=>r("div",{class:"big-light"},null,-1)),G=[z,M],O=h(()=>r("div",{class:"history-item__line --main"},[r("div",{class:"svg"})],-1)),U={class:"history-item__line --sub"},j=h(()=>r("div",{class:"svg"},null,-1)),J={class:"history-item__info"};function K(s,e,t,c,u,o){return i(),_("div",{class:m((o.isCurrent?"--current":"--muted")+(t.isReversed?" --reversed":"")+" history-item")},[r("div",T,[r("div",Y,y(t.year),1),r("div",Q,y(t.shortDescripton),1)]),r("div",V,G,512),r("div",{class:m("history-item__line"+(t.isReversed?" --reversed":""))},[O,r("div",U,[j,r("div",J,y(t.info),1)])],2)],2)}const C=p(F,[["render",K],["__scopeId","data-v-c2143b0d"]]),W=(s,e=300)=>{let t;return function(){clearTimeout(t),t=setTimeout(()=>s(),e)}},X={name:"HistoryLine",components:{HistoryItem:C,PaginationNav:x},data(){return{history:[{id:0,year:1985,shortDescription:"Дата создания образовательной организации",info:"Ульяновский авиационный колледж ведет свою историю с 9 июля 1985 года, с даты, когда приказом Министра авиационной промышленности СССР №200 на базе строящегося гиганта авиационной промышленности страны Ульяновского авиационного промышленного комплекса им. Д. Ф. Устинова был образован Ульяновский авиационный техникум."},{id:1,year:1988,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:2,year:1989,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:3,year:1990,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:4,year:1996,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:5,year:1999,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."},{id:6,year:2e3,shortDescription:"Первые выпускники нового учебного заведения",info:"За сравнительно короткое время было создано многопрофильное учебное заведение с современной материально-технической базой и высококвалифицированным педагогическим коллективом."}],currentYear:1985,currentPage:0}},methods:{changeCurrentHistoryItem(){var u;Number((u=document.querySelector(".history-item"))==null?void 0:u.clientHeight);const s={threshold:[0],rootMargin:"-15% 0% -15% 0%"},e=(o,d)=>{o.forEach(l=>{var n;const a=(n=l.target.parentElement)==null?void 0:n.parentElement;l.isIntersecting&&l.intersectionRatio>.8&&a&&(console.log(a.id),W(()=>{this.currentYear=Number(a.ariaLabel),this.currentPage=Number(a.id.replace("page_","")),v().replace({hash:"#"+a.id.replace("_","")})})())})},t=new IntersectionObserver(e,s);document.querySelectorAll(".history-item__line.--main").forEach(o=>{t.observe(o)})}},mounted(){this.changeCurrentHistoryItem(),window.addEventListener("scroll",()=>{this.changeCurrentHistoryItem()})}};const Z={key:0,class:"history"},ee={class:"history__pagination"},te={class:"history__row"};function se(s,e,t,c,u,o){var a;const d=x,l=C;return((a=u.history[0])==null?void 0:a.info.length)>0?(i(),_("div",Z,[r("div",ee,[E(d,{pagesQty:u.history.length},null,8,["pagesQty"])]),r("div",te,[(i(!0),_(g,null,f(u.history,n=>(i(),b(l,{key:n.id,year:n.year,"short-descripton":n.shortDescription,info:n.info,id:"page_"+n.id,"aria-label":n.year,currentArea:u.currentYear,ref_for:!0,ref:"historyitems",isReversed:n.id%2>0},null,8,["year","short-descripton","info","id","aria-label","currentArea","isReversed"]))),128))])])):q("",!0)}const I=p(X,[["render",se],["__scopeId","data-v-7e34fa70"]]),re={name:"MainPage",components:{HistoryLine:I}};const ue=s=>(D("data-v-9dcba07b"),s=s(),B(),s),oe={class:"mainpage"},ne=ue(()=>r("div",{class:"hero"},[r("h1",{class:"hero__title"},"ОГАПОУ «УАвиаК-МЦК»"),r("div",{class:"hero__description"}," Областное государственное автономное профессиональное образовательное учреждение «Ульяновский авиационный колледж — Межрегиональный центр компетенций» ")],-1));function ie(s,e,t,c,u,o){const d=I;return i(),_("div",oe,[ne,E(d)])}const ce=p(re,[["render",ie],["__scopeId","data-v-9dcba07b"]]);export{ce as default};
