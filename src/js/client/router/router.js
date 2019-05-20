'use strict'


import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: "MyComponentName",
        component : {}
    }
];

let router = new VueRouter({
    'routes': routes // short for `routes: routes`
});


export default router;