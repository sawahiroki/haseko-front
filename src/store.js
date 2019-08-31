import Vue from 'vue'
import Vuex from 'vuex'

import { searchStore } from './modules/searchStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    searchStore: searchStore
  }
})
