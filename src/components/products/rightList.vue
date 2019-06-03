<template>
    <div class="m-right-list">
        <h3>猜你喜欢</h3>
        <div class="details" v-for="(item) in recommendList" :key="item.itemId" >
            <img :src="item.imgUrl" alt="">
            <p>{{item.title}}</p>
            <p class="address">{{item.areaName}}</p>
            <p class="price">{{item.avgPrice}}</p>
        </div>
    </div>
</template>


<script> 
import api from '@/api/index.js';
export default {
    data(){
        return {
            recommendList:[]
        }
    },
    created(){
api.recommend().then(res => {
    console.log(res.data.data)
    this.recommendList = res.data.data
})
    }
    
}
</script>

<style lang="scss">
@import '@/assets/css/products/rightlist.scss';

</style>


