import axios from 'axios'
import Data from './Data'

export default class Product extends Data {
  constructor (token) {
    super(token)
    this.kk = token
  }

  get (typeId = 0, brandId = 0, callback) {
    typeId = typeId == null ? 0 : typeId
    brandId = brandId == null ? 0 : brandId
    axios.get(`${this.url}/api/v1/products?typeId=${typeId}&brandId=${brandId}`, { headers: { Authorization: this.token } })
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }

  show (id, callback) {
    axios.get(`${this.url}/api/v1/products/${id}`, { headers: { Authorization: this.token } })
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }
}
