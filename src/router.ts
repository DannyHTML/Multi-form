import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: "/",
        name: "Personal-info",
        component: () => import('./pages/step1.vue')
        },
        {
        path: "/Select-your-plan",
        name: "Select-your-plan",
        component: () => import('./pages/step2.vue')
        },
        {
        path: "/Pick-add-ons",
        name: "Pick-add-ons",
        component: () => import('./pages/step3.vue')
        },        
        {
        path: "/Finishing-up",
        name: "Finishing-up",
        component: () => import('./pages/step4.vue')
        }
    ]
})