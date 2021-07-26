let cacheName = "hello-pwa";
let filesToCache = ['/', '/index.html', 'css/style.css', 'js/main.js'];

// start the service worker and cache all of the app's content

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});

// serve cached content when offline

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
