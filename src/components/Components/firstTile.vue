<template>
    <main>
        <div class="top">
            <div class="text">
                <p><strong>Hac tellus, felis risus at</strong> mattis mattis. Eget euismod sempre eget tortor, donec amet, blandit. Tristique facilis faucibus elementum feugiat in nam in feugiat. Ipsum odio etiam duis facilis amet vulputate.</p>
                <h2>Food is our common ground, a universal ecperience.</h2>
                <p>Tristique tempus condimentum diam donec. Condimentum ullamcorper sit elementum hendrerit mi nulla in consequat, ut. Metus, nullam scelerisque netus viverra dui.</p>
                <img src="../../../public/img/signature.jpg" alt="">
            </div>
            <div class="pic">
                <div class="picontent">
                    <img src="../../../public/img/info22x.jpg" alt="">
                    <div class="overlay"></div>
                    <div class="pop-up">California Rolls - $22</div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="table">
                <img src="../../../public/img/sushi-1.png" alt="">
                <h3>The best table in town</h3>
                <hr>
                <span>Sed aenean egestas ut aliquam turpis mauris, molestie. Vitae tellus tempor sem id tempus neque, tellus turpis turpis. Morbi tortor id gravida aliquet.</span>
                <button>Explore the menu</button>
            </div>
            <div class="groups">
                <img src="../../../public/img/sushi-2.png" alt="">
                <h3>Perfect for groups</h3>
                <hr>
                <span>Sed aenean egestas ut aliquam turpis mauris, molestie. Vitae tellus tempor sem id tempus neque, tellus turpis turpis. Morbi tortor id gravida aliquet.</span>
                <button>Make a reservation</button>
            </div>
            <div class="products">
                <img src="../../../public/img/sushi-3.png" alt="">
                <h3>Fresh produce everyday</h3>
                <hr>
                <span>Sed aenean egestas ut aliquam turpis mauris, molestie. Vitae tellus tempor sem id tempus neque, tellus turpis turpis. Morbi tortor id gravida aliquet.</span>
                <button>Learn more about us</button>
            </div>
        </div>
    </main>
</template>

<script>
export default {
name: 'firstTile'
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global-parts/_mixins.scss';

main{
    display: flex;
    flex-flow: column nowrap;
    .top{
        margin-top: 50px;
        display: flex;
        flex-flow: row wrap;
        .text{
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            gap: 10px;
            @include containerS;
            p{
                @include containerM;
                padding: 0;
                margin: 0;
                @include caption($primary);
                strong{
                    text-transform: uppercase
                }
            }
            h2{
                @include containerM;
                padding: 10px 0;
                margin: 0;
                @include subTitle($primary);
            }
            img{
                width: 20%;
            }
        }
        .pic{
            @include containerS;
            padding: 0%;
            position: relative;
            text-align: center;
            &:hover{
                .pop-up{
                    bottom: 20px;
                }
            }
            .overlay{
                position: absolute;
                background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(212,219,219,0) 20%);
                width: 100%;
                height: 100%;
                bottom: 0;
                left: 0;
            }
            .pop-up{
                @include subTitle($secondary);
                width: 100%;
                background: transparent;
                font-size: 1rem;
                letter-spacing: 1px;
                position: absolute;
                bottom: -15px;
                left: 50%;
                transform: translate(-50%);
                transition: bottom .5s ease-in-out;
            }
            img, .picontent{
                width: 100%;
            }
            .picontent{
                position: relative;
            }
        }
    }
    .bottom{
        margin: 50px 0;
        display: flex;
        gap: 20px;
        .table, .groups, .products{
            @include containerXS;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            gap: 20px;
            img{
                width: 30%;
            }
            h3{
                @include title($primary);
                font-size: 1rem;
            }
            hr{
                width: 30%;
            }
            span{
                @include caption($primary);
                text-align: center
            }
            button{
                @include button($primary, $secondary);
                width: 70%;
            }
        }
        .groups{
            @include containerXS;
        }
        .products{
            @include containerXS;
        }
    }
}
</style>