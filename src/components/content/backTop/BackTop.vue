<template>
    <div class="back-top">
        <img src="~assets/img/back_top.png" alt />
    </div>
</template>

<script>
export default {
    name: "BackTop"
};
</script>

<style scoped>
.back-top {
    width: 48px;
    height: 48px;
    position: fixed;
    bottom: 60px;
    right: 10px;
    z-index: 2;
}
.back-top img {
    width: 100%;
    height: 100%;
}
</style>