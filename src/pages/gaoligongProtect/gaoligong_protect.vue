<template lang='pug'>
    div
       Banner
       BannerWork
       FooterTab
</template>

<script>
// import HeaderTab from "./components/header_tab.vue";
import Banner from "./components/banner.vue";
import BannerWork from "./components/banner_work.vue";
import FooterTab from "../components/footer_tab.vue";
import * as API from "../../../api/gaoligong";
export default {
  components: {
    // HeaderTab,
    Banner,
    BannerWork,
    FooterTab
  },
  data() {
    return {};
  },
  mounted() {
    let q_name = window.location.search.substr(6);
    this.$_get(API.GAOLIGONG_DATA + "/" + q_name).then(res => {
      //   console.log(res);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
