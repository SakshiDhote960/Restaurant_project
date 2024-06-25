import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '@/components/SignUp.vue'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Add from '@/components/Add.vue'
import Update from '@/components/Update.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/update/:id',
      name: 'update',
      component: Update
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
