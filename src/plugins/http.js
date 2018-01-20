import axios from 'axios'

export default {
  install (Vue, options) {
    Vue.$http = axios
  }
}
