import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/contract',
      name: 'contract',
      component: () => import('../views/Contract.vue')
    },
    {
      path: '/recipient',
      name: 'recipient',
      component: () => import('../views/Recipient.vue')
    }
  ]
})

export default router
