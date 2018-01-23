import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts((products, err) => {
      if (err) {
        return console.error(err)
      }

      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id, quantity }) {
    state.all.find(product => product.id === id).quantity -= quantity
  },

  [types.REMOVE_FROM_CART] (state, { id, quantity }) {
    state.all.find(product => product.id === id).quantity += quantity
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
