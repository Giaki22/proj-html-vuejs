<template>
    <header>
        <div class="info">
            <mainLogo></mainLogo>
            <HeaderNavbar></HeaderNavbar>
        </div>
        <TitleHeaderVue></TitleHeaderVue>
    </header>
</template>

<script>
import mainLogo from '../Atoms/mainLogo.vue'
import HeaderNavbar from '../Components/headerNavbar.vue'
import TitleHeaderVue from '../Components/titleHeader.vue'

export default {
    name: 'mainHeader',
    components: {
    mainLogo,
    HeaderNavbar,
    TitleHeaderVue
}
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global-parts/_mixins.scss';

header{
    //Background
    background: url(../../../public/img/slider52x.jpg);
    background-color: #030303;
    background-repeat: no-repeat;
    background-position: right;
    background-size: 60%;
    object-fit: cover;
    // min-height: 650px;
    //Elements
    .info{
        @include containerL;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }
}
</style>