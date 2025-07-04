document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.remove("theme-dark", "theme-blue", "theme-retro");
    document.body.classList.add(savedTheme);
    document.body.dataset.theme = savedTheme;
  }
});
