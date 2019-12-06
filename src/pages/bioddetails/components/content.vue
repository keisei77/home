<template>
    <ul class='comtent_box'>
        <li class="li_style" v-html="the_details.content">
        </li>
    </ul>
</template>
<script>
export default {
    name:'Content',
    props:["the_details"],
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .comtent_box{
        width: 1200px;
        height: auto;
        margin:0 auto;
    }
    .li_style{
        margin-bottom: 58px;
    }
    .title_style{
        height: 37px;
        line-height: 37px;
        font-family: PingFangSC-Semibold;
        font-size: 26px;
        color: #2D2F29;
        text-align: center;
        margin-bottom: 18px;
    }
    .msg_style{
        height: auto;
        line-height: 24px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #9D9E9C;
        line-height: 24px;
        text-indent: 30px;
    }

</style>