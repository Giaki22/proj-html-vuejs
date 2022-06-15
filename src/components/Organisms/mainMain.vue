<template>
    <main>
        <section class="food">
            <FirstTileVue></FirstTileVue>
        </section>
    </main>
</template>

<script>
import FirstTileVue from '../Components/firstTile.vue';
export default {
    name: "mainMain",
    components: { FirstTileVue }
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