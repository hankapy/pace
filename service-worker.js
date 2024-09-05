const CACHE_NAME = 'my-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/service-worker.js',
    '/logo_vauhtia.png',
    '/icon-192x192.png',
    '/icon-512x512.png',
    '/footer_logo.png',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
