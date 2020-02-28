import Vue from 'vue'
import VueRouter from 'vue-router'
import earth from '../views/earth'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/login'},
  {path:'/login',component:Login},
  {path:'/home',component:Home},
  {
    path: '/earth',
    name: 'earth',
    component: earth
  }
]

const router = new VueRouter({
  routes
})
//router添加路由导航守卫
router.beforeEach((to,from,next)=>{
  // to将要跳转的路径
  // from从哪个路径跳转而来的
  // next 放行函数
  if(to.path==='/login') return next()
 const token=window.sessionStorage.getItem('token')
  if(!token) return next('/login')
  next()
})
export default router
