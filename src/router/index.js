import Vue from 'vue'
import VueRouter from 'vue-router'
import File from '@/views/File'
import Cinema from '@/views/Cinema'
//引入模块
Vue.use(VueRouter)
//下面是自定义模块
const routes = [
  {
    path: '/file',//模块
    component: File
  },
  {
    path: '/cinema',
    component: Cinema
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
