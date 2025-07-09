  // Simple SPA navigation
  const navButtons = document.querySelectorAll('nav .nav-btn');
  const pages = document.querySelectorAll('main .page');
  const embedContainer = document.getElementById('embed-container');
  const tabsContainer = document.getElementById('tabs-container');

  function openPage(pageId) {
    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));
    // Hide all iframes
    document.querySelectorAll('iframe.game-embed').forEach(iframe => iframe.classList.remove('active'));

    // Show selected page if exists
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add('active');
    }

    // Update nav button active states
    navButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === pageId);
    });

    // Save last open page in localStorage
    localStorage.setItem('activePage', pageId);
  }

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      openPage(button.dataset.target);
    });
  });

  // Add a new tab with embedded iframe
  function addGameTab(gameId, gameName) {
    // If tab exists, just open it
    if (document.getElementById(gameId + '-tab')) {
      openTab(gameId);
      return;
    }

    // Create tab button
    const tabBtn = document.createElement('button');
    tabBtn.className = 'tab-btn';
    tabBtn.id = gameId + '-tab';
    tabBtn.innerHTML = `
      <span>${gameName}</span>
      <button class="close-tab" title="Close Tab">&times;</button>
    `;

    tabBtn.querySelector('button.close-tab').addEventListener('click', (e) => {
      e.stopPropagation();
      closeTab(gameId);
    });

    tabBtn.addEventListener('click', () => openTab(gameId));

    tabsContainer.appendChild(tabBtn);

    // Create iframe embed
    const iframe = document.createElement('iframe');
    iframe.id = gameId + '-embed';
    iframe.className = 'game-embed';
    iframe.src = `./games/${gameId}/index.html`; // change to your game path
    embedContainer.appendChild(iframe);

    openTab(gameId);
  }

  function openTab(gameId) {
    // Hide pages
    pages.forEach(page => page.classList.remove('active'));
    // Deactivate nav buttons
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Hide all iframes
    document.querySelectorAll('iframe.game-embed').forEach(iframe => iframe.classList.remove('active'));

    // Show iframe
    const iframe = document.getElementById(gameId + '-embed');
    if (iframe) {
      iframe.classList.add('active');
    }

    // Highlight tab
    document.querySelectorAll('#tabs-container .tab-btn').forEach(tab => tab.classList.remove('active'));
    const tabBtn = document.getElementById(gameId + '-tab');
    if (tabBtn) tabBtn.classList.add('active');

    // Save active tab to localStorage
    localStorage.setItem('activeTab', gameId);
  }

  function closeTab(gameId) {
    // Remove tab button
    const tabBtn = document.getElementById(gameId + '-tab');
    if (tabBtn) tabBtn.remove();

    // Remove iframe
    const iframe = document.getElementById(gameId + '-embed');
    if (iframe) iframe.remove();

    // Clear saved active tab if it matches
    if (localStorage.getItem('activeTab') === gameId) {
      localStorage.removeItem('activeTab');
      // Go back to home page or last open page
      const lastPage = localStorage.getItem('activePage') || 'home-page';
      openPage(lastPage);
    }
  }

  // On page load, restore last active page or tab
  window.addEventListener('DOMContentLoaded', () => {
    const activeTab = localStorage.getItem('activeTab');
    const activePage = localStorage.getItem('activePage') || 'home-page';

    if (activeTab && document.getElementById(activeTab + '-embed')) {
      openTab(activeTab);
    } else {
      openPage(activePage);
    }
  });