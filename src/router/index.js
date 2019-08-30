import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Top from '@/components/Top'
import Properties from '@/components/Properties'
import Conditions from '@/components/Conditions'
import Questions from '@/components/Questions'
import ConditionsChange from '@/components/ConditionsChange'
import Favorite from '@/components/Favorite'
import Search from '@/components/Search'
import Recommend from '@/components/Recommend'
import RecommendModified from '@/components/RecommendModified'
import KeepAdmin from '@/components/KeepAdmin'

Vue.use(Router)
Vue.use(BootstrapVue)

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
      path: '/keep',
      name: 'Favorite',
      component: Favorite
    },
    {
      path: '/keep/admin',
      name: 'keepAdmin',
      component: KeepAdmin
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/recommend/modified',
      name: 'RecommendModified',
      component: RecommendModified
    }
  ]
})
