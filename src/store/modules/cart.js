import * as types from '../mutation-types'
import cartApi from '../../api/cart'

// initial state
// shape: [{id, quantity}]
const state = {
  added: [],
  checkoutStatus: null
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,

  cartProducts: (state, getters, rootState) => {
    return state.added.map(({id, quantity}) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    // TODO implement functionality

    // empty cart
    commit(types.SET_CART_ITEMS, { items: [] })
  }
}

// mutations
const mutations = {
  [types.ADD_TO_CART] (state, { id, quantity }) {
    state.checkoutStatus = null

    const record = state.added.find(product => product.id === id)

    if (!record) {
      state.added.push({
        id,
        quantity: quantity
      })

      // also call the API to notify the microservice backend about the change (we don't care about the response)
      cartApi.putItemToCart(id, quantity)
    } else {
      record.quantity += quantity
    }
  },

  [types.REMOVE_FROM_CART] (state, { id }) {
    const recordIdx = state.added.findIndex(product => product.id === id)

    if (recordIdx >= 0) {
      state.added.splice(recordIdx, 1)

      // also call the API to notify the microservice backend about the change (we don't care about the response)
      cartApi.removeItemFromCart(id)
    }
  },

  [types.SET_CART_ITEMS] (state, { items }) {
    state.added = items
  },

  [types.SET_CHECKOUT_STATUS] (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
