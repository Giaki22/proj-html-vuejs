<template>
  <div id="app">
    <MainHeaderVue></MainHeaderVue>
    <MainMainVue></MainMainVue>
    <MainFooterVue></MainFooterVue>
  </div>
</template>

<script>
import MainHeaderVue from './components/Organisms/mainHeader.vue';
import MainMainVue from './components/Organisms/mainMain.vue';
import MainFooterVue from './components/Organisms/mainFooter.vue';

export default {
  name: 'App',
  components: {
    MainHeaderVue,
    MainMainVue,
    MainFooterVue
}
}
</script>

<style lang="scss">
@import './assets/style/global.scss';
html{
  scroll-behavior: smooth;
}
</style>
