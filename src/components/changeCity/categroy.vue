<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl
      v-for="(item,index) in cityGroup"
      :key="item.id"
      class="m-categroy-section"
      :id="'city-'+index"
    >
      <dt>{{index}}</dt>
      <dd v-for="(city,index) in item" :key="index">
        <span @click="changeToCity(city)">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>


<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityGroup: {},
      data: []
    };
  },
  created() {
    api.cityList().then(res => {
      var obj = {};
      res.data.data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
        // console.log(obj);
        this.cityGroup = obj;
      });
    });
  },
  methods: {
    changeToCity(item) {
      this.$store.dispatch("setPosition", item);
      this.$router.push({name:'index'})
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>


