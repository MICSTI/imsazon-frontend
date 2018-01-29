<template>
    <div>
      <h1>Checkout</h1>
      <div>Order <span class="bold brand">{{$route.params.orderId}}</span></div>
    </div>
</template>

<script>
  export default {
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
</style>
