<template>
    <div id="carousel" class="wrap">
        <div class="box" ref="items" v-bind:style="rolling">
            <slot name="img_content"></slot>
        </div>
        <!-- <slot name="DotBar" :Index="10"></slot> -->
        <CarouselDotBar @func="dotChange" v-bind:curIndex="curIndex" v-bind:dotNum="itemNum" v-bind:delay="delay" ></CarouselDotBar>
    </div>
    
</template>
<script>
import carouselItem from '../common/BaseCaroItem';
import CarouselDotBar from '../common/BaseDotBar';
export default {
    name:"Carousel",
    components:{carouselItem,CarouselDotBar},
    props:{
        delay:{
            type:Number,
            default:2000,
        },
        dotBarEnable:{
            type:Boolean,
            default:true,
        },
        itemNum:{
            type:Number,
            default:0
        }
    },
    methods:{
        startRolling:function(){
            this.t1 = setInterval(this.changeIndex,this.delay);
        },
        stopRolling:function(){
            clearInterval(this.t1);
        },
        dotChange:function(index){
            this.stopRolling();
            this.curIndex = index-1;
            if(this.curIndex==0)this.dir=1;
            if(this.curIndex==this.itemNum-1)this.dir=-1;
            this.startRolling();
        },
        changeIndex:function(){
            
            if(this.itemNum>1){
                this.curIndex+=this.dir;
                if(this.curIndex>=this.itemNum-1||this.curIndex<=0)this.dir=-this.dir;
            }
            

        },
    },
    computed:{
        
        rolling:function(){
            let index = this.curIndex;
            return{
                'transform':`translate(${-this.curIndex*100}vw,0)`,
                'position':"relative",
                'width':`${(this.itemNum+1)*100}vw`
                };
        },
    },
    created:function(){
        this.startRolling();
    },
    data(){
        return{
            curIndex:0,
            dir : 1,
            t1:setInterval,
        }
    }
}
</script>
<style lang="">
    .wrap{
        position: relative;
        overflow: hidden;
        width: 100vw;
        box-sizing: border-box;
        box-shadow: -7px 10px 20px 0px rgba(0,0,0,0.2);
    }
    .box{
        overflow: hidden;
        max-height: 500px;
        box-sizing: border-box;
        transition: transform 1s ease;
    }

</style>