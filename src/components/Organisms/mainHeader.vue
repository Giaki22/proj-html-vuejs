<template>
    <header>
        <div class="info">
            <mainLogo></mainLogo>
            <HeaderNavbar></HeaderNavbar>
        </div>
        <div class="content">
            <div class="decoration">
                <i class="fa-solid fa-grip-lines"></i>
            </div>
            <div class="text">
                <small>The best table in town</small>
                <h1>Fine dining experience</h1>
                <p>Pellentesqu vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis</p>
                <button>Explore the menu</button>
            </div>
        </div>
    </header>
</template>

<script>
import mainLogo from '../Atoms/mainLogo.vue'
import HeaderNavbar from '../Components/headerNavbar.vue'

export default {
    name: 'mainHeader',
    components: {
    mainLogo,
    HeaderNavbar
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
    .content{
        @include containerXS;
        padding: 50px 0;
        margin: 0 5%;
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        .decoration{
            @include title($secondary);
            font-size: 1rem;
            margin: 0 10px;
        }
        .text{
            margin-top: 3px;
            display: flex;
            flex-flow: column nowrap;
            gap: 50px;
            small{
                @include subTitle($secondary);
                font-size: 10px;
                font-weight: 400;
                letter-spacing: 2px;
            }
            h1{
                @include title($secondary);
            }
            p{
                @include caption($secondary);
                font-weight: 300;
                width: 65%;
            }
            button{
                @include button($secondary, $primary);
                width: 40%;
            }
        }
    }
}
</style>