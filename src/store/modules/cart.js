import * as types from '../mutation-types'
import shop from '../../api/shop'
import cartApi from '../../api/cart'
import store from '../index'
import router from '../../router'

// initial state
// shape: [{id, quantity}]
const state = {
  added: [],
  checkoutStatus: null,
  currentOrderId: null
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,

  currentOrderId: state => state.currentOrderId,

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
  checkout ({ commit, state }) {
    const userId = store.state.auth.user.id

    shop.createOrder(userId, state.added, (data, err) => {
      if (err) {
        return console.error('create order error', err)
      }

      // set checkout status
      commit(types.SET_CHECKOUT_STATUS, 'created')

      // get order Id from response
      const orderId = data.order.id

      // go to orders page
      router.push(`/checkout/${orderId}`)
    })
  },

  payment ({ commit, getters, dispatch }) {
    // generate a random transaction ID
    const transactionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

    // fake credit card number
    const creditCard = '12345678912347890'

    // get the amount from the store
    const amount = getters.cartTotalPrice

    // our currency
    const currency = '€'

    const payload = {
      transactionId,
      creditCard,
      amount,
      currency
    }

    shop.pay(payload, (data, err) => {
      if (err) {
        dispatch('updateStatus', 'paymentFailure')
      } else {
        dispatch('updateStatus', 'paymentSuccess')
      }

      // empty cart in any way
      commit(types.SET_CART_ITEMS, { items: [] })
    })
  },

  setOrderId ({ commit }, orderId) {
    commit(types.SET_ORDER_ID, orderId)
  },

  updateStatus ({ commit, getters }, status) {
    commit(types.SET_CHECKOUT_STATUS, status)

    // also update the status on the microservice server
    const payload = {
      orderId: getters.currentOrderId,
      status
    }

    shop.updateOrderStatus(payload, (data, err) => {
      if (err) {
        return console.error('could not update order status on backend', err)
      }

      console.log('successfully updated order status on backend', data)
    })
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
  },

  [types.SET_ORDER_ID] (state, orderId) {
    state.currentOrderId = orderId
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
