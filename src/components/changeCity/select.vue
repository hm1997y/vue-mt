<template>
  <div
    :class="['choose-wrap', disabled ?'disabled':'']"
    @click="showWrapper"
    v-document-click="documentClick"
  >
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showWrapperActive}">
        <h2>{{title}}</h2>
        <div :class="['wrapper',className]">
          <div class="col" v-for="(col,index) in renderList" :key="index">
            <span
              :class="{'mt-item':true,'active':item == value}"
              v-for="(item,index) in col"
              :key="index"
              @click="changeValue(item)"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   showWrapperActive: false
    };
  },
  computed: {
    renderList: function() {
      let col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for (let i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      return resultList;
    }
  },
  props: [
    "list",
    "value",
    "title",
    "showWrapperActive",
    "disabled",
    "className"
  ],
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      //   this.showWrapperActive = true;
      if (!this.disabled) {
        this.$emit("change_active", true);
      }
    },
    documentClick() {
      this.$emit("change_active", false);
      //   this.showWrapperActive = false;
    },
    changeValue(item) {
      this.$emit("change", item);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>


