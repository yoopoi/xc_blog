<template>
<div :class="$style.label">
        <img :src="icon" alt="icon" width="30px" height="30px" style="display:block;position:absolute;left:15px;top:12px;">
        <div :class="$style.content">{{msg}}</div>
</div>

</template>
<script>
export default {
    props:{
        msg:{
            type:String,
            default:"LABEL"
        },
        icon:{
            type:String,
            default:require('../assets/logo.png')
        }
    }
}
</script>
<style module lang="postcss">
    .label{
        position: relative;
        width: 300px;
        height: 50px;
        box-shadow: -7px 10px 20px 0px rgba(0,0,0,0.2);
        margin-top:40px;
        margin-bottom:40px;
        border-radius: 40px;
        background-color: #F5F5F5;
    }
    .content{
        font-size: 30px;
        line-height: 50px;
    }
</style>