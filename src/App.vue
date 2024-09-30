<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavComponent from './components/NavComponent.vue'
</script>

<template>
  <div id="app">
    <NavComponent/>
    <router-view />
  </div>
</template>

<style scoped></style>
