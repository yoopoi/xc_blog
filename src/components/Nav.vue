<template>
<div class="wrapper">
<div class="nav-box">
    <div class="nav-logo">LOGO</div>
    <SearchBox></SearchBox>
    <div class="tab-bar">
        <BaseButton 
            @func="tabClick" 
            btnClass="amp" 
            content="btn" 
            size="50,50"
            v-bind:isShow="is_show">
        </BaseButton>
     </div>
    <ul class="nav-ul" v-bind:class="ulStyle">
        <router-link  class="nav-li" to="/editor"> <div @click="tabClose" >编辑器</div> </router-link>
        <router-link  class="nav-li" to="/about"> <div @click="tabClose" >搜索</div> </router-link>
        <router-link  class="nav-li" to="/article"> <div @click="tabClose" >文章</div> </router-link>
        <router-link  class="nav-li" to="/"> <div @click="tabClose" >首页</div> </router-link>
    </ul>
    
</div>
</div>

</template>

<script>
import BaseButton from '../common/BaseButton'
import SearchBox from '../components/Search'
export default {
    name: 'App',
  components:{BaseButton,SearchBox},
  data(){
      return{
          screenWidth: document.body.clientWidth,
          is_show :document.body.clientWidth>960?1:0,
          ulShow:0,
      }
  },
  mounted () { 
      var that = this;
    window.onresize=function(){
        that.screenWidth=document.body.clientWidth;
        //console.log(that.screenWidth);
    }
    },
    watch: {  
    screenWidth(newValue, oldValue) {  
        //console.log(newValue);
        newValue>960?this.is_show=1:this.is_show=0;
    }  
},
methods: {
    tabClick:function (msg) {
        this.ulShow=~this.ulShow;
    },
    tabClose:function(){
        this.ulShow=0;
    }

}, 
computed: {
    ulStyle:function() {
        if(this.is_show)
        return 'ul-close';
        if(this.ulShow){
            return 'ul-show';
        }else{
            return 'ul-hide';
        }
    },
  
},

}
</script>
<style >
.wrapper{
    width: 90%;
    height: 50px;
    z-index: 3;
    margin: auto;
    position:fixed;
    border-radius: 50px;
    box-shadow: -7px 10px 20px 0px rgba(0,0,0,0.2);
    background-color: #f5f5f5;
    left:5vw;
    top:10px;
}
    .nav-box{
        position: relative;
        width: 90%;
        
        line-height: 50px;
        
        
        
    }
    .nav-box:after{
        content: "";
        visibility: hidden;
        clear: both;
        display: block;
    }
    .nav-logo{
        position: relative;
        float: left;
        left: 20px;
    }
    .nav-ul{
        overflow: hidden;
        float: right;
        transition: height 0.5s ease;
    }
    .ul-show{
        height: 90vh;
    }
    .ul-hide{
        height:0px;
    }
    .ul-close{
        height: 50px;
    }
    .nav-li{
        display: block;
        position: relative;
        float:right;
        width:auto;
        height: 50px;
        list-style:none;
        transition: all 0.5s ease;
        padding:0px 10px 0px 10px;
        cursor: pointer;
    }
    .nav-li-a{
        display:inline-block;
        width:100%;
        line-height:50px;
    }
    .nav-li:hover{
        background-color:cornflowerblue;
    }
    .tab-bar{
        float: right;
    }
    

    @media (max-width:960px) {
     .wrapper{
    width: 100%;
    height: 50px;
    z-index: 3;
    margin: auto;
    position:fixed;
    border-radius: 50px;
    box-shadow: none;
    background-color: #f5f5f5;
    left:0vw;
    top:0px;
}   
    .nav-box{
        position: relative;
        overflow: visible;
        width: 100%;
        background-color: #f5f5f5;
        line-height: 50px;
        margin-bottom: 20px;
    }
      .nav-ul{
          
        width: 100%;
        
    }
  .nav-li{
        float:none;
        
    }
}
</style>