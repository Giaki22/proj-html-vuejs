<template>
    <div class="overlay"></div>
</template>

<script>
export default {
name: 'fadeOverlay'
}
</script>

<style scoped>
.overlay{
    margin-top: 1.875rem;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(212,219,219,0) 100%);
    position: absolute;
    top: 0;
    left: 0;
}
</style>