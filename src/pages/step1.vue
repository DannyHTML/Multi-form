<script setup lang="ts">
import { ref } from "vue"
import { useFormStore } from "../store/form";
import { useRouter } from 'vue-router';

const formStore = useFormStore();
const $router = useRouter();

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const submitValue = ref<boolean>(false)
const confirm = ref<boolean>(true);

const submit = () => {
  submitValue.value = true;

  if (!formStore.formName){
    console.log("error")
  }

  if (!validRegex.test(formStore.formEmail)) {
    console.log("invalid email")
  }

  if (!formStore.formNumber){
    console.log("Fill in number");
  }

  if (formStore.formName && formStore.formEmail && formStore.formNumber) {
    confirm.value = false
    $router.push("/Select-your-plan")
    formStore.nextPage()
  }

}
</script>

<template>
  <div class="container max-w-md mx-auto px-4">
    <div class="shadow-2xl bg-white p-4 rounded-md">
      <div class="mb-4">
        <h1 class="text-xl font-bold mb-2">Personal Info</h1>
        <p class="w-64">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form action="#" id="form">
        <div class="relative flex flex-col mb-3">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="formStore.formName"
            class="border-2 z-10 outline-none rounded-md pl-2 py-1 max-w-md"
            :class="{ 'border-2 border-red-600': !formStore.formName && submitValue}"
            placeholder="e.g. Stephen  King"
          />
            <span v-if="!formStore.formName && submitValue" class="absolute right-0"><p class="text-sm text-red-600 font-medium">This field is required</p> </span>
        </div>
        <div class="relative flex flex-col mb-3">
          <label for="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="formStore.formEmail"
            class="border-2 rounded-md outline-none pl-2 py-1 max-w-md"
            :class="{ 'border-2 border-red-600': !formStore.formEmail && submitValue}"
            placeholder="e.g.   stephenking@lorem.com"
          />
          <span v-if="!formStore.formEmail && submitValue" class="absolute right-0"><p class="text-sm text-red-600 font-medium">This field is required</p> </span>
        </div>
        <div class="relative flex flex-col">
          <label for="phone">Phone Number</label>
          <input
            type="number"
            name="phone"
            id="phone"
            v-model="formStore.formNumber"
            class="border-2 rounded-md outline-none pl-2 py-1 max-w-md"
            :class="{ 'border-2 border-red-600': !formStore.formNumber && submitValue}"
            placeholder="e.g. +1 234 567 890"
          />
          <span v-if="!formStore.formNumber && submitValue" class="absolute right-0"><p class="text-sm text-red-600 font-medium">This field is required</p> </span>
        </div>
      </form>
    </div>
    <div  class="fixed flex justify-center bg-white left-0 w-full h-14 bottom-0">
      <div class="relative container max-w-[416px] px-3 h-full mx-4">
        <div class="absolute right-3 top-1/2 -translate-y-1/2">
          <button @click="submit" class="px-2 py-1 rounded-md bg-secondary text-white"  >Next Step</button>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
</style>
