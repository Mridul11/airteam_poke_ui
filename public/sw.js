const CACHE_NAME = 'apiV1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll([
                '/static/js/bundle.js',
                '/manifest.json',
                '/robots.txt',
                '/favicon.ico',
                '/index.html',
                '/',
            ])
        })
    )
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
});