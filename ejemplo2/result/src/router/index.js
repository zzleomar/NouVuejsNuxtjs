import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Component from '@/components/component'
import Newcomponent from '@/components/newcomponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/component',
      name: 'Component',
      component: Component
    },
    {
      path: '/newcomponent',
      name: 'NewComponent',
      component: Newcomponent
    }
  ]
})
