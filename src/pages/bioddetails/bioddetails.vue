<template lang='pug'>
    div
        HeaderTab
        Details(:the_details="the_details")
        DetailsSlide(:the_details="the_details")
        ThePag(:the_details="the_details")
        Content(:the_details="the_details")
        FooterTab
</template>
<script>
import HeaderTab from './components/headertab.vue'
import Details from './components/details.vue'
import DetailsSlide from './components/detailsslide.vue'
import ThePag from './components/thepag.vue'
import Content from './components/content.vue'
import FooterTab from '../components/footer_tab.vue'
import * as API from "../../../api/biodiversity/";
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
            currentId:'',
            the_details:{}
        }
    },
    methods: {
       getDetailsPage(){
            var url = location.search;
            if (url.indexOf("?") != -1) {   
                var str = url.substr(1);       
                //console.log(str);
                var strs = str.split("=");   
                this.currentId = strs[1]; 
                //console.log(this.currentId);
            }
            this.$_get(API.BIODIVERSITY_DETAIL+this.currentId).then(res => {
                if(!res.data.isError){
                this.the_details = res.data;
                }
                //console.log(this.details)
            })
       } 
    },
    created() {
        this.getDetailsPage();
    },
}
</script>
<style lang="scss" scoped>
    
</style>