<template lang='pug'>
    div(class='details_box')
        div(class='details_title')
            span(class='title_CN') {{the_details.name.split('"')[3]}}
            i(class='title_EN') {{the_details.name.split('"')[7]}}
</template>
<script>
export default {
    name: 'Details',
    props:["the_details"],
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .details_box{
        width: 1200px;
        height: auto;
        margin: 30px auto 0px;
    }
    .details_title{
        width: auto;
        height: 48px;
        margin-bottom: 7px;
    }
    .title_CN{
        height: 48px;
        line-height: 48px;
        font-family: PingFangSC-Semibold;
        font-size: 34px;
        color: #2D2F29;
        margin-right: 20px;
        letter-spacing: 0.1;
    }
    .title_EN{
        height: 48px;
        line-height: 48px;
        opacity: 0.71;
        font-family: CenturyGothic-Italic;
        font-size: 33px;
        color: #46787D;
    }
</style>