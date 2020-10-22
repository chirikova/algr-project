import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: 'Home' },
      },
    ],
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form' },
      },
    ],
  },
]

const createRouter = () =>
  new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.BASE_URL,
    routes: constantRoutes,
  })

const router = createRouter()
export default router
