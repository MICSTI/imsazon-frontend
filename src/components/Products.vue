<template>
    <ul>
      <li v-for="product in products">
        <div class="product-image-container">
          <img :src="product.imageUrl" width="56" height="56" />
        </div>

        <div class="product-detail">
          <div class="product-name">{{ product.name }}</div>
          <div class="product-description">{{ product.description }}</div>
        </div>

        <div class="product-price">
          <div class="product-price-display">{{ product.price | currency }}</div>
          <div class="product-quantity"><span v-bind:class="{ red: product.quantity <= 3 }"><span v-if="product.quantity <= 3">only </span>{{product.quantity}} available</span></div>
        </div>

        <div class="product-add">
          <button
            :disabled="!product.quantity"
            @click="addToCart({product: product, quantity: 1})">
            Add
          </button>
        </div>
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
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li  {
    border: 1px solid #ecf0f1;
    padding: .7em .4em;
    margin-bottom: 0.7em;
    display: flex;
    align-items: center;
  }

  .red {
    color: red;
  }

  .product-image-container {
    flex: 1 0;
  }

  .product-detail {
    flex: 4 0;
  }

  .product-price {
    flex: 2 0;
  }

  .product-add {
    flex: 1 0;
  }

  .product-name {
    font-weight: bold;
    font-size: 1.5em;
    margin-bottom: .5em;
  }

  .product-description {
    font-size: .8em;
  }

  .product-quantity {
    font-size: .8em;
    margin-top: .3em;
  }
</style>
