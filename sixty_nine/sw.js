importScripts("/config.js");
importScripts("/assets/dyn/worker.js?v=10-02-2024");
importScripts("/assets/ultra/bundle.js?v=10-02-2024");
importScripts("/assets/ultra/config.js?v=10-02-2024");
importScripts(__uv$config.sw || "/assets/ultra/sw.js?v=10-02-2024");
importScripts("/assets/scram/scramjet.shared.js", "/assets/scram/scramjet.worker.js");

// Initialize services
const uv = new UVServiceWorker();
const dynamic = new Dynamic();
const scramjet = new ScramjetServiceWorker({
  wisp: _CONFIG.wispurl,
  bare: _CONFIG.bareurl
});

self.dynamic = dynamic;

// Handle fetch events
self.addEventListener("fetch", event => {
  event.respondWith(
    (async () => {
      if (await dynamic.route(event)) return await dynamic.fetch(event);
      if (scramjet.shouldRoute(event)) return await scramjet.fetch(event);
      if (event.request.url.startsWith(`${location.origin}/a/`)) return await uv.fetch(event);
      return await fetch(event.request);
    })()
  );
});
