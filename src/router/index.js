import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import CepGenerator from '@/views/CepGenerator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/generateCep',
      name: 'generateCep',
      component: CepGenerator
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router