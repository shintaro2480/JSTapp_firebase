import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Register from '../views/RegisterView.vue'
import SignIn from '../views/SignInView.vue'

import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: async (to, from, next) => {
        const user = await new Promise((resolve, reject) => {
          onAuthStateChanged(auth, resolve, reject)
        })

        if (user) {
          console.log(user)
          next()
        } else {
          next('/signin')
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/signin',
      name: 'signIn',
      component: SignIn
    }
  ]
})

export default router
