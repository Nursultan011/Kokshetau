import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/about.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../pages/news.vue')
  },
  {
    path: '/news/:id',
    name: 'news_id',
    component: () => import('../pages/news_id.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../pages/services.vue')
  },
  {
    path: '/procurement',
    name: 'procurement',
    component: () => import('../pages/procurement.vue')
  },
  {
    path: '/subsidiary/:id',
    name: 'subsidiary',
    component: () => import('../pages/subsidiary.vue')
  },
  {
    path: '/vacancy',
    name: 'vacancy',
    component: () => import('../pages/vacancy.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../pages/contacts.vue')
  },
  {
    path: '/consumer',
    name: 'consumer',
    component: () => import('../pages/consumer.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})

export default router
