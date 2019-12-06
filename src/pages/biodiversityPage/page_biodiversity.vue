/** 
  我是生物多样性页面
*/
<template lang="pug">
  div
    div(class="biod_container")
      div(class="biod_box" v-for="(item, index) of kindList" v-bind:key="item.id" @click="getBirdiversityList(item)")
        img(class="img_box" :src="win_url ? localHostName + item.thumbnail : item.thumbnail")
        a(id="detail" ) {{ item.title }}
    FooterTab    
</template>
<script>
import FooterTab from '../components/footer_tab.vue'
import * as API from '../../../api/biodiversity'
export default {
  components:{
        FooterTab
      },
  data: () => {
    return {
      win_url:true,
      localHostName:"http://www.wildgaoligong.com",
      kindList:[]
    }
  },
  created() {
    this.$_get(API.BIODIVERSITY_DATA).then(res => {
      if(!res.data.isError){
        this.kindList = res.data;
      }
    })
    this.getWinUrl()
  },
  methods: {
    getWinUrl(){
      const win = window.location.hostname;
      this.win_url = win == "localhost" ? true : false
    },
    getBirdiversityList(item) {
      location.href = `/bioddetailslist.html?id=${item.id}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .biod_container{
    width:1230px;
    height: 980px;
    margin:110px auto 0px;
    margin-bottom:100px;
  }
  .biod_box{
    width:382px;
    height:465px;
    margin:0 13.5px 50px;
    background: #FFFFFF;
    box-shadow: 0 11px 37px 0 rgba(220,220,220,0.50);
    float:left;
    margin-bottom:70px;
    cursor:pointer;
  }
  .img_box{
    width:100%;
    height:100%;
  }
  a{
    display:block;
    text-decoration:none;
    font-family:PingFangSC-Semibold;
    font-size:26px;
    color: #2D2F29;
    line-height:37px;
    text-align:center;
    margin-top:20px;
  }
</style>