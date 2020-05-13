<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in banner" :key="item.title">
                <a :href="item.link">
                    <img :src="item.image" alt />
                </a>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name: "HomeSwiper",
    props: {
        banner: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 180px;
    line-height: 180px;
    text-align: center;
    background-color: #39a9ed;
}
.van-swipe-item img {
    width: 100%;
    height: 100%;
}
</style>