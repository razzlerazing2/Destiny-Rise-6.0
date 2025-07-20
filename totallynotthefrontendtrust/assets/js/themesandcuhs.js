/* hop off, skids */
// Apply saved theme on page load
        const savedTheme = localStorage.getItem('theme') || 'cuhs3';
        document.body.setAttribute('theme', savedTheme);

        // Define the setTheme function globally
        function setTheme(theme) {
            document.body.setAttribute('theme', theme);
            localStorage.setItem('theme', theme);
        }

        // --- Combined DOMContentLoaded for all features ---
        document.addEventListener('DOMContentLoaded', () => {
            // --- Theme already applied at top ---

            // --- Music Player Setup ---
            const audioPlayer = document.getElementById('audio-player');
            const playPauseButton = document.getElementById('play-pause-button');
            const prevButton = document.getElementById('prev-button');
            const nextButton = document.getElementById('next-button');
            const currentSongTitle = document.getElementById('current-song-title');
            const musicListDiv = document.getElementById('music-list');
            const musicSearchInput = document.getElementById('music-search');

            // Only run music player code if all required elements exist
            if (audioPlayer && playPauseButton && prevButton && nextButton && currentSongTitle && musicListDiv && musicSearchInput) {
                // Define your playlist here
                const allSongs = [ // Renamed to allSongs to distinguish from filtered playlist
                    // CORRECTED URL FOR 'Feel it'
                    { name: "Hide - Juice WRLD", url: "/assets/media/_music/hide.mp3" },
                    { name: "Ransom - Lil Tecca", url: "/assets/media/_music/ransomCUH.mp3" },
                    { name: "The Bottom - Glorb", url: "/assets/media/_music/bottom.mp3" },
                    { name: "The Bottom 2 - Glorb", url: "/assets/media/_music/bottom2.mp3" },
                    { name: "Feel It - d4vd", url: "/assets/media/_music/feel.mp3" },
                    { name: "FE!N - Travis Scott", url: "/assets/media/_music/fein.mp3" },
                    { name: "Let You Down - NF", url: "/assets/media/_music/letyadown.mp3" },
                    { name: "Not Like Us - Kendrick Lamar", url: "/assets/media/_music/nlu.mp3" },
                    { name: "Squabble Up - Kendrick Lamar", url: "/assets/media/_music/squabbleup.mp3" },
                    // Add more songs here
                    // Example: { name: "My Awesome Song", url: "/assets/music/my_awesome_song.mp3" },
                ];

                let filteredPlaylist = [...allSongs]; // Initialize with all songs
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

                    currentSongIndex = (index + filteredPlaylist.length) % filteredPlaylist.length; // Ensure index wraps around
                    const song = filteredPlaylist[currentSongIndex];
                    audioPlayer.src = song.url;
                    currentSongTitle.textContent = song.name;
                    audioPlayer.play().catch(error => {
                        console.error("Autoplay prevented:", error);
                        // Optionally show a message to the user to manually play
                    });
                    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // Set to pause icon
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
                    musicListDiv.innerHTML = ''; // Clear existing list
                    if (filteredPlaylist.length === 0) {
                        musicListDiv.innerHTML = '<p class="no-music-message">No matching music found. Try a different search!</p>';
                        return;
                    }

                    filteredPlaylist.forEach((song, index) => {
                        const musicItem = document.createElement('div');
                        musicItem.classList.add('music-item');
                        musicItem.setAttribute('data-index', index); // Use index within filteredPlaylist
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

                        // Add event listener to play specific song
                        musicItem.querySelector('.play-song-btn').addEventListener('click', () => {
                            loadSong(index);
                        });

                        // Add event listener for AI analysis button
                        musicItem.querySelector('.ai-analyze-btn').addEventListener('click', (event) => {
                            getSongAnalysis(song.name, event.currentTarget);
                        });
                    });
                    updateActiveSongInList(); // Highlight the currently playing song
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

                // --- Search Functionality ---
                function searchMusic() {
                    const searchTerm = musicSearchInput.value.toLowerCase();
                    filteredPlaylist = allSongs.filter(song =>
                        song.name.toLowerCase().includes(searchTerm)
                    );
                    // After filtering, re-render the list
                    renderMusicList();

                    // If the currently playing song is no longer in the filtered list,
                    // or if the filtered list is empty, reset the player.
                    const currentSong = filteredPlaylist[currentSongIndex];
                    if (!currentSong || !currentSong.name.toLowerCase().includes(searchTerm)) {
                        if (filteredPlaylist.length > 0) {
                            loadSong(0); // Load the first song of the filtered list
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
                        updateActiveSongInList(); // Ensure highlight is correct for current song
                    }
                }

                // --- AI Song Analysis Functionality ---
                async function getSongAnalysis(songName, buttonElement) {
                    const musicItem = buttonElement.closest('.music-item');
                    const analysisOutput = musicItem.querySelector('.ai-analysis-output');
                    const loadingAnalysis = musicItem.querySelector('.loading-analysis');
                    const analysisText = musicItem.querySelector('.analysis-text');

                    // Toggle visibility if already open
                    if (!analysisOutput.classList.contains('hidden') && analysisText.textContent !== '') {
                        analysisOutput.classList.add('hidden');
                        analysisText.textContent = ''; // Clear content when hiding
                        return;
                    }

                    analysisOutput.classList.remove('hidden');
                    loadingAnalysis.classList.remove('hidden');
                    analysisText.textContent = ''; // Clear previous text
                    buttonElement.disabled = true; // Disable button during analysis

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
                        buttonElement.disabled = false; // Re-enable button
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
            }, 500);
        });
            /*🎵 BGM Playlist Player
    <audio id="bgm" autoplay hidden></audio>
    <script>
        const playlist = [
            "/assets/media/audio/dabottom2.mp3",
            "/assets/media/audio/dabottom.mp3"
        ];

          const audio = document.getElementById("bgm");

    // Restore previous track/time from localStorage
    let currentTrack = parseInt(localStorage.getItem("bgmTrack")) || 0;
    let currentTime = parseFloat(localStorage.getItem("bgmTime")) || 0;

    audio.src = playlist[currentTrack];
    audio.currentTime = currentTime;

    audio.play().catch(() => {
        // Some browsers require interaction before playing audio
    });

    // Save state every few seconds
    setInterval(() => {
        localStorage.setItem("bgmTrack", currentTrack);
        localStorage.setItem("bgmTime", audio.currentTime);
    }, 1000);

    // When track ends, go to the next one and save index
    audio.addEventListener("ended", () => {
        currentTrack = (currentTrack + 1) % playlist.length;
        localStorage.setItem("bgmTrack", currentTrack);
        localStorage.setItem("bgmTime", 0);
        audio.src = playlist[currentTrack];
        audio.play();
    }); */