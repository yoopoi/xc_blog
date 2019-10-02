<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="body-wrap">
     <router-view></router-view> 
    </div> 
    
    <BasedFooter>
<h3 slot="copyright"> chengbo design copyright All </h3>
</BasedFooter>
  </div>
</template>

<script>
import NavBar from './components/Nav'
import BasedFooter from './common/BaseFooter'
export default {
  name: 'App',
  components:{NavBar,BasedFooter}
}
</script>

<style >
.body-wrap{
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height:100vh;
  z-index: 1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
*{
  margin:0px;
  padding: 0px;
}
</style>
