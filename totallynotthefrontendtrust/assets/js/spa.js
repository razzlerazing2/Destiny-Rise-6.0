// Function to open a specified page
function openPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const embeds = document.querySelectorAll('#embed-container iframe');
    const embedContainer = document.getElementById('embed-container');

    // Hide all pages and embeds initially
    pages.forEach(page => page.style.display = 'none');
    embeds.forEach(embed => embed.style.display = 'none');
    if (embedContainer) {
        embedContainer.style.display = 'none';
    }

    // Show the selected page if it's an SPA page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        console.log(`Opening page: ${pageId}`);
        selectedPage.style.display = 'block'; // Show the selected page
        history.pushState(null, '', `#${pageId}`); // Update URL hash for direct linking
    } else {
        console.log(`Redirecting to external page for: ${pageId}`);
        // Navigate to the real page based on pageId
        switch (pageId) {
            case 'home-page':
                window.location.href = '/kjn'; // Redirect to home
                break;
            case '#games-page':
                window.location.href = '/gamesads'; // Redirect to games
                break;
            case 'apps-page':
                window.location.href = '/apdsaps'; // Redirect to apps
                break;
            case 'animes-page':
                window.location.href = '/anidsames'; // Redirect to animes
                break;
            case 'settings-page':
                window.location.href = '/setasdtings'; // Redirect to settings
                break;
            case 'song-page':
                window.location.href = '/sosdangs'; // Redirect to songs
                break;
                case 'search-page':
                window.location.href = '/chatarewecosadokedindabig25'; // Redirect to search
                break;
            default:
                alert(`No match found for: ${pageId}, redirecting to home.`);
                window.location.href = '/dwq'; // Default to home if no match
                break;
        }
    }

    // Handle embedded pages
    if (pageId.startsWith('game-embed-') || pageId === 'proxy-embed') {
        const selectedEmbed = document.getElementById(pageId);
        if (selectedEmbed) {
            embedContainer.style.display = 'block'; // Show embed container
            selectedEmbed.style.display = 'block'; // Show specific embed
        }
    }

    // Update active navigation link
    updateActiveNavLink(pageId);
}

// Function to update the active navigation link
function updateActiveNavLink(pageId) {
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
}

// Set up navigation links with event listeners
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent page reload
        const pageId = link.getAttribute('href').substring(1); // Get the ID from href="#some-page"
        openPage(pageId); // Call your SPA function to switch pages
    });
});

// Handle initial page load based on URL hash, or default to home
const initialHash = window.location.hash.substring(1); // Get the hash part (e.g., "home-page")
const initialPageId = initialHash || 'home-page'; // If no hash, default to 'home-page'
openPage(initialPageId); // Open the correct page on load

// Handle browser back/forward buttons
window.addEventListener('hashchange', () => {
    const pageId = window.location.hash.substring(1);
    openPage(pageId || 'home-page'); // Default to home if hash becomes empty
});