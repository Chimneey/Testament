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
  <div class="main-content">
    <RouterView />
  </div>
</template>

<style scoped>
/* Reset */
@import './stylesheets/reset.css';

header {
  /* this header tag will be deleted */
  position: absolute;
  padding: 15px;
  margin: 15px;
  background-color: rgba(217, 28, 28, 0.463);
}

.main-content{
  min-height: 100vh;
  min-width: 100vw;
}
</style>
