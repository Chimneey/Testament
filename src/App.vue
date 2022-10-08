<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> -
        <RouterLink to="/dashboard">Dashboard</RouterLink> -
        <RouterLink to="/recipient">recipient</RouterLink> -
        <RouterLink to="/contract">contract</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>


header {
  position: absolute;
  padding: 15px;
  background-color: #d60f0fb6;
  z-index: 1;
}
</style>
