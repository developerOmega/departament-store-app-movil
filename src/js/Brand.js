import axios from 'axios'
import Data from './Data'

export default class Brand extends Data {
  constructor (token) {
    super(token)
    this.kk = 'kk'
  }

  get (callback) {
    axios.get(`${this.url}/api/v1/brands`, { headers: { Authorization: this.token } })
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }

  show (id, callback) {
    axios.get(`${this.url}/api/v1/brands/${id}`, { headers: { Authorization: this.token } })
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }
}
