<template>
  <q-item-section class="q-pa-md">
    <q-item-section>
      <TargetTicket
        v-for="ticket in tickets"
        :key="ticket.id"
        v-bind="ticket"
      />
    </q-item-section>
  </q-item-section>
</template>

<script>
import TargetTicket from 'components/TargetTicket'
import Ticket from '../../js/Ticket'

export default {
  name: 'PageMainTiket',
  components: {
    TargetTicket
  },
  data () {
    return {
      tickets: []
    }
  },
  created () {
    const ticketData = new Ticket(this.$token)

    ticketData.getPerUser(this.$user.id, (err, ticket) => {
      if (err) {
        return console.error(err)
      }
      this.tickets = ticket.data.tickets
    })
  }
}
</script>
