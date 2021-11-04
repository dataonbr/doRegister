import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Inicio.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/segunda',
    name: 'Segunda',
    component: () => import('../views/cadastroempresa/Segunda.vue')
  },
  {
    path: '/terceira',
    name: 'Terceira',
    component: () => import('../views/cadastropessoa/Terceira.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
