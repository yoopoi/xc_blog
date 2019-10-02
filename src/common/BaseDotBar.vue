<template>
    <div :class="$style.dotBar" id="DotBar">  
    <div :class="$style.wrap">
        <div :class="$style.box" v-bind:style="setBoxStyle">
            <div :class="$style.bigDot" v-bind:style="setBigDotPosition()"></div>
             <li :class="$style.smallDot"
              v-for="index in dotNum" 
              v-bind:key="index" 
              v-bind:style="setDotPosition(index)"
              @click="dotClick(index)"></li>
        </div>

    </div>
    </div>
</template>
<script>
export default {
    name:"dotBar",
    props:{
        dotNum:{
            type:Number,
            default:0,
        },
        curIndex:{
            type:Number,
            default:1,
        },
        delay:{
            type:Number,
            default:1000,
        }
    },
    computed:{
        
        setBoxStyle:function(){
            return {
                width:`${this.dotNum*this.dotDis-this.dotDis+20}px`,
            }
        },

        
    },
    methods:{
        setDotPosition:function(n){
            var left=(n-1)*this.dotDis+5;
            return{
                'transition': `transform ${this.delay}s ease`,
                'left':`${left}px`,
            }
        },
        setBigDotPosition:function(){
            return{
                'transform':`translate(${(this.curIndex)*this.dotDis}px,0)`,
            }
        },
        dotClick:function(index){
            this.$emit('func',index);
        }
    },
    data(){
        return{
            dotDis:150/this.dotNum+10,
        }
    }
}
</script>
<style module lang="postcss">
.dotBar{
    position: absolute;
    width: 100%;
    height: 20px;
    /* z-index: 8; */
    bottom: 10px;
    
}
    .wrap{
        position: relative;
        overflow: hidden;
    }
    .box{
        position: relative;
        display: inline-block;
        height: 20px;
        background: rgba(12,23,34,0.5);
        border-radius: 10px;
    }
    .bigDot{
        position: absolute;
        left: 0px;
        width:20px;
        height: 20px;
        box-sizing:border-box;
        border: 5px solid #333;
        border-radius: 50%;
        top:0px;
        transition: transform 1s ease;
    }
    .smallDot{
        position: absolute;
        list-style: none;
        left: 0px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
        top:5px;
        cursor: pointer;
    }
</style>