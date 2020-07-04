<template>
  <q-item
    clickable
    tag= 'q-route-tab'
    :to="link"
  >
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6"> Ticket de {{ updatedAt }} </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ this.$user.country }} - {{ this.$user.city }} - {{ this.$user.address }}
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div> Total: ${{ total }} </div>
      </q-card-section>
    </q-card>
  </q-item>
</template>

<script>
export default {
  name: 'TargetTicket',
  props: {
    id: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0.0
    },
    payment: {
      type: String,
      default: ''
    },
    bancAccount: {
      type: String,
      default: 'No aplica'
    },
    country: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    updatedAt: {
      type: String,
      default: ''
    }
  },
  computed: {
    link: function () {
      return `/tickets/${this.id}`
    }
  }
}
</script>
