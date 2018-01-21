/**
 * This file is responsible for communicating with the microservice API.
 */
import Vue from 'vue'

export default {
  getProducts (cb) {
    Vue.$http.get('http://localhost:8605/stock/items')
      .then(res => {
        // map products from response
        const productsResponse = res.data.products || []

        const products = productsResponse.map(product => {
          return {
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: product.quantity
          }
        })

        cb(products, null)
      })
      .catch(err => {
        cb(null, err)
      })
  }
}
