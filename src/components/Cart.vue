<template>
  <div class="cart-side">
    <ul>
      <li v-for="product in cart">
        {{product}}
      </li>
    </ul>

    <div class="total-container">
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
}
</style>
