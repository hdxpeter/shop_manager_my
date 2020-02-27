import Vue from 'vue'
import VueRouter from 'vue-router'
import earth from '../views/earth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/earth',
    name: 'earth',
    component: earth
  }
]

const router = new VueRouter({
  routes
})

export default router
