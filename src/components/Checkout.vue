<template>
    <div>
      <h1>Checkout</h1>
      <div class="order-title">Order <span class="bold brand">{{$route.params.orderId}}</span></div>
      <div class="payment-area" v-if="checkoutStatus === 'created'">
        <button @click="buy">Buy</button>
      </div>
      <div class="payment-status">
        <div class="payment-status-item payment-status-verifying" v-if="checkoutStatus === 'verifying'">
          <div class="payment-status-item-header">Verifying credit card</div>
          <div>Using credit card ending in <span class="bold brand">7890</span>.</div>
          <div class="loading-spinner-container"><img src="../assets/spinner.gif" width="160" height="120" /></div>
        </div>

        <div class="payment-status-item payment-status-success" v-if="checkoutStatus === 'paymentSuccess'">
          <div class="paragraph">The payment was completed successfully. You will receive an email containing the shipping information in a second!</div>
          <div class="paragraph">Thanks for shopping at <span class="brand bold">IMSazon</span>, come back soon 😊</div>
        </div>

        <div class="payment-status-item payment-status-error" v-if="checkoutStatus === 'paymentFailure'">
          Unfortunately something went wrong during the credit card verification process. Maybe you could try it again later? We're so sorry for the inconvenience :-(
        </div>
      </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        checkoutStatus: 'checkoutStatus'
      })
    },
    methods: {
      buy () {
        // dispatch update checkout status action
        this.$store.dispatch('updateStatus', 'verifying')

        // dispatch payment action
        this.$store.dispatch('payment')
      },
      ...mapActions([
      ])
    },
    name: 'checkout'
  }
</script>

<style scoped>
  .bold {
    font-weight: bold;
  }

  .brand {
    color: #76b82a;
  }

  .order-title {
    font-weight: bold;
    padding-bottom: .5em;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1.5em;
  }

  .payment-status-item {
    border: 3px solid #aaa;
    padding: 2em;
    margin: 3em;
  }

  .payment-status-item-header {
    text-transform: uppercase;
    font-size: 1.1em;
    text-align: left;
    padding-bottom: .3em;
    border-bottom: 1px solid #777;
    margin-bottom: 1.5em;
  }

  .payment-status-success {
    border: 3px solid #76b82a !important;
  }

  .payment-status-error {
    border: 3px solid #d91e18 !important;
  }

  .loading-spinner-container {
    margin-bottom: -2em;
  }

  .paragraph {
    margin-bottom: 1em;
  }

  .paragraph:last-child {
    margin-bottom: 0;
  }
</style>
