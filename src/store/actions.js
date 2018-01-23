import * as types from './mutation-types'

export const addToCart = ({ commit }, payload) => {
  if (payload.product.quantity > 0) {
    commit(types.ADD_TO_CART, {
      id: payload.product.id,
      quantity: payload.quantity
    })
  }
}

export const removeFromCart = ({ commit }, product) => {
  commit(types.REMOVE_FROM_CART, {
    id: product.id,
    quantity: product.quantity
  })
}
