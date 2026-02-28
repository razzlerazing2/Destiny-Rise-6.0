importScripts("/assets/dyn/config.js");
importScripts("/assets/dyn/worker.js");
importScripts("/assets/ultra/bundle.js");
importScripts("/assets/ultra/config.js");
importScripts(__uv$config.sw || "/assets/ultra/sw.js");

const uv = new UVServiceWorker();
const dynamic = new Dynamic();

const userKey = new URL(self.location).searchParams.get("userkey");
self.dynamic = dynamic;

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // Priority 1: Dynamic routing
      if (await dynamic.route(event)) {
        return await dynamic.fetch(event);
      }

      // Priority 2: UV service worker routing for '/win/' URLs
      if (event.request.url.startsWith(`${location.origin}/john/`)) {
        return await uv.fetch(event);
      }

      // Fallback: default fetch
      return fetch(event.request);
    })()
  );
});