import Vue from 'vue';
import Router from 'vue-router';
// import {getUserAppData} from "../utils/cache";


Vue.use(Router);

const router = new Router({
    mode: 'history',

    routes: [
        // {
        //     path: '/logout',
        //     component: () => import('../home/auth/auth.vue'),
        //     name: 'authLogin'
        // },
        // {
        //     path: '/landing',
        //     component: () => import('../home/landing-page/LandingPage.vue'),
        //     name: 'userLandingPage'
        // },
        {
            path: '/',
            component: () => import('../home/login/Login.vue'),
            name: 'authLogin'
        },
        {
            path: '/register',
            component: () => import('../home/register/Register.vue'),
            name: 'authRegister'
        },
        {
            path: '*',
            component: () => import('../home/error/404/404.vue'),
            name: 'page-not-found'
        },

        /*************************
         **  Admin routes ****
         *************************/

        {
            path: '/admin',
            // beforeEnter: isAdmin,
            component: () => import('../dashboard/admin/layout/Layout.vue'),
            redirect: {
                name: 'AdminDashboard'
            },
            children: [
                {
                    path: 'dashboard',
                    component: () => import('../dashboard/admin/dashboard/Dashboard.vue'),
                    name: 'AdminDashboard'
                },

            ]
        },

        /*************************
         ** User routes ****
         *************************/
        {
            path: '/user',
            // beforeEnter: isUser,
            component: () => import('../dashboard/user/layout/Layout.vue'),
            redirect: {
                name: 'VendorProducts'
            },
            children: [
                {
                    path: 'dashboard',
                    component: () => import('../dashboard/user/dashboard/Dashboard.vue'),
                    name: 'VendorProducts',
                },
            ]
        }

    ]
});

export default router;
