<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.name">
      </component>
    </transition>
  </RouterView>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>