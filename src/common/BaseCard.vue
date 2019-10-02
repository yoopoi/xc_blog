<template>
        <div :class="$style.box" v-bind:style='setStyle()' >
            <div :class="$style.imgContent">
                <img :class="$style.imgCard" :src="img_src" alt="">
            </div>
            <div :class="$style.label">
                {{label}}
            </div>
            <div :class="$style.tag">
                <BaseTag v-for="tag in tags" :msg="tag" :key="tag"></BaseTag>
                </div>
            
        </div>
</template>
<script>
import BaseTag from '../common/BaseTag'
export default {
    name:"BaseCard",
    components:{BaseTag},
    props:{
        display:{
            default:"block",
        }
    },
    data(){
        return{
                label:"hello world",
                img_src:"../../static/images/lunbo (5).jpg",
                tags:["html","c++","javascript"]
        }
    },
    methods: {
        setStyle:function(){
            if(this.display=="inline-block"){
                return{
                    'float':"none",
                    "display":"inline-block",
                }
            }
        }
    },
}
</script>
<style module lang="postcss">
.box{
    width:280px;
    height: 280px;
    background-color: #F5F5F5;
    box-shadow: -7px 14px 20px 0px rgba(0,0,0,0.2);
    margin:0px 10px 0px 10px;
    border-radius: 70px;
    float: left;
    cursor: pointer;
    transition: box-shadow 0.5s ease;
    overflow: auto;
    margin-bottom:20px;
}
.box:hover{
  box-shadow: -7px 14px 20px 0px rgba(	106,90,205,0.5);  

}
.tag{
    width: 100%;
    height:40px;
}
.imgContent{
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.label{
    width: 100%;
    height: 40px;
    display: inline-block;
    text-align: left;
    line-height: 40px;
    text-indent: 30px;
    font-size: 30;
}
.imgCard{
    width: auto;
    height: 280px;
    transition: transform 0.5s ease;
}
.imgCard:hover{
    -webkit-transform: scale(1.1,1.1);-moz-transform: scale(1.1,1.1);transform: scale(1.1,1.1);
}
</style>