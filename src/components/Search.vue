<template>
    <div :class="$style.box">
        <img :src="icon_url" alt="icon" width="30px" height="30px" style="cursor:pointer;display:block;float:right;left:-10px;top:5px;position:relative;margin-left:20px;">
        <input type="text"
            id="searchContent"
            v-model="message"
            placeholder="标签,主题,时间"
            :class="$style.input"
            @click="getContent()"
            >
        <div></div>
        <div :class="$style.searchContent" v-show="showList">
            <li :class="$style.listChild" v-for="n in 10" :key="n">hello world</li>
        </div>
    </div>
</template>
<script>
export default {
    name:"searchBox",
    data(){
        return{
            icon_url:require('../assets/logo.png'),
            message:"",
            showList:false,
        }
        
    },
    methods:{
        getContent:function(e){
            
        }
        
    },
    mounted(){
        var that = this;
        document.body.onclick=function(e){

            if(e.path[0].id=="searchContent"){
                that.showList=true;
            }else{
                that.showList=false;
            }
        };
    }

}
</script>
<style module lang="postcss">
    .box{
        width: 220px;
        height: 40px;
        position:relative;
        background: #fff;
        float: left;
        margin-left: 30px;
        top:5px;
        border-radius: 20px;
    }
    .input{
        width: 150px;
        height: 40px;
        border:none;
        outline:none;
        line-height: 40px;
        display: block;
        float: right;
        text-align: right;

    }
    .box:hover{
        box-shadow: 0px 0px 5px 0px rgba(	106,90,205,0.5);  
    }
    .searchContent::before{
    content: "";
    position: absolute;
    width: 0px; 
    height: 0px;
    border-width:20px;
    border-style: solid;
    border-color:transparent transparent #F5f5f5;
    top:-40px;
    }
    .searchContent{
        position:absolute;
        width: 300px;
        height: 500px;
        background-color: #f5f5f5;
        top:70px;
        left:50%;
        margin-left: -150px;
        box-shadow: 0px 0px 20px 0px rgba(	106,90,205,0.5); 
    }
    .listChild{
        width: 100%;
        cursor:pointer;
        list-style: none;
    }
    .listChild:hover{
       background-color: #FF6A6A; 
    }
</style>