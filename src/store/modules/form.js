const state = {
  list: []
}

const actions = {
  addFormItem ({commit}, item) {
    commit('setFormList', item)
  }
}

const mutations = {
  setFormList (state, item) {
    state.list.push(item)
  }
}

const getters = {
  list: state => {
    return state.list
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
