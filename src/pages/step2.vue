<script setup lang="ts">
// import { ref } from "vue";
import ButtonNext from "../components/ButtonNext.vue";
import { useFormStore } from "../store/form";

const formStore = useFormStore();

</script>

<template>
  <div class="container max-w-md mx-auto px-4">
    <div class="shadow-2xl bg-white p-4 rounded-md ">
      <div class="mb-4">
        <h2 class="text-xl font-bold mb-2">Select your plan</h2>
        <p class="w-64">You have the option of monthly or yearly billing.</p>
      </div>
      <div class="flex flex-col gap-3">
        <div class="border-2 rounded-md p-2">
          <div class="flex gap-4">
              <img src="/images/icon-arcade.svg" alt="">
            <div>
              <h3 
              class="font-bold"
              :class="{ 'text-secondary': formStore.subscription === 'monthly'}"
              >Arcade</h3>
              <div class="relative">
                <p v-if="formStore.subscription === 'monthly'" class="absolute opacity-70">$9/mo</p>
                <p v-if="formStore.subscription === 'yearly'" class="absolute">$90/yr</p>
              </div>
            </div>
          </div>
          <div v-if="formStore.subscription === 'yearly'" class="ml-14 mt-2">
            <span class=""><p class="text-secondary font-medium">2 months free</p></span>
          </div>
        </div>
        <!--  -->
        <div class="border-2 rounded-md p-2">
          <div class="flex gap-4">
            <img src="/images/icon-advanced.svg" alt="">
            <div>
              <h3 class="font-bold">Advanced</h3>
              <div class="relative">
                  <p v-if="formStore.subscription === 'monthly'" class="absolute opacity-70">$12/mo</p>
                  <p v-if="formStore.subscription === 'yearly'" class="absolute">$120/yr</p>
                </div>
            </div>
          </div>
          <div v-if="formStore.subscription === 'yearly'" class="ml-14 mt-2">
            <span class=""><p class="text-secondary font-medium">2 months free</p></span>
          </div>
        </div>
        <!--  -->
        <div class="border-2 rounded-md p-2">
          <div class="flex gap-4">
            <img src="/images/icon-pro.svg" alt="">
            <div>
              <h3 class="font-bold">Pro</h3>
              <div class="relative">
                  <p v-if="formStore.subscription === 'monthly'" class="absolute opacity-70">$15/mo</p>
                  <p v-if="formStore.subscription === 'yearly'" class="absolute">$150/yr</p>
                </div>
            </div>
          </div>
          <div v-if="formStore.subscription === 'yearly'" class="ml-14 mt-2">
            <span class=""><p class="text-secondary font-medium">2 months free</p></span>
          </div>
        </div>
        </div>
          <div class="flex justify-center gap-2.5 mt-6 mb-3 p-1 bg-gray-100 rounded-lg">
          <div>
            <div class="flex gap-3">
              <p>Monthly</p>
            <div class="bg-secondary flex relative justify-between w-12 rounded-full">
              <input 
              type="radio"
               
              :class="{ 'bg-white': formStore.subscription === 'monthly'}" 
              class="absolute  -translate-y-1/2 top-1/2 ml-1 appearance-none rounded-full w-3.5 h-3.5" 
              name="monthly" 
              id="monthly" 
              v-model="formStore.subscription" 
              :value="formStore.subscriptionValues.monthly.label"
              >
              <input 
              type="radio" 
              :class="{ 'bg-white': formStore.subscription === 'yearly'}"
              class="absolute -translate-y-1/2 top-1/2 ml-1 mr-1 right-0 appearance-none rounded-full w-3.5 h-3.5"
              name="yearly" 
              id="yearly"
              v-model="formStore.subscription" 
              :value="formStore.subscriptionValues.yearly.label"
              >
            </div>
            <p>Yearly</p>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bg-white left-0 w-full h-16 bottom-0">
      <div class="relative h-full mx-4">
        <div class="absolute top-1/2 -translate-y-1/2">
          <RouterLink to="/" @click="formStore.previousPage()" >Go Back</RouterLink>
        </div>
        <div class="absolute right-0 top-1/2 -translate-y-1/2">
          <RouterLink to="/Pick-add-ons"><ButtonNext /></RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>



</style>