import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Orders from '@/components/Orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
