<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommend" :key="item.title">
            <a :href="item.link">
                <img :src="item.image" alt />
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecommendView",
    props: {
        recommend: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>

<style scoped>
.recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}

.recommend-item {
    flex: 1;
}
.recommend-item a {
    color: rgb(63, 61, 61);
}
.recommend-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
}
</style>