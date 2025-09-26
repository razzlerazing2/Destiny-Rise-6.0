importScripts("/assets/dyn/config.js?v=10-02-2024");
importScripts("/assets/dyn/worker.js?v=10-02-2024");
importScripts("/assets/ultra/bundle.js?v=10-02-2024");
importScripts("/assets/ultra/config.js?v=10-02-2024");
importScripts(__uv$config.sw || "/assets/ultra/sw.js?v=10-02-2024");

const uv = new UVServiceWorker();
const dynamic = new dynamic();

const userKey = new URL(self.location).searchParams.get("userkey");
self.dynamic = dynamic;

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // Priority 1: Dynamic routing
      if (await dynamic.route(event)) {
        return await dynamic.fetch(event);
      }

      // Priority 2: UV service worker routing for '/a/' URLs
      if (event.request.url.startsWith(`${location.origin}/a/`)) {
        return await uv.fetch(event);
      }

      // Fallback: default fetch
      return fetch(event.request);
    })()
  );
});