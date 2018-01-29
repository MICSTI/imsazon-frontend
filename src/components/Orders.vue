<template>
  <div>
    <h1>Orders</h1>
    <ul v-if="orders.length > 0">
      <li v-for="order in orders">

      </li>
    </ul>
    <div class="secondary" v-else>
      Unfortunately, there are no orders to display right now. Maybe you want to order something now?
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        orders: 'allOrders'
      })
    },
    methods: {
      ...mapActions([
      ])
    },
    created () {
      this.$store.dispatch('getAllOrders')
    },
    name: 'orders'
  }
</script>

<style scoped>

</style>
