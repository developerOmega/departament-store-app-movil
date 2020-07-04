<template>
  <div class="q-pa-md">
    <q-form
      class="q-mt-md"
    >
      <div class="text-h6"> Modificar Imagen de perfil </div>
      <q-file
        color="teal"
        filled
        v-model="img"
        label="Label"
      >
        <template v-slot:prepend>
          <q-icon name="cloud_upload" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop="img = null" class="cursor-pointer" />
        </template>
      </q-file>
      <q-btn
        label="Guardar"
        color="primary"
        text-color="white"
        class="q-my-sm"
      />
    </q-form>

    <q-separator inset />

    <q-form
      class="q-gutter-md q-mt-md"
    >
      <div class="text-h6"> Modificar Nombre </div>

      <q-input
        filled
        v-model="name"
        type="text"
        label="Nombre"
        hint="Ingresar nombre"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, ingresa nombre']"
      />

      <q-input
        filled
        v-model="email"
        type="email"
        label="Email"
        hint="Ingresar email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, ingresa tu email']"
      />

      <q-btn
        label="Guardar"
        color="primary"
        text-color="white"
        class="q-my-sm"
      />
    </q-form>

    <q-separator inset />

    <q-form
      class="q-gutter-md q-mt-md"
    >
      <div class="text-h6"> Modificar direccion </div>

      <q-input
        filled
        v-model="country"
        type="text"
        label="Pais"
        hint="Ingresar pais"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, ingresar pais']"
      />

      <q-input
        filled
        v-model="city"
        type="text"
        label="Ciudad"
        hint="Ingresar ciudad"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, ingresar ciudad']"
      />

      <q-input
        filled
        v-model="address"
        type="text"
        label="Direccion"
        hint="Ingresar direccion"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, ingresar direccion']"
      />

      <q-btn
        label="Guardar"
        color="primary"
        text-color="white"
        class="q-my-sm"
      />
    </q-form>
  </div>
</template>

<script>
import User from '../../js/User'
export default {
  name: 'PageConfigPerfil',
  data () {
    return {
      name: '',
      email: '',
      country: '',
      city: '',
      address: '',
      img: null,
      userData: new User(this.$token),
      user: {}
    }
  },
  methods: {
    userShowAction: function () {
      this.userData.show(this.$user.id, (err, user) => {
        if (err) {
          return console.error(err)
        }
        this.user = user.data.user
        this.name = this.user.name
        this.email = this.user.email
        this.country = this.user.country
        this.city = this.user.city
        this.address = this.user.address
      })
    }
  },
  created () {
    this.userShowAction()
  }
}
</script>
