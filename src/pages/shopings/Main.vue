<template>
    <q-stepper
      v-model="step"
      ref="stepper"
      contracted
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Select campaign settings"
        icon="shopping_cart"
        :done="done1"
      >
        <TargetShoping
          v-bind:products="shopingCart"
          v-bind:payment="payment"
          v-bind:bancAccount="bancAccount"
          @delete-product="deleteProduct"
          @update-payment='updatePayment'
          @update-banc-account="updateBancAccount"
        />

        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continuar" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Create an ad group"
        caption="Optional"
        icon="map"
        :done="done2"
      >
        <TargetCheckAddress/>

        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Confirmar" />
          <q-btn flat @click="step = 1" color="primary" label="Atras" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Create an ad"
        icon="monetization_on"
        :done="done3"
      >
        <TargetCheckShoping
          v-bind:products="shopingCart"
          v-bind:payment="payment"
          v-bind:bancAccount="bancAccount"
          @step-one="stepOne"
        />
        <q-stepper-navigation>
          <q-btn color="primary" @click="ticketPostAction" label="Comprar" />
          <q-btn flat @click="step = 2" color="primary" label="Atras" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
</template>

<script>

import TargetShoping from 'components/shop_component/TargetShoping'
import TargetCheckAddress from 'components/shop_component/TargetCheckAddress'
import TargetCheckShoping from 'components/shop_component/TargetCheckShoping'
import Vue from 'vue'

import Ticket from '../../js/Ticket'
import TicketProduct from '../../js/TicketProduct'

export default {
  name: 'PageMainShoping',
  components: {
    TargetShoping,
    TargetCheckAddress,
    TargetCheckShoping
  },
  data () {
    return {
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      shopingCart: this.$products,
      payment: 'oxxo',
      bancAccount: '',
      ticketData: new Ticket(this.$token),
      ticketProductData: new TicketProduct(this.$token)
    }
  },

  methods: {
    reset () {
      this.done1 = false
      this.done2 = false
      this.done3 = false
      this.step = 1
    },
    deleteProduct (data) {
      this.shopingCart.splice(this.shopingCart.indexOf(data), 1)
      Vue.prototype.$shopingCart = this.$shopingCart
    },
    updatePayment (payment) {
      this.payment = payment
    },
    updateBancAccount (bancAccount) {
      this.bancAccount = bancAccount
    },
    stepOne (step) {
      this.step = step
      this.done2 = false
      this.done3 = false
    },
    ticketUpdateAction (ticketId) {
      console.log('asasdasdasd', ticketId)
      this.ticketData.update(ticketId, { total: 10 }, (err, ticket) => {
        if (err) {
          this.notifyErrorShoping()
          return console.error(err)
        }
        this.notifyPositiveShoping()
      })
    },
    ticketProductPostAction (ticket) {
      let count = 0
      this.shopingCart.forEach(product => {
        this.ticketProductData.post(ticket.id, product.id, (err, ticketProduct) => {
          if (err) {
            this.notifyErrorShoping()
            return console.error(err)
          }

          if (count === this.shopingCart.length - 1) {
            this.ticketUpdateAction(ticket.id)
          }
          count++
        })
      })
    },
    ticketPostAction () {
      const body = {
        payment: this.payment,
        bancAccount: parseInt(this.bancAccount)
      }

      if (this.payment !== 'devit') {
        delete body.bancAccount
      }

      this.ticketData.post(body, (err, ticket) => {
        if (err) {
          this.notifyErrorShoping()
          return console.error(err)
        }
        this.ticketProductPostAction(ticket.data.ticket)
      })
    },
    notifyPositiveShoping: function () {
      this.$q.notify({
        type: 'positive',
        message: 'La compra se ha realizado con éxito'
      })
    },
    notifyErrorShoping: function () {
      this.$q.notify({
        type: 'negative',
        message: 'Ocurrio un error'
      })
    }
  },
  created () {
    console.log('Estos son todos los productos', this.$products)
  }
}
</script>
