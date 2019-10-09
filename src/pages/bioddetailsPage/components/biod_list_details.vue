<template lang='pug'>
    div(class='biod_list_box')
        div(class='biod_list_title')
            span(class='title-CN' v-text="title")  
            span(class='title-EN' v-text="e_title")
        
        div(class='biod_list_img')
            div(class='list_img' 
            v-for="(item,index) of list_details" :key="item.id"
            v-on:mouseenter="enter(index)"
            v-on:mouseleave="leave()"
            )
                img(:src="item.thumbnail")
                div(v-show="one_shade && index == current" class="list_img_shade")
                    span(class="titleText") {{item.name}}
                    span(class="img_desc") {{item.brief}}
                    span(class="t")
                    a(class='btn' @click="getDetailsPage(item)") {{btn_msg}}
                    
</template>
<script>
import * as API from "../../../../api/biodiversity";

export default {
  name: "biod_list_details",
  data() {
    return {
      btn_msg: "查看详情",
      title:'',
      e_title:'',
      one_shade: true,
      current: null,
      currentId: null,
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
    },
    getIdPages(){
      var url = location.search;
      if (url.indexOf("?") != -1) {    //判断是否有参数
        var str = url.substr(1);       //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
        //console.log(str);
        var strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
        this.currentId = strs[1];          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
      }
      if(this.currentId == 2){
        this.title = "鸟类";
        this.e_title = "Aves";
      }
      if(this.currentId == 3){
        this.title = "鱼类";
        this.e_title = "Fish";
      }
      if(this.currentId == 4){
        this.title = "两栖类及爬行类";
        this.e_title = "Amphibians And Reptiles";
      }
      if(this.currentId == 5){
        this.title = "无脊椎动物";
        this.e_title = "Invertebrate";
      }
      if(this.currentId == 6){
        this.title = "哺乳类";
        this.e_title = "Mammalia";
      }
      if(this.currentId == 8){
        this.title = "植物与真菌";
        this.e_title = "Plants And Fungi";
      }
      this.$_get(API.BIODIVERSITY_SPECIESID+this.currentId).then(res => {
        if(!res.data.isError){
          this.list_details = res.data;
        }
        console.log(res.data)
    })
    },
    getDetailsPage(item){
      location.href= `/bioddetails.html?id=${item.id}`
    }

  },
  created() {
    this.getIdPages();
    // if (this.getQueryVariable("id")) {
    //   this.$_get(API.BIODIVERSITY_DETAIL_LIST_DATA, {
    //     speciesId: this.getQueryVariable("id")
    //   }).then(res => {
    //     console.log(res)
    //     if (!res.data.isError) {
    //       this.kindList = res.data;
    //     }
    //   });
    // }
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
  width: auto;
  height: 48px;
}
.title-CN {
  font-family: PingFangSC-Semibold;
  font-size: 34px;
  color: rgb(45, 47, 41);
  letter-spacing: 2px;
  margin-right:10px;
  line-height:48px;
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