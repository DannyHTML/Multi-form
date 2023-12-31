import { createRouter, createWebHashHistory } from "vue-router";

// createWebHashHistory() for GitHub, createWebHistory() for live domain.
export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
        path: "/",
        name: "Personal-info",
        component: () => import('./pages/Step1.vue')
        },
        {
        path: "/Select-your-plan",
        name: "Select-your-plan",
        component: () => import('./pages/Step2.vue')
        },
        {
        path: "/Pick-add-ons",
        name: "Pick-add-ons",
        component: () => import('./pages/Step3.vue')
        },        
        {
        path: "/Finishing-up",
        name: "Finishing-up",
        component: () => import('./pages/Step4.vue')
        }
    ]
})