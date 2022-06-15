<template>
    <main>
        <img src="../../../public/img/logo-restaurant-2x-600x115.png" alt="">
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, id. Sit unde porro quod quasi ut. Ab aliquam enim optio autem delectus, eius, numquam quas quaerat voluptas commodi unde omnis!</span>
        <SocialNavVue></SocialNavVue>
    </main>
</template>

<script>
import SocialNavVue from './socialNav.vue';
export default {
    name: "topFooter",
    components: { SocialNavVue }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global-parts/_mixins.scss';

main{
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    @include containerXS;
    img{
        width: 50%;
    }
    span{
        @include caption($secondary);
        text-align: center;
    }
}

</style>