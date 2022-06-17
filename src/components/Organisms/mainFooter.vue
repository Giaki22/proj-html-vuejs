<template>
    <footer>
        <div class="overlay"></div>
        <div class="top">
            <TopFooterVue></TopFooterVue>
        </div>
        <div class="bottom">
            <span>Copyright 2012 - 2019 Giakingo | Can you beat a multiday Boolean Challenge in a day? | Yes, you can.</span>
        </div>
    </footer>
</template>

<script>
import TopFooterVue from '../Components/topFooter.vue';
export default {
    name: "mainFooter",
    components: { TopFooterVue }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global-parts/_mixins.scss';

footer{
    position: relative;
    .overlay{
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(212,219,219,0) 100%);
        }
    .top{
        @include containerXL;
        padding: 6.25rem 0;
        background-image: url(../../../public/img/slider52x.jpg);
        background-size: cover;
        background-position: bottom;
    }
    .bottom{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #030303;
        height: 1.875rem;
        @include caption($secondary);
        padding: 1.875rem 0;
    }
}

</style>