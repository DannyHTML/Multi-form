<script setup lang="ts">
import { useFormStore } from '../store/form';

const formStore = useFormStore();

defineProps({
      confirm: Boolean
});


</script>

<template>
      <button @click="formStore.nextPage()" class="px-2 py-1 rounded-md bg-secondary text-white" :disabled="confirm" >Next Step</button>
</template>

<style scoped>

</style>