<template>
    <main>
        <div class="banner">
            <img src="../../../public/img/page52x.jpg" alt="">
            <div class="overlay">
                <div class="pop-up">Kung pao chicken - $32</div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
name: 'midPageBanner'
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global-parts/_mixins.scss';

main{
    .banner{
        position: relative;
        width: 100%;
        &:hover{
            .pop-up{
                bottom: 1.25rem;
            }
        }
        img{
            width: 100%;
        }
        .overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(212,219,219,0) 40%);
            text-align: center
        }
        .pop-up{
            @include subTitle($secondary);
            width: 100%;
            background: transparent;
            font-size: 16px;
            letter-spacing: .0625rem;
            position: absolute;
            bottom: -1.25rem;
            transition: bottom .5s ease-in-out;
        }
    }
}
</style>