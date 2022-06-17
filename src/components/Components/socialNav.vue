<template>
    <nav>
        <img src="../../../public/img/footer-facebook.png" alt="404">
        <img src="../../../public/img/footer-twitter.png" alt="404">
        <img src="../../../public/img/footer-youtube.png" alt="404">
        <img src="../../../public/img/footer-pinterest.png" alt="404">
        <img src="../../../public/img/footer-periscope.png" alt="404">
    </nav>
</template>

<script>
export default {
    name: 'socialNav'
}
</script>

<style lang='scss' scoped>
nav{
    display: flex;
    flex-flow: row nowrap;
    gap: .625rem;
    img{
        width: 1.875rem;
        height: 1.875rem;
    }
    img:hover{
        cursor: pointer;
        }
}
</style>