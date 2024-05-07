import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Container from '../container/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: () => import('../views/Home.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({
    left: 0,
    top: 0,
  }),
})

export default router