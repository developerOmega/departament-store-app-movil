<template>
  <q-card class="my-card q-mb-md">
    <q-card-section class="row justify-between">
      <div class="text-weight-medium"> {{ payment }}</div>
      <div>{{ bancAccountSecurity }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'TargetPayment',
  props: {
    payment: {
      type: String,
      default: ''
    },
    bancAccount: {
      type: String,
      default: 'No aplica'
    }
  },
  computed: {
    bancAccountSecurity: function () {
      if (this.payment === 'devit') {
        const arrAccount = this.bancAccount.toString().split('')
        arrAccount.splice(4, 12, ' * * * * * * * * * * * *')
        return arrAccount.join('')
      }
      return 'No aplica'
    }
  }
}
</script>
