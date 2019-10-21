<template lang='pug'>
  .container 
    .banner-box
      .swiper-point
        ul
          li(v-for="(item, index) of responseData" :class="{active : index == currentIndex}")
      .swiper-box
        .swiper-box-item(
          v-for="(item, index) of responseData"
          :class="{current: currentIndex == index, prev: prevIndex == index}"
        )
          .swiper-box-item-bg(
            :style="{ backgroundImage: `url(${item.img})` }"
          )
          .swiper-box-item-mirror(
            :style="{ backgroundImage: `url(${item.img})` }"
          )
      .info-box
        .info-box-item.animated.slow(
          v-for="(item, index) of responseData"
          :class="[index == currentIndex ? 'fadeIn' : 'fadeOut', index == currentIndex ? 'delay-2s' : '']"
        )
          .info-box-item-tit {{item.title}}
          .line
          .info-box-item-sub {{item.subTitle}}
          .info-box-item-link
            a(:href="item.link") 查看更多 >
      .control-box
        .control-info-box
          .control-info-box-item.animated.slow(
            v-for="(item, index) of responseData"
            :class="[index == currentIndex ? 'fadeIn' : 'fadeOut', index == currentIndex ? 'delay-2s' : '']"
          )
            .control-info-box-item-tit {{item.indexInfoTitle}}
            .control-info-box-item-sub {{item.indexInfoSub}}
        .btn-box
          button(@click="propPage()") <
          button(@click="nextPage()") >
</template>

<script>
  import _ from 'lodash'
  export default {
    data () {
      return {
        currentIndex: 0,
        responseData: [
          {
            img:  require('@src/images/baozi.jpg'),
            title: "高黎贡山",
            subTitle: "高黎贡山属青藏高原南部，横断山脉西部断块带，印度板块和欧亚板块相碰撞及板块俯冲的缝合线地带，是著名的深大断裂纵谷区。该景区山高坡陡切割深，垂直高差达4000米以上，形成极为壮观的垂直自然景观和立体气候。鬼斧神工塑造了无数雄、奇、险、秀景观，像银河飞溅、奇峰怪石、石门关隘、峡谷壁影等一幅幅壮景。",
            indexInfoTitle: '此处是索引位置',
            indexInfoSub: '该景区山高坡陡切割深，垂直高差达4000米以上，形成极为壮观的垂直自然景观和立体气候。鬼斧神工塑造了无数雄、奇、险、秀景观，像银河飞溅、奇峰怪石、石门关隘、峡谷壁影等一幅幅壮景。',
            link: '#'
          },
          {
            img: require('@src/images/banma.jpg'),
            title: "高黎贡山2",
            subTitle: "高黎贡山属青藏高原南部，横断山脉西部断块带，印度板块和欧亚板块相碰撞及板块俯冲的缝合线地带，是著名的深大断裂纵谷区。该景区山高坡陡切割深，垂直高差达4000米以上，形成极为壮观的垂直自然景观和立体气候。鬼斧神工塑造了无数雄、奇、险、秀景观，像银河飞溅、奇峰怪石、石门关隘、峡谷壁影等一幅幅壮景。",
            indexInfoTitle: '此处是索引位置1',
            indexInfoSub: '该景区山高坡陡切割深，垂直高差达4000米以上，形成极为壮观的垂直自然景观和立体气候。鬼斧神工塑造了无数雄、奇、险、秀景观，像银河飞溅、奇峰怪石、石门关隘、峡谷壁影等一幅幅壮景。',
            link: '#'
          },
          {
            img: require('@src/images/shizi.jpg'),
            title: "高黎贡山3",
            subTitle: "高黎贡山属青藏高原南部，横断山脉西部断块带，印度板块和欧亚板块相碰撞及板块俯冲的缝合线地带，是著名的深大断裂纵谷区。该景区山高坡陡切割深，垂直高差达4000米以上，形成极为壮观的垂直自然景观和立体气候。鬼斧神工塑造了无数雄、奇、险、秀景观，像银河飞溅、奇峰怪石、石门关隘、峡谷壁影等一幅幅壮景。",
            indexInfoTitle: '此处是索引位置2',
            indexInfoSub: '该景区山高坡陡切割深，垂直高差达4000米以上，形成极为壮观的垂直自然景观和立体气候。鬼斧神工塑造了无数雄、奇、险、秀景观，像银河飞溅、奇峰怪石、石门关隘、峡谷壁影等一幅幅壮景。',
            link: '#'
          },
        ],
        imgSrcs: [
          require('@src/images/baozi.jpg'),
          require('@src/images/banma.jpg'),
          require('@src/images/shizi.jpg'),
        ]
      }
    },

    computed:{
      prevIndex(){
        if(this.currentIndex == 0) return this.imgSrcs.length - 1;
        return this.currentIndex - 1
      }
    },

    mounted () {
      
    },

    methods:{

      propPage(){
        if(this.currentIndex == 0) return this.currentIndex = this.imgSrcs.length - 1
        this.currentIndex = this.currentIndex - 1;
      },

      nextPage(){
        if(this.currentIndex == this.imgSrcs.length - 1) return this.currentIndex = 0;
        this.currentIndex = this.currentIndex + 1;
      }
    }
  }
