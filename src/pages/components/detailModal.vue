<template lang="pug">
div(class='container' @click='close')
	div(class='box_start') 
		.content 
			div(class='title') 详情内容
			div(class='text' v-html='start_list.content') 
</template>
<script>
export default {
  name: 'detailModal',
  props:['start_list'],
  data() {
    return {
		isShow:false
	}
  },
  methods:{
	  close:function(){
		  this.$emit('child-close',this.isShow);
			document.querySelector('body').removeAttribute('style')
	  }
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: fixed; 
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,.6);
  z-index: 1000;
  .content{
	  position: absolute;
	  top:50%;
	  left: 50%;
	  width: 800px;
	  height: 500px;
	  margin-left: -400px;
	  margin-top: -250px;
	  overflow: auto;
	  background-color: #fff;
	  .title{
		  width: 100%;
		  height: 50px;
		  background: #46787d;
		  color:#fff;
		  text-align: center;
		  line-height: 50px;
		  font-size: 20px;
	  }
	  .text{
		  padding: 10px;
	  }
  }
}
</style>