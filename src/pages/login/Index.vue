<template>
  <div class="q-pa-md q-pt-lg bg-grey-3 column" style="height: 100vh">

    <div class="q-my-xl">
      <img class="logo-100" alt="DStore Logo" src="~assets/departamentStoreEF3535WEB.png">
    </div>

    <q-form
      class="q-gutter-md q-mb-lg"
      @submit="login"
    >
      <q-input
        filled
        v-model="email"
        type="email"
        label="Tu email"
        hint="Ingresa tu email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, ingresa tu email']"
      />

      <q-input
        filled
        v-model="password"
        type="password"
        label="Tu contraseña"
        hint="Ingresa tu contraseña"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, ingresa tu contraseña']"
      />

      <div>
        <q-btn label="Ingresar" type="submit" color="primary"/>
      </div>
    </q-form>

    <div>
      ¿No tienes cuenta?
      <q-btn label="Crear cuenta" type="reset" color="primary" to="/logup" flat class="q-ml-sm" />
    </div>

  </div>
</template>

<script>

import AuthUser from '../../js/Auth'
import Vue from 'vue'

export default {
  name: 'PageLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const auth = new AuthUser(this.email, this.password)
      auth.login((err, user) => {
        if (err) {
          console.error(err)
        }
        Vue.prototype.$token = user.data.token
        Vue.prototype.$user = user.data.user
        console.log('TOKEN DESDE LA VISTA', this.$token)
        this.$router.push('/')
      })
    }
  }
}
</script>
