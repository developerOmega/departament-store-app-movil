import axios from 'axios'
// import Vue from 'vue'

export default class AuthUser {
  constructor (email, password) {
    this.email = email
    this.password = password
  }

  login (callback) {
    axios.post('http://localhost:3000/api/v1/login/user', {
      email: this.email,
      password: this.password
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': true
      }
    })
      .then((data) => callback(null, data))
      .catch((err) => callback(err))
  }
}
