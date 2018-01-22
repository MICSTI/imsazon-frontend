<template>
  <div id="app">
    <header>
      <app-nav />
    </header>
    <div class="view-container">
      <div class="view-content">
        <router-view/>
      </div>
      <div class="view-sidebar">
        <cart />
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from './components/Nav'
import Cart from './components/Cart'

export default {
  components: {
    Cart,
    AppNav
  },
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 90vh;
  }

  header {
    background-color: #ececec;
  }

  .view-container {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .view-content {
    flex: 2 0;
  }

  .view-sidebar {
    flex: 1 0;
  }
</style>
