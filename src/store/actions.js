import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  if (product.quantity > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}
