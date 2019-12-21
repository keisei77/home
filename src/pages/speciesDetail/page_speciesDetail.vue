/** 
  明星物种详情 - 高黎贡山
*/
<template lang="pug" >
  div
    div(class="imagebox" :style="{'background-image': `url(${this.imgUrl})`}")
    div(class="textbox"  v-html='this.content')
    FooterTab
</template>

<script>
import FooterTab from "../components/footer_tab.vue";
import * as API from "../../../api";
export default {
  data: () => {
    return {
      name: "",
      content: "",
      imgUrl: ""
    };
  },
  components: {
    FooterTab
  },
  created() {
    this.name = decodeURI(location.href.split("?")[1].split("=")[1]);
    console.log(this.name);
  },
  methods: {},
  mounted() {
    const { name } = this;
    this.$_get(`${API.START_ITEM_DATA}/${name}`).then(data => {
      console.log(data);
      this.content = data.data.content;
      this.imgUrl = "http://www.wildgaoligong.com/" + data.data.imgUrl;
      console.log(this.detail.content);
    });
  }
};
</script>

<style lang="scss" scoped>
body {
  background-color: #fff;
}
.imagebox {
  height: 650px;
}
.textbox {
  width: 80%;
  margin: 50px auto;
}
</style>