<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :list="provienceList"
      :value="provience"
      title="省份"
      :showWrapperActive="provienceActive"
      @change_active="changeProvienceActive"
      @change="changeProvience"
      className="province"
    ></m-select>
    <m-select
      :list="cityList"
      :value="city"
      title="城市"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    ></m-select>
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "@/components/changeCity/select.vue";
import api from "@/api/index.js";
export default {
  components: {
    MSelect
  },
  created() {
    api.getProvince().then(res => {
      // console.log(res.data.data)
      this.provienceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    });
    api.cityList().then(res => {
      console.log(res);
      this.cityList = res.data.data;
    });
  },
  data() {
    return {
      provienceList: [],
      provience: "省份",
      cityList: [],
      city: "城市",
      provienceActive: false,
      cityActive: false,
      cityDisabled: true,
      className:'',
      searchList: [
        "杭州",
        "深圳",
        "攀枝花",
        "北京",
        "上海",
        "成都",
        "重庆",
        "哈尔滨"
      ],
      searchWord: "",
      loading: false
    };
  },
  
  methods: {
    changeProvienceActive(flag) {
      this.provienceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provienceActive = false;
      }
    },
    changeProvience(item) {
      this.provience = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    changeCity(item) {
      this.city = item.name;
      this.$store.dispatch('setPosition',item);
      this.$router.push({name:'index'})
    },
    remoteMethod(e) {
      // console.log(e)
      // 请求后端接口
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>


