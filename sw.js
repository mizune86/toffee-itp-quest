const CACHE = 'toffee-itp-v1';
const CORE = [
  './',
  'index.html',
  'app.js',
  'data.js',
  'sprites.js',
  'manifest.webmanifest',
  'icons/apple-touch-icon.png',
  'icons/favicon-64.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'sfx/chest.mp3',
  'sfx/combo.mp3',
  'sfx/fail.mp3',
  'sfx/heal.mp3',
  'sfx/levelup.mp3',
  'sfx/loot.mp3',
  'sfx/match.mp3',
  'sfx/msg.mp3',
  'sfx/ng.mp3',
  'sfx/ok.mp3',
  'sfx/start.mp3',
  'sfx/tap.mp3',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const put = (req, res) => { if (res && res.status === 200) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; };

self.addEventListener('fetch', e => {
  const req = e.request;
  // 音声の部分取得（Range）はブラウザに任せる
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // オンラインなら最新版、オフラインならキャッシュ
    e.respondWith(fetch(req).then(r => put(req, r)).catch(() =>
      caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match('index.html'))));
  } else if (/^fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r;
    })));
  }
});
