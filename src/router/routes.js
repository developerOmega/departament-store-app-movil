
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/perfil/Index.vue'),
        children: [
          { path: '', component: () => import('pages/perfil/Main.vue') },
          { path: 'user/settings', component: () => import('pages/perfil/Config.vue') },
          { path: 'user/products', component: () => import('pages/perfil/Product.vue') }
        ]
      },
      {
        path: 'products',
        component: () => import('pages/products/Index.vue'),
        children: [
          { path: '', component: () => import('pages/products/Main.vue') },
          { path: ':id', component: () => import('pages/products/Show.vue') }
        ]
      },
      {
        path: 'tickets',
        component: () => import('pages/tikets/Index.vue'),
        children: [
          { path: '', component: () => import('pages/tikets/Main.vue') },
          { path: ':id', component: () => import('pages/tikets/Show.vue') }
        ]
      },
      {
        path: 'shopings',
        component: () => import('pages/shopings/Index.vue'),
        children: [
          { path: '', component: () => import('pages/shopings/Main.vue') },
          { path: 'check-address', component: () => import('pages/shopings/CheckAddress.vue') },
          { path: 'check-shoping', component: () => import('pages/shopings/CheckShoping.vue') }
        ]

      }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/login/Index.vue')
  },
  {
    path: '/logup',
    component: () => import('pages/logup/Index.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/errors/Error404.vue')
  }
]

export default routes
