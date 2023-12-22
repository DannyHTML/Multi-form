import{d as m,u as x,g as f,c as a,b as e,n as i,e as t,w as c,l as d,f as r,i as u,j as _,o as l,k as y}from"./index-mzwim4Fx.js";import{_ as b}from"./ButtonNext.vue_vue_type_script_setup_true_lang-Q0rNUgvR.js";const h={class:"container max-w-md mx-auto px-4"},g={class:"shadow-2xl bg-white p-4 rounded-md"},v=e("div",{class:"mb-4"},[e("h2",{class:"text-xl font-bold mb-2 text-secondary"},"Pick add-ons"),e("p",{class:"w-64"},"Add-ons help enhance your gaming experience.")],-1),k={action:"#",id:"form"},w={class:"flex gap-3"},O=e("div",null,[e("p",{class:"text-secondary font-bold"},"Online-service"),e("p",{class:"text"},"Acces to multiplayer games")],-1),C={class:"flex justify-end w-16"},$={class:"flex relative items-center"},j={key:0,class:"text-secondary absolute right-0"},V={key:1,class:"text-secondary absolute right-0"},B={class:"flex gap-3"},N=e("div",null,[e("p",{class:"text-secondary font-bold"},"Larger storage"),e("p",null,"Extra 1TB cloud save")],-1),L={class:"flex justify-end w-16"},S={class:"flex relative items-center"},U={key:0,class:"text-secondary absolute right-0"},z={key:1,class:"text-secondary absolute right-0"},A={class:"flex gap-3"},E=e("div",{class:""},[e("p",{class:"text-secondary font-bold"},"Customizable profile"),e("p",null,"Custom theme on your profile")],-1),F={class:"flex justify-end w-16"},P={class:"flex relative items-center"},R={key:0,class:"text-secondary absolute right-0"},T={key:1,class:"text-secondary absolute right-0"},D={class:"fixed bg-white left-0 w-full h-16 bottom-0"},G={class:"relative h-full mx-4"},M={class:"absolute top-1/2 -translate-y-1/2"},q={class:"absolute right-0 top-1/2 -translate-y-1/2"},Q=m({__name:"step3",setup(H){const s=x();return(I,o)=>{const p=f("RouterLink");return l(),a("div",h,[e("div",g,[v,e("form",k,[e("label",{class:i(["flex justify-between border-2 p-2 rounded-md mb-3",{"bg-gray-100 border-secondary":t(s).extraOptions.includes("online-service")}]),for:"online-service"},[e("div",w,[c(e("input",{class:"w-4",type:"checkbox",name:"online-service",id:"online-service",value:"online-service","onUpdate:modelValue":o[0]||(o[0]=n=>t(s).extraOptions=n)},null,512),[[d,t(s).extraOptions]]),O]),e("div",C,[e("div",$,[t(s).subscription==="monthly"?(l(),a("p",j,"+$2/mo")):r("",!0),t(s).subscription==="yearly"?(l(),a("p",V,"+$20/yr")):r("",!0)])])],2),e("label",{class:i(["flex justify-between gap-3 border-2 p-2 rounded-md mb-3",{"bg-gray-100 border-secondary":t(s).extraOptions.includes("larger-storage")}]),for:"larger-storage"},[e("div",B,[c(e("input",{class:"w-4",type:"checkbox",name:"larger-storage",id:"larger-storage",value:"larger-storage","onUpdate:modelValue":o[1]||(o[1]=n=>t(s).extraOptions=n)},null,512),[[d,t(s).extraOptions]]),N]),e("div",L,[e("div",S,[t(s).subscription==="monthly"?(l(),a("p",U,"+$2/mo")):r("",!0),t(s).subscription==="yearly"?(l(),a("p",z,"+$20/yr")):r("",!0)])])],2),e("label",{class:i(["flex justify-between gap-3 border-2 p-2 rounded-md mb-3",{"bg-gray-100 border-secondary":t(s).extraOptions.includes("custom-profile")}]),for:"custom-profile"},[e("div",A,[c(e("input",{class:"w-4",type:"checkbox",name:"custom-profile",id:"custom-profile",value:"custom-profile","onUpdate:modelValue":o[2]||(o[2]=n=>t(s).extraOptions=n)},null,512),[[d,t(s).extraOptions]]),E]),e("div",F,[e("div",P,[t(s).subscription==="monthly"?(l(),a("p",R,"+$2/mo")):r("",!0),t(s).subscription==="yearly"?(l(),a("p",T,"+$20/yr")):r("",!0)])])],2)])]),e("div",D,[e("div",G,[e("div",M,[u(p,{to:"/Select-your-plan",onClick:o[3]||(o[3]=n=>t(s).previousPage())},{default:_(()=>[y("Go Back")]),_:1})]),e("div",q,[u(p,{to:"/Finishing-up"},{default:_(()=>[u(b)]),_:1})])])])])}}});export{Q as default};