import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Properties from '@/components/Properties'
import Conditions from '@/components/search/conditions/Conditions'
import Questions from '@/components/Questions'
import TagsChange from '@/components/TagsChange'
import Favorite from '@/components/Favorite'
import Search from '@/components/search/Search'
import Recommend from '@/components/recommend/Recommend'
import RecommendModified from '@/components/recommendModified/RecommendModified'
import KeepAdmin from '@/components/KeepAdmin'

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
      path: '/tags',
      name: 'TagsChange',
      component: TagsChange
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
