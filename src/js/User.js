import axios from 'axios'
import Data from './Data'

export default class User extends Data {
  constructor (token) {
    super(token)
    this.kk = 'kk'
  }

  show (id, callback) {
    axios.get(`${this.url}/api/v1/users/${id}`, { headers: { Authorization: this.token } })
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }

  update (id, body, callback) {
    axios.put(`${this.url}/api/v1/users/${id}`, body, {
      headers: {
        Authorization: this.token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this.url,
        'Access-Control-Allow-Credentials': true
      }
    })
      .then((data) => callback(null, data))
      .catch((err) => callback(err))
  }

  createFile (id, img, callback) {
    axios.post(`${this.url}/api/v1/login/user${id}`, { img }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this.url,
        'Access-Control-Allow-Credentials': true
      }
    })
      .then((data) => callback(null, data))
      .catch((err) => callback(err))
  }

  updateFile (id, img, callback) {
    axios.put(`${this.url}/api/v1/login/user${id}`, { img }, {
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
