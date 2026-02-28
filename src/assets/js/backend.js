window.addEventListener("load", () => {
  navigator.serviceWorker.register("../sw.js?proxy", {
    scope: "/john/",
  });
});

let xl;

try {
  xl = window.top.location.pathname === "/search";
} catch {
  try {
    xl = window.parent.location.pathname === "/search";   
  } catch {
    xl = false;
  }
}

const form = document.getElementById("4m");
const input = document.getElementById("searchPass");

if (form && input) {
  form.addEventListener("submit", async event => {
    event.preventDefault();
    try {
      if (xl) processUrl(input.value, "");
      else processUrl(input.value, "/search");
    } catch {
      processUrl(input.value, "/search");
    }
  });
}
function processUrl(value, path) {
  let url = value.trim();
  const engine = localStorage.getItem("engine");
  const searchUrl = engine ? engine : "https://www.duckduckgo.com/search?q=";

  if (!isUrl(url)) {
    url = searchUrl + url;
  } else if (!(url.startsWith("https://") || url.startsWith("http://"))) {
    url = `https://${url}`;
  }

  sessionStorage.setItem("GoUrl", __uv$config.encodeUrl(url));
  const dy = localStorage.getItem("dy");

  if (dy === "true") {
    window.location.href = `/john/wick/${__uv$config.encodeUrl(url)}`;
  } else if (path) {
    location.href = path;
  } else {
    window.location.href = `/john/${__uv$config.encodeUrl(url)}`;
  }
}

function go(value) {
  processUrl(value, "/search");
}

function blank(value) {
  processUrl(value);
}

function dy(value) {
  processUrl(value, `/john/wick/${__uv$config.encodeUrl(value)}`);
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