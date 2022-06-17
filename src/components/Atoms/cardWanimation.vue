<template>
    <main class="card">
        <img :src="img" alt="">
        <FadeOverlay></FadeOverlay>
        <div class="text">
            <i class="fa-solid fa-link"></i>
            <h4>{{title}}</h4>
            <span class="hidden">By admin | Januray 7th, 2020 | Categories:</span>
            <span>News</span>
        </div>
    </main>
</template>

<script>
import FadeOverlay from './fadeOverlay.vue';
export default {
    name: "carWanimation",
    props: {
        img: String,
        title: String
    },
    components: { FadeOverlay }
}
</script>

<style scoped lang="scss">
@import '../../../src/assets/style/global-parts/mixins';

.card{
    display: flex;
    flex-flow: column nowrap;
    gap: 1.25rem;
    position: relative;
    .overlay{
        position: absolute;
        top: -2%;
        left: 0;
        width: 100%;
        height: 100%;
        margin-top: 0;
        opacity: 0;
        transition: opacity .2s ease-in-out;
    }
    &:hover{
        cursor: pointer;
        .overlay{
            opacity: 100%;
        }
        img{
            transform: scaleY(115%) translateY(5%);
        }
        .text{
            transform: translate(0, -300%);
            h4, span{
                color: ($secondary);
            }
            .hidden{
                display: none;
            }
        }
    }
    img{
        width: 100%;
        position: relative;
        transition: all .5s ease-out;
    }
    .text{
        text-align: center;
        transition: all .5s ease-out;
        i{
            color: white;
        }
        h4{
            @include subTitle($primary);
            font-size: 16px;
            letter-spacing: 0rem;
        }
        span{
            @include caption($primary);
        }
    }
}
</style>