const CACHE_NAME = "hrd-version-1";
const urlsToCache = [ 
    'index.html', 
    'offline.html',
    '/karyawan',
    '/departemen',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',
    '/',
 ];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    if(!navigator.onLine){
        if(event.request.url === 'http://localhost:3000/static/js/main.chunk.js'){
            event.waitUntil(
                this.registration.showNotification("Mode Offline", {
                    body: "Anda memasuki mode tanpa Internet",
                    icon: 'icon192-100.jpg',

                })
            )
        }
        // console.warn("url", event.request.url) 
        event.respondWith(
                  fetch(event.request).catch(function() {
                    return caches.match(event.request);
            })
        );    
    } else {
        if(event.request.url === 'http://localhost:3000/static/js/main.chunk.js'){
            event.waitUntil(
                this.registration.showNotification("Aplus HRD", {
                    body: "Selamat Datang Kembali",
                    icon: 'icon192-100.jpg',

                })
            )
        }
    }
    
});

  

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});