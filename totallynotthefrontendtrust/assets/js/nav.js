document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <nav class="animated-content">
      <div class="nav-container">
        <ul class="nav-links">
          <li><a href="/home"><i class="fas fa-home cuhs"></i></a></li>
          <li><a href="/games"><i class="fas fa-gamepad cuhs"></i></a></li>
          <li><a href="/apps"><i class="fas fa-mobile-alt cuhs"></i></a></li>
          <li><a href="/animes"><i class="fas fa-tv cuhs"></i></a></li>
          <li><a href="/settings"><i class="fas fa-cogs cuhs"></i></a></li>
          <li><a href="/song"><i class="fas fa-music cuhs"></i></a></li>
        </ul>
      </div>
    </nav>
  `;

  // Insert nav at the top of the body (or wherever you want)
  document.body.insertAdjacentHTML("afterbegin", navHTML);
});