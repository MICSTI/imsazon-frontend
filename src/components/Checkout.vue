<template>
    <div>
      <h1>Checkout</h1>
      <div class="order-title">Order <span class="bold brand">{{$route.params.orderId}}</span></div>
      <div class="payment-area">
        <button @click="buy">Buy</button>
      </div>
      <div class="payment-status">
        <div class="payment-status-item payment-status-verifying">
          <div class="payment-status-item-header">Verifying credit card</div>
          <div>Using credit card ending in <span class="bold brand">7890</span>.</div>
          <div><img src="../assets/spinner.gif" width="160" height="120" /></div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data: () => {
      return {

      }
    },
    methods: {
      buy () {
        console.log('buying now')
      }
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
</style>
