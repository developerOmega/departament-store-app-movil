<template>
  <div>
    <q-card
      class="my-card q-mb-md"
      v-for="product in products"
      :key="product.id"
    >
      <q-card-section horizontal class="row items-center">
        <q-img :src="product.img"/>

        <q-card-section> {{ product.name }} </q-card-section>

        <!-- <q-card-section> {{ quantity }} </q-card-section> -->

        <q-card-section> ${{ product.price }} </q-card-section>

        <q-card-actions>
          <q-btn flat round icon="close" @click="deleteProduct(product)" />
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
            <q-radio v-model="payment" val="oxxo" color="teal" @input="updatePayment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>OXXO</q-item-label>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="payment" val="paypal" color="orange" @input="updatePayment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>PayPal</q-item-label>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section avatar top>
            <q-radio v-model="payment" val="devit" color="cyan" @input="updatePayment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Debito</q-item-label>
            <q-item-label caption>
              <div> Ingresa tu cuenta </div>
              <q-input
                outlined
                v-model="bancAccount"
                type="text"
                @input="updatebancAccount"
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
  props: {
    products: {
      type: Array
    }
  },
  data () {
    return {
      payment: 'oxxo',
      bancAccount: ''
    }
  },
  methods: {
    onSubmit: function () {
      console.log('Nada')
    },
    deleteProduct: function (data) {
      this.$q.dialog({
        title: 'Confirmar',
        message: `Desea eliminar "${data.name}" del carrito`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$emit('delete-product', data)
      }).onCancel(() => {
        console.log('No se elimino :(')
      })
    },
    updatePayment: function () {
      this.$emit('update-payment', this.payment)
    },
    updatebancAccount: function () {
      this.$emit('update-banc-account', this.bancAccount)
    }
    // totalPerProduct: function (data) {
    //   return data.quantity * data.product.price
    // }
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
