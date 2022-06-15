<template>
    <main>
        <h2>What critics are saying about us</h2>
        <div class="nytimes">
            <div class="left">
                <img src="../../../public/img/blog72x-1200x1375.jpg" alt="">
            </div>
            <div class="right">
                <span>Meggy Stewart</span>
                <h3>New York Times</h3>
                <FiveStarsVue></FiveStarsVue>
                <hr>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam, aspernatur quisquam deserunt, corporis excepturi dignissimos minus, officia perferendis aliquam dolorum consequatur quae reiciendis officiis sint temporibus voluptas amet quam.</p>
                <button>Read full article</button>
            </div>
        </div>
        <div class="bottom">
            <div class="theguardian">
                <img src="../../../public/img/info52x.jpg" alt="">
                <FadeOverlayVue></FadeOverlayVue>
                <div class="text">
                    <span>Mary Maxey</span>
                    <h3>The Guardian</h3>
                    <FiveStarsVue></FiveStarsVue>
                    <hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam, aspernatur quisquam deserunt, corporis excepturi dignissimos minus, officia perferendis aliquam dolorum consequatur quae reiciendis officiis sint temporibus voluptas amet quam.</p>
                    <button>Read full article</button>
                </div>
            </div>
            <div class="globenmail">
                <img src="../../../public/img/info12x.jpg" alt="">
                <FadeOverlayVue></FadeOverlayVue>
                <div class="text">
                    <span>Patrick Monroe</span>
                    <h3>Globe and Mail</h3>
                    <FiveStarsVue></FiveStarsVue>
                    <hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam, aspernatur quisquam deserunt, corporis excepturi dignissimos minus, officia perferendis aliquam dolorum consequatur quae reiciendis officiis sint temporibus voluptas amet quam.</p>
                    <button>Read full article</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import FiveStarsVue from '../Atoms/fiveStars.vue';
import FadeOverlayVue from '../Atoms/fadeOverlay.vue';
export default {
    name: "thirdTile",
    components: { FiveStarsVue, FadeOverlayVue }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/global-parts/_mixins.scss';

main{
    h2{
        @include sectionTitle($primary);
    }
    .nytimes{
        background-color: $primary;
        display: flex;
        .left{
            width: 50%;
            display: flex;
            img{
                width: 100%;
            }
        }
        .right{
            @include containerXS;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            gap: 20px;
            span{
                color: $secondary;
            }
            h3{
                @include title($secondary);
                font-size: 1.5rem;
                letter-spacing: -1px;
            }
            hr{
                width: 10%;
                color: $secondary;
            }
            p{
                @include caption($secondary);
            }
            button{
                @include button($secondary, $primary);
                width: 60%;
            }
        }
    }
    .bottom{
        display: flex;
        gap: 50px;
        .theguardian, .globenmail{
            position: relative;
            @include containerS;
            img{
                width: 100%;
            }
            .text{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                @include containerM;
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                gap: 20px;
                span{
                    color: $secondary;
                    text-transform: uppercase;
                    font-size: .8rem;
                }
                h3{
                    @include title($secondary);
                    font-size: 1.5rem;
                    letter-spacing: -1px;
                }
                hr{
                    width: 10%;
                    color: $secondary;
                }
                p{
                    @include caption($secondary);
                }
                button{
                    @include button($secondary, transparent);
                    &:hover{
                        color: $primary;
                    }
                    width: 60%;
                }
            }
        }
    }
}
</style>