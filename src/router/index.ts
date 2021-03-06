import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CountDownTimer from '@/components/CountDownTimer.vue'
import { repo } from '../config/config';
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: CountDownTimer,
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/',
  },
]
const router = createRouter({
  history: createWebHistory(`/${repo}/`),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})
export default router