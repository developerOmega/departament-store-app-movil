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
    const formData = new FormData()
    formData.append('img', img)

    axios.post(`${this.url}/api/v1/files/users/${id}`, formData, {
      headers: {
        Authorization: this.token,
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((data) => callback(null, data))
      .catch((err) => callback(err))
  }

  updateFile (id, img, callback) {
    const formData = new FormData()
    formData.append('img', img)
    axios.put(`${this.url}/api/v1/files/users/${id}`, formData, {
      headers: {
        Authorization: this.token,
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((data) => callback(null, data))
      .catch((err) => callback(err))
  }
}
