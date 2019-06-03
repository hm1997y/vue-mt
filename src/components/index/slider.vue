<template>
  <div class="slide">
    <el-carousel>
      <el-carousel-item v-for="item in imgList" :key="item.imgSrc">
        <img :src="item.imgSrc" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        {
          url: "#xxxx",
          imgSrc: "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"
        },
        {
          url: "#xxx",
          imgSrc: "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
        },
        {
          url: "#xxxx",
          imgSrc: "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg"
        }
      ]
    };
  }
};
</script>
