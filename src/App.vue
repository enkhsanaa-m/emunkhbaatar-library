<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import JSON from './components/JSON.vue'
import Form from "./views/HomeView.vue"
import BHeader from './components/BHeader.vue'
import { useRoute } from 'vue-router';
import CountBookAPI from './views/CountBookAPI.vue';
import { computed } from 'vue';
const route = useRoute();

console.log('current route names: ', route.name);

const showHeader = computed (() => route.name !== "CountBookAPI");

</script>

<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>
  
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>
