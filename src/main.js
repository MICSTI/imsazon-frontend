// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import httpPlugin from './plugins/http'
import currency from './helpers/currency'
import * as authHelper from './helpers/auth'

Vue.config.productionTip = false

// init global config
Vue.use(httpPlugin)

Vue.filter('currency', currency)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted () {
    // attempt to load auth token from session storage
    const authToken = authHelper.getToken()

    if (authToken) {
      const userObj = authHelper.createUserObjectFromJwtString(authToken)

      store.dispatch('setUser', userObj)
    }
  }
})
