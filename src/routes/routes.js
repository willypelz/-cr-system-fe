import HomeLayout from '@/home/layout/Layout.vue';

const routes = [
  {
    path: '/',
    redirect: 'companies',
    component: HomeLayout,
    children: [
      {
        path: '/login',
        name: 'authLogin',
        component: () => import( '../home/login/Login.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import( '../dashboard/shared/companies/Companies.vue')
      },
      {
        path: '/companies',
        name: 'companies',
        component: () => import( '../dashboard/shared/companies/Companies.vue')
      },
      {
        path: '/company/:slug',
        name: 'company',
        component: () => import( '../dashboard/shared/company/Company.vue')
      },
      {
        path: '/register',
        name: 'authRegister',
        component: () => import( '../home/register/Register.vue')
      }
    ]
  },

];

export default routes;
