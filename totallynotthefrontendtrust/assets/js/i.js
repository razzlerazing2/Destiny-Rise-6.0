/* hop off, skids */
window.addEventListener("load", () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/assets/js/register-sw.js", {
      scope: "/",
    }).then((registration) => {
      console.log("Service Worker registered successfully:", registration);
      
      // Force update if there's a waiting service worker
      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }
      
      // Listen for updates
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            // New service worker is available
            newWorker.postMessage({ type: "SKIP_WAITING" });
          }
        });
      });
    }).catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
    
    // Listen for service worker messages
    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data && event.data.type === "SW_UPDATED") {
        window.location.reload();
      }
    });
  }
});

let xl;

try {
  xl = window.top.location.pathname === "/gg";
} catch {
  try {
    xl = window.parent.location.pathname === "/gg";   
  } catch {
    xl = false;
  }
}

const form = document.getElementById("fv");
const input = document.getElementById("iv");

if (form && input) {
  form.addEventListener("submit", async event => {
    event.preventDefault();
    try {
      if (xl) processUrl(input.value, "");
      else processUrl(input.value, "/gg");
    } catch {
      processUrl(input.value, "/gg");
    }
  });
}

function processUrl(value, path) {
  let url = value.trim();
  const engine = localStorage.getItem("engine");
  const searchUrl = engine ? engine : "https://www.google.com/search?q=";

  console.log("Processing URL:", url);

  if (!isUrl(url)) {
    url = searchUrl + url;
  } else if (!(url.startsWith("https://") || url.startsWith("http://"))) {
    url = `https://${url}`;
  }

  console.log("Final URL:", url);

  const encodedUrl = __uv$config.encodeUrl(url);
  console.log("Encoded URL:", encodedUrl);
  sessionStorage.setItem("GoUrl", encodedUrl);
  const dy = localStorage.getItem("dy");

  let finalPath;
  if (dy === "true") {
    finalPath = `/a/q/${encodedUrl}`;
  } else if (path) {
    finalPath = path;
  } else {
    finalPath = `/a/${encodedUrl}`;
  }
  
  console.log("Navigating to:", finalPath);
  window.location.href = finalPath;
}

function go(value) {
  processUrl(value, "/gg");
}

function blank(value) {
  processUrl(value);
}

function dy(value) {
  processUrl(value, `/a/q/${__uv$config.encodeUrl(value)}`);
}

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  ) {
    return true;
  }
  return false;
}
