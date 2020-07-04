import axios from 'axios'
import Data from './Data'

export default class TicketProduct extends Data {
  constructor (token) {
    super(token)
    this.kk = 'asdasd'
  }

  post (ticketId, productId, callback) {
    const body = {
      ticketId,
      productId
    }
    axios.post(`${this.url}/api/v1/ticket-products`, body, {
      headers: {
        Authorization: this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(data => callback(null, data))
      .catch(err => callback(err))
  }
}
