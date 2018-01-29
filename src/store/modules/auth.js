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
  setUser ({ commit, dispatch }, user) {
    commit(types.SET_USER, user)

    // dispatch the order loading action
    dispatch('getAllOrders')
  }
}

// mutations
const mutations = {
  [types.SET_USER] (state, user) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
