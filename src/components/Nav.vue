<template>
    <nav>
      <ul>
        <li><a href="#/home">Home</a></li>
        <li><a href="#/products">Products</a></li>
        <li><a href="#/orders">Orders</a></li>
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
</style>
