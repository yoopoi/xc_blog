// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import BaseButton from './common/BaseButton'
import BaseNumber from './common/BaseNumber'
Vue.component("BaseButton", BaseButton);
Vue.component("BaseNumber", BaseNumber);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('../src/assets/logo.png'),
  loading: require('../src/assets/logo.png'),
  attempt: 1
})
Vue.use(Vuex)
Vue.config.productionTip = false
// Vue.prototype.getGlobalClick=function(callback){
//   document.onmousedown = callback
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

