<script setup lang="ts">
import { ref } from "vue";
import { useFormStore } from '../store/form';

const formStore = useFormStore();
const confirmed = ref<boolean>(false);

const selectedOptions = formStore.extraOptions

const confirm = () => {
  confirmed.value = true
}

const changeSubscription = () => {
  if (formStore.subscription === 'monthly') {
    formStore.subscription = 'yearly'
  } else {
    formStore.subscription = 'monthly'
  }
}

</script>

<template>
<div class="container max-w-md mx-auto px-4">
    <div class="relative shadow-2xl bg-white p-4 rounded-md">
      <div class="mb-4">
        <h1 class="text-xl font-bold mb-2">Finishing up</h1>
        <p class="w-64">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div class="bg-main-background p-3 rounded-md mb-5">
        <div class="flex justify-between  items-center border-b-2 pb-2.5 mb-2">
          <div class="flex justify-between items-center w-full">
            <div>
              <h3 class="font-bold text-secondary">Arcade <span class="capitalize">({{ formStore.subscription }})</span></h3>
              <button type="button" @click="changeSubscription" class="underline">Change</button>
            </div>
            <div>
              <span v-if="formStore.subscription === 'monthly'">$9/mo</span>
              <span v-if="formStore.subscription === 'yearly'">$90/yr</span>
            </div>
          </div>
        </div>
        <div class="mb-1" v-for="(option, index) in selectedOptions" :key="index">
          <div class="flex justify-between">
            <p>{{ option }}</p>
            <span v-if="option === 'online-service' && formStore.subscription === 'monthly'">+$1/mo</span>
            <span v-if="option === 'online-service' && formStore.subscription === 'yearly'">+$10/yr</span>
            <span v-if="option === 'larger-storage' && formStore.subscription === 'monthly'">+$2/mo</span>
            <span v-if="option === 'larger-storage' && formStore.subscription === 'yearly'">+$20/yr</span>
            <span v-if="option === 'custom-profile' && formStore.subscription === 'monthly'">+$3/mo</span>
            <span v-if="option === 'custom-profile' && formStore.subscription === 'yearly'">+$30/yr</span>
          </div>
        </div>
      </div>
      <div>
        <p>Total (<span>per month</span>)</p>
      </div>
      <div v-if="confirmed" class="absolute bg-white flex justify-center items-center w-full h-full top-0 left-0 rounded-md" id="overlay">
        <div class="flex flex-col items-center p-3">
          <div class="flex justify-center mb-2">
            <img class="w-10" src="/images/icon-thank-you.svg" alt="">
          </div>
          <h4 class="text-lg font-bold text-secondary mb-1">Thank you <span class="text-base">{{ formStore.formName }}!</span></h4>
          <p class="text-center">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
      </div>
    </div>
    <div v-if="!confirmed" class="fixed bg-white left-0 w-full h-14 bottom-0">
      <div class="relative right-0 pr-4 top-1/2 mx-4 -translate-y-1/2">
        <div class="absolute top-1/2 -translate-y-1/2">
          <RouterLink to="/Pick-add-ons" @click="formStore.previousPage()">Go Back</RouterLink>
        </div>
        <div class="absolute right-0 top-1/2 -translate-y-1/2">
        <button @click="confirm" class="px-2 py-1 rounded-md bg-secondary text-white">Confirm</button>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

