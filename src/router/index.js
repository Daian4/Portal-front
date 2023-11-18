import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layout/AuthLayout.vue'
import DefaultLayout from '../layout/DefaultLayout.vue'

import LoginView from '../views/LoginView.vue'
import HelpDeskView from '../views/HelpDeskView.vue'
import ExtractView from '../views/ExtractView.vue'
import BagdeView from '../views/BadgeView.vue'
import HelpDeskDetailView from '../views/HelpDeskDetailView.vue'
import HelpDeskFormView from '../views/HelpDeskFormView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/badge'
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthLayout,
      children: [
        {path: 'sign-in', component: LoginView, name:'sign-in'},
        {path: 'sign-up', component: RegisterView}
      ]
    },
    {
      path: '/',
      name: 'default',
      component: DefaultLayout,
      meta: { requireAuth: true },
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

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth && !localStorage.getItem('token')) {
    next({name: 'sign-in'})
  } else {
    next()
  }
});

export default router
