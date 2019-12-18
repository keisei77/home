/** 
  高黎贡山介绍
*/
<template lang="pug">
  div
    div(class='slide_box' :style="{backgroundImage:'url('+mainImage+')'}")
    div(class='gaoligong_info')
      div(class='gaoligong_title') 高黎贡山生态系统总览
      div(class='gaoligong_msg' v-html="gaoligong_data.description")
      div(class='gaoligong_group')
          div(class="gaoligong_list_box" v-for='(gaoItem,index) of gaoligong_data.children' :key='index')
            img(class="img_box" :src="gaoItem.imgUrl")
            a(id="detail" href="#") {{gaoItem.name}}
    FooterTab    
</template>
<script>
import FooterTab from '../components/footer_tab.vue'
import * as API from '../../../api/gaoligong'

const msg = `<p>气候年均温15左右，谷地因焚风作用而形成干热气候，山顶部气候恶劣，温度低；年降水量东西坡虽有差异，但均在3000毫米以上，迎风面降水较多，两坡均随海拔高度的升高而递增，山顶降水最多可达3600毫米。</p>
<p>因怒江切割较深，故相对高度甚大，山势陡峻而险要，是地壳抬升后受河流分割而成的断块山地，多为变质岩组成，下部有大面积的岩浆岩分布。
保护区已知有种子植物210科1086属4303种，其中434个为高黎贡山特有种。国家一级保护植物有喜马拉雅红豆杉、云南红豆杉、长蕊木兰、光叶珙桐等4种；国家二级保护植物有秃杉、桫椤、董棕、贡山三尖杉、油麦吊云杉、十齿花、水青树、贡山厚朴、红花木莲等20种；省级保护植物30种。已知有脊椎动物36目106科582种。
已知有脊椎动物36目106科582种。其中兽类9目29科81属116种；鸟类18目52科另4亚科343种；两栖类2目2亚目7科28种及亚种；爬行类2目3亚目9科48种及亚种；鱼类5目9科28属47种及亚种。国家一级保护动物有戴帽叶猴、天行长臂猿、熊猴、羚牛、豹、怒江金丝猴、白尾稍虹雉等20种；国家二级保护动物有小熊猫、穿山甲、鬣羚、黑颈鸬鹚、高山兀鹫、血雉、灰鹤、红瘰疣螈等47种；省级保护动物5种。</p>
<p>保护区动植物种类众多，南北混杂，东西过渡。是青藏高原和印支半岛的南北生物走廊，是亚热带、温带、寒温带野生动植物种质基因库，著名的种子植物模式标本产地。是我国常绿阔叶林保存最完整、最原始的地区之一，同时还保存有典型的温性、寒温性针叶林森林生态系统。</p>
<p>中山湿性常绿阔叶林、低海拔季风湿性常绿阔叶林、亚高山云南铁杉林、亚高山箭竹-杜鹃林、山顶苔藓林。</p>
<p>半常绿季雨林、河谷稀树灌木草丛、暖性针叶林、热性竹林、季风常绿阔叶林、半湿润常绿阔叶林、中山湿性常绿阔叶林、暖湿性针叶林、温凉性针叶林、山顶苔藓矮林、寒温性针叶林、寒温性竹林、寒温性灌丛、寒温性草甸。</p>`
export default {
  components: {
    FooterTab
  },
  data: () => {
    return {
      gaoligong_msg: msg,
      gaoligong_data: {},
      mainImage: ''
    }
  },
  mounted() {
    console.log('hello,i am gaoligong')
    this.$_get(API.GAOLIGONG_DATA)
      .then(res => {
        //console.log(res.data)
        this.gaoligong_data = res.data
        this.mainImage = JSON.parse(res.data.mainImageUrl)[0]
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.slide_box {
  width: 100%;
  height: 600px;
}
.gaoligong_info {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.gaoligong_title {
  width: 100%;
  height: 174px;
  line-height: 174px;
  font-family: PingFangSC-Semibold;
  font-size: 34px;
  color: #2d2f29;
  text-align: center;
}
.gaoligong_msg {
  width: 100%;
  height: 397px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #9d9e9c;
  line-height: 24px;
}
.gaoligong_group {
  width: 1200px;
  height: 547px;
  position: relative;
}
.gaoligong_list_box {
  width: 382px;
  height: 465px;
  background: #ffffff;
  float: left;
  margin-bottom: 50px;
  cursor: pointer;
  box-shadow: 0 11px 37px 0 rgba(220, 220, 220, 0.5);
  margin-right: 27px;
}
a {
  display: block;
  text-decoration: none;
  font-family: PingFangSC-Semibold;
  font-size: 26px;
  color: #2d2f29;
  line-height: 37px;
  text-align: center;
  margin-top: 20px;
}
.gaoligong_list_box:nth-child(3) {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 0;
}
</style>