// register service worker

window.onload = () => {
    'use strict';   // hace falta esto hoy en dia?

    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./serviceWorker.js')
    }
}