<template>
    <ul v-if="products.length > 0">
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
          <div class="product-quantity"><span v-bind:class="{ red: product.quantity <= 3 }"><span>{{itemsLeft(product.quantity)}}</span></span></div>
        </div>

        <div class="product-add">
          <input type="text" v-model="product.toBeAdded" size="2" />

          <button
            :disabled="!product.quantity"
            @click="addToCart(product)">
            Add
          </button>
        </div>
      </li>
    </ul>
    <div class="secondary" v-else>
      Unfortunately, there are no products available right now. Maybe try to come back later?
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        products: 'allProducts'
      })
    },
    methods: {
      itemsLeft (quantity) {
        if (quantity > 3) {
          return `${quantity} available`
        } else if (quantity > 0) {
          return `only ${quantity} available`
        } else {
          return `currently not available`
        }
      },
      ...mapActions([
        'addToCart'
      ])
    },
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

    display: flex;
  }

  .product-add input[type=text] {
    margin-right: 4px;
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

  .secondary {
    color: #555;
    padding: 3em;
    font-size: .9em;
  }
</style>
