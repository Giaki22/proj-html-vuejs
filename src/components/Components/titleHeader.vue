<template>
    <main>
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
    </main>
</template>

<script>
export default {
name: 'titleHeader'
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global-parts/mixins';

main{
    .content{
        @include containerXS;
        padding: 3.125rem 0;
        margin: 0 5%;
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        .decoration{
            @include title($secondary);
            font-size: 1rem;
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