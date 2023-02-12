import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    },
    {
      path: '/levels',
      name: 'levels',
      component: () => import('../views/Levels.vue')
    },
    {
      path: '/level-0',
      name: 'level-0',
      component: () => import('../views/levels/Level-0.vue')
    },
    {
      path: '/level-1',
      name: 'level-1',
      component: () => import('../views/levels/Level-1.vue')
    },
    {
      path: '/level-2',
      name: 'level-2',
      component: () => import('../views/levels/Level-2.vue')
    },
    {
      path: '/level-3',
      name: 'level-3',
      component: () => import('../views/levels/Level-3.vue')
    },
    {
      path: '/level-4',
      name: 'level-4',
      component: () => import('../views/levels/Level-4.vue')
    },
    {
      path: '/level-5',
      name: 'level-5',
      component: () => import('../views/levels/Level-5.vue')
    }
  ]
})

export default router
