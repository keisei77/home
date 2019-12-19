<template lang="pug">
    div
        div(class='banner_box')
            img(class='banner_img' :src="win_url ? hostName +itemImg : itemImg")
            div(class='banner_info')
                div(class='banner_title' v-text="activeBannerList.title") 
                    span(class='banner_title_EN' v-text="activeBannerList.enTitle")
                

</template>
<script>
export default {
  name: "banner",
  data() {
    return {
      win_url: true,
      itemImg: "/ufs/2019/9/283844d5897b4daf9bb752f10858573d.jpg",
      hostName: "http://www.wildgaoligong.com",
      s_title: {
        title: "生态系统",
        enTitle: "Cecological System"
      },
      b_title: {
        title: "保护工作",
        enTitle: "Conservation Actions"
      },
      r_title: {
        title: "历史人文",
        enTitle: "History Related"
      }
    };
  },
  computed: {
    activeBannerList() {
      let r = window.location.search.substr(6);
      let p_name = decodeURI(r);
      let temp = {};
      if (p_name === "生态系统") {
        temp = this.s_title;
      }
      if (p_name === "保护工作") {
        temp = this.b_title;
      }
      if (p_name === "历史人文") {
        temp = this.r_title;
      }
      return temp;
    }
  },
  methods: {
    getWinUrl() {
      //判断是本地还是线上 true为本地,false为线上
      var win = window.location.hostname;
      this.win_url = win == "localhost" ? true : false;
    }
  }
};
</script>
<style lang="scss" scoped>
.banner_box {
  width: 100%;
  height: 1058px;
  position: relative;
}
.banner_img {
  width: 100%;
  height: 1058px;
}
.banner_info {
  position: absolute;
  width: 100%;
  height: 72px;
  line-height: 72px;
  bottom: 28px;
  left: 0;
  background-color: rgba(#fff, 0.38);
}
.banner_title {
  width: 444px;
  height: 48px;
  font-family: PingFangSC-Semibold;
  font-size: 34px;
  color: #ffffff;
  margin-left: 42px;
  margin-top: 12px;
  line-height: 48px;
}
.banner_title_EN {
  width: 290px;
  height: 48px;
  font-family: CenturyGothic;
  font-size: 28px;
  color: rgb(255, 255, 255);
  line-height: 48px;
  margin-left: 20px;
}
</style>
