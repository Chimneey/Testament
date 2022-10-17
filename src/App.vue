<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> -
        <RouterLink to="/dashboard">Dashboard</RouterLink> -
        <RouterLink to="/recipient">recipient</RouterLink> -
        <RouterLink to="/contract">contract</RouterLink>
      </nav>
  </header> -->
  <div id="main-logo-btn">
    <RouterLink to="/">
      <!-- <img src="src/assets/logo.svg" alt="Testament Logo"> -->
      <p>Testament</p>
    </RouterLink>
  </div>
  <div id="main-content">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
header {
  /* this header tag will be deleted */
  position: absolute;
  padding: 15px;
  margin: 15px;
  background-color: rgba(217, 28, 28, 0.463);
  z-index: 1;
}

#main-logo-btn {
  width: 100vw;
  position: absolute;
  display: flex;
  top: 15px;
  justify-content: center;

  > a {
    width: fit-content;
    padding: 10px;
    display: flex;
    align-self: center;
  }

  img {
    height: 25px;
    align-self: center;
  }

  p {
    align-self: center;
    font-weight: 700;
    font-size: 3em;
    margin-left: 10px;
  }
}

#main-content {
  min-height: 100vh;
  min-width: 100vw;
}
</style>
