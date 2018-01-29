import shop from '../../api/shop'
import * as types from '../mutation-types'
import store from '../../store'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allOrders: state => state.all,

  orderTotalPrice: (state, getters) => (order) => {
    // map order items
    const items = order.items.map(item => {
      const product = getters.getProductById(item.id)
      return {
        name: product.name,
        description: product.description,
        quantity: item.quantity,
        price: product.price
      }
    })

    return items.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
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
