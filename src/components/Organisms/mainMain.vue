<template>
    <main>
        <section class="food">
            <FirstTileVue></FirstTileVue>
        </section>
        <section class="menu">
            <SecondTileVue></SecondTileVue>
        </section>
    </main>
</template>

<script>
import FirstTileVue from '../Components/firstTile.vue';
import SecondTileVue from '../Components/secondTile.vue';
export default {
    name: "mainMain",
    components: { FirstTileVue, SecondTileVue }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global-parts/_mixins.scss';

main{
    .food{
        @include containerM;
    }
}

</style>