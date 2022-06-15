<template>
  <div id="app">
    <MainHeaderVue></MainHeaderVue>
    <MainMainVue></MainMainVue>
  </div>
</template>

<script>
import MainHeaderVue from './components/Organisms/mainHeader.vue';
import MainMainVue from './components/Organisms/mainMain.vue';

export default {
  name: 'App',
  components: {
    MainHeaderVue,
    MainMainVue
}
}
</script>

<style lang="scss">
@import './assets/style/global.scss';
</style>
