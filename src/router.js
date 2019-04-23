import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: '404',
      component: () => import('./components/404.vue')
    }
  ]
})