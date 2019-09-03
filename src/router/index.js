import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Questions from '@/components/recommend/Questions'
import TagsChange from '@/components/recommendModified/TagsChange'
import Search from '@/components/search/Search'
import SearchKeep from '@/components/search/SearchKeep'
import Recommend from '@/components/recommend/Recommend'
import RecommendKeep from '@/components/recommend/RecommendKeep'
import RecommendModified from '@/components/recommendModified/RecommendModified'
import RecommendModifiedKeep from '@/components/recommendModified/RecommendModifiedKeep'
import KeepAdmin from '@/components/KeepAdmin'
import KeepAll from '@/components/KeepAll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
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
      path: '/keep/admin',
      name: 'keepAdmin',
      component: KeepAdmin
    },
    {
      path: '/keep/all',
      name: 'keepAll',
      component: KeepAll
    },
    {
      path: '/search/properties',
      name: 'Search',
      component: Search
    },
    {
      path: '/search/keep',
      name: 'SearchKeep',
      component: SearchKeep
    },
    {
      path: '/recommend/properties',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/recommend/keep',
      name: 'RecommendKeep',
      component: RecommendKeep
    },
    {
      path: '/recommend/modified/properties',
      name: 'RecommendModified',
      component: RecommendModified
    },
    {
      path: '/recommend/modified/keep',
      name: 'RecommendModifiedKeep',
      component: RecommendModifiedKeep
    }
  ]
})
