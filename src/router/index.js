import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('../views/Parent.vue')
  },
  {
    path: '/general',
    name: 'General',
    component: () => import('../views/General.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('../views/VuexLayout.vue')
  },
  {
    path: '/vuex/:id',
    name: 'Vuex',
    component: () => import('../views/Parent.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
