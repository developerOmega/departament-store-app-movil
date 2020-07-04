import axios from 'axios'
import Data from './Data'

export default class AuthUser extends Data {
  constructor (email, password) {
    super()
    this.email = email
    this.password = password
  }

  login (callback) {
    axios.post(`${this.url}/api/v1/login/user`, {
      email: this.email,
      password: this.password
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this.url,
        'Access-Control-Allow-Credentials': true
      }
    })
      .then((data) => callback(null, data))
      .catch((err) => callback(err))
  }
}
