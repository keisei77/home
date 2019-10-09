<template>
  <div>
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1" v-for="itemImg of swiperImg" :key="itemImg.id">
          <img :src="itemImg.largeImg" :alt="itemImg.title">
        </swiper-slide>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1" v-for="itemImg of swiperImg" :key="itemImg.id">
          <div class="imgItem">
            <img :src="itemImg.largeImg" :alt="itemImg.title">
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
      swiperImg:[
        {
          id:1,
          title: 'slide1',
          largeImg:'http://w.wfjjt.top/j.jpg'
        },
        {
          id:2,
          title:'slide2',
          largeImg:'http://w.wfjjt.top/y.jpg'
        },
        {
          id:3,
          title:'slide3',
          largeImg:'http://w.wfjjt.top/j.jpg'
        },
        {
          id:4,
          title:'slide4',
          largeImg:'http://w.wfjjt.top/y.jpg'
        },
        {
          id:5,
          title:'slide5',
          largeImg:'http://w.wfjjt.top/j.jpg'
        },
        {
          id:6,
          title:'slide6',
          largeImg:'http://w.wfjjt.top/y.jpg'
        }
      ]
    }
  },
  mounted() {
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
