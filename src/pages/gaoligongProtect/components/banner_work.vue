<template lang="pug">
      div(class='banner_work_box')
        div(v-for="(v,i) of activeBannerList" :key="i" ) 
            div(class='banner_work_title' v-text="v.banner_work_title") 
            div(class='banner_work_msg' v-html="v.banner_work_msg") 
            img(class='banner_work_img' :src="require('../../../images/' + v.banner_work_img)")
</template>
<script>
import { s_data, b_data, r_data } from "./index.js";
export default {
  name: "banner_work",
  data() {
    return {
      //生态系统数据
      s_bannerList: s_data,
      //保护工作数据
      b_bannerList: b_data,
      //历史人文数据
      r_bannerList: r_data
    };
  },
  mounted() {},
  computed: {
    activeBannerList() {
      let r = window.location.search.substr(6);
      let p_name = decodeURI(r);
      let temp = [];
      if (p_name === "生态系统") {
        temp = this.s_bannerList;
      }
      if (p_name === "保护工作") {
        temp = this.b_bannerList;
      }
      if (p_name === "历史人文") {
        temp = this.r_bannerList;
      }
      return temp;
    }
  }
};
</script>
<style lang="scss" scoped>
.banner_work_box {
  width: 1200px;
  margin: 0 auto;
}
.banner_work_title {
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #000000;
  margin-top: 70px;
}
.banner_work_msg {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #9d9e9c;
  line-height: 24px;
  margin-top: 24px;
}
.banner_work_img {
  margin-top: 95px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}
</style>