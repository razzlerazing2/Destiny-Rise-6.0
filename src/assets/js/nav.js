document.addEventListener("DOMContentLoaded", () => {
  const faLink = document.createElement("link");
faLink.rel = "stylesheet";
faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
document.head.appendChild(faLink);
  const navHTML = `
    <div id="backdrop" class="backdrop" style="display: block;"></div> <!-- Added display: block; to make it open by default -->
    <nav class="animated-content" id="main-nav"> <!-- Removed animated-content closed class to make it open by default -->
      <div class="nav-container">
        <ul class="nav-links">
      <!--    <div class="logo">DR</div>-->
          <li><a href="/home"><i class="fas fa-house cuhs"></i><span></span></a></li>
          <li><a href="/games"><i class="fas fa-gamepad cuhs"></i><span></span></a></li>
          <li><a href="/apps"><i class="fas fa-mobile-alt cuhs"></i><span></span></a></li>
          <li><a href="/anime"><i class="fas fa-tv cuhs"></i><span></span></a></li>
          <li><a href="/music"><i class="fas fa-music cuhs"></i><span></span></a></li>
        </ul>
        <div class="nav-divider"></div> <!-- Short dash separating top and bottom links -->
        <!-- Bottom nav buttons -->
        <ul class="nav-links nav-bottom">
          <li><a href="https://discord.gg/mnWwZjcteb" target="_blank"><i class="fab fa-discord cuhs"></i><span></span></a></li>
          <li><a href="https://github.com/razzlerazing2/skryptonite" target="_blank"><i class="fab fa-github cuhs"></i><span></span></a></li>
          <li><a href="/settings"><i class="fas fa-gear cuhs"></i><span></span></a></li>
        </ul>

      </div>
    </nav>
   <!-- <button id="nav-toggle"><i class="fas fa-times"></i></button> --><!-- Changed icon to times instead of bars to make it open by default -->
  `;

  document.body.insertAdjacentHTML("afterbegin", navHTML);

  const nav = document.getElementById("main-nav");
  const btn = document.getElementById("nav-toggle");
  const backdrop = document.getElementById("backdrop");

  setTimeout(() => {
    nav.classList.add("show");
  }, 3000);

  btn.addEventListener("click", () => {
    nav.classList.toggle("closed");
    if (nav.classList.contains("closed")) {
      backdrop.style.display = 'none';
      btn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
      backdrop.style.display = 'block';
      btn.innerHTML = '<i class="fas fa-times"></i>';
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
       /* display: none; 
      background-color: rgba(0, 0, 0, 0.5);*/
      z-index: 999;
      transition: all 0.3s ease;
      pointer-events: none;
    }
    .nav-divider {
      width: 70%;
      height: 1px;
      background: var(--primary-color);
      margin: auto;
      border-radius: 2px;
      box-shadow: 0 10px 20px var(--primary-color); 
    }
  `;
  document.head.appendChild(style);
});
