import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Properties from '@/components/Properties'
import Conditions from '@/components/Conditions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/properties',
      name: 'Properties',
      component: Properties
    },
    {
      path: '/conditions',
      name: 'Conditions',
      component: Conditions
    }

  ]
})
