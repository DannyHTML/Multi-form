import{d as x,u as v,r as d,m as g,g as k,c as o,b as s,k as c,t as n,e as t,f as r,F as w,p as V,i as O,j as C,o as i}from"./index-ZNJG-rVH.js";const $=""+new URL("../images/icon-thank-you.svg",import.meta.url).href,S={class:"container max-w-md mx-auto px-4"},j={class:"relative shadow-2xl bg-white p-4 rounded-md"},N=s("div",{class:"mb-4"},[s("h1",{class:"text-xl font-bold mb-2"},"Finishing up"),s("p",{class:"w-64"}," Double-check everything looks OK before confirming. ")],-1),B={class:"bg-main-background p-3 rounded-md mb-5"},F={class:"flex justify-between items-center border-b-2 pb-2.5 mb-2"},L={class:"flex justify-between items-center w-full"},P={class:"font-bold text-secondary"},T={class:"capitalize"},R={key:0},D={key:1},z={class:"flex justify-between"},A={key:0},E={key:1},G={key:2},I={key:3},K={key:4},U={key:5},W={class:"flex justify-between"},q={key:0,class:"absolute bg-white flex justify-center items-center w-full h-full top-0 left-0 rounded-md",id:"overlay"},H={class:"flex flex-col items-center p-3"},J=s("div",{class:"flex justify-center mb-2"},[s("img",{class:"w-10",src:$,alt:""})],-1),M={class:"text-lg font-bold text-secondary mb-1"},Q={class:"text-base"},X=s("p",{class:"text-center"},"Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",-1),Y={key:0,class:"fixed flex justify-center bg-white left-0 w-full h-14 bottom-0"},Z={class:"relative container max-w-[416px] px-3 mx-4"},ee={class:"absolute top-1/2 -translate-y-1/2"},oe=x({__name:"Step4",setup(se){const e=v(),u=d(!1),m=()=>{u.value=!0},_=()=>{e.subscription=e.subscription==="monthly"?"yearly":"monthly"},h=d(e.extraOptions),y=g(()=>{let p=e.subscription==="monthly"?e.subscriptionValues.monthly.price:e.subscriptionValues.yearly.price;console.log(e.extraOptions);for(const l of e.extraOptions)console.log(l),e.subscription==="monthly"&&l in e.extraOptionsValues.month&&(p+=e.extraOptionsValues.month[l].price);return p});return(p,l)=>{const f=k("RouterLink");return i(),o("div",S,[s("div",j,[N,s("div",B,[s("div",F,[s("div",L,[s("div",null,[s("h3",P,[c("Arcade "),s("span",T,"("+n(t(e).subscription)+")",1)]),s("button",{type:"button",onClick:_,class:"underline"},"Change")]),s("div",null,[t(e).subscription==="monthly"?(i(),o("span",R,"$"+n(t(e).subscriptionValues.monthly.price)+"/mo",1)):r("",!0),t(e).subscription==="yearly"?(i(),o("span",D,"$"+n(t(e).subscriptionValues.yearly.price)+"/yr",1)):r("",!0)])])]),(i(!0),o(w,null,V(h.value,(a,b)=>(i(),o("div",{class:"mb-1",key:b},[s("div",z,[s("p",null,n(a),1),a==="online-service"&&t(e).subscription==="monthly"?(i(),o("span",A," +$"+n(t(e).extraOptionsValues.month.onlineService.price)+"/mo ",1)):r("",!0),a==="online-service"&&t(e).subscription==="yearly"?(i(),o("span",E," +$"+n(t(e).extraOptionsValues.year.onlineService.price)+"/yr ",1)):r("",!0),a==="larger-storage"&&t(e).subscription==="monthly"?(i(),o("span",G," +$"+n(t(e).extraOptionsValues.month.largerStorage.price)+"/mo ",1)):r("",!0),a==="larger-storage"&&t(e).subscription==="yearly"?(i(),o("span",I," +$"+n(t(e).extraOptionsValues.year.largerStorage.price)+"/yr ",1)):r("",!0),a==="custom-profile"&&t(e).subscription==="monthly"?(i(),o("span",K," +$"+n(t(e).extraOptionsValues.month.customProfile.price)+"/mo ",1)):r("",!0),a==="custom-profile"&&t(e).subscription==="yearly"?(i(),o("span",U," +$"+n(t(e).extraOptionsValues.year.customProfile.price)+"/yr ",1)):r("",!0)])]))),128))]),s("div",W,[s("p",null,[c("Total ("),s("span",null,"per "+n(t(e).subscription),1),c(")")]),s("span",null,"$"+n(y.value),1)]),u.value?(i(),o("div",q,[s("div",H,[J,s("h4",M,[c("Thank you "),s("span",Q,n(t(e).formName)+"!",1)]),X])])):r("",!0)]),u.value?r("",!0):(i(),o("div",Y,[s("div",Z,[s("div",ee,[O(f,{to:"/Pick-add-ons",onClick:l[0]||(l[0]=a=>t(e).previousPage())},{default:C(()=>[c("Go Back")]),_:1})]),s("div",{class:"absolute right-3 top-1/2 -translate-y-1/2"},[s("button",{onClick:m,class:"px-2 py-1 rounded-md bg-secondary text-white"},"Confirm")])])]))])}}});export{oe as default};
