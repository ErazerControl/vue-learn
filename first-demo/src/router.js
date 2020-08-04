// 0. 导入VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 1. 定义 (路由) 组件。
import Home from "@/components/home.vue";
import Login from "@/components/login.vue";

// 2. 定义路由
const routes = [
  { path: '/home', component: Home },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes // (ES6的缩写写法) 相当于 routes: routes 
})

export default router;