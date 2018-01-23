import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  const toBeAdded = Number(product.toBeAdded) || 1
  if ((product.quantity - toBeAdded) > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id,
      quantity: toBeAdded
    })
  }
}

export const removeFromCart = ({ commit }, product) => {
  commit(types.REMOVE_FROM_CART, {
    id: product.id,
    quantity: product.quantity
  })
}
