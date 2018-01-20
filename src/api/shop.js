/**
 * This file is responsible for communicating with the microservice API.
 */
import Vue from 'vue'

export default {
  getProducts (cb) {
    Vue.$http.get('http://localhost:8605/stock/items')
      .then(res => {
        // get products from response
        const products = res.data.products || []

        cb(products, null)
      })
      .catch(err => {
        cb(null, err)
      })
  }
}
