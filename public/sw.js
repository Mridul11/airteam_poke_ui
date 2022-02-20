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
                '/'
            ])
        })
        .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    console.log('service worker activated!');

    e.waitUntil(caches.keys().then(cacheNames => {
        return Promise.all(
            cacheNames.map(cache => {
                if(cache !== CACHE_NAME){
                    console.log('cleaning old cache!');
                    return caches.delete(cache);
                }
            })
        )
    })
    );
});

// fetch event
self.addEventListener('fetch', e => {
    console.log('fetching...');

    e.respondWith(
        fetch(e.request)
        .then(res => {
            const resClone = res.clone();
            caches
                .open(CACHE_NAME)
                .then(cache => {
                    cache.put(e.request, resClone);
                });
                return res;
        }).catch(err => {
            caches.match(e.request)
                .then(res => res)
        })
    );
});