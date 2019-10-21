<template lang='pug'>
    div
        HeaderTab
        Details
        DetailsSlide
        ThePag
        Content
        FooterTab
</template>
<script>
import HeaderTab from './components/headertab.vue'
import Details from './components/details.vue'
import DetailsSlide from './components/detailsslide.vue'
import ThePag from './components/thepag.vue'
import Content from './components/content.vue'
import FooterTab from '../components/footer_tab.vue'
export default {
    components:{
        HeaderTab,
        Details,
        DetailsSlide,
        ThePag,
        Content,
        FooterTab
    },
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>