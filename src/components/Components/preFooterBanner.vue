<template>
    <main>
        <img src="../../../public/img/hero42x.jpg" alt="">
        <div class="info">
            <div class="top">
                <h2>Braised Abalone</h2>
                <small>$52</small>
            </div>
            <hr>
            <p>Pellentesqu vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis</p>
            <button>View in the menu</button>
        </div>
    </main>
</template>

<script>
export default {
name: 'preFooterBanner'
}
</script>

<style scoped lang="scss">
@import '../../../src/assets/style/global-parts/mixins';

main{
    display: flex;
    padding: 0;
    position: relative;
    img{
       width: 100%;
    }
    .info{
        .top{
            display: flex;
        }
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translate(0, -50%);
        @include containerXS;
        background-color: $primary;
        margin-top: .1875rem;
        display: flex;
        flex-flow: column nowrap;
        gap: 3.125rem;
        padding: 3.125rem;
        small{
            @include subTitle($secondary);
            font-size: .625rem;
            font-weight: 400;
            letter-spacing: .125rem;
        }
        hr{
            width: 20%;
        }
        h2{
            @include title($secondary);
        }
        p{
            @include caption($secondary);
            font-weight: 300;
            width: 65%;
        }
        button{
            @include button($secondary, $primary);
            width: 50%;
        }
    }
}
</style>