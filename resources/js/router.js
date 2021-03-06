import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComponent from './pages/HomeComponent';
import AboutComponent from './pages/AboutComponent';
import ContactComponent from './pages/ContactComponent';
import PostsComponent from './pages/PostsComponent';
import SinglePostComponent from './pages/SinglePostComponent';

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {nome: 'Clelia'},
            component: HomeComponent
        },
        {
            path: '/about',
            name: 'about',
            component: AboutComponent
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostsComponent
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactComponent
        },
        {
            path: '/posts/:slug',
            name: 'single-post',
            component: SinglePostComponent
        },
    ]
});

export default router;