<template>
  <q-markup-table class="q-mb-md">
    <thead>
      <tr class="bg-grey-3">
        <th class="text-left">Productos</th>
        <th class="text-right">Precio</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="product in products"
        :key="product.id"
      >
        <td class="text-left"> {{ product.name }} </td>
        <td class="text-right"> ${{ product.price }} </td>
      </tr>
      <tr class="bg-grey-3">
        <td class="text-left">Total</td>
        <td class="text-right"> ${{ total }} </td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script>
export default {
  name: 'TargetTableProducts',
  props: {
    products: {
      type: Array
    }
  },
  computed: {
    total () {
      let total = 0
      this.products.forEach(product => { total += product.price })
      return total
    }
  }
}
</script>
