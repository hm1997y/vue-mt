<template>
    <div class="page-changeCity">
    <el-row>
        <provience  />
    </el-row>
    <el-row>
        <hot-city title="热门城市" :list="hotCityList" />
    </el-row>
    <el-row>
        <hot-city title="最近访问" :list="recentCity" />
    </el-row>
    <el-row>
        <categroy />
    </el-row>
    </div>
</template>

<script>
import Provience from '@/components/changeCity/provience.vue'
import HotCity from '@/components/changeCity/hot.vue'
import Categroy from '@/components/changeCity/categroy.vue'
import api from '@/api/index.js'
export default {
    components:{
        Provience,
        HotCity,
        Categroy
    },
    created(){
        api.getHotCity().then(res => {
            // console.log(res);
            this.hotCityList = res.data.data.map(ele => ele.name);  
        })
        api.getRecentsCity().then(res => {
            this.recentCity = res.data.data.map(ele => ele.name)
        })
    },
     data(){
        return {
            hotCityList:[],
            recentCity:[],
        }
    }
  
    
}
</script>

<style lang="scss">
@import '@/assets/css/changecity/iselect.scss'
</style>


