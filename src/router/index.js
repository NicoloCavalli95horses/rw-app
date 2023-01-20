import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Thesaurus from '../views/Thesaurus.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thesaurus',
      name: 'thesaurus',
      component: () => import('../views/Thesaurus.vue')
    }
  ]
})

export default router
