import * as types from '../mutation-types'

// initial state
const state = {
  user: null
}

// getters
const getters = {
  user: state => state.user
}

// actions
const actions = {
  getUser ({ commit }) {
    // TODO attempt to load user from session storage
    const receivedUser = {
      id: 1,
      name: 'Michael'
    }

    commit(types.SET_USER, { user: receivedUser })
  }
}

// mutations
const mutations = {
  [types.SET_USER] (state, { user }) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
