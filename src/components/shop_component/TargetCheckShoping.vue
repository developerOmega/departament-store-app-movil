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
      @click="stepOne"
    />

    <div class="q-mb-md">
      <TargetAddress/>
    </div>

    <q-btn
      color="primary"
      size="md"
      label="Editar"
      class="q-mb-xl"
      to="/user/settings"
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
      @click="stepOne"
    />
  </div>
</template>

<script>
import TargetAddress from 'components/TargetAddress'
import TargetPayment from 'components/TargetPayment'
import TargetTableProducts from 'components/TargetTableProducts'

export default {
  name: 'TargetCheckShoping',
  props: {
    products: {
      type: Array
    },
    payment: {
      type: String
    },
    bancAccount: {
      type: String
    }
  },
  methods: {
    stepOne: function () {
      this.$emit('step-one', 1)
    }
  },
  components: {
    TargetAddress,
    TargetPayment,
    TargetTableProducts
  }
}
</script>
