<template>
<div :class="$style.wrap">
    <BasedLabel :msg="label"></BasedLabel>
  <div :class="$style.box">
        
        
        <div :class="$style.content" ref="content" v-bind:style="setPosition">
            <slot name="content"></slot>
            
        </div>
        <div :class="$style.more"></div>
    </div>          
        </div>
    
</template>
<script>
import BasedLabel from '../common/BaseLabel';
export default {
    name:"BaseRoll",
    props:{
        label:{
            type:String,
            default:"新建标签",
        }
    },
    components:{BasedLabel},
    mounted(){
        var that = this;
        this.$refs["content"].onmousemove=this.onmove;
        this.$refs["content"].onmousedown=this.onstart;
        this.$refs["content"].onmouseup=this.onup;
        this.$refs["content"].addEventListener("touchstart",this.onstart);
        this.$refs["content"].addEventListener("touchmove",this.onmove);
        this.$refs["content"].addEventListener("touchend",this.onup);
            },
    methods:{
            onstart:function(e){
                e.preventDefault();
                if(e.targetTouches)
                    var touch = e.targetTouches[0];
                else
                    var touch = e;
                this.curX=touch.pageX;
                this.lastX=touch.pageX;
                this.is_down=true;
                
            },
            onmove:function(e){
                if(this.is_down&&this.flag){
                this.flag=0;
                if(e.targetTouches)
                    var touch = e.targetTouches[0];
                else
                    var touch = e;
                this.curX=touch.pageX;
                this.Tween_Update();
                var that =this;
                setTimeout(function(){that.flag=1},14);
                //this.delta = this.curX-this.lastX+this.lastT;
                //if(this.delta<-1000)this.delta=-1000;
                //if(this.delta>200)this.delta=200;
                }
            },
            onup:function(e){
                this.is_down=false;
                this.lastT = this.delta;
                
                //this.Tween_Update();    
            },
            Tween_Update:function(){
                console.log(this.delta);
               if(this.is_down){
                    this.isUpdate = 1;
                    this.delta = (this.curX-this.lastX+this.lastT);
                    if(this.delta<-1000)this.delta=-1000;
                    if(this.delta>200)this.delta=200;
                    //console.log(this.deltaX);
                    if(Math.abs(this.lastX-this.curX)<1){
                        this.isUpdate = 0;
                        return;
                    }
                    //setTimeout(this.Tween_Update,13);
               }

            },
    },
    computed:{
        setPosition:function(){
            return{
                'transform':`translate(${this.delta}px,0px)`,
            }
        }
    },
    data(){
        return{
        flag:1,
        isUpdate:0,
        delta:0,
        deltaX:0,
        is_down:false,
        //lastDeltaX:0,
        curX:0,
        //curY:0,
        lastX:0,
        //lastY:0,
        lastT:0,
        }
        
    }
    }
</script>
<style module lang="postcss">
    .wrap{
       width:90vw;
        height: 300px; 
        margin:auto;
        margin-bottom: 180px;
    }
    .box{
        position: relative;
        margin-top:20px;
        width:clac(100%-40px);
        height: 300px;
        background-color: #F5F5F5;
        border-radius: 100px;
        box-shadow: -7px 14px 20px 0px rgba(0,0,0,0.1);
        margin:auto;
        padding: 20px;
        overflow: hidden;
        margin-bottom:100px;
    }
    .content{
        position: relative;
        width: 400vw;
        height: 90%;
    }
    .more{
        width: 200px;
        height:30px;
        background-color: aqua;
        position: absolute;
        right: 100px;
        bottom:0px;
    }
</style>