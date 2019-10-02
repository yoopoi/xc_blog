<template>
    <div :class="$style.tag" v-bind:style="setBackground">{{msg}}</div>
</template>
<script>
export default { 
    name:"BaseTag",
    props:{
        msg:{
            default:"c++"
        },
    },
    computed:{
        setBackground:function(){
            let color ="#fff";
            switch(this.msg){
                case "c++":
                    color="#54FF9F";
                    break;
                case "python":
                    color="blue";
                    break;
                case "html":
                    color="#FF6A6A"
                    break;
                case "javascript":
                    color="#DA70D6"
            }
            return {
                'background': color,
                'box-shadow':`-2px 2px 5px ${color}`,
            }
        }
    }
}
</script>
<style module lang="postcss">
    .tag{
        
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        display: inline-block;
        position: relative;
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 5px;
        border-radius: 10px;
        margin-left: 8px;
    }
</style>