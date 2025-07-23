/* hop off, skids */
importScripts("/assets/ultra/bundle.js?v=10-02-2024");
importScripts("/assets/ultra/config.js?v=10-02-2024");
importScripts("/assets/dyn/config.js?v=10-02-2024");
importScripts("/assets/dyn/worker.js?v=10-02-2024");
importScripts(__uv$config.sw || "/assets/ultra/sw.js?v=10-02-2024");

const uv = new UVServiceWorker();
const dynamic = new Dynamic();

self.addEventListener("fetch", (event) => {
  console.log("Service Worker intercepted:", event.request.url);
  
  event.respondWith(
    (async () => {
      try {
        // Check if this is a proxy request
        if (event.request.url.includes('/a/')) {
          console.log("Processing proxy request:", event.request.url);
          
          // UV service worker routing for '/a/' URLs (but not '/a/q/')
          if (event.request.url.includes('/a/') && !event.request.url.includes('/a/q/')) {
            console.log("Routing to UV:", event.request.url);
            return await uv.fetch(event);
          }

          // Dynamic routing for '/a/q/' URLs
          if (event.request.url.includes('/a/q/')) {
            console.log("Routing to Dynamic:", event.request.url);
            if (await dynamic.route(event)) {
              return await dynamic.fetch(event);
            }
          }
        }

        // Fallback: default fetch
        console.log("Using default fetch for:", event.request.url);
        return fetch(event.request);
      } catch (error) {
        console.error("Service worker error:", error);
        return fetch(event.request);
      }
    })()
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});