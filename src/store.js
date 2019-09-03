import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { searchStore } from './modules/searchStore'
import { recommendStore } from './modules/recommendStore'
import { recommendModifiedStore } from './modules/recommendModifiedStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    searchStore: searchStore,
    recommendStore: recommendStore,
    recommendModifiedStore: recommendModifiedStore
  },
  plugins: [createPersistedState()]
})
