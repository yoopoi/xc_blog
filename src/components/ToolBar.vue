<template>
    <div id="ToolBar">
        <div :class="$style.box">
            <div :class="$style.content">
                <BaseButton
                :class="$style.backtop"
                v-bind:isShow="0"
                size="60,60"
              
                content="TOP"   
                ></BaseButton>
                <div :class="$style.center">
                    <!-- <div >已阅览:{{delta}}%</div> -->
                    <BaseNumber v-bind:curNum="num1"></BaseNumber>  
                    <BaseNumber v-bind:curNum="num2"></BaseNumber>  
                </div>
                
                <BaseButton
                :class="$style.favorite"
                v-bind:isShow="0"
                size="60,60"
               
                content="赞"   
                ></BaseButton>
            </div>
        </div>
    
    </div>
</template>
<script>
export default {
    name:"ToolBar",
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
    },
    methods: {
        handleScroll: function () {
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;  
            // 设备/屏幕高度
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let scrollHeight = document.body.scrollHeight; // 滚动条的总高度
            console.log(scrollTop,clientHeight,scrollHeight-clientHeight);

            //滚动条到底部的条件
                let delta = (scrollTop)/(scrollHeight-clientHeight-200);
                this.delta= parseInt(delta*100);
                if(this.delta>100)this.delta=100;
                this.num1 = parseInt(this.delta/10);
                this.num2 = parseInt(this.delta%10);
         
        }
    },
    data(){
        return{
            delta:0,
            num1:8,
            num2:0,
        }
    }
}
</script>
<style module lang="postcss">
    .box{
        position: fixed;
        margin-left: 25px;
        bottom: 120px;
        width: 300px;
        height: 80px;
        //background-color: #f3f3f3;
        border-radius: 30px;
        //box-shadow: -7px 10px 10px 0px rgba(0,0,0,0.2);
    }
    .content{
        width: 300px;
        height: 80px;
        box-sizing: border-box;
        padding: 10px;
    }
    .backtop{
        float: left;
    }
    .favorite{
        float: left;
        margin-left:20px;
    }
    .center{
        display: inline-block;
        text-align: center;
    }

</style>