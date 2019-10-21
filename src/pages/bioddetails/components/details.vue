<template lang='pug'>
    div(class='details_box')
        div(class='details_title')
            span(class='title_CN') 领角鸮
            i(class='title_EN') Otus bakkamoena
</template>
<script>
export default {
    name: 'Details',
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