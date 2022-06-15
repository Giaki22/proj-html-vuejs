<template>
  <div id="app">
    <MainHeaderVue></MainHeaderVue>
  </div>
</template>

<script>
import MainHeaderVue from './components/Organisms/mainHeader.vue';

export default {
  name: 'App',
  components: {
    MainHeaderVue
}
}
</script>

<style lang="scss">
@import './assets/style/global.scss';
</style>
