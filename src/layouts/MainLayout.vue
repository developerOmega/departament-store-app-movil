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
              <img :src="this.$user.img">
            </q-avatar>
            <div> {{this.$user.name}} </div>
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
            to="/login"
            @click="logout"
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
import Vue from 'vue'

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
  },
  methods: {
    logout: function () {
      Vue.prototype.$user = {}
      Vue.prototype.$token = ''
      Vue.prototype.$products = []
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.$user || !vm.$user.id) {
        vm.$router.push('/login')
      }
    })
  }
}
</script>
