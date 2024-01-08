<script setup lang="ts">
import ButtonNext from "../components/ButtonNext.vue";
import { useFormStore } from "../store/form";

const formStore = useFormStore();

</script>

<template>
  <div class="container max-w-md mx-auto px-4">
    <div class="shadow-2xl bg-white p-4 rounded-md ">
      <div class="mb-4">
        <h2 class="text-xl font-bold mb-2 text-secondary">Pick add-ons</h2>
        <p class="w-64">Add-ons help enhance your gaming experience.</p>
      </div>
      <form action="#" id="form">
        <label class="flex justify-between border-2 p-2 rounded-md mb-3" for="online-service"
               :class="{ 'bg-gray-100 border-secondary' : formStore.extraOptions.includes('onlineService')}">
          <div class="flex gap-3">
            <input  
            class="w-4" 
            type="checkbox" 
            name="online-service" 
            id="online-service" 
            v-model="formStore.extraOptions"
            value="onlineService"
            >
            <div>
              <p class="text-secondary font-bold">Online-service</p> 
              <p class="text">Acces to multiplayer games</p>
            </div>
          </div>
          <div class="flex justify-end w-16">
            <div class="flex relative items-center">
              <p v-if="formStore.subscription === 'monthly'" class="text-secondary absolute right-0">+${{ formStore.extraOptionsValues.month.onlineService.price}}/mo</p>
              <p v-if="formStore.subscription === 'yearly'" class="text-secondary absolute right-0">+${{ formStore.extraOptionsValues.year.onlineService.price}}/yr</p>
            </div>
          </div>
        </label>
        <!--  -->
        <label class="flex justify-between gap-3 border-2 p-2 rounded-md mb-3" for="larger-storage"
               :class="{ 'bg-gray-100 border-secondary' : formStore.extraOptions.includes('largerStorage')}">
          <div class="flex gap-3">
            <input 
            class="w-4" 
            type="checkbox" 
            name="larger-storage" 
            id="larger-storage" 
            v-model="formStore.extraOptions"
            value="largerStorage"
            >
            <div>
              <p class="text-secondary font-bold">Larger storage</p> 
              <p >Extra 1TB cloud save</p>
            </div>
          </div>
          <div class="flex justify-end w-16">
            <div class="flex relative items-center">
              <p v-if="formStore.subscription === 'monthly'" class="text-secondary absolute right-0">+${{ formStore.extraOptionsValues.month.largerStorage.price }}/mo</p>
              <p v-if="formStore.subscription === 'yearly'" class="text-secondary absolute right-0">+${{ formStore.extraOptionsValues.year.largerStorage.price }}/yr</p>
            </div>
          </div>
        </label>
        <!--  -->
        <label class="flex justify-between gap-3 border-2 p-2 rounded-md mb-3" for="custom-profile"
               :class="{ 'bg-gray-100 border-secondary' : formStore.extraOptions.includes('customProfile')}">
          <div class="flex gap-3">
          <input 
          class="w-4" 
          type="checkbox" 
          name="custom-profile" 
          id="custom-profile" 
          v-model="formStore.extraOptions"
          value="customProfile"
          >
            <div class="">
              <p class="text-secondary font-bold">Customizable profile</p> 
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <div class="flex justify-end w-16">
            <div class="flex relative items-center">
              <p v-if="formStore.subscription === 'monthly'" class="text-secondary absolute right-0">+${{ formStore.extraOptionsValues.month.customProfile.price }}/mo</p>
              <p v-if="formStore.subscription === 'yearly'" class="text-secondary absolute right-0">+${{ formStore.extraOptionsValues.year.customProfile.price }}/yr</p>
            </div>
          </div>
        </label>
      </form>
    </div>
    <div class="fixed flex justify-center bg-white left-0 w-full h-14 bottom-0">
      <div class="relative container max-w-[416px] px-3 mx-4">
        <div class="absolute top-1/2 -translate-y-1/2">
          <RouterLink to="/Select-your-plan" @click="formStore.previousPage()">Go Back</RouterLink>
        </div>
        <div class="absolute right-3 top-1/2 -translate-y-1/2">
          <RouterLink to="/Finishing-up"><ButtonNext /></RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>