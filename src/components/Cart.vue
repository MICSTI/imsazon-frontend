<template>
  <div class="cart-side">
    <ul v-if="cart.length > 0">
      <li v-for="product in cart">
        {{product}}
        <br/>
        <span @click="removeFromCart(product)"><a href="#">Remove</a></span>
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
  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
      computed: mapGetters({
        cart: 'cartProducts',
        total: 'cartTotalPrice'
      }),
      methods: mapActions([
        'removeFromCart'
      ]),
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
</style>
