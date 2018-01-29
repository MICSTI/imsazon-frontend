<template>
  <div class="cart-side">
    <div class="section-header">Shopping cart</div>

    <ul v-if="cart.length > 0">
      <li v-for="product in cart">
        <div class="cart-item">
          <div class="cart-item-name">{{product.name}}</div>
          <div class="cart-item-quantity-price"><span class="item-quantity">{{product.quantity}}</span> x {{product.price | currency}}</div>
          <div class="cart-item-remove" @click="removeFromCart(product)"><a href="#">X</a></div>
        </div>
      </li>
    </ul>
    <div class="list-no-items" v-else>
      There are currently no items in your cart.
      <br/>
      You can add some by selecting products from the list on the left.
    </div>

    <div class="total-container" v-if="cart.length > 0">
      Total: <b>{{total | currency}}</b>
    </div>

    <div class="checkout-container" v-if="cart.length > 0">
      <button @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
      computed: mapGetters({
        cart: 'cartProducts',
        total: 'cartTotalPrice'
      }),
      methods: {
        checkout () {
          this.$store.dispatch('checkout')
        },
        ...mapActions([
          'removeFromCart'
        ])
      },
      name: 'cart'
    }
</script>

<style scoped>
  .cart-side {
    background-color: #a2ded0;
    height: 100%;
    padding: .75em;
  }

  .total-container {
    border-top: 2px solid #76b82a;
    margin: 1em;
    padding-top: .5em;
  }

  .list-no-items {
    color: #555;
    font-size: .85em;
    padding: .7em .7em 0 .7em;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .section-header {
    font-weight: bold;
    font-size: 1.2em;
    margin: .5em 0 1.25em 0;
  }

  .cart-item {
    display: flex;
    align-items: center;
    padding: .8em 0;
  }

  .cart-item-name {
    flex: 4 0;
  }

  .cart-item-quantity-price {
    flex: 4 0;
  }

  .cart-item-remove {
    flex: 1 0;
  }

  .item-quantity {
    color: #444;
  }
</style>
