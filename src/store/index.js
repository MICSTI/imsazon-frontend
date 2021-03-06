import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import cart from './modules/cart'
import products from './modules/products'
import auth from './modules/auth'
import orders from './modules/orders'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    cart,
    products,
    orders,
    auth
  },
  strict: false
})
