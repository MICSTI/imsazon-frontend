<template>
    <div>
      <h1>Checkout</h1>
      <div class="order-title">Order <span class="bold brand">{{$route.params.orderId}}</span></div>
      <div class="payment-area">
        <button @click="buy">Buy</button>
      </div>
      <div class="payment-status">

      </div>
    </div>
</template>

<script>
  export default {
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
</style>
