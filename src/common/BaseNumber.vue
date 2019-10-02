<template>
    <div :class="$style.blockWrap" ref="block">
        <div :class="$style.block">-2</div>
        <div :class="$style.block">-1</div>
        <div :class="$style.block">0</div>
    </div>
</template>
<script>
import { setInterval } from 'timers';
export default {
    name:"BaseNumber",
    props:{
        curNum:{
            type:Number,
            default:3,
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        top:function(){
            
            this.child = this.$refs["block"].children;
            for(var i=0;i<this.child.length;i++){
                var curTop = parseInt(this.child[i].style.top.split("px")[0])-50;
                var last_val = parseInt(this.child[i].innerHTML);
                if(curTop<-50){
                    
                    console.log(last_val);
                    this.child[i].style.zIndex="-1";
                    this.child[i].innerHTML = last_val+3;
                }
                else{
                    this.child[i].style.zIndex="3";
                }
                if(curTop<-50){
                    curTop=50;
                }
                
                this.child[i].style.top=curTop+"px";
            }
        },
        
        down:function(){
            
            this.child = this.$refs["block"].children;
            for(var i=0;i<this.child.length;i++){
                var curTop = parseInt(this.child[i].style.top.split("px")[0])+50;
                var last_val = parseInt(this.child[i].innerHTML);
                if(curTop>50){
                    curTop=-50;
                    console.log(last_val);
                    this.child[i].style.zIndex="-1";
                    this.child[i].innerHTML = last_val-3;
                }
                else{
                    this.child[i].style.zIndex="3";
                }
                
                this.child[i].style.top=curTop+"px";
                
            }
        },
        check:function(){
            if(this.curNum+1==this.preNum )return;
            if(this.curNum+1>this.preNum){
                this.preNum+=1;
                this.top();
            }else{
                this.preNum-=1;
                this.down();
            }
            
            setTimeout(this.check,this.delay);
        },
        init:function(){
            this.child = this.$refs["block"].children;
            for(var i=0;i<this.child.length;i++){
                this.child[i].style.top=-50+i*50+"px";
            }
            setInterval(this.check,1000)
        },
    
        
    },
        watch:{ 
        },
    data(){
        return{
            preNum:0,
            delay:200,
            isUpdate:false,
        }
    },
    created(){
        
    }
}
</script>
<style module lang="postcss">
    .blockWrap{
        width: 50px;
        height: 50px;
        background-color: cornsilk;
        display: inline-block;
        overflow: hidden;
        position: relative;
    }
    .block{
        width: 50px;
        height: 50px;
        position: absolute;
        line-height: 50px;
        font-size: 30px;
        transition: top 0.2s linear;
    }

</style>