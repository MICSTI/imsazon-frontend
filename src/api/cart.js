/**
 * This file is responsible for communicating with the microservice API.
 */
import Vue from 'vue'
import store from '../store'

export default {
  putItemToCart (productId, quantity) {
    return new Promise((resolve, reject) => {
      const userId = store.state.auth.user.id

      const payload = {
        userId,
        productId,
        quantity
      }

      Vue.$http.post('http://localhost:8605/cart/put', payload)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          console.log('put item to cart error on API', err)
          reject(err)
        })
    })
  },

  removeItemFromCart (productId) {
    return new Promise((resolve, reject) => {
      const userId = store.state.auth.user.id

      const payload = {
        userId,
        productId
      }

      Vue.$http.post('http://localhost:8605/cart/remove', payload)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          console.log('remove item to cart error on API', err)
          reject(err)
        })
    })
  }
}
