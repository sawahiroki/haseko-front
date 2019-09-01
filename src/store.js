import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { searchStore } from './modules/searchStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    searchStore: searchStore
  },
  plugins: [createPersistedState()]
})
