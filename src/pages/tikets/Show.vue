<template>
  <div class="q-pa-md">
    <div class="text-h6 q-my-md"> Ticket de: {{ ticket.updatedAt }} </div>
    <TargetTableProducts
      v-bind:products="ticket.Products"
    />

    <q-item-section class="q-mb-md">
      <TargetAddress/>
    </q-item-section>

    <TargetPayment
      v-bind:payment="ticket.payment"
      v-bind:bancAccount="ticket.bancAccount"
    />

  </div>
</template>

<script>
import TargetAddress from 'components/TargetAddress'
import TargetPayment from 'components/TargetPayment'
import TargetTableProducts from 'components/TargetTableProducts'
import Ticket from '../../js/Ticket'

export default {
  name: 'PageShowTiket',
  components: {
    TargetAddress,
    TargetPayment,
    TargetTableProducts
  },
  data () {
    return {
      id: this.$route.params.id,
      ticket: {}
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (!parseInt(to.params.id)) {
      return this.$router.push('/*')
    }
    this.id = this.$route.params.id
    next()
  },
  created () {
    const ticketData = new Ticket(this.$token)
    ticketData.show(this.id, (err, ticket) => {
      if (err) {
        return console.error(err)
      }
      this.ticket = ticket.data.ticket
    })
  }
}
</script>
