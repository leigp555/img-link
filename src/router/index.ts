import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'

import Test from '@/views/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/components/Upload.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/components/About.vue')
      },
      {
        path: 'concat',
        name: 'Concat',
        component: () => import('@/components/Concat.vue')
      },
      {
        path: 'changeLog',
        name: 'ChangeLog',
        component: () => import('@/components/ChangeLog.vue')
      }
    ]
  },
  {
    path: '/apiDocs',
    name: 'apiDocs',
    component: () => import('@/views/Docs.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('@/views/Manage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
