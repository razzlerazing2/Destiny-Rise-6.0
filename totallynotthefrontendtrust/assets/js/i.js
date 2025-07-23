/* hop off, skids */
window.addEventListener("load", () => {
  navigator.serviceWorker.register("/assets/js/register-sw.js", {
    scope: "/",
  });
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

  if (!isUrl(url)) {
    url = searchUrl + url;
  } else if (!(url.startsWith("https://") || url.startsWith("http://"))) {
    url = `https://${url}`;
  }

  const encodedUrl = __uv$config.encodeUrl(url);
  sessionStorage.setItem("GoUrl", encodedUrl);
  const dy = localStorage.getItem("dy");

  if (dy === "true") {
    window.location.href = `/a/q/${encodedUrl}`;
  } else if (path) {
    location.href = path;
  } else {
    window.location.href = `/a/${encodedUrl}`;
  }
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
