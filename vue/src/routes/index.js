import Vue from 'vue';
import Router from 'vue-router';
import Barber from '../components/pages/barberPage.vue';
import Search from '../components/pages/searchPage.vue';
import YourSchedules from '../components/pages/yourSchedulesPage.vue';
import Create from '../components/pages/createBarber.vue';
import Schedule from '../components/pages/schedulePage.vue';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/search',
      name: 'Pesquisa',
      component: Search
    },
    {
      path: '/yourSchedules',
      name: 'Seus Agendamentos',
      component: YourSchedules
    } ,
    {
      path: '/new',
      name: 'Cadastre sua Barbearia',
      component: Create
    },
    {
      path: '/schedule/:id',
      name: 'Agendamento',
      component: Schedule
    },
    {
      path: '/barber/:id',
      component: Barber
    }
  ],
  mode: 'history'
});