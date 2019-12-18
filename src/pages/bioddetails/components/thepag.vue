<template>
    <ul class='page'>
        <li class='li_style' v-for="(item,index) of sumList" :key="index" >
            <span class="product-mark">{{item.title}}</span>
            <span class='mark-kind markStyle' v-for="mark of item.markDetail" :key="mark.id">{{mark.name}}</span>
        </li>
    </ul>
</template>
<script>
export default {
    name:'Thepag',
    props:["sumList"],
    data() {
        return {
           
        }
    },
  
    
}
</script>
<style lang="scss" scoped>
    .page{
        width: 1200px;
        height: auto;
        margin:0 auto;
        margin-bottom: 20px;
    }
    .li_style{
        margin-bottom: 6px;
    }
    .li_style:last-child{
        margin-bottom:0px;
    }
    .product-mark{
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #2D2F29;
        width: 64px;
        height: 22px;
        line-height: 22px;
        font-weight: 800;
    }
    .mark-kind{
        display:inline-block;
        width: auto;
        height: 22px;
        line-height: 22px;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        text-align: center;
        margin-left: 13px;
        color:white;
        font-weight: 400;
        padding:0 16px;
        box-sizing: border-box;
    }
    .markStyle{
        border-radius: 11px;
    }

</style>

