<template>
  <div class="q-pa-md">
    <q-form
      class="q-mt-md"
      @submit="userCreateFileAction()"
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
        type="submit"
        label="Guardar"
        color="primary"
        text-color="white"
        class="q-my-sm"
      />
    </q-form>

    <q-separator inset />

    <q-form
      class="q-gutter-md q-mt-md"
      @submit="userUpdateAction"
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
        type="submit"
        text-color="white"
        class="q-my-sm"
      />
    </q-form>

    <q-separator inset />

    <q-form
      class="q-gutter-md q-mt-md"
      @submit="userUpdateAddressAction"
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
        type="submit"
        label="Guardar"
        color="primary"
        text-color="white"
        class="q-my-sm"
      />
    </q-form>
  </div>
</template>

<script>
import Vue from 'vue'
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
    },
    userUpdateAction: function () {
      const body = {
        name: this.name,
        email: this.email
      }
      this.userData.update(this.$user.id, body, (err, user) => {
        if (err) {
          this.notifyError()
          return console.error(err)
        }
        this.user = user.data.user
        this.notifyPositiveInfo()
      })
    },
    userUpdateAddressAction () {
      const body = {
        country: this.country,
        city: this.city,
        address: this.address
      }
      this.userData.update(this.$user.id, body, (err, user) => {
        if (err) {
          this.notifyError()
          return console.error(err)
        }
        this.user = user.data.user
        this.notifyPositiveAddress()
      })
    },
    userCreateFileAction () {
      console.log(this.img)
      this.userData.createFile(this.$user.id, this.img, (err, user) => {
        if (err) {
          console.warn(err)
          this.userUpdateFileAction()
          return
        }
        this.user = user.data.user
        Vue.prototype.$user = this.user
        this.notifyPositiveFile()
      })
    },
    userUpdateFileAction: function () {
      this.userData.updateFile(this.$user.id, this.img, (err, user) => {
        if (err) {
          this.notifyError()
          return console.error(err)
        }
        console.log(user)
        this.user = user.data.user
        Vue.prototype.$user = this.user
        this.notifyPositiveFile()
      })
    },
    notifyPositiveFile: function () {
      this.$q.notify({
        type: 'positive',
        message: 'La imagen de perfil se actualizo'
      })
    },
    notifyPositiveInfo: function () {
      this.$q.notify({
        type: 'positive',
        message: 'La información del perfil actualizo'
      })
    },
    notifyPositiveAddress: function () {
      this.$q.notify({
        type: 'positive',
        message: 'La dirección se actualizo '
      })
    },
    notifyError: function () {
      this.$q.notify({
        type: 'negative',
        message: 'Ocurrió un error'
      })
    }
  },
  created () {
    this.userShowAction()
  }
}
</script>
