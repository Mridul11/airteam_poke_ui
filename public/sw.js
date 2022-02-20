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

self.addEventListener('fetch', event => {
    event.respondWith(fromCache(event.request)) 
    
    // update cache
    event.waitUntil(update(event.request));
});


/**
 * 
 * Helper methods
 */
function fromCache(request) {
    return caches.open(CACHE_NAME).then(cache => {
        return cache.match(request);
    });
}

function update(request) {
    caches.open(CACHE_NAME).then( cache => {
        fetch(request).then( response => {
        cache.put(request, response)
        });
    });
}