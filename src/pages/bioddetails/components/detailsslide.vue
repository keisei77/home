<template>
  <div>
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1" v-for="(itemImg,index) of JSON.parse(the_details.imgUrl)" :key="index">
          <img :src="win_url ? hostName + itemImg : itemImg" alt="">
        </swiper-slide>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1" v-for="(itemImg,index) of JSON.parse(the_details.imgUrl)" :key="index">
          <div class="imgItem">
            <img :src="win_url ? hostName +itemImg : itemImg" alt="">
          </div>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'detailsslide',
  components:{
      swiper,
      swiperSlide
  },
  props:["the_details"],
  data() {
    return {
      win_url:true,
      hostName:"http://www.wildgaoligong.com",
      swiperOptionTop: {
        spaceBetween: 10,
        effect: 'fade',
        loop: true,
        loopedSlides: 5
      },
      swiperOptionThumbs: {
        spaceBetween: 18,
        slidesPerView: 5,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 5,//looped slides should be the same
      },
      swiperImg:[]
    }
  },
  methods:{
    getWinUrl(){
      //判断是本地还是线上 true为本地,false为线上
      var win = window.location.hostname;
      this.win_url = win == "localhost" ? true : false
    }
  },
  mounted() {
    this.getWinUrl()
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style scoped>
  .swiper-container{
    background-color:#fff;
  }
  .gallery-top {
    height: 660px!important;
    width: 1200px;
    margin:0 auto;
  }
  .gallery-top .swiper-slide img{
    width:100%;
    height:100%;
  }
  .gallery-thumbs {
    height: 154px!important;
    box-sizing: border-box;
    width: 1200px;
    margin-top: 40px;
    margin-bottom: 32px;
  }
  .gallery-thumbs .swiper-slide {
    width: 226px;
    height: 154px;
    cursor: pointer;
    opacity:0.6;
  }
  .gallery-thumbs .swiper-slide img{
    width:226px;
    height:154px;
  }
  .gallery-thumbs .swiper-slide-active{
    opacity: 1;
  }
</style>
