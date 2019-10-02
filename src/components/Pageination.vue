<template>
    <div :class="$style.box">
        <div :class="[$style.button,$style.left]" ></div>
        <li :class="$style.dot"  v-for="n in numDisplay" :key="n" v-bind:style="setCurPage(n)">{{n}}</li>
        <input :class="$style.input" type="text" v-model="goToPage" >
        <div :class="[$style.button,$style.right]" ></div>

    </div>
</template>
<script>
export default {
    name:"Pageination",
    props:{
        maxNumber:{
            default:30,
        },
        curPage:{
            default:15,
        }
    },
    data(){
        return{
            pageNum:1,
            numDisplay:[],
            goToPage:this.curPage,
        }
      
    },
    methods: {
      getDisplayNumber:function(){
          let last_page = this.curPage+3>this.maxNumber?this.maxNumber:this.curPage+3;
          let firstPage = this.curPage-3>0?this.curPage-3:1;
          this.numDisplay.push("首页");
          for(var i =firstPage;i<last_page+1;i++){
              this.numDisplay.push(i);
          }
          this.numDisplay.push("尾页");
      },
      setCurPage:function(n){
          if(n==this.curPage){
              return{
                  'background-color':'#FF6A6A' ,
              }
          }
      }
    },
    created(){
        this.getDisplayNumber();
    }
}
</script>

<style module lang="postcss">
.box{
    position: relative;
    height: 50px;
    background:#f3f3f3;
    box-shadow: -7px 14px 20px 0px rgba(0,0,0,0.2);
    margin:auto;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 30px;
    overflow: hidden;
    max-width: 300px;
    min-width: 150px;
}
.button{
width: 40px;
height: 50px;
background-color: #fff;
cursor: pointer;
}
.button:hover{
   background-color:#FF6A6A; 
}
.left{
float: left;
}
.left::before{
    content: "";
    position: absolute;
    width:30px;
    height: 5px;
    border-radius:5px;
    background-color:#333;
    left: 9px;
    top: 13px;
    transform: rotate(135deg);
}
.left::after{
    content: "";
    position: absolute;
    width:30px;
    height: 5px;
    border-radius:5px;
    background-color:#333;
    left: 8px;
    top: 32px;
    transform: rotate(45deg);
}
.right{
    float: right;
}
.right::before{
    content: "";
    position: absolute;
    width:30px;
    height: 5px;
    border-radius:5px;
    background-color:#333;
    right: 9px;
    top: 13px;
    transform: rotate(45deg);
}
.right::after{
    content: "";
    position: absolute;
    width:30px;
    height: 5px;
    border-radius:5px;
    background-color:#333;
    right: 8px;
    top: 32px;
    transform: rotate(-45deg);
}
.dot{
    list-style: none;
    float: left;
    width: 20px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
}
.dot:hover{
    background-color: #FF6A6A;
}
.input{
    float: left;
    width: 30px;
    height: 50px;
    line-height: 50px;
    margin-left: 5px;
    border:2px solid rgba(0,0,0,0.2);
    position: relative;
    box-sizing: border-box;
}
</style>