import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Formulario from '@/components/Formulario'
import LatestNotification from '@/components/LatestNotification'
import MapaRegiao from '@/components/MapaRegiao'
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
      path: '/latest-notification',
      name: 'LatestNotification',
      component: LatestNotification
    },
    {
      path: '/mapa-regiao',
      name: 'MapaRegiao',
      component: MapaRegiao
    },
    {
      path: '/latest-notification-search',
      name: 'LatestNotificationSearch',
      component: LatestNotificationSearch
    },
    {
      path: '/mapa-regiao',
      name: 'MapaRegiao',
      component: MapaRegiao
    } 
  ]
})