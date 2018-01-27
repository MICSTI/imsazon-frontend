/**
 * This file is responsible for communicating with the microservice API.
 */
import Vue from 'vue'

export default {
  login (username, password) {
    return new Promise((resolve, reject) => {
      const credentials = {
        username,
        password
      }

      Vue.$http.post('http://localhost:8605/auth/login', credentials)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
