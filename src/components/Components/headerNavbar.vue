<template>
    <nav>
        <ul>
            <a :href="`#${link.id}`" v-for="(link, i) in data.navbarVoicesPlusIDS" :key="i">{{link.title}}</a>
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
        a{
            @include navbarItem(white);
            text-decoration: none;
        }
        i{
            color: ($secondary);
            font-size: .9rem;
        }
    }
}
</style>