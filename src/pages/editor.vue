<template>
  <div  :class="$style.box">
      <Editor :commit="commitclick" :catchData="catchdata"></Editor>
  </div>
</template>

<script>
import Editor from '../components/Richtxt'
export default {
  name: "editor",
  components:{Editor},
  methods:{
        commitclick:function(){
            alert(this.htmlData);
        },
        catchdata:function(e){
            this.htmlData=e;
        },
    },
  data(){
      return {
          htmlData:"",
      }
  }
}
</script>
<style module lang="postcss">
    .box{
        position: relative;
        margin-top:100px;
    }
</style>