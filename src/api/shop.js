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
  },

  createOrder (userId, items, cb) {
    const mappedItems = items.map(item => {
      return {
        id: item.id,
        quantity: item.quantity
      }
    })

    const payload = {
      userId,
      items: mappedItems
    }

    Vue.$http.post(`http://localhost:8605/order/create`, payload)
      .then(res => {
        cb(res.data, null)
      })
      .catch(err => {
        cb(null, err)
      })
  },

  getOrders (userId, cb) {
    Vue.$http.get(`http://localhost:8605/order/user/${userId}`)
      .then(res => {
        // map orders from response
        const ordersResponse = res.data.orders || []

        cb(ordersResponse, null)
      })
      .catch(err => {
        cb(null, err)
      })
  },

  pay (payload, cb) {
    Vue.$http.post(`http://localhost:8605/payment/charge`, payload)
      .then(res => {
        cb(res.data, null)
      })
      .catch(err => {
        cb(null, err)
      })
  },

  updateOrderStatus (payload, cb) {
    // only update about the statuses we care about on the server
    const status = payload.status

    if (['paymentSuccess', 'paymentFailure'].indexOf(status) >= 0) {
      let mappedStatus = 0

      switch (status) {
        case 'paymentSuccess':
          mappedStatus = 1
          break

        case 'paymentFailure':
          mappedStatus = 2
          break

        default:
          break
      }

      const postPayload = {
        status: mappedStatus
      }

      Vue.$http.post(`http://localhost:8605/order/update/${payload.orderId}`, postPayload)
        .then(res => {
          cb(res.data, null)
        })
        .catch(err => {
          cb(null, err)
        })
    } else {
      // just call the callback without any params
      cb()
    }
  }
}
