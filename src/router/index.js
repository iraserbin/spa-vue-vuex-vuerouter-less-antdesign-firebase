import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'empty' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/fruits',
    name: 'Fruits',
    meta: { layout: 'product' },
    component: () => import('../views/Fruits.vue')
  },
  {
    path: '/sweets',
    name: 'Sweets',
    meta: { layout: 'product' },
    component: () => import('../views/Sweets.vue')
  },
  {
    path: '/basket',
    name: 'Basket',
    meta: { layout: 'basket' },
    component: () => import('../views/Basket.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
