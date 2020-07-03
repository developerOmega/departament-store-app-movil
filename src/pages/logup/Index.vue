<template>
   <div class="q-pa-md q-pt-lg bg-grey-3 column" style="height: 100vh">

    <div class="q-my-xl">
      <img class="logo-100" alt="DStore Logo" src="~assets/departamentStoreEF3535WEB.png">
    </div>

    <q-form
      class="q-gutter-md q-mb-lg"
      @submit="logup"
    >
      <q-input
        filled
        v-model="name"
        type="text"
        label="Tu nombre"
        hint="Ingresa tu nombre"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, ingresa tu nombre']"
      />

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

      <q-input
        filled
        v-model="confirmPassword"
        type="password"
        label="Confirmar contraseña"
        hint="confirma tu contraseña"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, ingresa tu contraseña']"
      />

      <div>
        <q-btn label="Crear" type="submit" color="primary"/>
      </div>
    </q-form>

    <div>
      ¿Ya tienes cuenta?
      <q-btn label="Iniciar secion" type="reset" color="primary" to="/login" flat class="q-ml-sm" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'PageLogup',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    logup: function () {
      console.log('Logup')
    }
  }
}
</script>
