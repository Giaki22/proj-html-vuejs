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
    </main>
</template>

<script>
import FirstTileVue from '../Components/firstTile.vue';
import SecondTileVue from '../Components/secondTile.vue';
import ThirdTileVue from '../Components/thirdTile.vue';
export default {
    name: "mainMain",
    components: { FirstTileVue, SecondTileVue, ThirdTileVue }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global-parts/_mixins.scss';

main{
    .food, .reviews{
        @include containerM;
    }
    .menu{
        @include containerXL;
    }
}

</style>