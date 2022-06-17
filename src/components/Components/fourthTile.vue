<template>
    <main>
        <h2>Latest news & promotions</h2>
        <div class="cards">
            <div class="coffe">
                <CardWanimationVue :img="require('../../../public/img/blog92x-1200x1375.jpg')" :title="'The best coffe in town'"></CardWanimationVue>
            </div>
            <div class="menu">
                <CardWanimationVue :img="require('../../../public/img/blog72x-1200x1375.jpg')" :title="'Discover our new menu'"></CardWanimationVue>
            </div>
            <div class="news">
                <CardWanimationVue :img="require('../../../public/img/blog82x-1200x1375.jpg')" :title="'We now accept square!'"></CardWanimationVue>
            </div>
        </div>
    </main>
</template>

<script>
import CardWanimationVue from '../Atoms/cardWanimation.vue';
export default {
    name: "fourthTile",
    components: { CardWanimationVue }
}
</script>

<style scoped lang="scss">
@import '../../../src/assets/style/global-parts/mixins';

main{
    .cards{
        display: flex;
        gap: 1.25rem;
    }
    h2{
        @include sectionTitle($primary)
    }
}
</style>