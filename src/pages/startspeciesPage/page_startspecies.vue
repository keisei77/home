/** 
  明星物种页面
*/
<template lang="pug">
  div
    div(class='box_container')
      div(class="pic_box pic_one" 
      v-for="(item,index) of imgList" :key="item.id"
      v-on:mouseenter="enter(index)"
      v-on:mouseleave="leave()"
      )
        img(:src="item.imgURL")
        div(v-show="one_shade && index == current" class="pic_one_shade")
          span(class="titleText") {{item.imgTitle}}
          div(class="img_desc") {{item.imgMsg}}
          a(class="button_more" href='#') {{buttonMsg}}
    FooterTab
</template>

<script>
import FooterTab from '../components/footer_tab.vue'
export default {
  data: () => {
    return {
      one_shade:true,
      current:null,
      buttonMsg:"查看更多",
      imgList:[
        {
          id:"001",
          imgURL:"http://w.wfjjt.top/bg2.jpg",
          imgTitle:"天行长臂猿",
          imgMsg:"天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克。雄性和雌性的体型差别不大，但雄性有长阴毛；对生而短的拇指；弯曲的手指悬挂时可牢固抓握。无尾。前肢明显长于后肢，用来悬挂和在树间荡臂。"
        },
        {
          id:"002",
          imgURL:"http://w.wfjjt.top/bg2.jpg",
          imgTitle:"黑猴红臀鹎-高歌",
          imgMsg:"天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克。雄性和雌性的体型差别不大，但雄性有长阴毛；对生而短的拇指；弯曲的手指悬挂时可牢固抓握。无尾。前肢明显长于后肢，用来悬挂和在树间荡臂。"
        },
        {
          id:"003",
          imgURL:"http://w.wfjjt.top/bg2.jpg",
          imgTitle:"熊猴",
          imgMsg:"天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克。雄性和雌性的体型差别不大，但雄性有长阴毛；对生而短的拇指；弯曲的手指悬挂时可牢固抓握。无尾。前肢明显长于后肢，用来悬挂和在树间荡臂。"
        },
        {
          id:"004",
          imgURL:"http://w.wfjjt.top/bg2.jpg",
          imgTitle:"天行长臂猿",
          imgMsg:"天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克。雄性和雌性的体型差别不大，但雄性有长阴毛；对生而短的拇指；弯曲的手指悬挂时可牢固抓握。无尾。前肢明显长于后肢，用来悬挂和在树间荡臂。"
        }
      ]
    }
  },
  components:{
    FooterTab
    },
  methods:{
    enter(index){
      this.one_shade = true;
      this.current = index;
    },
    leave(){
      this.one_shade = false;
      this.current = null;
    }
  }
}
</script>

<style lang="scss" scoped>
  .box_container{
    width:100%;
    height:1080px;
    display: flex;
  }
  .pic_box{
    flex:1; 
  }
  .pic_one{
    position:relative;
  }
  .pic_one > .pic_one_shade{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba($color: #000000, $alpha: .8);
  }
  .titleText{
    display: block;
    font-family: PingFangSC-Semibold;
    font-size: 40px;
    color: #FFFFFF;
    height:56px;
    line-height:56px;
    text-align:center;
    margin-top:340px;
    margin-bottom:80px;
  }
  .img_desc{
    width:360px;
    height:192px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #9D9E9C;
    line-height: 24px;
    margin:0 auto;
    line-height: 24px;
    margin-bottom:60px;
  }
  .button_more{
    display:block;
    width:104px;
    height:33px;
    margin:0 auto;
    text-decoration:none;
    background:#46787D;
    font-family:PingFangSC-Regular;
    font-size:12px;
    color: #FFFFFF;
    line-height:33px;
    text-align:center;
  }
</style>