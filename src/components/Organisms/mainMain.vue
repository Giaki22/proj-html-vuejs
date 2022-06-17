<template>
    <main>
        <section id="food">
            <FirstTileVue></FirstTileVue>
        </section>
        <section id="menu">
            <SecondTileVue></SecondTileVue>
        </section>
        <section id="reviews">
            <ThirdTileVue></ThirdTileVue>
        </section>
        <section id="banner">
            <MidPageBannerVue></MidPageBannerVue>
        </section>
        <section id="news">
            <FourthTileVue></FourthTileVue>
        </section>
        <section id="takeout">
            <FifthTileVue></FifthTileVue>
        </section>
        <section id="prices">
            <SixthTileVue></SixthTileVue>
        </section>
        <section id="bannerbottom">
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
    #food, #reviews, #news, #prices{
        @include containerM;
    }
    #menu, #banner, #takeout, #bannerbottom{
        @include containerXL;
    }
    #bannerbottom{
        padding: 0;
        margin-top: 1.875rem;
    }
}

</style>