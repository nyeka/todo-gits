<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="main">
    <div class="wrapper">
      <nav class="nav">
        <RouterLink to="/todo">Home</RouterLink>
        <RouterLink to="/todo/app">Todo</RouterLink>
        <RouterLink to="/todo/about">About</RouterLink>
      </nav>
      <span class="line"></span>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #242424;
  color-scheme: light dark;
  color: white;
}

.wrapper {
  margin: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  gap: 24px;
}

.line {
  background-color: white;
  height: 1px;
  width: 100%;
}

.nav {
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-size: 24px;
}
</style>
