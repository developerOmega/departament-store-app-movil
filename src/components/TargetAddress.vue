<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-weight-medium"> {{ this.$user.country }} </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ this.$user.city }} - {{ this.$user.address }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'TagetAddress',
  data () {
    return {
      user: {
        country: 'Mexico',
        city: 'Guadalajara',
        address: 'siemprevivva123'
      }
    }
  }
}
</script>
