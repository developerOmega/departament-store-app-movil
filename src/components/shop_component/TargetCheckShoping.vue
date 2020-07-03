<template>
  <div>
    <TargetTableProducts
      v-bind:products="products"
    />

    <q-btn
      color="primary"
      size="md"
      label="Editar"
      class="q-mb-xl"
    />

    <div class="q-mb-md">
      <TargetAddress/>
    </div>

    <q-btn
      color="primary"
      size="md"
      label="Editar"
      class="q-mb-xl"
    />

    <div class="q-mb-md">
      <TargetPayment
        v-bind:payment="payment"
        v-bind:bancAccount="bancAccount"
      />
    </div>

    <q-btn
      color="primary"
      size="md"
      label="Editar"
      class="q-mb-xl"
    />
  </div>
</template>

<script>
import TargetAddress from 'components/TargetAddress'
import TargetPayment from 'components/TargetPayment'
import TargetTableProducts from 'components/TargetTableProducts'

export default {
  name: 'TargetCheckShoping',
  components: {
    TargetAddress,
    TargetPayment,
    TargetTableProducts
  },
  data () {
    return {
      payment: 'devit',
      bancAccount: '122234',
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
}
</script>
