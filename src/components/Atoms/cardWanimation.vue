<template>
    <main>
        <img :src="img" alt="">
        <div class="text">
            <i class="fa-solid fa-link"></i>
            <h4>{{title}}</h4>
            <span>By admin | Januray 7th, 2020 | Categories: News</span>
        </div>
    </main>
</template>

<script>
export default {
name: 'carWanimation',
props: {
    img: String,
    title: String
}
}
</script>

<style scoped lang="scss">
@import '../../../src/assets/style/global-parts/mixins';

main{
        display: flex;
        flex-flow: column nowrap;
        gap: 20px;
        position: relative;
        img{
            width: 100%;
            position: relative;
            &:hover{
            .text{
                position: absolute;
                
            }
            img{
                height: 100px;
            }
        }
        }
        .text{
            text-align: center;
            i{
                color: white;
            }
            h4{
                @include subTitle($primary);
                font-size: 1rem;
                letter-spacing: 0px;
            }
            span{
                @include caption($primary);
            }
        }
    }
</style>