import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Web Site
  {
    path: '/',
    name: 'landing-page',
    component: () => import('../website/LandingPage.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../website/Home.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../website/Services.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../website/About.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../website/Portfolio.vue')
  },
  // Login
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/forgotpass',
    name: 'forgotpass',
    component: () => import('../views/ForgotPass.vue')
  },
  // Dash
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/dash',
    name: 'dash',
    component: () => import('../views/MangoDash.vue')
  },
  // Layout
  {
    path: '/maker',
    name: 'maker',
    component: () => import('../views/MangoDash.vue')
  },
  // Pruebas                                                                             
  // Genesis
  {
    path: '/genesis',
    name: 'genesis',
    component: () => import('../genesis/LoginGenesis.vue')
  },
  {
    path: '/genesis/inicio',
    name: 'inicio',
    component: () => import('../genesis/InicioGenesis.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
