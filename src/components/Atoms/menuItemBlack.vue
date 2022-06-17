<template>
    <main>
        <div class="top">
            <h5>{{name}}</h5>
            <h6>${{price}}</h6>
        </div>
        <span>{{description}}</span>
    </main>
</template>

<script>
export default {
name: 'menuItem',
props: {
    name: String,
    price: Number,
    description: String,
}
}
</script>

<style scoped lang="scss">
@import '../../../src/assets/style/global-parts/mixins';

main{
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    .top{
        display: flex;
        justify-content: space-between;
        margin-bottom: .625rem;
        h5, h6{
            @include title($primary);
            font-size: 12.8px;
        }
        span{
            @include caption($primary);
            font-size: 8px;
        }
    }
}
</style>