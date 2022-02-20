const cacheData = 'apiV1';

self.addEventListener('install', event => {
    event.waitUntill(
        caches.open(cacheData).then(cache => {
            cache.addAll([
                '/static/js/bundle.js',
                '/static/js/hook.js',
                '/manifest.json',
                '/robots.txt',
                '/favicon.ico',
                '/index.html',
                '/',
            ])
        })
    )
});


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if(response){
                return response;
            }
        })
    )
});