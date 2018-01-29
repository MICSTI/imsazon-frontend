import shop from '../../api/shop'
import * as types from '../mutation-types'
import store from '../../store'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allOrders: state => state.all
}

// actions
const actions = {
  getAllOrders ({ commit, state }) {
    if (store.state.auth.user === null) {
      return
    }

    const userId = store.state.auth.user.id

    shop.getOrders(userId, (orders, err) => {
      if (err) {
        return console.error(err)
      }

      commit(types.RECEIVE_ORDERS, { orders })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_ORDERS] (state, { orders }) {
    state.all = orders
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
