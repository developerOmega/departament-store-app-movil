<template>
  <q-item-section class="column">
    <div class="main-image col-1">
      <img src="https://loremflickr.com/320/240" alt="main image" class="main">
      <div class="content-middle">
        <q-avatar size="100px">
          <img :src="this.$user.img" alt="img">
        </q-avatar>
        <q-item-section class="info">
          <q-item-section>
            <q-item-label class="color-primary" > {{ this.$user.name }} </q-item-label>
            <q-item-label caption>
              {{ this.$user.email }}
            </q-item-label>
          </q-item-section>
          <q-btn
            flat
            round
            dense
            icon="edit"
            to="/user/settings"
            size="md"
          />
        </q-item-section>
      </div>
    </div>
    <div class="col-8 q-mx-lg row cont">
      <q-btn
            label="Mis Tickets"
            color="grey-2"
            text-color="primary"
            to="/tickets"
            size="md"
            class="col-12 q-py-lg q-mb-lg"
        />

        <q-btn-group spread class="col-12">
          <q-btn
              label="Mis productos"
              color="grey-2"
              text-color="primary"
              to="/products"
              size="md"
              class="q-py-lg"
          />
          <q-btn
              icon="settings"
              color="grey-2"
              text-color="primary"
              to="/user/settings"
              size="md"
              class="q-py-lg  "
          />
        </q-btn-group>
    </div>
  </q-item-section>
</template>

<script>
export default {
  name: 'PageMainPerfil'
}
</script>
