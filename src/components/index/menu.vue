<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menuList"
        :key="index"
        @mouseenter="menuEnter(item)"
        @mouseleave="menuLeave"
      >
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
      <!-- <dd>
                <i class="takeout"></i>
                外卖
                <span class="arrow"></span>
            </dd>
            <dd>
                <i class="hotel"></i>
                酒店
                <span class="arrow"></span>
            </dd>
      <dd>旅游</dd>-->
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item, index) in curDetail.items">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v,i) in item.items" :key="v + '_' + i">{{v}}</span>
      </template>
    </div>
  </div>
</template>


<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      curDetail: null,
      menuList: []
    };
  },
  created(){
    api.getNavList().then(res => {
      // console.log('=====',res.data.data)
      this.menuList = res.data.data;
    })
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item;
    },
    menuLeave() {
      var self = this;
      this.timer = setTimeout(function() {
        self.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave(){
       this.curDetail = null; 
    }
  }
};
</script>

<style lang="scss">
</style>


