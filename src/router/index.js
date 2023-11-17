import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layout/AuthLayout.vue'
import DefaultLayout from '../layout/DefaultLayout.vue'

import LoginView from '../views/LoginView.vue'
import HelpDeskView from '../views/HelpDeskView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'auth',
      component: AuthLayout,
      children: [
        {path: '', component: LoginView}
      ]
    },
    {
      path: '/',
      name: 'default',
      component: DefaultLayout,
      children: [
        {path: 'help-desk', component: HelpDeskView, name: 'help-desk'}
        
      ]
    },
  ]
})

export default router
