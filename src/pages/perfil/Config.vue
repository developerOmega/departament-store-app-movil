<template>
  <div class="q-pa-md">
    <q-form
      class="q-gutter-md q-mt-md"
    >
      <div class="text-h6"> Modificar Imagen de perfil </div>
      <q-uploader
        url="http://localhost:4444/upload"
        label="Filtered (for <2k size)"
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
export default {
  name: 'PageConfigPerfil',
  data () {
    return {
      name: 'Name',
      email: 'name@mail.com',
      country: 'Francia',
      city: 'Paris',
      address: 'siempreviva-francia #123'
    }
  }
}
</script>
