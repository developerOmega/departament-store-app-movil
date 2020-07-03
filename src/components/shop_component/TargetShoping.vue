<template>
  <div>
    <q-card
      class="my-card q-mb-md"
      v-for="product in products"
      :key="product.id"
    >
      <q-card-section horizontal class="row items-center">
        <q-img src="https://cdn.quasar.dev/img/parallax1.jpg"/>

        <q-card-section> Name </q-card-section>

        <q-card-section> C </q-card-section>

        <q-card-section> $Price </q-card-section>

        <q-card-actions>
          <q-btn flat round icon="close" />
        </q-card-actions>
      </q-card-section>
    </q-card>

    <div class="row justify-between q-mb-lg">
      <div class="text-subtitle1"> Total: </div>
      <div class="text-body1"> ${{ total }} </div>
    </div>

    <q-separator />

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <div class="text-h6"> Metodo de pago: </div>
      <q-list>

        <q-item tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="color" val="teal" color="teal" />
          </q-item-section>
          <q-item-section>
            <q-item-label>OXXO</q-item-label>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="color" val="orange" color="orange" />
          </q-item-section>
          <q-item-section>
            <q-item-label>PayPal</q-item-label>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section avatar top>
            <q-radio v-model="color" val="cyan" color="cyan" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Debito</q-item-label>
            <q-item-label caption>
              <div> Ingresa tu cuenta </div>
              <q-input
                outlined
                v-model="bancAccount"
                type="text"
              />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'TargetShoping',
  data () {
    return {
      color: 'cyan',
      bancAccount: '',
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
  },
  methods: {
    onSubmit: function () {
      console.log('Nada')
    }
  },
  computed: {
    total () {
      let total = 0
      this.products.forEach(product => { total += product.price })
      console.log(total)
      return total
    }
  }
}
</script>
