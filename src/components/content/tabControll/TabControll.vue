<template>
    <div class="tab-controll">
        <div class="tab-controll-item"
        :class="{active: currentIndex === index}" 
        v-for="(item,index) in titles" 
        :key="item" 
        @click="handleClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TabControll',
        props:{
            titles:{
                type:Array,
                defalut() {
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            handleClick(index) {
                this.currentIndex = index
                this.$emit('tabClick',index)
            }
        },
    }
</script>

<style scoped>
.tab-controll{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
}
.tab-controll-item{
    flex: 1;
}
.tab-controll-item span{
    padding:5px;
}
.active{
    color:pink;
}
.active span {
    border-bottom: 3px solid pink;
}
</style>