<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
/* Ensure navbar takes full width */
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 30;
}

/* Add top padding to content to account for fixed navbar */
.container {
  padding-top: 3.25rem; /* Bulma navbar height */
}
</style>
