<template>
  <div class="q-pa-md">
    <div class="q-mb-md">
      <img class="full-width" :src="product.img" :alt="product.name">
    </div>

    <div class="row justify-between">
      <div class="text-h6"> {{ product.name }} </div>
      <div class="text-h6 color-primary text-weight-bold"> ${{ price }} </div>
    </div>
    <q-separator />

    <div class="q-mb-md"> by {{ product.brand.name }} </div>

    <div class="q-mb-md">
      {{ product.description }}
    </div>

    <div class="q-mb-md row">
      <q-btn
        color="primary"
        size="lg"
        icon="add_shopping_cart"
        class="q-mr-md"
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
export default {
  name: 'PageShowProduct',
  data () {
    return {
      quantity: 1,
      price: 1,
      product: {
        id: 1,
        name: 'Playera Adidas',
        description: 'La plarera de adidas es grande',
        price: 1200,
        brand_id: 1,
        img: 'https://www.playerasmark.com/wp-content/uploads/2017/10/blanco-verde-bandera.jpg',
        brand: {
          name: 'Adidas'
        }
      }
    }
  },
  created () {
    this.price = this.product.price
  }
}
</script>
