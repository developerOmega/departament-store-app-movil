<template>
  <q-item-section class="q-pa-md">
     <q-select
        filled
        v-model="brand"
        @input="producAction"
        :options="brands"
        option-value="id"
        option-label="name"
        option-disable="inactive"
        emit-value
        map-options
        clearable
        label="Marca"
        class="q-mb-md"
      />

      <q-select
        filled
        @input="producAction"
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
import Product from '../../js/Product'
import Type from '../../js/Type'
import Brand from '../../js/Brand'

export default {
  name: 'PageMainProduct',
  components: {
    TargetProduct
  },
  data () {
    return {
      brand: null,
      type: null,
      brands: [],
      types: [],
      products: []
    }
  },
  methods: {
    producAction: function () {
      const productData = new Product(this.$token)
      productData.get(this.type, this.brand, (err, product) => {
        if (err) {
          return console.error(err)
        }

        this.products = product.data.products
      })
    },
    typeAction: function () {
      const typeData = new Type(this.$token)
      typeData.get((err, type) => {
        if (err) {
          return console.error(err)
        }
        this.types = type.data.types
      })
    },
    brandAction: function () {
      const brandData = new Brand(this.$token)
      brandData.get((err, brand) => {
        if (err) {
          return console.error(err)
        }
        this.brands = brand.data.brands
      })
    }
  },
  created () {
    this.producAction()
    this.typeAction()
    this.brandAction()
  }
}
</script>
