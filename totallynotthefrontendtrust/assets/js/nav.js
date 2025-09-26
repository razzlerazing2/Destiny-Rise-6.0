document.addEventListener("DOMContentLoaded", () => {
  // Insert nav + button + backdrop
  const navHTML = `
    <div id="backdrop" class="backdrop"></div>
    <nav class="animated-content closed" id="main-nav">
      <div class="nav-container">
        <ul class="nav-links">
      <!--    <div class="logo">SKR</div>-->
          <li><a href="/home"><i class="fas fa-house cuhs"></i><span>ℍ𝕠𝕞𝕖</span></a></li>
          <li><a href="/games"><i class="fas fa-gamepad cuhs"></i><span>𝔾𝕒𝕞𝕖𝕤</span></a></li>
          <li><a href="/apps"><i class="fas fa-mobile-alt cuhs"></i><span>𝔸𝕡𝕡𝕤</span></a></li>
          <li><a href="/animes"><i class="fas fa-tv cuhs"></i><span>𝔸𝕟𝕚𝕞𝕖</span></a></li>
          <li><a href="/settings"><i class="fas fa-gear cuhs"></i><span>𝕊𝕖𝕥𝕥𝕚𝕟𝕘𝕤</span></a></li>
          <li><a href="/song"><i class="fas fa-music cuhs"></i><span>𝕊𝕠𝕟𝕘𝕤</span></a></li>
        </ul>
      </div>
    </nav>
    <button id="nav-toggle"><i class="fas fa-bars"></i></button>
  `;

  document.body.insertAdjacentHTML("afterbegin", navHTML);

  const nav = document.getElementById("main-nav");
  const btn = document.getElementById("nav-toggle");
  const backdrop = document.getElementById("backdrop");

  // Trigger intro animation (small delay looks smoother)
  setTimeout(() => {
    nav.classList.add("show");
  }, 1000);

  // Toggle nav on button click
  btn.addEventListener("click", () => {
    nav.classList.toggle("closed");

    // Change the button icon based on the nav state
    if (nav.classList.contains("closed")) {
      backdrop.style.display = 'none'; // Hide backdrop
      btn.innerHTML = '<i class="fas fa-bars"></i>'; // Change icon to bars
    } else {
      backdrop.style.display = 'block'; // Show backdrop
      btn.innerHTML = '<i class="fas fa-times"></i>'; // Change icon to times
    }
  });

  // Add styles for backdrop
  const style = document.createElement('style');
  style.textContent = `
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: none; /* Initially hidden */
      z-index: 999; /* Place it above other elements */
      transition: all 0.3s ease; /* Smooth transition */
    }
  `;
  document.head.appendChild(style);
});