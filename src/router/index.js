import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layout/AuthLayout.vue'
import DefaultLayout from '../layout/DefaultLayout.vue'

import LoginView from '../views/LoginView.vue'
import HelpDeskView from '../views/HelpDeskView.vue'
import ExtractView from '../views/ExtractView.vue'
import BagdeView from '../views/BadgeView.vue'
import HelpDeskDetailView from '../views/HelpDeskDetailView.vue'
import HelpDeskFormView from '../views/HelpDeskFormView.vue'

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
        {path: 'help-desk', component: HelpDeskView, name: 'help-desk'},
        {path: 'help-desk/new', component: HelpDeskFormView, name: 'help-desk-new'},
        {path: 'help-desk/:id', component: HelpDeskDetailView, name: 'help-desk-detail'},
        {path: 'extract', component: ExtractView, name: 'extract'},
        {path: 'badge', component: BagdeView, name: 'badge'}
        
      ]
    },
  ]
})

export default router
