import axios from 'axios'

export default {
  install (Vue) {
    Vue.$http = axios
  }
}
