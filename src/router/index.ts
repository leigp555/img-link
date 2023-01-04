import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'

import Test from '@/views/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    alias: '/home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        alias: 'upload',
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
      },
      {
        path: '/privacy-policy',
        name: 'Policy',
        component: () => import('@/components/Policy.vue')
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
  history: createWebHistory(),
  routes
})

export default router
