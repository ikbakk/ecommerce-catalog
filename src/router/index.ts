import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Product from '../views/Product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    }
  ]
})

export default router
