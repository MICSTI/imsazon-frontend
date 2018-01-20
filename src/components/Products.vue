<template>
    <ul>
      <li v-for="product in products">
        {{ product.Name }} - {{ product.Price | currency }}
        <br/>
        <button
          :disabled="!product.Quantity"
          @click="addToCart(product)">
          Add to cart
        </button>
      </li>
    </ul>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      products: 'allProducts'
    }),
    methods: mapActions([
      'addToCart'
    ]),
    created () {
      this.$store.dispatch('getAllProducts')
    },
    name: 'products'
  }
</script>

<style scoped>

</style>
