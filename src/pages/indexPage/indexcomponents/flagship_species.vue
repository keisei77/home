<template lang="pug">
.container
	div(class='box_start')
		div(class='start_title')
			div(class='title_box')
				div(class="CH_title") 明星物种
					p(class="EN_title") 
						i FLAGSHIP SPECIES
		div(class='start_img')
			div(class='start_info')
				div(class='start_info_box')
					p(class='start_info_title') 天行长臂猿
					p(class='start_info_msg') 天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克。雄性和雌性的体型差别不大，但雄性有长阴毛；对生而短的拇指；弯曲的手指悬挂时可牢固抓握。无尾。前肢明显长于后肢，用来悬挂和在树间荡臂。
					a(class='start_info_btn' href='#') 查看更多 >>
</template>
<script>
export default {
  name: "flagshipspecies",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  .box_start {
    width: 100%;
    height: 920px;
  }
  .start_title {
    width: 100%;
    height: 264px;
  }
  .title_box {
    width: 1000px;
    position: relative;
    height: 264px;
    margin: 0 auto;
  }
  .CH_title {
    position: absolute;
    top: 111px;

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
  .start_img {
    position: relative;
    width: 100%;
    height: 654px;
    background-image: url("http://w.wfjjt.top/monkey.jpg");
  }
  .start_info {
    position: absolute;
    width: 543px;
    height: 444px;
    right: 0px;
    top: 105px;
    background: white;
  }
  .start_info_box {
    overflow: hidden;
    margin-top: 105px;
    margin-left: 69px;
  }
  .start_info_title {
    width: 140px;
    height: 40px;
    font-family: PingFangSC-Semibold;
    font-size: 28px;
    color: #2d2f29;
    margin-bottom: 35px;
  }
  .start_info_msg {
    width: 411px;
    height: 100px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #9d9e9c;
    line-height: 24px;
    margin-bottom: 37px;
  }
  .start_info_btn {
    display: block;
    text-decoration: none;
    width: 104px;
    height: 33px;
    background: #46787d;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    text-align: center;
    line-height: 33px;
  }
}
</style>