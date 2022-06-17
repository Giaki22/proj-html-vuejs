<template>
  <main>
    <div class="left">
        <img src="../../../public/img/slider32x.jpg" alt="">
    </div>
    <div class="right">
        <div class="content">
            <div class="decoration">
                <i class="fa-solid fa-grip-lines"></i>
            </div>
            <div class="text">
                <small>Fine dining experience</small>
                <h2>The best table in town</h2>
                <p>Pellentesqu vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis</p>
                <button>Explore the menu</button>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
export default {
    name: "secondTile",
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global-parts/_mixins.scss';

main{
    background-color: $primary;
    display: flex;
    align-content: center;
    justify-content: space-between;
    .left{
        width: 60%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .right{
        width: 40%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        .content{
            padding: 3.125rem 0;
            margin: 0 5%;
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            .decoration{
                @include title($secondary);
                font-size: 16px;
                margin: 0 .625rem;
            }
            .text{
                margin-top: .1875rem;
                display: flex;
                flex-flow: column nowrap;
                gap: 3.125rem;
                small{
                    @include subTitle($secondary);
                    font-size: .625rem;
                    font-weight: 400;
                    letter-spacing: .125rem;
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
                    width: 40%;
                }
            }
        }
    }
}
</style>