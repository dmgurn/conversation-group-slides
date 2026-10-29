// Keeps the app itself available offline. Slides and marks live in IndexedDB, not here.
const CACHE = 'cgs-shell-v6';
const SHELL = [
  './', './index.html', './app.js', './pdf.min.js', './pdf.worker.min.js', './manifest.webmanifest',
  './icon-180.png', './icon-192.png', './icon-512.png',
  './fonts/atkinson-400.woff2', './fonts/atkinson-700.woff2', './fonts/bricolage-600.woff2', './fonts/bricolage-800.woff2'
];
// Fetch fresh copies straight from the server (not the browser's 10-minute cache) when installing a version.
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Serve from the cache first so the app opens instantly with or without internet,
// then check the server in the background so the next launch gets any update.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const nav = req.mode === 'navigate';
  const key = nav ? './index.html' : req;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(key, { ignoreSearch: true });
    const refresh = fetch(nav ? new Request('./index.html', { cache: 'no-cache' }) : new Request(req, { cache: 'no-cache' }))
      .then(res => { if (res && res.ok) cache.put(key, res.clone()); return res; })
      .catch(() => null);
    if (hit){ e.waitUntil(refresh); return hit; }
    const res = await refresh;
    return res || new Response('You are offline and this file has not been saved yet.', { status: 503, headers: { 'Content-Type': 'text/plain' } });
  })());
});
