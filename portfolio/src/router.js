import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/parcours',
    name: 'Parcours',
    component: () => import('./pages/Parcours.vue')
  },
  {
    path: '/projets',
    name: 'Projets',
    component: () => import('./pages/Projets.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('./pages/Contact.vue')
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import('./pages/CV.vue')
  },
  {
    path: '/competences',
    name: 'Competences',
    component: () => import('./pages/Competences.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 