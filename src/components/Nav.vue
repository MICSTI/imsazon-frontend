<template>
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/orders">Orders</router-link></li>
      </ul>
    </nav>
</template>

<script>
    export default {
      name: 'app-nav'
    }
</script>

<style scoped>
  nav {
    background-color: #ececec;
  }

  a, a:visited, a:active {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    transition: color .2s linear;
  }

  a:hover {
    cursor: pointer;
    color: #76b82a;
  }

  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
    margin: .4em .8em;
    font-size: 16pt;
  }

  .router-link-active {
    color: #76b82a !important;
  }
</style>
