<template>
  <div class="m-istyle">
    <dl class="istyle" @mouseover="over" :class="navList.class">
      <dt>{{navList.title}}</dt>
      <dd
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
        v-for="(item, index) in navList.list"
        :key="index"
      >{{item.text}}</dd>
      <!-- <dd data-type="date" :class="{active: kind == 'date'}">约会聚餐</dd>
      <dd data-type="spa" :class="{active: kind == 'spa'}">丽人SPA</dd>
      <dd data-type="movie" :class="{active: kind == 'movie'}">电影演出</dd>
      <dd data-type="travel" :class="{active: kind == 'travel'}">品质出游</dd>-->
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="naver">
          <img :src="item.image" class="image">
          <div style="padding: 14px;" class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price_info" v-if="item.rentNum && item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价￥{{item.price_info.old_price}}</span>
              <span class="bottom-right-info sold">{{item.address}}</span>
            </div>
            <div class="price_info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
            <div class="price_info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                <span class="units">/{{item.price_info.units}}</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>


<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      kind: "all",
      resultData:{},
      list: []
    };
  },
  props: ["navList"],
  created() {
    api.resultsByKeywords().then(res => {
      console.log(res.data.data);
      this.resultData = res.data.data;
    });
  },
  methods: {
    over(e) {
      // console.log(e.target.tagName);
      let dom = e.target;
      let tagName = dom.tagName;
      if (tagName != "DD") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      //  console.log(this.kind)
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>


