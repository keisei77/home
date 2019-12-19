<template lang="pug">
      div(class='banner_work_box')
        div(v-for="(v,i) of activeBannerList" :key="i" ) 
            div(class='banner_work_title' v-text="v.banner_work_title") 
            div(class='banner_work_msg' v-html="v.banner_work_msg") 
            img(class='banner_work_img' :src="require('../../../images/' + v.banner_work_img)")
</template>
<script>
export default {
  name: "banner_work",
  data() {
    return {
      s_bannerList: [
        {
          banner_work_title: "半常绿季雨林",
          banner_work_msg:
            "两层的封闭的乔木层，降水充沛，干湿季分明，常绿乔木与雨林植物",
          banner_work_img: "s1.png"
        },
        {
          banner_work_title: "河谷稀树灌木草丛",
          banner_work_msg:
            "处于炎热、季节性干旱气候条件，具有明显的次生性质，外貌上以草丛为主，其间散生低矮的灌木和乔木。",
          banner_work_img: "s2.png"
        }
      ],
      b_bannerList: [
        {
          banner_work_title: "半常绿季雨林",
          banner_work_msg:
            "两层的封闭的乔木层，降水充沛，干湿季分明，常绿乔木与雨林植物",
          banner_work_img: "s2.png"
        }
      ],
      r_bannerList: [
        {
          banner_work_title: "半常绿季雨林",
          banner_work_msg:
            "两层的封闭的乔木层，降水充沛，干湿季分明，常绿乔木与雨林植物",
          banner_work_img: "s2.png"
        }
      ]
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