<template>
  <div class="q-pa-md">
    <div class="text-h6 q-my-md"> Ticket de: {{ ticket.updatedAt }} </div>
    <TargetTableProducts
      v-bind:products="ticket.products"
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
      ticket: {
        id: this.id,
        updatedAt: '2020-07-01 23:18:46',
        payment: 'devit',
        bancAccount: '122234',
        total: 2400,
        products: [
          {
            id: 1,
            name: 'Playera Adidas',
            description: 'La plarera de adidas es grande',
            price: 1200,
            brand_id: 1,
            img: 'https://www.playerasmark.com/wp-content/uploads/2017/10/blanco-verde-bandera.jpg'
          },
          {
            id: 2,
            name: 'Playera Nike',
            description: 'La plarera de nike es grande',
            price: 1500,
            brand_id: 2,
            img: 'https://cdn.shopify.com/s/files/1/1679/0139/products/CHARLIE_H_78d9480c-a596-4c19-b697-f0218c2cd72c_800x.jpg?v=1581982721'
          },
          {
            id: 3,
            name: 'Playera Suprime',
            description: 'La plarera de suprime es grande',
            price: 15000,
            brand_id: 3,
            img: 'https://cdn.shopify.com/s/files/1/0058/9276/7855/products/RPTSCOL-CRACK_NEGRO_01.png?v=1579714420'
          }
        ]
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (!parseInt(to.params.id)) {
      return this.$router.push('/*')
    }
    this.id = this.$route.params.id
    next()
  }
}
</script>
