import{d as y,u as f,r as b,g as v,c as t,b as e,k as a,t as l,e as n,f as i,F as g,m as k,i as x,j as w,o}from"./index-mzwim4Fx.js";const C=""+new URL("../images/icon-thank-you.svg",import.meta.url).href,$={class:"container max-w-md mx-auto px-4"},j={class:"relative shadow-2xl bg-white p-4 rounded-md"},N=e("div",{class:"mb-4"},[e("h1",{class:"text-xl font-bold mb-2"},"Finishing up"),e("p",{class:"w-64"}," Double-check everything looks OK before confirming. ")],-1),B={class:"bg-main-background p-3 rounded-md mb-5"},F={class:"flex justify-between items-center border-b-2 pb-2.5 mb-2"},L={class:"flex justify-between items-center w-full"},S={class:"font-bold text-secondary"},T={class:"capitalize"},V={key:0},O={key:1},R={class:"flex justify-between"},D={key:0},P={key:1},z={key:2},A={key:3},E={key:4},G={key:5},I=e("div",null,[e("p",null,[a("Total ("),e("span",null,"per month"),a(")")])],-1),K={key:0,class:"absolute bg-white flex justify-center items-center w-full h-full top-0 left-0 rounded-md",id:"overlay"},U={class:"flex flex-col items-center p-3"},W=e("div",{class:"flex justify-center mb-2"},[e("img",{class:"w-10",src:C,alt:""})],-1),q={class:"text-lg font-bold text-secondary mb-1"},H={class:"text-base"},J=e("p",{class:"text-center"},"Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",-1),M={key:0,class:"fixed bg-white left-0 w-full h-14 bottom-0"},Q={class:"relative right-0 pr-4 top-1/2 mx-4 -translate-y-1/2"},X={class:"absolute top-1/2 -translate-y-1/2"},se=y({__name:"step4",setup(Y){const s=f(),c=b(!1),d=s.extraOptions,m=()=>{c.value=!0},_=()=>{s.subscription==="monthly"?s.subscription="yearly":s.subscription="monthly"};return(Z,u)=>{const p=v("RouterLink");return o(),t("div",$,[e("div",j,[N,e("div",B,[e("div",F,[e("div",L,[e("div",null,[e("h3",S,[a("Arcade "),e("span",T,"("+l(n(s).subscription)+")",1)]),e("button",{type:"button",onClick:_,class:"underline"},"Change")]),e("div",null,[n(s).subscription==="monthly"?(o(),t("span",V,"$9/mo")):i("",!0),n(s).subscription==="yearly"?(o(),t("span",O,"$90/yr")):i("",!0)])])]),(o(!0),t(g,null,k(n(d),(r,h)=>(o(),t("div",{class:"mb-1",key:h},[e("div",R,[e("p",null,l(r),1),r==="online-service"&&n(s).subscription==="monthly"?(o(),t("span",D,"+$1/mo")):i("",!0),r==="online-service"&&n(s).subscription==="yearly"?(o(),t("span",P,"+$10/yr")):i("",!0),r==="larger-storage"&&n(s).subscription==="monthly"?(o(),t("span",z,"+$2/mo")):i("",!0),r==="larger-storage"&&n(s).subscription==="yearly"?(o(),t("span",A,"+$20/yr")):i("",!0),r==="custom-profile"&&n(s).subscription==="monthly"?(o(),t("span",E,"+$3/mo")):i("",!0),r==="custom-profile"&&n(s).subscription==="yearly"?(o(),t("span",G,"+$30/yr")):i("",!0)])]))),128))]),I,c.value?(o(),t("div",K,[e("div",U,[W,e("h4",q,[a("Thank you "),e("span",H,l(n(s).formName)+"!",1)]),J])])):i("",!0)]),c.value?i("",!0):(o(),t("div",M,[e("div",Q,[e("div",X,[x(p,{to:"/Pick-add-ons",onClick:u[0]||(u[0]=r=>n(s).previousPage())},{default:w(()=>[a("Go Back")]),_:1})]),e("div",{class:"absolute right-0 top-1/2 -translate-y-1/2"},[e("button",{onClick:m,class:"px-2 py-1 rounded-md bg-secondary text-white"},"Confirm")])])]))])}}});export{se as default};
