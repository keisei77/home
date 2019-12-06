<template lang='pug'>
    div
        HeaderTab
        Details(:the_details="the_details")
        DetailsSlide(:ImgUrl="ImgUrl")
        ThePag(:sumList="sumList")
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
            the_details:{},
            sumList:[],
            ImgUrl:[]
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

                    var tempList = this.the_details.imgUrl.split('"')
                    tempList.map(item => {
                        if(item !== "," && item !== "[" && item !== "]"){
                        this.ImgUrl.push(item)
                        }
                    })

                    var protectionClass = []
                    var endangeredCategory = []
                    var speciesTaxonomy = []
                    var i = 0;
                    if(this.the_details.labels){
                        for(i;i<this.the_details.labels.length;i++){
                        if(this.the_details.labels[i].type == "濒危等级"){
                            endangeredCategory.push(this.the_details.labels[i])
                        }else if(this.the_details.labels[i].type == "保护等级"){
                            protectionClass.push(this.the_details.labels[i])
                        }else{
                            speciesTaxonomy.push(this.the_details.labels[i])
                        }
                    }
                    }
                    if(protectionClass.length){
                        this.sumList.push({title:"保护等级",markDetail:protectionClass})
                    }
                    if(endangeredCategory.length){
                        this.sumList.push({title:"濒危等级",markDetail:endangeredCategory})
                    }
                    if(speciesTaxonomy.length){
                        this.sumList.push({title:"物种分类",markDetail:speciesTaxonomy})
                    } 
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