</script>

<style lang='scss' scoped>
@media (max-width: 1366px) {
  .container{
    .banner-box{
      width: 100%;
      height: 100%;
      position: relative;
      .swiper-point{
        position: absolute;
        width: 80px;
        height: 10px;
        bottom: 2%;
        left: 50%;
        margin-left: -40px;
        z-index: 200;
        ul{
          display: flex;
          justify-content: space-between;
          li{
            width: 5px;
            height: 5px;
            background-color: #c5cbce;
            border-radius: 5px;
          }
          li.active{
            box-shadow: 0px 0px 2px 4px #8b9695;
          }
        }
      }
      .swiper-box{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        &-item{
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          overflow: hidden;
          &-bg{
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
          }
          &-mirror{
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
          }
        }
        &-item.current{
          z-index: 10;
          .swiper-box-item-bg{
            -webkit-filter:blur(0px) brightness(50%);
          }
          .swiper-box-item-mirror{
            animation-name: mirror-front-half;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.000, 0.575, 0.430, 0.990);
            animation-delay: 2s;
            animation-duration: 5s;
            mask-image: url('~@src/images/mirror.png');
            mask-repeat: no-repeat;
            mask-size: cover;
            mask-position: -150vw center;
          }
        }
        &-item.prev{
          animation-name: swiper;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
          animation-duration: 3s;
          z-index: 100;
          .swiper-box-item-bg{
            -webkit-filter:blur(0px) brightness(50%);
            animation-name: reskew;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
            animation-duration: 3s;
          }
          .swiper-box-item-mirror{
            animation-name: mirror-reskew;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
            animation-duration: 3s;
            mask-image: url('~@src/images/mirror.png');
            mask-repeat: no-repeat;
            mask-size: cover;
          }
        }
      }
      .info-box{
        z-index: 200;
        width: 32.1%;
        height: 47.7%;
        position: absolute;
        overflow: hidden;
        flex-direction: column;
        left: 5.7%;
        top: 22.7%;
        color: #fff;
        .info-box-item{
          position: absolute;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          .info-box-item-tit{
            font-size: 70px;
            margin-bottom: 5%;
          }
          .line{
            width: 13.9%;
            height: 4px;
            margin-bottom: 20px;
            box-sizing: border-box;
            background-color: #fff;
          }
          .info-box-item-sub{
            font-size: 14px;
            margin-bottom: 40px;
          }
          .info-box-item-link{
            a{
              color: #fff;
              font-size: 14px;
            }
          }
        }
      }
      .control-box{
        position: absolute;
        z-index: 101;
        right: 0;
        bottom: 0;
        width: 40%;
        height: 25%;
        background-color: #fff;
        padding: 20px 30px;
        box-sizing: border-box;
        .control-info-box{
          position: relative;
          .control-info-box-item{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            .control-info-box-item-tit{
              margin-bottom: 20px;
              font-size: 24px;
              color: #2D2F29;
            }
            .control-info-box-item-sub{
              font-size: 14px;
              color: #9D9E9C;
            }
          }
        }
        .btn-box{
          position: absolute;
          top: -40px;
          left: 0;
          height: 40px;
          width: 81px;
          background-color: rgba(0,0,0,.6);
          display: flex;
          justify-content: space-between;
          button{
            background-color: rgba(0,139,139,1);
            border: none;
            width: 40px;
            height: 40px;
            color: #fff;
            font-size: 18px;
            cursor: pointer;
            outline: 0;
          }
          button:active{
            background-color: rgba(0,139,139,.6);
            border: none;
            outline: none;
          }
        }
      }
    }
  }
}
@media (min-width: 1366px) {
  .container{
    .banner-box{
      width: 100%;
      height: 100%;
      position: relative;
      .swiper-point{
        position: absolute;
        width: 80px;
        height: 10px;
        bottom: 2%;
        left: 50%;
        margin-left: -40px;
        z-index: 200;
        ul{
          display: flex;
          justify-content: space-between;
          li{
            width: 5px;
            height: 5px;
            background-color: #c5cbce;
            border-radius: 5px;
          }
          li.active{
            box-shadow: 0px 0px 2px 4px #8b9695;
          }
        }
      }
      .swiper-box{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        &-item{
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          overflow: hidden;
          &-bg{
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
          }
          &-mirror{
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
          }
        }
        &-item.current{
          z-index: 10;
          .swiper-box-item-bg{
            -webkit-filter:blur(0px) brightness(50%);
          }
          .swiper-box-item-mirror{
            animation-name: mirror-front-half;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.000, 0.575, 0.430, 0.990);
            animation-delay: 2s;
            animation-duration: 5s;
            mask-image: url('~@src/images/mirror.png');
            mask-repeat: no-repeat;
            mask-size: cover;
            mask-position: -150vw center;
          }
        }
        &-item.prev{
          animation-name: swiper;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
          animation-duration: 3s;
          z-index: 100;
          .swiper-box-item-bg{
            -webkit-filter:blur(0px) brightness(50%);
            animation-name: reskew;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
            animation-duration: 3s;
          }
          .swiper-box-item-mirror{
            animation-name: mirror-reskew;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
            animation-duration: 3s;
            mask-image: url('~@src/images/mirror.png');
            mask-repeat: no-repeat;
            mask-size: cover;
          }
        }
      }
      .info-box{
        z-index: 200;
        width: 32.1%;
        height: 47.7%;
        position: absolute;
        overflow: hidden;
        flex-direction: column;
        left: 5.7%;
        top: 22.7%;
        color: #fff;
        .info-box-item{
          position: absolute;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          .info-box-item-tit{
            font-size: 70px;
            margin-bottom: 5%;
          }
          .line{
            width: 13.9%;
            height: 4px;
            margin-bottom: 20px;
            box-sizing: border-box;
            background-color: #fff;
          }
          .info-box-item-sub{
            font-size: 14px;
            margin-bottom: 40px;
          }
          .info-box-item-link{
            a{
              color: #fff;
              font-size: 14px;
            }
          }
        }
      }
      .control-box{
        position: absolute;
        z-index: 101;
        right: 0;
        bottom: 0;
        width: 40%;
        height: 25%;
        background-color: #fff;
        padding: 20px 30px;
        box-sizing: border-box;
        .control-info-box{
          position: relative;
          .control-info-box-item{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            .control-info-box-item-tit{
              margin-bottom: 20px;
              font-size: 24px;
              color: #2D2F29;
            }
            .control-info-box-item-sub{
              font-size: 14px;
              color: #9D9E9C;
            }
          }
        }
        .btn-box{
          position: absolute;
          top: -40px;
          left: 0;
          height: 40px;
          width: 81px;
          background-color: rgba(0,0,0,.6);
          display: flex;
          justify-content: space-between;
          button{
            background-color: rgba(0,139,139,1);
            border: none;
            width: 40px;
            height: 40px;
            color: #fff;
            font-size: 18px;
            cursor: pointer;
            outline: 0;
          }
          button:active{
            background-color: rgba(0,139,139,.6);
            border: none;
            outline: none;
          }
        }
      }
    }
  }
}
@media (min-width: 1680px) {
  .container{
    .banner-box{
      width: 100%;
      height: 100%;
      position: relative;
      .swiper-point{
        position: absolute;
        width: 80px;
        height: 10px;
        bottom: 2%;
        left: 50%;
        margin-left: -40px;
        z-index: 200;
        ul{
          display: flex;
          justify-content: space-between;
          li{
            width: 5px;
            height: 5px;
            background-color: #c5cbce;
            border-radius: 5px;
          }
          li.active{
            box-shadow: 0px 0px 2px 4px #8b9695;
          }
        }
      }
      .swiper-box{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        &-item{
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          overflow: hidden;
          &-bg{
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
          }
          &-mirror{
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
          }
        }
        &-item.current{
          z-index: 10;
          .swiper-box-item-bg{
            -webkit-filter:blur(0px) brightness(50%);
          }
          .swiper-box-item-mirror{
            animation-name: mirror-front-half;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.000, 0.575, 0.430, 0.990);
            animation-delay: 2s;
            animation-duration: 5s;
            mask-image: url('~@src/images/mirror.png');
            mask-repeat: no-repeat;
            mask-size: cover;
            mask-position: -150vw center;
          }
        }
        &-item.prev{
          animation-name: swiper;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
          animation-duration: 3s;
          z-index: 100;
          .swiper-box-item-bg{
            -webkit-filter:blur(0px) brightness(50%);
            animation-name: reskew;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
            animation-duration: 3s;
          }
          .swiper-box-item-mirror{
            animation-name: mirror-reskew;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
            animation-duration: 3s;
            mask-image: url('~@src/images/mirror.png');
            mask-repeat: no-repeat;
            mask-size: cover;
          }
        }
      }
      .info-box{
        z-index: 200;
        width: 32.1%;
        height: 47.7%;
        position: absolute;
        overflow: hidden;
        flex-direction: column;
        left: 5.7%;
        top: 22.7%;
        color: #fff;
        .info-box-item{
          position: absolute;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          .info-box-item-tit{
            font-size: 80px;
            margin-bottom: 6%;
          }
          .line{
            width: 13.9%;
            height: 4px;
            box-sizing: border-box;
            margin-bottom: 50px;
            background-color: #fff;
          }
          .info-box-item-sub{
            font-size: 14px;
            margin-bottom: 40px;
          }
          .info-box-item-link{
            a{
              color: #fff;
            }
          }
        }
      }
      .control-box{
        position: absolute;
        z-index: 101;
        right: 0;
        bottom: 0;
        width: 38%;
        height: 25%;
        background-color: #fff;
        padding: 30px 40px;
        box-sizing: border-box;
        .control-info-box{
          position: relative;
          .control-info-box-item{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            .control-info-box-item-tit{
              margin-bottom: 20px;
              font-size: 30px;
              color: #2D2F29;
            }
            .control-info-box-item-sub{
              font-size: 14px;
              color: #9D9E9C;
            }
          }
        }
        .btn-box{
          position: absolute;
          top: -40px;
          left: 0;
          height: 40px;
          width: 81px;
          background-color: rgba(0,0,0,.6);
          display: flex;
          justify-content: space-between;
          button{
            background-color: rgba(0,139,139,1);
            border: none;
            width: 40px;
            height: 40px;
            color: #fff;
            font-size: 18px;
            cursor: pointer;
            outline: 0;
          }
          button:active{
            background-color: rgba(0,139,139,.6);
            border: none;
            outline: none;
          }
        }
      }
    }
  }
}
@media (min-width: 1920px){
  .container{
    .banner-box{
      width: 100%;
      height: 100%;
      position: relative;
      .swiper-point{
        position: absolute;
        width: 80px;
        height: 10px;
        bottom: 2%;
        left: 50%;
        margin-left: -40px;
        z-index: 200;
        ul{
          display: flex;
          justify-content: space-between;
          li{
            width: 5px;
            height: 5px;
            background-color: #c5cbce;
            border-radius: 5px;
          }
          li.active{
            box-shadow: 0px 0px 2px 4px #8b9695;
          }
        }
      }
      .swiper-box{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        &-item{
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          overflow: hidden;
          &-bg{
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
          }
          &-mirror{
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
          }
        }
        &-item.current{
          z-index: 10;
          .swiper-box-item-bg{
            -webkit-filter:blur(0px) brightness(50%);
          }
          .swiper-box-item-mirror{
            animation-name: mirror-front-half;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.000, 0.575, 0.430, 0.990);
            animation-delay: 2s;
            animation-duration: 5s;
            mask-image: url('~@src/images/mirror.png');
            mask-repeat: no-repeat;
            mask-size: cover;
            mask-position: -150vw center;
          }
        }
        &-item.prev{
          animation-name: swiper;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
          animation-duration: 3s;
          z-index: 100;
          .swiper-box-item-bg{
            -webkit-filter:blur(0px) brightness(50%);
            animation-name: reskew;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
            animation-duration: 3s;
          }
          .swiper-box-item-mirror{
            animation-name: mirror-reskew;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
            animation-duration: 3s;
            mask-image: url('~@src/images/mirror.png');
            mask-repeat: no-repeat;
            mask-size: cover;
          }
        }
      }
      .info-box{
        z-index: 200;
        width: 32.1%;
        height: 47.7%;
        position: absolute;
        overflow: hidden;
        flex-direction: column;
        left: 5.7%;
        top: 22.7%;
        color: #fff;
        .info-box-item{
          position: absolute;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          .info-box-item-tit{
            font-size: 100px;
            margin-bottom: 8.3%;
          }
          .line{
            width: 13.9%;
            height: 6px;
            box-sizing: border-box;
            margin-bottom: 95px;
            background-color: #fff;
          }
          .info-box-item-sub{
            font-size: 14px;
            margin-bottom: 40px;
          }
          .info-box-item-link{
            a{
              color: #fff;
            }
          }
        }
      }
      .control-box{
        position: absolute;
        z-index: 101;
        right: 0;
        bottom: 0;
        width: 33.6%;
        height: 25%;
        background-color: #fff;
        padding: 45px 60px;
        box-sizing: border-box;
        .control-info-box{
          position: relative;
          .control-info-box-item{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            .control-info-box-item-tit{
              margin-bottom: 20px;
              font-size: 30px;
              color: #2D2F29;
            }
            .control-info-box-item-sub{
              font-size: 14px;
              color: #9D9E9C;
            }
          }
        }
        .btn-box{
          position: absolute;
          top: -40px;
          left: 0;
          height: 40px;
          width: 81px;
          background-color: rgba(0,0,0,.6);
          display: flex;
          justify-content: space-between;
          button{
            background-color: rgba(0,139,139,1);
            border: none;
            width: 40px;
            height: 40px;
            color: #fff;
            font-size: 18px;
            cursor: pointer;
            outline: 0;
          }
          button:active{
            background-color: rgba(0,139,139,.6);
            border: none;
            outline: none;
          }
        }
      }
    }
  }
}

@keyframes swiper {
  0% {transform: translateX(0) skewX(-10deg)}
  100%{transform:  translateX(110%) skewX(-10deg)}
}
@keyframes reskew {
  0% {transform: translateX(0) skewX(10deg)}
  100% {transform: translateX(-110%) skewX(10deg)}
}
@keyframes mirror-reskew {
  0% {transform: translateX(0) skewX(10deg); mask-position: -40vw}
  100% {transform: translateX(-110%) skewX(10deg); mask-position: 120vw}
}
@keyframes mirror-front-half {
  0% {mask-position: -150vw center}
  100% {mask-position: -40vw center}
}
</style>