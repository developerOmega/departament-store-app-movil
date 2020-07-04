import axios from 'axios'
import Data from './Data'

export default class Type extends Data {
  constructor (token) {
    super(token)
    this.kk = token
  }

  get (callback) {
    axios.get(`${this.url}/api/v1/types`, { headers: { Authorization: this.token } })
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }
}
