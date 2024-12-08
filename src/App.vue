<template>
  <div id="app">
    <SiteHeader />
    <router-view />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
  },
};
</script>

<style>
  @import url("../src/css/style.css");
</style>
