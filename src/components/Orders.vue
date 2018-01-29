<template>
  <div>
    <h1>Orders</h1>
    <ul v-if="orders.length > 0">
      <li v-for="order in orders">
        <div class="order-top-row">
          <div class="order-date">29.01.2018</div>
          <div class="order-status">{{orderStateString(order.status)}}</div>
          <div class="order-price">price</div>
        </div>
        <div class="order-items">
          <ul v-if="order.items.length > 0">
            <li v-for="item in order.items">

            </li>
          </ul>
        </div>
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
      orderStateString (state) {
        switch (state) {
          case 0:
            return 'Created'
          case 1:
            return 'Payment successful'
          case 2:
            return 'Payment failure'
          case 3:
            return 'Shipped'
          case 4:
            return 'Return requested'
          case 5:
            return 'Returned'
          default:
            return 'Unknown status'
        }
      },
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
</style>
