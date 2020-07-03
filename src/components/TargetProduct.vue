<template>
  <q-item
    clickable
    tag= 'q-route-tab'
    :to="link"
  >
    <q-card class="my-card">
      <img :src="img">
      <q-card-section>
        <div class="text-h5">{{ name }}</div>
        <div class="text-h6"> ${{ price }} </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-pt-none">
        <div class="text-subtitle2">by {{ brand_id }} </div>
        <div>
          {{ description }}
        </div>
      </q-card-section>
    </q-card>
  </q-item>
</template>

<script>
export default {
  name: 'TargetProduct',
  props: {
    id: {
      type: Number,
      default: 0
    },
    img: {
      type: String,
      default: 'https://cdn.quasar.dev/img/mountains.jpg'
    },
    name: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0.0
    },
    description: {
      type: String,
      default: ''
    },
    brand_id: {
      type: Number,
      default: 0
    }
  },
  computed: {
    link: function () {
      return `/products/${this.id}`
    }
  }
}
</script>
