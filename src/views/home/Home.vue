<template>
    <div class="home">
        <!-- 顶部标题 -->
        <nav-bar class="nav-home">
            <div slot="center">购物街</div>
        </nav-bar>
        <scroll class="scroll" ref="scroll" :probe-type="3" @scroll="contentScroll">
            <!-- 轮播图 -->
            <home-swiper :banner="banner" />
            <!-- 推荐视图 -->
            <recommend-view :recommend="recommend" />
            <feature-view></feature-view>
            <tab-controll :titles="['流行','新品','精选']" class="tab-controll" @tabClick="tabClick"></tab-controll>
            <goods-list :goods="showGoods"></goods-list>
        </scroll>
        <back-top @click.native="handleBackTop" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControll from "components/content/tabControll/TabControll";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
    name: "Home",
    components: {
        NavBar,
        TabControll,
        GoodsList,
        HomeSwiper,
        RecommendView,
        FeatureView,
        Scroll,
        BackTop
    },
    data() {
        return {
            banner: [],
            recommend: [],
            goods: {
                pop: { page: 0, list: [] },
                new: { page: 0, list: [] },
                sell: { page: 0, list: [] }
            },
            currentType: "pop",
            isShowBackTop:false
        };
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list;
        }
    },
    created() {
        //请求多个数据
        this.getHomeMultidata();
        //请求商品数据
        this.getHomeGoods("pop");
        this.getHomeGoods("new");
        this.getHomeGoods("sell");
    },
    methods: {
        //请求 首页数据
        getHomeMultidata() {
            getHomeMultidata().then(res => {
                this.banner = res.data.data.banner.list;
                this.recommend = res.data.data.recommend.list;
            });
        },
        //请求 商品数据
        getHomeGoods(type) {
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then(res => {
                let list = res.data.data.list;
                this.goods[type].list.push(...list);
                this.goods[type].page += 1;
            });
        },
        //点击切换事件
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = "pop";
                    break;
                case 1:
                    this.currentType = "new";
                    break;
                case 3:
                    this.currentType = "sell";
                    break;
            }
        },
        // 点击回到顶部
        handleBackTop() {
            this.$refs.scroll.scrollTo(0, 0);
        },
        contentScroll(position) {
           this.isShowBackTop = -(position.y) > 1000
        }
    }
};
</script>

<style scoped>
.home {
    padding-top: 44px;
    position: relative;
}
.nav-home {
    background-color: pink;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}
.tab-controll {
    position: sticky;
    top: 44px;
}
.scroll {
    position: fixed;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>