<template>
  <div class="q-pa-md">
    <div class="q-mb-md">
      <img class="full-width" :src="product.img">
    </div>

    <div class="row justify-between">
      <div class="text-h6"> {{ product.name }} </div>
      <div class="text-h6 color-primary text-weight-bold"> ${{ product.price }} </div>
    </div>
    <q-separator />

    <div class="q-mb-md"> by {{ brand.name }} </div>

    <div class="q-mb-md">
      {{ product.description }}
    </div>

    <div class="q-mb-md row">
      <q-btn
        color="primary"
        size="lg"
        icon="add_shopping_cart"
        class="q-mr-md"
        @click="setProduct"
      />
      <q-input
        outlined
        v-model="quantity"
        type="number"
        style="max-width: 70px"
      />
    </div>
  </div>
</template>

<script>
import Product from '../../js/Product'
import Vue from 'vue'

export default {
  name: 'PageShowProduct',
  data () {
    return {
      quantity: 1,
      price: 1,
      product: {},
      brand: {}
    }
  },
  methods: {
    setProduct: function () {
      this.$products.push(this.product)
      //  quantity: this.quantity
      console.log(this.$products)
      Vue.prototype.$products = this.$products
    }
  },
  created () {
    this.price = this.product.price
    const productData = new Product(this.$token)

    productData.show(this.$route.params.id, (err, product) => {
      if (err) {
        return console.error(err)
      }
      this.product = product.data.product
      this.brand = product.data.product.Brand
    })
  }
}
</script>
