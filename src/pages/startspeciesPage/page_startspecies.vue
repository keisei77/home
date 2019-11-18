/** 
  明星物种页面
*/
<template lang="pug" >
  div
    div(class='box_container')
      DetailModals(v-show='isShow' :list_item="list_item[selectedName]" :onClose="onModalClose")
      div(class="pic_box pic_one" 
      v-for="(item,index) of allList" :key="item.name"
      v-on:mouseenter="enter(index)"
      v-on:mouseleave="leave()"
      )
        div(class="background" :style="{'background-image': `url(${item.n_imgUrl})`}")
        div(v-show="one_shade && index == current" class="pic_one_shade") 
          span(class="titleText") {{item.name}}
          div(class="img_desc") {{item.brief}}
          p(class="button_more" @click='showM(item.name)') {{buttonMsg}}	  
    FooterTab
</template>

<script>
import FooterTab from "../components/footer_tab.vue";
import DetailModals from "./../components/detailModals.vue";
import * as API from "../../../api";
export default {
  data: () => {
    return {
      allList: [],
      list_item: {},
      one_shade: true,
      current: null,
      selectedName: "",
      buttonMsg: "查看更多",
      isShow: false,
      b_index: 0
    };
  },
  components: {
    FooterTab,
    DetailModals
  },
  methods: {
    enter(index) {
      this.one_shade = true;
      this.current = index;
    },
    onModalClose() {
      this.isShow = false;
    },
    beforeShowModal(name) {
      this.selectedName = name;
      this.isShow = true;
      document.querySelector("body").setAttribute("style", "overflow:hidden");
    },
    showM: function(name) {
      if (this.list_item[name]) {
        this.beforeShowModal(name);
        return;
      }

      this.$_get(`${API.START_ITEM_DATA}/${name}`).then(data => {
        this.list_item[name] = data.data.content;
        this.beforeShowModal(name);
      });
    },
    leave() {
      this.one_shade = false;
      this.current = null;
    }
  },
  mounted() {
    //明星物种请求
    this.$_get(API.START_DATA)
      .then(res => {
        //this.allList = res.data;
        res.data.forEach(item => {
          // var len = item.imgUrl.length;
          // item.n_imgUrl = item.imgUrl.slice(2, len - 2)
          let thumbnail = item.thumbnail;
          let imgUrl = /\["(\S+)"\]/i.exec(thumbnail);
          if (imgUrl) {
            item.n_imgUrl = imgUrl[1];
          } else {
            item.n_imgUrl = item.imgUrl;
          }
        });
        this.allList = res.data;
        console.log(this.allList);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss" scoped>
.box_container {
  width: 100%;
  height: 1080px;
  display: flex;
}
.pic_box {
  flex: 1;
}
.pic_one {
  position: relative;
}
.pic_one > .pic_one_shade {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.8);
}
.background {
  height: 100%;
  background-position: 50% 50%;
  background-size: cover;
}
.titleText {
  display: block;
  font-family: PingFangSC-Semibold;
  font-size: 40px;
  color: #ffffff;
  height: 56px;
  line-height: 56px;
  text-align: center;
  margin-top: 340px;
  margin-bottom: 80px;
}
.img_desc {
  width: 360px;
  height: 192px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #9d9e9c;
  line-height: 24px;
  margin: 0 auto;
  line-height: 24px;
  margin-bottom: 60px;
}
.button_more {
  display: block;
  width: 104px;
  height: 33px;
  margin: 0 auto;
  text-decoration: none;
  background: #46787d;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #ffffff;
  line-height: 33px;
  text-align: center;
  cursor: pointer;
}
</style>