import{d as h,u as x,a as v,r as c,c as a,b as e,w as m,v as d,e as s,n as i,f as u,o as n}from"./index-mzwim4Fx.js";const g={class:"container max-w-md mx-auto px-4"},N={class:"shadow-2xl bg-white p-4 rounded-md"},y=e("div",{class:"mb-4"},[e("h1",{class:"text-xl font-bold mb-2"},"Personal Info"),e("p",{class:"w-64"}," Please provide your name, email address, and phone number. ")],-1),w={action:"#",id:"form"},E={class:"flex relative flex-col mb-3"},k=e("label",{for:"name"},"Name",-1),V={key:0,class:"absolute right-0"},z=e("p",{class:"text-sm text-red-600 font-medium"},"This field is required",-1),S=[z],A={class:"flex flex-col mb-3"},C=e("label",{for:"email"},"Email Address",-1),P={key:0,class:"absolute right-8"},T=e("p",{class:"text-sm text-red-600 font-medium"},"This field is required",-1),q=[T],B={class:"flex flex-col"},U=e("label",{for:"phone"},"Phone Number",-1),Z={key:0,class:"absolute right-8"},$=e("p",{class:"text-sm text-red-600 font-medium"},"This field is required",-1),F=[$],K=h({__name:"step1",setup(R){const o=x(),f=v(),p=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,t=c(!1),_=c(!0),b=()=>{t.value=!0,o.formName||console.log("error"),p.test(o.formEmail)||console.log("invalid email"),o.formNumber||console.log("Fill in number"),o.formName&&o.formEmail&&o.formNumber&&(_.value=!1,f.push("/Select-your-plan"),o.nextPage())};return(D,l)=>(n(),a("div",g,[e("div",N,[y,e("form",w,[e("div",E,[k,m(e("input",{type:"text",name:"name",id:"name","onUpdate:modelValue":l[0]||(l[0]=r=>s(o).formName=r),class:i(["border-2 z-10 outline-none rounded-md pl-2 py-1 max-w-md",{"border-2 border-red-600":!s(o).formName&&t.value}]),placeholder:"e.g. Stephen  King"},null,2),[[d,s(o).formName]]),!s(o).formName&&t.value?(n(),a("span",V,S)):u("",!0)]),e("div",A,[C,m(e("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":l[1]||(l[1]=r=>s(o).formEmail=r),class:i(["border-2 rounded-md outline-none pl-2 py-1 max-w-md",{"border-2 border-red-600":!s(o).formEmail&&t.value}]),placeholder:"e.g.   stephenking@lorem.com"},null,2),[[d,s(o).formEmail]]),!s(o).formEmail&&t.value?(n(),a("span",P,q)):u("",!0)]),e("div",B,[U,m(e("input",{type:"number",name:"phone",id:"phone","onUpdate:modelValue":l[2]||(l[2]=r=>s(o).formNumber=r),class:i(["border-2 rounded-md outline-none pl-2 py-1 max-w-md",{"border-2 border-red-600":!s(o).formNumber&&t.value}]),placeholder:"e.g. +1 234 567 890"},null,2),[[d,s(o).formNumber]]),!s(o).formNumber&&t.value?(n(),a("span",Z,F)):u("",!0)])])]),e("div",{class:"fixed bg-white left-0 w-full h-14 bottom-0"},[e("div",{class:"absolute right-0 pr-4 top-1/2 -translate-y-1/2"},[e("button",{onClick:b,class:"px-2 py-1 rounded-md bg-secondary text-white"},"Next Step")])])]))}});export{K as default};