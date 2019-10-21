<template lang="pug">
  .common-header
    .logo
    .nav-box
      ul.nav-box-ul.animated(
        :class="[!isSearch ? 'fadeInUp' : 'fadeOutUp']"
      )
        li.nav-box-li(:class="{active: currentPage=='index'}")
          a.link(href="http://localhost:8081/")
            span 首页
        li.nav-box-li(:class="{active: currentPage=='starts'}")
          a.link(href="http://localhost:8081/startspecies.html")
            span 高黎贡的明星
        li.nav-box-li(:class="{active: currentPage=='multiformity'}")
          a.link(href="http://localhost:8081/biodiversity.html")
            span 生物多样性
        li.nav-box-li(:class="{active: currentPage=='presentation'}")
          a.link(href="http://localhost:8081/gaoligong.html")
            span 高黎贡山介绍
        li.nav-box-li(:class="{active: currentPage=='videos'}")
          a.link(href="https://www.douban.com/group/662229/")
            span 豆瓣小组
        li.nav-box-li(:class="{active: currentPage=='aboutus'}")
          a.link(href="http://localhost:8081/aboutme.html")
            span 关于我们
        li.nav-box-li
          span.link.search(@click="toggleSearchBox") 搜索
      .search-box.animated(
        :class="[isSearch ? 'fadeInUp' : 'fadeOutUp']"
      )
        .search-box-input
          input(placeholder="关于高黎贡山的一切")
          span.search-btn 搜索
        .button(@click="toggleSearchBox") 返回导航
</template>

<script>
export default {
  props: {
    currentPage: {
      type: String,
      default: 'index'
    }
  },
  data: () => {
    return {
      isSearch: false
    }
  },
  mounted() {
    console.log(this.currentPage);
  },
  methods: {
    toggleSearchBox() {
      this.isSearch = !this.isSearch;
      console.log(this.isSearch);
    }
  }
}
</script>

<style lang="scss" scoped>
.common-header{
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 200;
  .logo{
    
  }
  .nav-box{
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 2.3%;
    overflow: hidden;
    position: relative;
    &-ul{
      position: absolute;
      letf: 0;
      top: 0;
      width: 96%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .nav-box-li{
        list-style: none;
        height: 100%;
        width: 14%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        justify-content: center;
        .link{
          transition: all .3s;
          display: flex;
          align-items: center;
          height: 100%;
          color: #fff;
          font-size: 12px;
          box-sizing: border-box;
          border-bottom: 2x solid rgba(255, 255, 255, 0);
          cursor: pointer;
        }
      }
      .nav-box-li:hover{
        .link{
          font-size: 14px;
          border-bottom: 2px solid #fff;
        }
      }
      .nav-box-li.active{
        .link{
          font-size: 14px;
          border-bottom: 2px solid #fff;
        }
      }
    }
    .search-box{
      position: absolute;
      width: 96%;
      top: 0;
      right: 0;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 3%;
      &-input{
        width: 80%;
        height: 35px;
        border-radius: 35px;
        background-color: #fff;
        margin-right: 5%;
        padding-right: 10px;
        display: flex;
        align-items: center;
        input{
          display: block;
          width: 90%;
          height: 100%;
          border-radius: 35px;
          background-color: #fff;
          text-indent: 2em;
          margin-right: 20px;
        }
        .search-btn{
          color: #474747;
          font-size: 12px;
          cursor: pointer;
        }
      }
      .button{
        color: #fff;
        cursor: pointer;
        font-size: 14px;
      }
    }
  }
}
@media (min-width: 1680px) {
  .common-header{
    height: 60px;
    .logo{
      
    }
    .nav-box{
      width: 50%;
      &-ul{
        .nav-box-li{
          .link{
            font-size: 14px;
            border-bottom: 2x solid rgba(255, 255, 255, 0);
          }
        }
        .nav-box-li:hover{
          .link{
            font-size: 16px;
            border-bottom: 2px solid #fff;
          }
        }
        .nav-box-li.active{
          .link{
            font-size: 16px;
            border-bottom: 2px solid #fff;
          }
        }
      }
      .search-box{
        &-input{
          .search-btn{
            font-size: 14px;
          }
        }
      }
    }
  }
}
@media (min-width: 1920px) {
  .common-header{
    height: 80px;
    .logo{
      
    }
    .nav-box{
      width: 50%;
      &-ul{
        .nav-box-li{
          .link{
            font-size: 16px;
            border-bottom: 3px solid rgba(255, 255, 255, 0);
          }
        }
        .nav-box-li:hover{
          .link{
            font-size: 20px;
            border-bottom: 3px solid #fff;
          }
        }
        .nav-box-li.active{
          .link{
            font-size: 20px;
            border-bottom: 3px solid #fff;
          }
        }
      }
      .search-box{
        &-input{
          input{
          }
          .search-btn{
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>