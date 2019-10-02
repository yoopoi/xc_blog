<template>
    <div style="overflow: hidden;">
        <div :class="$style.img_box">
<img :src="img_src" alt="banner"  width="100%" style="">
</div>
        <div :class="$style.wrap">
    <div :class="$style.tab_bar">
        <h3>最近评论</h3>
    
    </div>
    
    <div :class="$style.box">
        <h1 :class="$style.title">vue如何实现向父组件传递参数?</h1>
        <div :class="$style.content">
         
        </div>
    </div>
    <ToolBar></ToolBar>
        </div>
    

    </div>

</template>
<script>
import ToolBar from '../components/ToolBar'
export default {
    name:"BaseArticle",
    components:{ToolBar},
    props:{
        img_src:{
            default:require("../../static/images/lunbo (5).jpg")
        }
    }    
}
</script>
<style module lang="postcss">
    .img_box{
        width: 100%;
        height: 30vh;
        box-shadow: -7px 10px 10px 0px rgba(0,0,0,0.2);
        overflow: hidden;
    }
    .wrap{
        position: relative;
        overflow: hidden;
        width:90%;
        min-width: 960px;
        margin:auto;
        margin-top:50px;

    }
    .box{
        position: relative;
        width: calc(100% - 400px);
        min-width: 500px;
        height: 390vh;
        background-color: #f3f3f3;
        float: left;
        border-radius: 20px;
        box-shadow: -7px 10px 10px 0px rgba(0,0,0,0.2);
        margin-left: 50px;
        margin-right: 25px;
        margin-bottom:50px;
        box-sizing: border-box;
        padding: 20px;
    }
    .tab_bar{
        position:relative;
        width: 300px;
        height: 400px;
        background-color: #f3f3f3;
        float: left;
        border-radius: 20px;
        margin-left: 25px;
        box-shadow: -7px 10px 10px 0px rgba(0,0,0,0.2);
        box-sizing: border-box;
        padding: 20px;
    }
    .title{
        
    }
</style>