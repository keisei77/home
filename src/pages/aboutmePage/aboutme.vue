<template lang='pug'>
    div
        AboutmeBanner(:content='content')
        FooterTab
</template>
<script>
import AboutmeBanner from './components/aboutmeBanner.vue'
import FooterTab from '../components/footer_tab.vue'
import * as API from '../../../api'
export default {
  components: {
    AboutmeBanner,
    FooterTab
  },
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.$_get(API.ABOUT)
      .then(res => {
        this.content = res.data
      })
      .catch(err => console.log(err))
  }
}
</script>
<style lang="scss" scoped>
</style>