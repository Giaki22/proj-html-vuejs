<template>
    <main>
        <i class="fa-solid fa-star" v-for="i in 5" :key="i"></i>
    </main>
</template>

<script>
export default {
name: 'fiveStars'
}
</script>

<style scoped>
main{
    display: flex;
    gap: 5px;
    color: white;
    font-size: .8rem;
}
</style>