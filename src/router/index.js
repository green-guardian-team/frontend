import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Formulario from '@/components/Formulario'
import LatestNotificationSearch from '@/components/LatestNotificationSearch'

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
      path: '/latest-notification-search',
      name: 'LatestNotificationSearch',
      component: LatestNotificationSearch
    }
    
  ]
})
