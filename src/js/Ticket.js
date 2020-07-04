import axios from 'axios'
import Data from './Data'

export default class Ticket extends Data {
  constructor (token) {
    super(token)
    this.kk = 'asdasd'
  }

  getPerUser (id, callback) {
    axios.get(`${this.url}/api/v1/users/${id}/tickets`, { headers: { Authorization: this.token } })
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }

  show (id, callback) {
    axios.get(`${this.url}/api/v1/tickets/${id}`, { headers: { Authorization: this.token } })
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }

  post (body, callback) {
    axios.post(`${this.url}/api/v1/tickets`, body, {
      headers: {
        Authorization: this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }

  update (id, body, callback) {
    console.log(body)
    axios.put(`${this.url}/api/v1/tickets/${id}`, body, {
      headers: {
        Authorization: this.token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': this.url,
        'Access-Control-Allow-Credentials': true
      }
    })
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }
}
