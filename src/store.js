import Vue from 'vue'
import Vuex from 'vuex'

import {propertiesStore} from './modules/propertiesStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    propertiesStore: propertiesStore
  }
})
