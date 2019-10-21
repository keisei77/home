<template lang='pug'>
    div(class='biod_list_box')
        div(class='biod_list_title')
            span(class='title-CN') 鸟类 
            span(class='title-EN') Aves
        
        div(class='biod_list_img')
            div(class='list_img' 
            v-for="(item,index) of list_details" :key="item.id"
            v-on:mouseenter="enter(index)"
            v-on:mouseleave="leave()"
            )
                img(:src="item.imgURL")
                div(v-show="one_shade && index == current" class="list_img_shade")
                    span(class="titleText") {{item.imgTitle}}
                    span(class="img_desc") {{item.imgMsg}}
                    span(class="t")
                    a(class='btn' href='/bioddetails.html' ) {{btn_msg}}
                    
</template>
<script>
import * as API from "../../../../api/biodiversity";

export default {
  name: "biod_list_details",
  data() {
    return {
      btn_msg: "查看详情",
      one_shade: true,
      current: null,
      list_details: [
        {
          id: 1,
          imgURL: "http://w.wfjjt.top/list_details01.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克。雄性和雌性的体型差别不大，但雄性有长阴毛；对生而短的拇指；弯曲的手指悬挂时可牢固抓握。无尾。前肢明显长于后肢，用来悬挂和在树间荡臂。"
        },
        {
          id: 2,
          imgURL: "http://w.wfjjt.top/list_details02.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 3,
          imgURL: "http://w.wfjjt.top/list_details03.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 4,
          imgURL: "http://w.wfjjt.top/list_details02.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 5,
          imgURL: "http://w.wfjjt.top/list_details01.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 6,
          imgURL: "http://w.wfjjt.top/list_details03.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 7,
          imgURL: "http://w.wfjjt.top/list_details01.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 8,
          imgURL: "http://w.wfjjt.top/list_details03.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 9,
          imgURL: "http://w.wfjjt.top/list_details02.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 10,
          imgURL: "http://w.wfjjt.top/list_details03.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 11,
          imgURL: "http://w.wfjjt.top/list_details02.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 12,
          imgURL: "http://w.wfjjt.top/list_details01.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        }
      ]
    };
  },
  methods: {
    enter(index) {
      this.one_shade = true;
      this.current = index;
    },
    leave() {
      this.one_shade = false;
      this.current = null;
    },
    getQueryVariable(variable) {
      let reg = new RegExp("(^|&)" + variable + "=([^&]*)(&|$)", "i");
      let r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURIComponent(r[2]);
      return null;
    }
  },
  created() {
    if (this.getQueryVariable("id")) {
      this.$_get(API.BIODIVERSITY_DETAIL_LIST_DATA, {
        speciesId: this.getQueryVariable("id")
      }).then(res => {
        console.log(res)
        if (!res.data.isError) {
          this.kindList = res.data;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.biod_list_box {
  width: 1200px;
  height: auto;
  margin: 0 auto;
}
.biod_list_title {
  width: 172px;
  height: 48px;
}
.title-CN {
  font-family: PingFangSC-Semibold;
  font-size: 34px;
  color: rgb(45, 47, 41);
  letter-spacing: 2px;
}
.title-EN {
  font-family: CenturyGothic;
  font-size: 34px;
  color: rgb(70, 120, 125);
  letter-spacing: 2px;
  line-height: 48px;
}
.biod_list_img {
  width: 1200px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 114px;
}
.list_img {
  position: relative;
  width: 285px;
  height: 285px;
  margin-top: 20px;
  margin-right: 20px;
}
.list_img:nth-child(4) {
  position: absolute;
  top: 0px;
  right: 0px;
  margin-right: 0;
}
.list_img:nth-child(8) {
  position: absolute;
  top: 305px;
  right: 0px;
  margin-right: 0;
}
.list_img:nth-child(12) {
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin-right: 0;
}
.list_img img {
  width: 285px;
  height: 285px;
}
.list_img_shade {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.75);
}
.titleText {
  display: block;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #ffffff;
  margin-top: 77px;
  margin-bottom: 20px;
  text-align: center;
}
.img_desc {
  display: block;
  overflow: hidden;
  width: 230px;
  height: 72px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(#ffffff, 0.7);
  line-height: 24px;
  margin: 0 auto;
}
.t:after {
  width: 20px;
  display: block;
  margin: 0 auto;
  content: "......";
  font-size: 14px;
  color: rgba(#ffffff, 0.7);
}
.btn {
  display: block;
  text-decoration: none;
  width: 104px;
  height: 30px;
  background: #46787d;
  color: #fff;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  margin: 20px auto;
}
</style>