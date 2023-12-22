<script setup lang="ts">
import { useFormStore } from "../store/form";

const formStore = useFormStore();

</script>

<template>
<div class="relative">
    <div class="absolute w-full -z-10">
      <img class="w-full" src="/images/bg-sidebar-mobile.svg" alt="">
    </div>
    <div class="container mx-auto">
    </div>
    <div class="container mx-auto h-20">
      <div class="flex gap-5 justify-center items-center h-20">
        <div v-for="(pageNumber, index) in 4" :key="pageNumber" class="relative">
          <input
            class="appearance-none border-2 rounded-full w-8 h-8"
            :class="{ 'bg-radio-button': formStore.selectedPage === index + 1 }"
            :value="index + 1"
            v-model="formStore.selectedPage"
            type="radio"
            name="radio"
          />
          <label class="absolute bottom-0 translate-x-1/2 mb-3 right-1/2 -top-1/2 translate-y-1/2 text-white">
            {{ pageNumber }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>



</style>
