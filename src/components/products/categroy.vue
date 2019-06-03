<template>
    <div class="m-products-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="item in menuList" :key="item.type">
            <m-select :name="item.title" :list="item.sub_list" />
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="item in menuList" :key="item.type">
            <m-select :name="item.title" :list="item.sub_list" />
            </dd>
        </dl>
    </div>
</template>

<script>
import MSelect from './select'
export default {
    components:{
        MSelect
    },
    data(){
        return {
            menuList:[]
        }
    }
    
}
</script>

<style lang="scss">
@import '@/assets/css/products/list.scss';
</style>


