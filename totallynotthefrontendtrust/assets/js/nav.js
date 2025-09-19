document.addEventListener("DOMContentLoaded", () => {
  // Insert nav + button
  const navHTML = `
    <nav class="animated-content open" id="main-nav">
      <div class="nav-container">
        <ul class="nav-links">
          <li><a href="/home"><i class="fas fa-home cuhs"></i><span>Home</span></a></li>
          <li><a href="/games"><i class="fas fa-gamepad cuhs"></i><span>Games</span></a></li>
          <li><a href="/apps"><i class="fas fa-mobile-alt cuhs"></i><span>Apps</span></a></li>
          <li><a href="/animes"><i class="fas fa-tv cuhs"></i><span>Anime</span></a></li>
          <li><a href="/settings"><i class="fas fa-gear cuhs"></i><span>Settings</span></a></li>
          <li><a href="/song"><i class="fas fa-music cuhs"></i><span>Songs</span></a></li>
        </ul>
      </div>
    </nav>
    <button id="nav-toggle"><i class="fas fa-bars"></button>
  `;
  document.body.insertAdjacentHTML("afterbegin", navHTML);
  const nav = document.getElementById("main-nav");
  const btn = document.getElementById("nav-toggle");

  // Trigger intro animation (small delay looks smoother)
  setTimeout(() => {
    nav.classList.add("show");
  }, 1000);

  // Toggle nav on button click
  btn.addEventListener("click", () => {
    nav.classList.toggle("closed");
  });
});
