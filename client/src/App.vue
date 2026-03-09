<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <nav>
      <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <div class = "container">
  <RouterView />
 </div>
 </template>
