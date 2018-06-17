import Vue from 'vue'
import Vuex from 'vuex'

import form from './modules/form'

Vue.use(Vuex)

const store = new Vuex.Store({

  modules: {
    form
    // more modules could go here...
  }
})

export default store
