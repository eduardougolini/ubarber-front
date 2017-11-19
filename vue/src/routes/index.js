import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/pages/loginPage.vue';
import Search from '../components/pages/searchPage.vue';
import YourSchedules from '../components/pages/yourSchedulesPage.vue';
import Create from '../components/pages/createBarber.vue';
import Schedule from '../components/pages/schedulePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/search',
      name: 'Pesquisa',
      component: Search
    },
    {
      path: '/kkkk',
      name: 'Seus Agendamentos',
      component: YourSchedules
    } ,
    {
      path: '/new',
      name: 'Cadastre sua Barbearia',
      component: Create
    },
    {
      path: '/schedule',
      name: 'Agendamento',
      component: Schedule
    }
  ],
  mode: 'history'
});