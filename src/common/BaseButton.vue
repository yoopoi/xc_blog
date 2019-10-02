<template>
<div id=BaseButton>
    <button class="BaseButton"
    @click="clickEvent"
    v-show="!isShow" 
    v-bind:class="getClass(btnClass)"
    v-bind:style="getStyle">{{content}}</button>
</div>
    
</template>
<script>

export default {
    name: 'BaseButton',
    props:{
        size: {
            type: String,
            default: "50,50"
        },
        content:{
            type:String,
            default:"Null"
        },
        btnClass:{
            type:String,
            default:"basicStyle"
        },
        isShow:{
            type:Number,
            default:1
        },
    },
    data(){
        return {
        }
    },

    computed:{
        
        getStyle:function(){
            let width = this.size.split(",")[0]
            let height = this.size.split(",")[1]
            return{
                'width':`${width}px`,
                'height':`${height}px`,
            }
        }
    },  
    methods:{
        getClass:function(a){
                return{
                    "basicStyle":true,
                }
        },
        clickEvent:function() {
            this.$emit('func',this.content);
        }
    }

    

}
</script>
<style >
    .BaseButton{
        position: relative;
        float: left;
        height: 50px;
        background-color: #FF6A6A;
        cursor:pointer;
        transition: all 0.5s cubic-bezier(0.51, -0.04, 0, 1.34);
        outline: none;
        border:none;
        margin: auto;
        border-radius:1.5em;
        box-shadow: -5px 5px 5px rgba(0,0,0,0.2);
    }
    .basicStyle{
        font-size: 12px;
    }
    .basicStyle:hover{
        font-size: 22px;
    }
    .circle{
        border-radius: 30px;
    }
    
    .hide{
        height: 0px;
    }
</style>