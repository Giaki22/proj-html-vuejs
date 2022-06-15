<template>
    <nav>
        <ul>
            <li v-for="(link, i) in data.navbarVoices" :key="i">{{link}}</li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
        </ul>
    </nav>
</template>

<script>
import data from '../../assets/shared/data.js'

export default {
    name: 'headerNavbar',
    data() {
        return {
            data
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global-parts/_mixins.scss';

nav{
    ul{
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        gap: 1.875rem;
        li{
            @include navbarItem(white);
        }
    }
}
</style>