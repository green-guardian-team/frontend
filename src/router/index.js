import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Formulario from '@/components/Formulario'
import LatestNotification from '@/components/LatestNotification'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/map',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/pesquisa',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/formulario',
      name: 'Formulario',
      component: Formulario
    },
    {
      path: '/latest-notification',
      name: 'LatestNotification',
      component: LatestNotification
    }
  ]
})
