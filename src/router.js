import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            name:'root',
            path:'/',
            component: Login
        },
        {
            name:'login',
            path:'/login',
            component: Login
        },
        {
            name: 'dashboard',
            path:'/dashboard',
            component: Home
        },
    ]
})