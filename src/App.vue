<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import JSON from './components/JSON.vue'
import Form from "./views/HomeView.vue"
import BHeader from './components/BHeader.vue'
</script>

<template>
  <div class="main-container">
    <header>
      <BHeader />
    </header>
  
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>
