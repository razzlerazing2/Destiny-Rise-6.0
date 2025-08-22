
    /* hop off, skids */
    const savedTheme = localStorage.getItem('background') || 'whatare';
    document.body.setAttribute('background', savedTheme);

    // Define the setTheme function globally
    function setBackground(background) {
        document.body.setAttribute('background', background);
        localStorage.setItem('background', background);
    }
document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <nav class="animated-content">
      <div class="nav-container">
        <ul class="nav-links">
          <li><a href="/home" title="Home"><i class="fas fa-home cuhs"></i></a></li>
          <li><a href="/games" title="Games"><i class="fas fa-gamepad cuhs"></i></a></li>
          <li><a href="/apps" title="Apps"><i class="fas fa-mobile-alt cuhs"></i></a></li>
          <li><a href="/animes" title="Animes"><i class="fas fa-tv cuhs"></i></a></li>
          <li><a href="/settings" title="Settings"><i class="fas fa-cogs cuhs"></i></a></li>
          <li><a href="/song" title="Songs"><i class="fas fa-music cuhs"></i></a></li>
        </ul>
      </div>
    </nav>
  `;

  // Insert nav at the top of the body (or wherever you want)
  document.body.insertAdjacentHTML("afterbegin", navHTML);
});
/*

    // ===============================================
    // SPA (Single Page Application) Core Logic
    // ===============================================

    // This function handles showing/hiding pages
    function openPage(pageId) {
        const pages = document.querySelectorAll('.page');
        const embeds = document.querySelectorAll('#embed-container iframe');
        const embedContainer = document.getElementById('embed-container');

        // Remove 'current-game-embed' class from all elements
        document.querySelectorAll('.current-game-embed').forEach(element => {
            element.classList.remove('current-game-embed');
        });

        // Hide all pages initially
        pages.forEach(page => {
            page.style.display = 'none';
        });

        // Hide all embeds and the embed container initially
        embeds.forEach(embed => {
            embed.style.display = 'none';
        });
        if (embedContainer) {
            embedContainer.style.display = 'none';
        }

        // Show the selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.style.display = 'block'; // Or 'flex' depending on your CSS layout for .page
        }

        // Special handling for embed-container if the opened page implies an embed
        // You might need to refine this if your games/proxies are in separate HTML files
        // and loaded into the iframe. This example assumes 'game-embed-1' and 'proxy-embed'
        // are the IDs of the iframes themselves.
        if (pageId.startsWith('game-embed-') || pageId === 'proxy-embed') {
            const selectedEmbed = document.getElementById(pageId);
            if (selectedEmbed && embedContainer) {
                embedContainer.style.display = 'block'; // Show embed container
                selectedEmbed.style.display = 'block'; // Show specific embed
                selectedEmbed.classList.add('current-game-embed'); // Apply class if needed
                // Optionally, hide all "regular" pages when an embed is active
                pages.forEach(page => page.style.display = 'none');
            }
        }

        // Update active navigation link in the menu
        const navLinks = document.querySelectorAll('.nav-links li a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Match the href with the current pageId
            if (link.getAttribute('href') === `#${pageId}`) {
                link.classList.add('active');
            }
        });

        // Update URL hash for direct linking and browser history
        history.pushState(null, '', `#${pageId}`);
    }

    // ===============================================
    // All Features Initialized on DOMContentLoaded
    // ===============================================
    */
    document.addEventListener('DOMContentLoaded', () => {
        // --- Music Player Setup ---
        const audioPlayer = document.getElementById('audio-player');
        const playPauseButton = document.getElementById('play-pause-button');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');
        const currentSongTitle = document.getElementById('current-song-title');
        const musicListDiv = document.getElementById('music-list');
        const musicSearchInput = document.getElementById('music-search');

        if (audioPlayer && playPauseButton && prevButton && nextButton && currentSongTitle && musicListDiv && musicSearchInput) {
            const allSongs = [
                { name: "Hope - XXXTentacion", url: "/assets/media/_music/hope.mp3" },
                { name: "Squabble Up - Kendrick Lamar", url: "/assets/media/_music/pfm.mp3" },
                { name: "Squabble Up - Kendrick Lamar", url: "/assets/media/_music/proveit.mp3" }, // good
                { name: "HAPPY - NF", url: "/assets/media/_music/HAPPY.mp3"}, // good
                { name: "Hide - Juice WRLD", url: "/assets/media/_music/hide.mp3" }, // good
                { name: "Ransom - Lil Tecca", url: "/assets/media/_music/ransomCUH.mp3" }, // good
                { name: "Lifestyle - Rich Gang", url: "/assets/media/_music/life.mp3" }, // good
                { name: "Big Dawgs - Hanumankind", url: "/assets/media/_music/bigdawgs.mp3" }, // good
                { name: "STD - Glorb", url: "/assets/media/_music/std.mp3" }, // good
                { name: "The Bottom - Glorb", url: "/assets/media/_music/bottom.mp3" }, // good
                { name: "The Bottom 2 - Glorb", url: "/assets/media/_music/bottom2.mp3" }, // good
                { name: "The Bottom 3 - Glorb", url: "/assets/media/_music/bottom3.mp3" }, // good
                { name: "Feel It - d4vd", url: "/assets/media/_music/feel.mp3" }, // good
                // { name: "FE!N - Travis Scott", url: "/assets/media/_music/fein.mp3" }, // not good
                { name: "Let You Down - NF", url: "/assets/media/_music/letyadown.mp3" }, // good
                { name: "Not Like Us - Kendrick Lamar", url: "/assets/media/_music/nlu.mp3" }, // good
                { name: "Fight Back - Neffex", url: "/assets/media/_music/fbn.mp3" }, // good
                 { name: "Crown - Neffex", url: "/assets/media/_music/crown-Lil'Cuzzin.mp3" },
                { name: "Grateful - Neffex", url: "/assets/media/_music/thankful.mp3" }, // good
                { name: "Roses - Juice WRLD", url: "/assets/media/_music/rosesCUH.mp3" }, // good
                { name: "From My Window - Juice WRLD", url: "/assets/media/_music/frommywindowCUH.mp3" }, // good
                { name: "Burn - Juice WRLD", url: "/assets/media/_music/burnjw.mp3" }, // good
                { name: "Squabble Up - Kendrick Lamar", url: "/assets/media/_music/squabbleup.mp3" }, // good
            ];

            let filteredPlaylist = [...allSongs];
            let currentSongIndex = 0;

            function loadSong(index) {
                if (filteredPlaylist.length === 0) {
                    audioPlayer.src = '';
                    currentSongTitle.textContent = 'No songs in playlist';
                    playPauseButton.disabled = true;
                    prevButton.disabled = true;
                    nextButton.disabled = true;
                    return;
                }

                currentSongIndex = (index + filteredPlaylist.length) % filteredPlaylist.length;
                const song = filteredPlaylist[currentSongIndex];
                audioPlayer.src = song.url;
                currentSongTitle.textContent = song.name;
                audioPlayer.play().catch(error => {
                    console.error("Autoplay prevented:", error);
                });
                playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
                updateActiveSongInList();
                playPauseButton.disabled = false;
                prevButton.disabled = false;
                nextButton.disabled = false;
            }

            function togglePlayPause() {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
                } else {
                    audioPlayer.pause();
                    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
                }
            }

            function playNextSong() {
                loadSong(currentSongIndex + 1);
            }

            function playPrevSong() {
                loadSong(currentSongIndex - 1);
            }

            function renderMusicList() {
                musicListDiv.innerHTML = '';
                if (filteredPlaylist.length === 0) {
                    musicListDiv.innerHTML = '<p class="no-music-message">No matching music found. Try a different search!</p>';
                    return;
                }

                filteredPlaylist.forEach((song, index) => {
                    const musicItem = document.createElement('div');
                    musicItem.classList.add('music-item');
                    musicItem.setAttribute('data-index', index);
                    musicItem.innerHTML = `
                        <div class="music-info">
                            <i class="fas fa-music"></i>
                            <span>${song.name}</span>
                        </div>
                        <div class="item-actions">
                            <button class="play-song-btn" title="Play this song"><i class="fas fa-play"></i></button>
                            <button class="ai-analyze-btn" title="Get AI Analysis ✨"><i class="fas fa-magic"></i></button>
                        </div>
                        <div class="ai-analysis-output hidden">
                            <p class="loading-analysis hidden">Analyzing...</p>
                            <p class="analysis-text"></p>
                        </div>
                    `;
                    musicListDiv.appendChild(musicItem);

                    musicItem.querySelector('.play-song-btn').addEventListener('click', () => {
                        loadSong(index);
                    });

                    musicItem.querySelector('.ai-analyze-btn').addEventListener('click', (event) => {
                        getSongAnalysis(song.name, event.currentTarget);
                    });
                });
                updateActiveSongInList();
            }

            function updateActiveSongInList() {
                document.querySelectorAll('.music-item').forEach(item => {
                    item.classList.remove('active');
                });
                const activeItem = document.querySelector(`.music-item[data-index="${currentSongIndex}"]`);
                if (activeItem) {
                    activeItem.classList.add('active');
                }
            }

            function searchMusic() {
                const searchTerm = musicSearchInput.value.toLowerCase();
                filteredPlaylist = allSongs.filter(song =>
                    song.name.toLowerCase().includes(searchTerm)
                );
                renderMusicList();

                const currentSong = filteredPlaylist[currentSongIndex];
                if (!currentSong || !currentSong.name.toLowerCase().includes(searchTerm)) {
                    if (filteredPlaylist.length > 0) {
                        loadSong(0);
                    } else {
                        audioPlayer.pause();
                        audioPlayer.src = '';
                        currentSongTitle.textContent = 'No songs in playlist';
                        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
                        playPauseButton.disabled = true;
                        prevButton.disabled = true;
                        nextButton.disabled = true;
                    }
                } else {
                    updateActiveSongInList();
                }
            }

            async function getSongAnalysis(songName, buttonElement) {
                const musicItem = buttonElement.closest('.music-item');
                const analysisOutput = musicItem.querySelector('.ai-analysis-output');
                const loadingAnalysis = musicItem.querySelector('.loading-analysis');
                const analysisText = musicItem.querySelector('.analysis-text');

                if (!analysisOutput.classList.contains('hidden') && analysisText.textContent !== '') {
                    analysisOutput.classList.add('hidden');
                    analysisText.textContent = '';
                    return;
                }

                analysisOutput.classList.remove('hidden');
                loadingAnalysis.classList.remove('hidden');
                analysisText.textContent = '';
                buttonElement.disabled = true;

                const prompt = `Provide a brief (2-3 sentences), creative description and suggest a mood/vibe for the song titled "${songName}". Focus on general musical characteristics or feelings it evokes.`;
                const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
                const payload = { contents: chatHistory };
                const apiKey = ""; // Leave this as-is; Canvas will provide it at runtime.
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        console.error("Gemini API Error:", response.status, response.statusText, errorData);
                        analysisText.textContent = `Error: Could not get analysis. ${errorData.error.message || 'Please try again.'}`;
                        return;
                    }

                    const result = await response.json();

                    if (result.candidates && result.candidates.length > 0 &&
                        result.candidates[0].content && result.candidates[0].content.parts &&
                        result.candidates[0].content.parts.length > 0) {
                        analysisText.textContent = result.candidates[0].content.parts[0].text;
                    } else {
                        analysisText.textContent = "Could not generate analysis for this song.";
                        console.error("Unexpected Gemini API response structure:", result);
                    }
                } catch (error) {
                    console.error("Network or API Call Error:", error);
                    analysisText.textContent = "Failed to connect to AI. Check your internet connection.";
                } finally {
                    loadingAnalysis.classList.add('hidden');
                    buttonElement.disabled = false;
                }
            }

            // Event Listeners for player controls
            playPauseButton.addEventListener('click', togglePlayPause);
            prevButton.addEventListener('click', playPrevSong);
            nextButton.addEventListener('click', playNextSong);
            audioPlayer.addEventListener('ended', playNextSong);
            musicSearchInput.addEventListener('keyup', searchMusic);
            renderMusicList();
            loadSong(currentSongIndex);
            audioPlayer.addEventListener('canplaythrough', () => {
                if (audioPlayer.paused && audioPlayer.currentTime === 0) {
                    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
                }
            }, { once: true });
            audioPlayer.addEventListener('play', () => {
                playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
            });
            audioPlayer.addEventListener('pause', () => {
                playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
            });
        }

  // --- Live Clock ---
            function updateClock() {
                const now = new Date();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                let seconds = now.getSeconds();
                const ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12;
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
                const clockElem = document.getElementById('live-clock');
                if (clockElem) {
                    clockElem.textContent = timeString;
                }
            }
            setInterval(updateClock, 1000);
            updateClock();

            // --- Intro Animation ---
            const preloader = document.getElementById('preloader');
            const animatedElements = document.querySelectorAll('.animated-content');
            setTimeout(() => {
                if (preloader) preloader.classList.add('hidden');
                animatedElements.forEach(element => {
                    element.classList.add('show');
                });
                // --- Active Navigation Link ---
                const navLinks = document.querySelectorAll('.nav-links li a');
                const currentPath = window.location.pathname;
                navLinks.forEach(link => {
                    const normalizedCurrentPath = currentPath.endsWith('/') && currentPath.length > 1
                        ? currentPath.slice(0, -1)
                        : currentPath;
                    const normalizedLinkPath = link.pathname.endsWith('/') && link.pathname.length > 1
                        ? link.pathname.slice(0, -1)
                        : link.pathname;
                    if (normalizedLinkPath === normalizedCurrentPath ||
                        (normalizedLinkPath === '/home' && normalizedCurrentPath === '/')) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }, 1000);
        });
            // ===============================================
            // CRITICAL: SPA Navigation Event Listeners
            // This was the missing piece for navigation.
            // ===============================================
           // const navLinks = document.querySelectorAll('.nav-links li a');
           /* navLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault(); // Stop the browser from doing a full page reload
                    const pageId = link.getAttribute('href').substring(1); // Get the ID from href="#some-page"
                    openPage(pageId); // Call your SPA function to switch pages
                });
            });

          /*  // Handle initial page load based on URL hash, or default to home
            const initialHash = window.location.hash.substring(1); // Get the hash part (e.g., "home-page")
            const initialPageId = initialHash || 'home-page'; // If no hash, default to 'home-page'
            openPage(initialPageId); // Open the correct page on load

           /* // Handle browser back/forward buttons
            window.addEventListener('hashchange', () => {
                const pageId = window.location.hash.substring(1);
                if (pageId) {
                    openPage(pageId);
                } else {
                    openPage('home-page'); // Default to home if hash becomes empty (e.g., after navigating back)
                }
            });*/

        // }, 500); // Delay for preloader to finish
    /* });

    /*🎵 BGM Playlist Player */
    /* I am commenting this out, bcuz i don't need these songs playlist. I already got a thing not ayo but yuh 🤨*/
    /*
      <audio id="bgm" autoplay hidden></audio>
      const playlist = [
          "/assets/media/audio/dabottom2.mp3",
          "/assets/media/audio/dabottom.mp3"
      ];
      const audio = document.getElementById("bgm");
      let currentTrack = parseInt(localStorage.getItem("bgmTrack")) || 0;
      let currentTime = parseFloat(localStorage.getItem("bgmTime")) || 0;
      audio.src = playlist[currentTrack];
      audio.currentTime = currentTime;
      audio.play().catch(() => {
          // Some browsers require interaction before playing audio
      });
      setInterval(() => {
          localStorage.setItem("bgmTrack", currentTrack);
          localStorage.setItem("bgmTime", audio.currentTime);
      }, 1000);
      audio.addEventListener("ended", () => {
          currentTrack = (currentTrack + 1) % playlist.length;
          localStorage.setItem("bgmTrack", currentTrack);
          localStorage.setItem("bgmTime", 0);
          audio.src = playlist[currentTrack];
          audio.play();
      });
    */
   const preloader = document.createElement("div");
preloader.id = "preloader";

const spinner = document.createElement("div");
spinner.className = "spinner";

// Add emoji inside an <h1> tag
const emoji = document.createElement("h1");
emoji.textContent = "💀";

// Nest elements
spinner.appendChild(emoji);
preloader.appendChild(spinner);

// Append to body
document.body.appendChild(preloader);
