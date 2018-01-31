<template>
  <div>
    <h1>Orders</h1>
    <ul v-if="orders.length > 0">
      <li v-for="order in orders" class="order-outline">
        <div class="order-top-row">
          <div class="order-detail-item">
            <div class="order-detail-item-header">Date</div>
            <div class="order-detail-item-value">{{order.date}}</div>
          </div>

          <div class="order-detail-item">
            <div class="order-detail-item-header">ID</div>
            <div class="order-detail-item-value">{{order.id}}</div>
          </div>

          <div class="order-detail-item">
            <div class="order-detail-item-header">Status</div>
            <div class="order-detail-item-value"><span class="status-label">{{orderStateString(order.status)}}</span></div>
          </div>

          <div class="order-detail-item">
            <div class="order-detail-item-header">Total price</div>
            <div class="order-detail-item-value">{{orderTotalPrice(order) | currency}}</div>
          </div>

          <div class="order-detail-item" v-if="order.items.length > 0">
            <div class="order-detail-item-header">Items</div>
            <div class="order-detail-item-value">
              <ul class="order-items-list">
                <li v-for="item in order.items" class="order-items-item">
                  <div class="order-item-name">{{productById(item.id).name}}</div>
                  <div class="order-item-quantity">{{item.quantity}} x</div>
                  <div class="order-item-price">{{productById(item.id).price | currency}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="secondary" v-else>
      Unfortunately, there are no orders to display right now. Maybe you want to <router-link to="/products">order</router-link> something now?
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      productById () {
        return this.$store.getters.getProductById
      },
      ...mapGetters({
        orders: 'allOrders',
        orderTotalPrice: 'orderTotalPrice'
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
    padding: .7em .4em;
    margin-bottom: 0.7em;
    display: flex;
    align-items: left;
    flex-direction: column;
  }

  a, a:visited, a:active {
    color: #2c3e50;
    text-decoration: none;
    transition: color .2s linear;
  }

  a:hover {
    cursor: pointer;
    color: #76b82a;
  }

  .order-outline {
    border: 1px solid #aaa;
    margin: 0 1em 2em 0;
  }

  .order-outline:last-child {
    margin-bottom: 0;
  }

  .status-label {
    display: inline-block;
    background-color: #446cb3;
    color: #fff;
    font-size: .9em;
    padding: 0.4em;
    border-radius: .35em;
    font-weight: bold;
  }

  .order-top-row {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
  }

  .order-detail-item {
    margin: .75em;
  }

  .order-detail-item-header {
    color: #444;
    text-transform: uppercase;
    font-size: .95em;
    margin-bottom: .4em;
    font-weight: bold;
  }

  .order-detail-item-header::after {
    content: ':'
  }

  .order-items-item {
    display: flex;
    flex-direction: row;
    font-weight: normal;
    border-bottom: 1px solid #ccc;
    margin-bottom: 0.25em;
  }

  .order-items-item:first-child {
    border-top: 1px solid #ccc;
  }

  .order-item-name {
    flex: 5 0;
  }

  .order-item-price {
    flex: 1 0;
    text-align: right;
  }

  .order-item-quantity {
    flex: 1 0;
    text-align: right;
  }
</style>
