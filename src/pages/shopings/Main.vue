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
        <TargetShoping/>

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
        <TargetCheckShoping/>
        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Comprar" />
          <q-btn flat @click="step = 2" color="primary" label="Atras" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
</template>

<script>

import TargetShoping from 'components/shop_component/TargetShoping'
import TargetCheckAddress from 'components/shop_component/TargetCheckAddress'
import TargetCheckShoping from 'components/shop_component/TargetCheckShoping'

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
      done3: false
    }
  },

  methods: {
    reset () {
      this.done1 = false
      this.done2 = false
      this.done3 = false
      this.step = 1
    }
  }
}
</script>
