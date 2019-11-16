<template lang="pug">
	div(class='aboutme-container', id='aboutme-container')
		div(class='section-left' :class="hiddenLeftSlideStatus ? 'active' : 'hidden'")
			div.title-logo
				span 云山保护
				img(src='../../../../src/images/yunshan-logo.jpg')
				div.desc-content 云山保护，全称大理白族自治州生物多样性保护与研究中心。团队成员秉承科学、合作、信任、可持续的理念。通过科学研究和科普教育，抢救性地研究和保护中国西南地区的生物多样性，同时促进当地社区的可持续发展。在实地保护中我们选择以长臂猿等旗舰物种的研究与保护为突破口，进而保护我国西南地区生物多样性最为丰富的原始森林生态系统
		
		div(class='section-right' :class="hiddenRightSlideStatus ? 'active' : 'hidden'")
			div.title-logo
				div.desc-content 高黎贡山国家级自然保护区地处云南省西北部的保山市和怒江州境内，是云南省面积最大的自然保护区。是国家级森林和野生动物保护类型自然保护区，以保护生物、气候、垂直带谱自然景观、多种植被类型和多种珍稀濒危保护动植物种类为目的。高黎贡山国家级自然保护区以其生物的多样性，被学术界誉为“世界物种基因库”，为世界生物圈保护区。1986年，经国务院批准为国家级自然保护区。
				span 高黎贡山国家级自然保护区
				img(src='../../../../src/images/gaoligong-logo.jpg')
				img(src='../../../../src/images/lushui-logo.jpg')
		div(
			class='section-modal section-right-modal'
			v-on:mouseover="overRightSlide()"
			v-on:mouseout="overRightSlide()"
		)
		div(
			class='section-modal section-left-modal'
			v-on:mouseover="overLeftSlide()"
			v-on:mouseout="overLeftSlide()"
		)

</template>
<script>
export default {
  name: "aboutmePage",
  props: ["content"],
  data() {
    return {
      hiddenLeftSlideStatus: false,
      hiddenRightSlideStatus: false
    };
  },
  methods: {
    overLeftSlide() {
      this.hiddenLeftSlideStatus = !this.hiddenLeftSlideStatus;
    },
    overRightSlide() {
      this.hiddenRightSlideStatus = !this.hiddenRightSlideStatus;
    }
  }
};
</script>

<style lang="scss">
body {
  overflow-x: hidden;
}
.aboutme-container {
  width: 100vw;
  height: 100vh;
  background-image: url("../../../../src/images/aboutme-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
}
.section-modal {
  position: absolute;
  top: 0;
  width: 50vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 3;
}
.section-left-modal {
  left: 0;
}
.section-right-modal {
  right: 0;
}
.section-left {
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 200%;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  top: -40px;
  left: -111%;
  transform: rotate(-33deg);
  transition: left 0.3s ease-in-out;
  & > .title-logo {
    position: absolute;
    left: 45%;
    top: 22%;
    color: #fff;
    transform: rotate(33deg);
    margin-left: 10%;
    & > span {
      display: inline-block;
      font-size: 40px;
      vertical-align: middle;
      margin-right: 30px;
    }
    & > img {
      width: 235px;
      height: 89px;
      vertical-align: middle;
    }
    & > .desc-content {
      font-size: 23px;
      margin-top: 50px;
      line-height: 70px;
    }
  }
}
.section-left.active {
  left: -32%;
}
.section-right.active {
  right: -32%;
}
.section-right {
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 200%;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  top: -100%;
  right: -111%;
  transform: rotate(-33deg);
  transition: right 0.3s ease-in-out;
  & > .title-logo {
    position: absolute;
    left: 10%;
    top: 48%;
    color: #fff;
    transform: rotate(33deg);
    width: 800px;
    margin-right: 30px;
    & > span {
      display: block;
      font-size: 40px;
      width: 500px;
      position: relative;
      left: 150px;
    }
    & > img {
      width: 159px;
      height: 171px;
      vertical-align: middle;
      margin-left: 30px;
      position: relative;
      left: 200px;
      top: 50px;
    }
    & > .desc-content {
      font-size: 23px;
      margin-top: 50px;
      line-height: 70px;
    }
  }
}
</style>
