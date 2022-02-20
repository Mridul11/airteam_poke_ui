const cacheData = 'apiV1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheData).then(cache => {
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
    const url = new URL(event.request.url);
    if(url.origin == location.origin){
        event.respondWith(
            caches.match(event.request).then(response => {
                if(response){
                    return response;
                }else{
                    return;
                }
            })
        )
    }   
});