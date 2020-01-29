import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../components/CV.vue'
import VueParticles from 'vue-particles'
import NotFound from '../components/NotFound.vue'

Vue.use(VueParticles)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cv',
    name: 'cv',
    component: CV
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    // route level code-splitting
    // this generates a separate chunk (portfolio.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "portfolio" */ '../components/Portfolio.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component : NotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
