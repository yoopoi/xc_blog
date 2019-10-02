<template>
<div id="about" style="padding-top:50px;">
<BasedLabel :class="$style.label" msg="搜索结果:"></BasedLabel>
<div  class="card-item" style="display:inline-block;width:100vw">
   <BaseCard display="inline-block" v-for="n in 200" :key="n"></BaseCard> 
</div>
<Pageination></Pageination>
</div>

</template>
<script>
import BasedLabel from '../common/BaseLabel';
import BaseCard from '../common/BaseCard';
import Pageination from '../components/Pageination'
export default {
    name:"about",
    components:{BasedLabel,BaseCard,Pageination},

}
</script>
<style module lang="postcss">
    .label{
        margin-left: 40px;
    }
</style>