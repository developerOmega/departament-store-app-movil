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
}
