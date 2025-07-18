// Map routes to page files
const routes = {
  "/home": "/pages/home.html",
  "/games": "/pages/games.html",
  "/apps": "/pages/apps.html",
  "/settings": "/pages/settings.html",
};

// Load content into #content div
async function loadContent(path) {
  const contentDiv = document.getElementById("content");
  const route = routes[path] || routes["/home"];
  try {
    const response = await fetch(route);
    if (!response.ok) throw new Error("Page not found");
    const html = await response.text();
    contentDiv.innerHTML = html;
    setActiveLink(path);
  } catch (error) {
    contentDiv.innerHTML = "<h2>Page not found</h2>";
  }
}

// Set active link styling
function setActiveLink(path) {
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === path);
  });
}

// Handle navigation
function onNavClick(event) {
  if (event.target.matches("a[data-link]")) {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    history.pushState({}, "", path);
    loadContent(path);
  }
}

// Handle back/forward buttons
window.addEventListener("popstate", () => {
  loadContent(window.location.pathname);
});

// Initialize SPA
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", onNavClick);
  loadContent(window.location.pathname);
});
