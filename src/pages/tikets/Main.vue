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

export default {
  name: 'PageMainTiket',
  components: {
    TargetTicket
  },
  data () {
    return {
      tickets: [
        {
          id: 1,
          total: 1200,
          payment: 'devit',
          bancAccount: '1222233334',
          updatedAt: '2020-07-01T23:18:46.000Z'
        },
        {
          id: 2,
          total: 1500,
          payment: 'oxxo',
          updatedAt: '2020-07-01T23:18:46.000Z'
        },
        {
          id: 3,
          total: 1222,
          payment: 'paypal',
          updatedAt: '2020-07-01T23:18:46.000Z'
        }
      ]
    }
  }
}
</script>
