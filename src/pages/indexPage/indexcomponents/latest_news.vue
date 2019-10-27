<template lang='pug'>
	.container
		div(class='news_box')
			div(class='news_title')
				div(class='news_title_box')
					div(class="CH_title") 新闻动态
						p(class="EN_title")
							i LATEST NEWS
			div(class='news_group')
				div(class='news_list' v-for='news of tempNews' :key='news.id')
					div(class='news_list_img')
						img(:src="news.thumbnail")
					div(class='news_list_info')
						div(class='news_list_title')
							span(class='news_list_title_h') {{news.title}}
							span(class='news_list_title_t') {{news.time}}
						div(class='news_list_msg')
							p  {{news.brief}}
						a(class='news_list_btn' :href='news.link') 查看更多 >>
			<ul class="pagination">
				<li>
					<button type='button' @click='handleClickFirst' :disabled='isPrev'>首页</button>
				</li>
				<li>
					<button type="button" name="button" @click='handleClickPrev' :disabled='isPrev'><<</button>
				</li>
				<li v-for='(page,index) of pages' :key='index'>
					<button type="button" name="button" @click='handleClickPage(page.name)' :disabled='page.isDisabled' :class="{active: isActivePage(page.name)}">{{page.name}}</button>
				</li>
				<li>
					<button type="button" name="button" @click='handleClickNext' :disabled='isNext'>>></button>
				</li>
				<li>
					<button type='button' @click='handleClickLast'　:disabled='isNext'>尾页</button>
				</li>
			</ul>
				//- div(class='news_list')
				//- 	div(class='news_list_img')
				//- 	div(class='news_list_info')
				//- 		div(class='news_list_title')
				//- 			span(class='news_list_title_h') 新闻动态标题标题标题
				//- 			span(class='news_list_title_t') 2019-03-11 23:23
				//- 		div(class='news_list_msg')
				//- 			p  天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克。雄性和雌性的体型差别不大，但雄性有长阴毛；对生而短的拇指；弯曲的手指悬挂时可牢固抓握。无尾。前肢明显长于后肢，用来悬挂和在树间荡臂。
				//- 		a(class='news_list_btn' href='#') 查看更多 >>

</template>
<script>
export default {
	name: 'latestnews',
	props: {
		news_data:{
			type: Object,
			required:true
		},
		maxVisibleButtons: {
			type: Number,
			required: false,
			default:3
		},
		// total: {
		// 	type: Number,
		// 	required: true
		// },
		totalPages: {
			type: Number,
			required: true
		},
		currentPage: {
			type: Number,
			required: true
		}
 	},
	data(){
		return {
			partNersNews:[]
		}
	},
	computed: {

		isPrev:function () {
			return this.currentPage === 1
		},
		isNext:function () {
			return this.currentPage === this.totalPages
		},

		startPage: function () {
			if (this.currentPage <= 1) {
				return 1
			};
			// if (this.currentPage === this.totalPages) {
      //   console.log(this.currentPage,this.totalPages,this.maxVisibleButtons)
			// 	return this.totalPages - this.maxVisibleButtons + 1
			// };
			return this.currentPage - 1
		},
		endPage: function () {
			return Math.min(this.startPage + this.maxVisibleButtons - 1,this.totalPages)
		},
		pages: function () {
			const range = []
			for (let i = this.startPage; i <= this.endPage;i++) {
				range.push({
				name: i,
				isDisabled: i === this.currentPage
				})
			}
			return range
		},
		tempNews: function(){
			for(let i = 0;i < this.news_data.total;i++){
				this.partNersNews.push(this.news_data.dateList[i])
			}
			if(this.news_data.total % 2 === 0){
				return this.partNersNews.slice((this.currentPage - 1) * 2,this.currentPage * 2)
			}else{
				if(this.currentPage === this.totalPages){
					return this.partNersNews.slice((this.currentPage - 1) * 2,this.currentPage * 2 - 1)
				}else{
					return this.partNersNews.slice((this.currentPage - 1) * 2,this.currentPage * 2)
				}
			}

		}
	},
	methods: {
		handleClickFirst: function () {
			this.$emit('pagechanged',1)
		},
		handleClickPrev: function () {
			if(this.currentPage === 1){
				this.$emit('pagechanged',1)
			}else{
				this.$emit('pagechanged',this.currentPage - 1)
			}
		},
		handleClickPage: function (page) {
			this.$emit('pagechanged',page)
		},
		handleClickNext: function () {
			if(this.currentPage === this.totalPages){
				this.$emit('pagechanged',this.totalPages)
			}else{
				this.$emit('pagechanged',this.currentPage + 1)
			}
		},
		handleClickLast:function () {
			this.$emit('pagechanged',this.totalPages)
		},
		isActivePage: function (page) {
			return this.currentPage === page;
		}
  }


}
</script>
<style lang="scss" scoped>
		.container{
			width: 100%;
			height: 100vh;
		}
		.news_box{
				height: 920px;
				margin-bottom: 20px;
		}
		.news_title{
				width: 100%;
				height: 293px;
		}
		.news_title_box{
				width: 1000px;
				position: relative;
				height: 293px;
				margin: 0 auto;
		}
		.CH_title{
				position: absolute;
				top:131px;
				width: 100%;
				height: 56px;
				text-align: center;
				line-height: 56px;
				font-family: PingFangSC-Semibold;
				font-size: 40px;
				color: #2D2F29;
		}
		.EN_title{
				width: 100%;
				height: 43px;
				text-align: center;
				line-height: 43px;
				opacity: 0.93;
				font-family: GillSans-SemiBoldItalic;
				font-size: 36px;
				color: #46787D;
				letter-spacing: 0.6px;
		}
		.news_group{
				width:1200px;
				height: 475px;
				margin: 0 auto;
		}
		.news_list{
				width: 100%;
				height: 186px;
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				margin-bottom: 103px;
		}
		.news_list_img{
				width: 334px;
				height: 186px;
				img{
					width:100%;
					height:100%;
				}
		}
		.news_list_info{
				width: 806px;
				height: 186px;
				margin-left:60px;
		}
		.news_list_title{
				width: 100%;
				height: 37px;
				line-height: 37px;
		}
		.news_list_title_h{
				display: block;
				float:left;
				font-family: PingFangSC-Semibold;
				font-size: 26px;
				color: #2D2F29;
		}
		.news_list_title_t{
				display: block;
				float:right;
				font-family: PingFangSC-Semibold;
				font-size: 14px;
				color: #2D2F29;
				text-align: right;
		}
		.news_list_msg{
				width: 100%;
				height: 71px;
				margin-top: 10px;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #9D9E9C;
				line-height: 24px;
		}
		.news_list_msg p{
				width: 798px;
				height: 100%;
		}
		.news_list_btn{
				display: block;
				text-decoration: none;
				width: 104px;
				height: 33px;
				background: #46787D;
				color: #fff;
				font-family: PingFangSC-Regular;
				font-size: 12px;
				text-align: center;
				line-height: 33px;
				margin-top: 38px;
		}
		.pagination{
			display: flex;
			width: 500px;
			margin:40px auto 0;

		}
		.pagination li{
			margin:0 auto;
		}
		.pagination li button{
			border:none;
			width:50px;
			height:30px;
			font-family: PingFangSC-Regular;
			outline: none;
		}
		.active,
		.pagination li button:hover{
			background-color: #46787D;
			color: white;
		}
</style>
