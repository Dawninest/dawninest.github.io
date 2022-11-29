<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <img
    alt="Vue logo"
    class="logo"
    src="@/assets/img/logo.svg"
    width="125"
    height="125"
  />
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
