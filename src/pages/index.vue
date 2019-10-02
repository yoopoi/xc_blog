<template>
    <div id="index">
    <Carousel :dotBarEnable="dotBarEnable" :itemNum="itemNum" :delay="delay" >
        <CarouselItem slot="img_content" imgUrl="../../static/images/lunbo (1).jpg"></CarouselItem>
        <CarouselItem slot="img_content" imgUrl="../../static/images/lunbo (2).jpg"></CarouselItem>
        <CarouselItem slot="img_content" imgUrl="../../static/images/lunbo (3).jpg"></CarouselItem>
        <CarouselItem slot="img_content" imgUrl="../../static/images/lunbo (4).jpg"></CarouselItem>
    </Carousel>
        
    <BasedRoll label="hello world">
    <div class="card_item" slot="content">
    <BaseCard></BaseCard>
    <BaseCard></BaseCard>
    <BaseCard></BaseCard>
    <BaseCard></BaseCard>
    </div>
    </BasedRoll>
        <BasedRoll label="hello world">
    <div class="card_item" slot="content">
    <BaseCard></BaseCard>
    <BaseCard></BaseCard>
    <BaseCard></BaseCard>
    <BaseCard></BaseCard>
    </div>
    </BasedRoll>
        <BasedRoll label="hello world">
    <div class="card_item" slot="content">
    <BaseCard></BaseCard>
    <BaseCard></BaseCard>
    <BaseCard></BaseCard>
    <BaseCard></BaseCard>
    </div>
    </BasedRoll>





    </div>
</template>
<script>
import Carousel from '../components/Carousel'

import CarouselItem from '../common/BaseCaroItem';
import BaseCard from '../common/BaseCard';
import BasedRoll from '../common/BaseRoll';


export default {
    name:"index",
    components:{Carousel,CarouselItem,BaseCard,BasedRoll},
    data(){
        return{
            itemNum:4,
            dotBarEnable:true,
            delay:5000,
        }
    }
}
</script>