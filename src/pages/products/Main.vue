<template>
  <q-item-section class="q-pa-md">
     <q-select
        filled
        v-model="brand"
        :options="brands"
        option-value="id"
        option-label="desc"
        option-disable="inactive"
        emit-value
        map-options
        clearable
        label="Marca"
        class="q-mb-md"
      />

      <q-select
        filled
        v-model="type"
        :options="types"
        option-value="id"
        option-label="name"
        option-disable="inactive"
        emit-value
        map-options
        clearable
        label="Tipo"
        class="q-mb-md"
      />

      <q-item-section>
        <TargetProduct
          v-for="product in products"
          :key="product.id"
          v-bind="product"
        />
      </q-item-section>
  </q-item-section>
</template>

<script>
import TargetProduct from 'components/TargetProduct.vue'

export default {
  name: 'PageMainProduct',
  components: {
    TargetProduct
  },
  data () {
    return {
      brand: null,
      type: null,
      brands: [
        {
          id: 1,
          desc: 'Nike'
        },
        {
          id: 2,
          desc: 'Adidas'
        },
        {
          id: 3,
          desc: 'Vans'
        },
        {
          id: 4,
          desc: 'Mascara del Latex'
        },
        {
          id: 5,
          desc: 'Suprime'
        }
      ],
      types: [
        {
          id: 1,
          name: 'T-shirts'
        },
        {
          id: 2,
          name: 'Sneakers'
        },
        {
          id: 3,
          name: 'Jackets'
        },
        {
          id: 4,
          name: 'Bags'
        }
      ],
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
