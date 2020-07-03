<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="row bg-grey-2 color-primary font-size-50">
        <div class="col">
        </div>

        <div class="col">
          <img class="logo" alt="DStore Logo" src="~assets/departamentStoreEF3535WEB.png">
        </div>

        <div class="col text-right">
          <q-btn
            flat
            @click="drawerRight = !drawerRight"
            round
            dense
            icon="account_circle"
            size="lg"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
        side="right"
        v-model="drawerRight"
        bordered
        :width="300"
        :breakpoint="500"
        content-class="bg-grey-3 column"
      >
        <div class="main-image with-img col">
          <q-item
            clickable
            tag= 'q-route-tab'
            to="/"
            class="content"
          >
            <q-avatar size="100px">
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <div> Name </div>
          </q-item>
        </div>
        <q-scroll-area class="col-8">
          <q-list>
            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        </q-scroll-area>
        <div class="drawer footer background-primary text-white shadow-up-2 col-1">
          <q-btn
            flat
            round
            dense
            icon="settings"
            to="/user/settings"
            size="lg"
          />
          <q-btn
            flat
            round
            dense
            icon="exit_to_app"
            size="lg"
          />
        </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer">
      <q-toolbar class="content">
         <q-btn
            flat
            round
            dense
            icon="shopping_bag"
            size="lg"
            to="/products"
            class="section-center"
          />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      drawerRight: false,
      essentialLinks: [
        {
          title: 'Mis tickets',
          icon: 'note',
          link: '/tickets'
        },
        {
          title: 'Ir al carrito',
          icon: 'shopping_cart',
          link: '/shopings'
        }
      ]
    }
  }
}
</script>
