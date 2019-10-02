<template>
        <div id=carouselItem class="img-content">
            <img v-lazy="imgUrl" v-bind:style="getImgStyle">
            </div>
</template>
<script>
export default {
    name:"carouselItem",
    props:{
        imgWidth:{
            type:String,
            default:"100vw"
        },
        imgHeight:{
            type:String,
            default:"40vh"
        },
        imgUrl:{
            default:require('../assets/images/lunbo (5).jpg')
        },

    },
    computed:{
        getImgStyle:function(){
            return {
                'width':this.imgWidth,
            }
        },

    },
    data(){
        return {
         
        }
    },

}
</script>
<style lang="">
    .img-content{
        width: 100vw;
        float:left;
        box-sizing: border-box;
    }
</style>