import Vue from 'vue'
import Router from 'vue-router'
import about from '../pages/about'
import index from '../pages/index'
import article from '../pages/article'
import editor from '../pages/editor'
import Carousel from '../components/Carousel'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:index,
    },{
      path:'/about',
      name:'about',
      component: about,
    },{
      path:'/article',
      name:"Article",
      component:article,
    },
    {
      path:'/editor',
      name:"Editor",
      component:editor,
    }
  ]
})
