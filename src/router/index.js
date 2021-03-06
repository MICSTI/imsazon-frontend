import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Orders from '@/components/Orders'
import Login from '@/components/Login'
import Checkout from '@/components/Checkout'
import * as authHelper from '../helpers/auth'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/checkout/:orderId',
      name: 'Checkout',
      component: Checkout,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      beforeEnter (to, from, next) {
        // clear token in auth helper
        authHelper.setToken(null)

        // clear user in store
        store.dispatch('setUser', null)

        // navigate home
        next('/')
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // try to get token from auth helper
    const token = authHelper.getToken()

    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
