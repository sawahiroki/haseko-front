import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Top from '@/components/Top'
import Properties from '@/components/Properties'
import Conditions from '@/components/Conditions'
import Questions from '@/components/Questions'
import ConditionsChange from '@/components/ConditionsChange'
import Favorite from '@/components/Favorite'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/conditions/change',
      name: 'ConditionsChange',
      component: ConditionsChange
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: Favorite
    }

  ]
})
