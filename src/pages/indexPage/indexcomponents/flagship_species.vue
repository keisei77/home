<template lang="pug">
.container
	div(class='box_start')
		div(class='start_title')
			div(class='title_box')
				div(class="CH_title") 明星物种
					p(class="EN_title")
						i FLAGSHIP SPECIES
		swiper(:options="swiperOption" ref="mySwiper")
			swiperSlide(v-for="(slide, index) in start_list" :key="index")
				div(:class='{start_img:1}' :style="{background:'url('+ slide.imgUrl +')'}")
					div(class='start_info')
						div(class='start_info_box')
							p(class='start_info_title' v-text='slide.name')
							p(class='start_info_msg' v-text='slide.brief')
							p(class='start_info_btn'  @click='show(index)') 查看更多 >>
			div(class="swiper-pagination" slot="pagination")
			div(class="swiper-button-prev" slot="button-prev")
			div(class="swiper-button-next" slot="button-next")
			div(class="swiper-pagination" slot="scrollbar")
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name: 'flagshipspecies',
		props: ['start_list', 'bgImage'],
		components: {
			swiper:swiper,
			swiperSlide:swiperSlide
		},
		data() {
			return {
				isShow: true,
				swiperOption:{
					pagination: {
						el: '.swiper-pagination',
					},
					scrollbar: {
						el: '.swiper-scrollbar',
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				}
			}
		},
		methods: {
			show: function(index) {
				this.$emit('child-open', {index,isShow:this.isShow})
				document.querySelector('body').setAttribute('style','overflow:hidden')
			}
		}
	}
</script>
<style>
	.swiper-container{
		--swiper-navigation-color: #00ff33;/* 单独设置按钮颜色 */
		--swiper-navigation-size: 30px;/* 设置按钮大小 */
	}
	.swiper-button-prev, .swiper-container-rtl .swiper-button-next{
		left: 30px;
	}
	.swiper-button-next, .swiper-container-rtl .swiper-button-prev{
		right: 30px;
	}
</style>
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
    height: 200px;
  }
  .title_box {
    width: 1000px;
    position: relative;
    height: 200px;
    margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
  }
  .CH_title {
    width: 100%;
    height: 56px;
    text-align: center;
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
    height: 500px;
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
