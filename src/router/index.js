import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from "../components/Map";
import Me from "../components/Me";
import About from "../components/About";
import Login from "../components/Login";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Map
    },
    {
        path: '/me',
        name: 'Me',
        component: Me
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
