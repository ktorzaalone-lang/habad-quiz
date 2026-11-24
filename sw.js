// Service worker : réseau d'abord, cache en secours (fonctionnement hors connexion).
const CACHE = "quiz-habad-v13";
const FILES = ["./", "index.html", "data/questions.json", "data/fetes.json", "data/photos.json", "data/legacy-ids.json", "manifest.webmanifest",
  "assets/icons/apple-touch-icon.png", "assets/icons/icon-192.png", "assets/icons/icon-512.png", "assets/img/770-entree.jpg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request, {cache: "no-cache"}).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request, {ignoreSearch: true}))
  );
});
