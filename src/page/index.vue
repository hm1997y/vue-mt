<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu/>
      </el-col>
      <el-col :span="19">
        <m-life/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :navList="istyleList"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :navList="comment"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :navList="istyleList"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/index/menu.vue";
import MLife from "@/components/index/life.vue";
import MContainer from "@/components/index/container.vue";
import api from "@/api/index.js";
export default {
  components: {
    MMenu,
    MLife,
    MContainer
  },
  created(){
     api.resultsByKeywords().then(res => {
      console.log(res.data.data);
      this.list = res.data.data;
    });
  },
  data() {
    return {
      istyleList: {
        class: "istyle",
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "date"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          },
          {
            text: "电影演出",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "travel"
          }
        ]
      },
      comment: {
        class: "youhui",
        title: "很优惠",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "美食",
            tab: "food"
          },
          {
            text: "休闲",
            tab: "xiuxian"
          }
        ]
      }
    };
  }
};
</script>


<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>

