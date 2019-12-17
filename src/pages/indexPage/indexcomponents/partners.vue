<template lang="pug">
.container
	div(class='partners_box')
		div(class='partners_title')
			div(class='partners_title_box')
				div(class="CH_title") 主办方
					p(class="EN_title")
						i PARTNERS
		div(class='partners_group')
			div(class='partners_list' v-for='item of organizer')
				a(:href='item.link')
					img(class='partners_list_img' :src='item.imgUrl' :alt='item.description')
		div(class='partners_title')
			div(class='partners_title_box')
				div(class="CH_title") 支持单位
					p(class="EN_title")
						i SUPPORT
		div(class='partners_group')
			div(class='partners_list' v-for='partners of partners_data')
				a(:href='partners.link')
					img(class='partners_list_img' :src='partners.imgUrl' :alt='partners.description')
					
		div(class="photographer_list_title") 感谢以下摄影师为本网站无偿提供的高质量图片：
		div(class="photographer_list") 
				span 杜小红  董磊  王斌 李家鸿 高歌 毕争 关翔宇 施晓春 陈奕欣 黄湘元 艾怀森 杨剑焕 计云 雷波 范毅 陈辈乐 王剑 左凌仁 张兴超
        //v-for='item of photographer' v-text="item.title"        
		div(class="photographer_list_memo") 本站所有图片为摄影师版权所有，禁止以任何形式转载使用。
	footer-tab
</template>
<script>
import FooterTab from "../../components/footer_tab.vue";
export default {
  name: "partner",
  props: ["partners_data", "organizer", "photographer"],
  components: {
    FooterTab
  }
};
</script>
<style lang="scss" scoped>
.partners_box {
  width: 100%;
  /*height: calc(100vh - 90px);*/
  padding-top: 70px;
  box-sizing: border-box;
}
.partners_title {
  width: 100%;
  height: 146px;
}
.partners_title_box {
  width: 1000px;
  position: relative;
  height: 146px;
  margin: 0 auto;
}
.CH_title {
  position: absolute;
  width: 100%;
  height: 56px;
  text-align: center;
  line-height: 56px;
  font-family: PingFangSC-Semibold;
  font-size: 40px;
  color: #2d2f29;
}
.EN_title {
  width: 100%;
  height: 43px;
  text-align: center;
  line-height: 43px;
  opacity: 0.93;
  font-family: GillSans-SemiBoldItalic;
  font-size: 36px;
  color: #46787d;
  letter-spacing: 0.6px;
}
.partners_group {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.partners_list {
  height: 118px;
  margin-bottom: 30px;
  & img {
    max-width: 225px;
    max-height: 75px;
  }
}
.partners_list {
  margin-right: 47px;
}
.photographer_list_title {
  line-height: 250%;
  font-weight: bold;
  text-align: center;
}
.photographer_list_memo {
  line-height: 250%;
  text-align: center;
}
.photographer_list {
  line-height: 250%;
  font-family: PingFangSC-Semibold;
  text-align: center;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
  /*margin-top: -20px;*/
  color: #2d2f29;
  span {
    margin-left: 15px;
  }
}
/*.partners_list:nth-child(3){*/
/*position:absolute;*/
/*top: 0;*/
/*right:0;*/
/*}*/
/*.partners_list:nth-child(6) {*/
/*position:absolute;*/
/*top: 158px;*/
/*right:0;*/
/*}*/
</style>
