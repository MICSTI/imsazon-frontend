<template>
    <nav>
      <div class="imsazon-brand">
        IMSazon
      </div>

      <div class="main-nav">
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/orders">Orders</router-link></li>
        </ul>
      </div>

      <div class="user-profile">
        <div class="user-profile-logged-in" v-if="user">
          <i class="material-icons">account_circle</i>
          <div class="profile-link">{{user.name}}</div>
          <i class="material-icons logout" title="Logout" @click="logout">exit_to_app</i>
        </div>
        <div class="user-profile-not-logged-in" v-else>
          <router-link to="/login">Login</router-link>
        </div>
      </div>
    </nav>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
      computed: {
        ...mapGetters({
          user: 'user'
        })
      },
      methods: {
        logout () {
          this.$router.push('/logout')
        },
        ...mapActions([
        ])
      },
      created () {
        // this.$store.dispatch('getUser')
      },
      name: 'app-nav'
    }
</script>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .imsazon-brand {
    flex: 2 0;

    color: #76b82a;
    font-weight: bold;
    font-size: 20pt;
  }

  .main-nav {
    flex: 7 0;
  }

  .user-profile {
    flex: 2 0;
  }

  .user-profile-logged-in {
    display: flex;
    align-items: center;
  }

  .profile-link {
    margin-left: .6em;
    margin-right: 2em;
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

  .profile-link {
    font-weight: bold;
  }

  .logout {
    color: #aaa;
    font-size: 1.3em;
    transition: color .2s linear;
  }

  .logout:hover {
    color: #000;
    cursor: pointer;
  }
</style>
