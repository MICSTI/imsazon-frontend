<template>
    <div>
      Boats boats boats!
    </div>
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
