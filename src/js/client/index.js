'use strict'

// CSS
import "bootstrap";

// JS
import Vue from 'vue';

import router from './router/router.js';
import store from './store/store.js';
import Constants from "../constants/constants.js";

const app = new Vue({
    el: "#app",
    store,
    router
});

function registerServiceWorker() {
    // enregistre le script sw avec les navigateurs qui le gèrent
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js', { scope: '/' }).then(() => {
            console.log('Service Worker enregistré correctement.');
        }).catch(error => {
            console.log('Erreur lors de l\'enregistrement du Service Worker : ', error);
        });
    }
}

registerServiceWorker();