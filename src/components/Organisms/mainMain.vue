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
        <section class="takeout">
            <FifthTileVue></FifthTileVue>
        </section>
        <section class="prices">
            <SixthTileVue></SixthTileVue>
        </section>
        <section class="banner">
            <PreFooterBannerVue></PreFooterBannerVue>
        </section>
    </main>
</template>

<script>
import FirstTileVue from '../Components/firstTile.vue';
import SecondTileVue from '../Components/secondTile.vue';
import ThirdTileVue from '../Components/thirdTile.vue';
import MidPageBannerVue from '../Atoms/midPageBanner.vue';
import FourthTileVue from '../Components/fourthTile.vue';
import FifthTileVue from '../Components/fifthTile.vue';
import SixthTileVue from '../Components/sixthTile.vue';
import PreFooterBannerVue from '../Components/preFooterBanner.vue';

export default {
    name: "mainMain",
    components: { FirstTileVue, SecondTileVue, ThirdTileVue, MidPageBannerVue, FourthTileVue, FifthTileVue, SixthTileVue, PreFooterBannerVue }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global-parts/_mixins.scss';

main{
    .food, .reviews, .news, .prices{
        @include containerM;
    }
    .menu, .banner, .takeout{
        @include containerXL;
    }
}

</style>