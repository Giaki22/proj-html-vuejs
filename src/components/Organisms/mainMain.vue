<template>
    <main>
        <section class="food">
            <FirstTileVue></FirstTileVue>
        </section>
        <section class="menu">
            <SecondTileVue></SecondTileVue>
        </section>
        <section class="reviews">
            <ThirdTileVue></ThirdTileVue>
        </section>
        <section class="banner">
            <MidPageBannerVue></MidPageBannerVue>
        </section>
        <section class="news">
            <FourthTileVue></FourthTileVue>
        </section>
    </main>
</template>

<script>
import FirstTileVue from '../Components/firstTile.vue';
import SecondTileVue from '../Components/secondTile.vue';
import ThirdTileVue from '../Components/thirdTile.vue';
import MidPageBannerVue from '../Atoms/midPageBanner.vue';
import FourthTileVue from '../Components/fourthTile.vue';
export default {
    name: "mainMain",
    components: { FirstTileVue, SecondTileVue, ThirdTileVue, MidPageBannerVue, FourthTileVue }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global-parts/_mixins.scss';

main{
    .food, .reviews, .news{
        @include containerM;
    }
    .menu, .banner{
        @include containerXL;
    }
}

</style>