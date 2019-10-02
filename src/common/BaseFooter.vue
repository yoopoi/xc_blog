<template>
    <div :class="$style.footer">
        <div :class="$style.bottom">
            <slot name="copyright"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"footer"    
}
</script>
<style module lang="postcss">
    .footer{
        position: relative;
        width: 100%;
        height: 200px;
        background-color: #333;
        color:#fff;
    }
    .bottom{
        width: 300px;
        margin:auto;
        position: absolute;
        bottom: 20px;
        left: 50%;
        margin-left: -150px;
    }
</style>