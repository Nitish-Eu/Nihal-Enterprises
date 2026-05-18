const CACHE = 'store-site-v1';
const ASSETS = [
  './',
  './index.html',
  './privacy.html',
  './terms.html',
  './credits.html',
  './manifest.webmanifest',
  './favicon.svg',
  './assets/og-image.png',
  './assets/css/styles.css',
  './assets/js/app.js',
  './data/business.json',
  './assets/gallery/01.jpg',
  './assets/gallery/02.jpg',
  './assets/gallery/03.jpg',
  './assets/gallery/04.jpg',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if(req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(()=>{});
      return res;
    }).catch(()=>cached))
  );
});
