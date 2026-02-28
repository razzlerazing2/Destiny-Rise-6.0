// hop off skids

// Particles
window.onload = function() {
    console.log("Window loaded, attempting to load particles.js");
    particlesJS.load('particles-js', '/assets/json/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
};

// Themes and backgrounds
(function() {
  const BG_KEY = 'background';
  const THEME_KEY = 'theme';

  const $ = (selector) => document.querySelector(selector);

  // Restore saved background & theme on page load
  window.addEventListener('DOMContentLoaded', () => {
 const savedBg = localStorage.getItem(BG_KEY) || 'cuhs';
    const savedTheme = localStorage.getItem(THEME_KEY) || 'whathuhs';

    // Apply saved attributes
    document.body.setAttribute('background', savedBg);
    document.body.setAttribute('theme', savedTheme);

    // Update dropdowns to show saved text
    const bgSelect = $('.backgroundChange');
    if (bgSelect) {
      const option = Array.from(bgSelect.options).find(o => o.value === savedBg);
      if (option) bgSelect.value = savedBg;
    }

    const themeSelect = $('.themeChange');
    if (themeSelect) {
      const option = Array.from(themeSelect.options).find(o => o.value === savedTheme);
      if (option) themeSelect.value = savedTheme;
    }
  });

  // Background setter
  window.setBackground = function(value) {
    if (!value) return;
    localStorage.setItem(BG_KEY, value);
    document.body.setAttribute('background', value);

    const bgSelect = $('.backgroundChange');
    if (bgSelect) bgSelect.value = value;
  };

  // Theme setter
  window.setTheme = function(value) {
    if (!value) return;
    localStorage.setItem(THEME_KEY, value);
    document.body.setAttribute('theme', value);

    const themeSelect = $('.themeChange');
    if (themeSelect) themeSelect.value = value;
  };
})();




class TypeDown {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.isDeleting = false;
        this.currentWordIndex = -1; // Start with no word selected
        this.tick();
    }
    tick() {
        // Select the next word only when the current one is fully displayed or deleted
        if (!this.isDeleting && this.txt === "") {
            this.currentWordIndex = Math.floor(Math.random() * this.toRotate.length);
        }

        const fullTxt = this.toRotate[this.currentWordIndex];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
this.el.innerHTML = '<span class="typewriter">' + this.txt + "</span>";

        let delta = 150 - Math.random() * 250;

        if (this.isDeleting) {
            delta /= 2; // Speed up deletion
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period; // Pause before deleting
            this.isDeleting = true; // Start deleting
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false; // Finished deleting
            delta = 500; // Delay before starting the next word
        }

        setTimeout(() => this.tick(), delta);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.getElementsByClassName("random-word-generator");
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute("randomWords");
        const period = elements[i].getAttribute("time");
        if (toRotate) {
            new TypeDown(elements[i], JSON.parse(toRotate), period);
        }
    }
});


// new code
// Define the words for the random word function
const words = [
    "Games, Apps, Music, Anime, UI",
    "Ragebait Teachers today!",
    "Jump Lil Bro",
    "I hate iPad kids",
    "Athletics is fun!",
    "Copyright DR",
    "Melly Mike just like steph yeah yeah cuz he don't miss🔥",
    "I love rap + Basketball + Roblox + Coding!",
];

function generateRandomWord() {
    const wordDisplay = document.getElementById('randomWord');

    // Start shrinking effect
    wordDisplay.style.transform = 'scale(0)';
    wordDisplay.style.opacity = '0';

    // After the shrink animation, change the word
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * words.length);
        wordDisplay.innerText = words[randomIndex];

        // Start growing effect
        wordDisplay.style.transform = 'scale(1)';
        wordDisplay.style.opacity = '1';
    }, 500);
}
setInterval(generateRandomWord, 2000);

document.addEventListener('DOMContentLoaded', function() {
      /* const particles = [];
        const connections = [];
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 4 + 2; // Particle size between 2px and 6px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * window.innerWidth}px`;
            particle.style.top = `${Math.random() * window.innerHeight}px`;
            document.body.appendChild(particle);
            particles.push(particle);

            // Remove the particle after some time
            setTimeout(() => {
                particle.remove();
                particles.splice(particles.indexOf(particle), 1);
            }, 5000); // Particles last for 5 seconds
        }

        function connectParticles() {
            const distance = 150; // Connect particles within this distance
            const connectionLine = document.createElement('div');

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[j].offsetLeft - particles[i].offsetLeft;
                    const dy = particles[j].offsetTop - particles[i].offsetTop;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < distance) {
                        connectionLine.className = 'line';
                        const lineX = (particles[i].offsetLeft + particles[j].offsetLeft) / 2;
                        const lineY = (particles[i].offsetTop + particles[j].offsetTop) / 2;
                        const angle = Math.atan2(dy, dx);
                        const length = dist;

                        connectionLine.style.width = `${length}px`;
                        connectionLine.style.transform = `translate(${lineX}px, ${lineY}px) rotate(${angle}rad)`;
                        document.body.appendChild(connectionLine);
                        connections.push(connectionLine);
                    }
                }
            }

            // Remove connection lines after a short duration
            setTimeout(() => {
                connections.forEach(line => line.remove());
                connections.length = 0;
            }, 1000);
        }*/
       setInterval(updateStatusDisplay, 1000);
      /*  setInterval(createParticle, 200);
        setInterval(connectParticles, 800);*/
    const statusElement = document.getElementById('status-display');

    // Check for the status element immediately
    if (!statusElement) {
        console.error('Error: Could not find element with id "status-display".');
        return;
    }

    let batteryInfo = 'Checking battery...';

    // Function to format the current time
    function updateClockTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // The hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    }

    // Function to handle and update the battery status
    function updateBatteryStatus(battery) {
        const batteryLevel = Math.round(battery.level * 100);
        const charging = battery.charging ? '🔌⚡ Charging' : '🔋 Not Charging';
        batteryInfo = `Battery: ${batteryLevel}% (${charging})`;

        battery.addEventListener('levelchange', updateStatusDisplay);
        battery.addEventListener('chargingchange', updateStatusDisplay);
    }

    // Single function to update the display text
    function updateStatusDisplay() {
        const timeString = updateClockTime();
        statusElement.textContent = `${timeString} | ${batteryInfo}`;
    }
    // --- Main Execution (scoped) ---

    // Handle battery info
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            updateBatteryStatus(battery);
            updateStatusDisplay();
        }).catch(error => {
            console.error('Could not get battery information:', error);
            batteryInfo = 'Battery info unavailable';
            updateStatusDisplay();
        });
    } else {
        console.warn('Battery Status API is not supported in this browser.');
        batteryInfo = 'Battery info unavailable';
        updateStatusDisplay();
    }
    // --- Particle functions (integrated) ---
});


      // Music
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
                { name: "The Box - Roddy Ricch", url: "/assets/media/partial_song/box.mp3" },
                  { name: "Young, Black & Rich - Melly Mike", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/ybr.mp3" },
                { name: "From My Window - Juicе WRLD", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/frommywindowCUH.mp3" },
                { name: "Overseas - Ken Carson", url: "/assets/media/partial_song/2.m4a" },
                { name: "Dum, Dumb, & Dumber - Lil baby", url: "/assets/media/partial_song/3.m4a" },
                { name: "Money Trees - Kendrick Lamar", url: "/assets/media/partial_song/4.m4a" },
                { name: "HUMBLE - Kendrick Lamar", url: "/assets/media/partial_song/5.m4a" }, // good
                 { name: "Beatbox 4 - NLE Choppa (ft. SpottemGottem)", url: "/assets/media/partial_song/6741.m4a" },
                { name: "Hope - XXXTentacion", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/hope.mp3" },
                { name: "Pray for me - Kendrick Lamar & The Weeknd", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/pfm.mp3" },
                { name: "Prove it - 21 Savage", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/proveit.mp3" }, // good
                { name: "Ransom - Lil Tecca", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/ransomCUH.mp3" }, // good
                { name: "Lifestylе - Rich Gang", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/life.mp3" }, // good
                { name: "Big Dawgs - Hanumankind", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/bigdawgs.mp3" }, // good
                 { name: "Goosebumps - Travis Scott", url: "/assets/media/partial_song/rickowen.m4a" }, // good
                { name: "VENGEANCE - Glorb", url: "/assets/media/partial_song/1.m4a" },
                { name: "STD - Glorb", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/std.mp3" }, // good
                { name: "The Bottom - Glorb", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/bottom.mp3" }, // good
                { name: "The Bottom 2 - Glorb", url: "https://github.com/razzlerazing2/Destiny-Rise-6.0/raw/d86f2ebaa83bc5d42ff428708d67fcb6a9fa5fc7/src/assets/media/_music/bottom2.mp3" }, // good
                { name: "The Bottom 3 - Glorb", url: "https://github.com/razzlerazing2/Destiny-Rise-6.0/raw/d86f2ebaa83bc5d42ff428708d67fcb6a9fa5fc7/src/assets/media/_music/bottom3.mp3" }, // good
                { name: "HAPPY - NF", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/HAPPY.mp3" }, // good
                { name: "Hide - Juicе WRLD", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/hide.mp3" }, // good
                { name: "Feel It - d4vvd", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/feel.mp3" }, // good
                // { name: "FE!N - Travis Scott", url: "/assets/media/_music/fein.mp3" }, // not good
                { name: "Let You Down - NF", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/letyadown.mp3" }, // good
                { name: "Not like us - Kendrick Lamar", url: "/assets/media/partial_song/e.m4a" }, // good
                { name: "Fight back - Neffex", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/fbn.mp3" }, // good
                 { name: "Crown Neffex", url: "https://github.com/razzlerazing2/Destiny-Rise-6.0/raw/d86f2ebaa83bc5d42ff428708d67fcb6a9fa5fc7/src/assets/media/_music/crown-Lil'Cuzzin.mp3" },
                { name: "Grateful - Neffex", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/thankful.mp3" }, // good
                { name: "Roses - Juice WRLD", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/rosesCUH.mp3" }, // good
                { name: "Burn - Juice WRLD", url: "https://github.com/razzlerazing2/Destiny-Rise-6.0/raw/d86f2ebaa83bc5d42ff428708d67fcb6a9fa5fc7/src/assets/media/_music/burnjw.mp3" }, // good
                { name: "Squabble up - Kendrick Lamar", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/squabbleup.mp3" }, // good
                { name: "Dia Delicia - NAKAMA", url: "/assets/media/partial_song/diadelicia.mp3" },
                { name: "Accelerada - MXZI", url: "/assets/media/partial_song/accelerate.mp3" },
                { name: "Montagem Tomada - MXZI", url: "/assets/media/partial_song/tomada.mp3" },
                { name: "Montagem Ladrao - ATLXS", url: "/assets/media/partial_song/ladrao.mp3" },
                { name: "Montagem Coma - Andromeda", url: "/assets/media/partial_song/coma.mp3" },
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
                    musicListDiv.innerHTML = '<p class="no-music-message">No matching music found. Try a different search.</p>';
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
                            <button class="play-song-btn" title="Play This song"><i class="fas fa-play"></i></button>
                            <button class="ai-analyze-btn" title="Get AI analysis ✨"><i class="fas fa-magic"></i></button>
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

                const prompt = ` Provide a brief creative description and suggest a mood/vibe for the song titled ${songName}. Focus on feelings it evokes`;
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
                        analysisText.textContent = `Error: could not get analysis. ${errorData.error.message || 'Please try again.'}`;
                        return;
                    }

                    const result = await response.json();

                    if (result.candidates && result.candidates.length > 0 &&
                        result.candidates[0].content && result.candidates[0].content.parts &&
                        result.candidates[0].content.parts.length > 0) {
                        analysisText.textContent = result.candidates[0].content.parts[0].text;
                    } else {
                        analysisText.textContent = "Could not generate analysis for this song..";
                        console.error("Unexpected Gemini API response structure:", result);
                    }
                } catch (error) {
                    console.error("Network or API Call Error:", error);
                    analysisText.textContent = "Failed to connect to AI. Check internet connection.";
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
                        (normalizedLinkPath === '/' && normalizedCurrentPath === '/')) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }, 3000);
    });


       //  }, 500); // Delay for preloader to finish
    // });

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
const loadingText = document.createElement("h6");
loadingText.textContent = "Destiny Rise 6.0";
// loadingText.classList.add("glowing-text"); we commented this because we don't want it to affect our loading screen color.
const spinner = document.createElement("div");
spinner.className = "spinner";
const loader = document.createElement("div");
loader.className = "loader";
const emoji = document.createElement("h2");
 emoji.textContent = "💀";
const dot1 = document.createElement("div");
dot1.className = "dot";

const dot2 = document.createElement("div");
dot2.className = "dot";

const dot3 = document.createElement("div");
dot3.className = "dot";
// loader.appendChild(dot1);
// loader.appendChild(dot2);
// loader.appendChild(dot3);
preloader.appendChild(loadingText);
//preloader.appendChild(spinner);
preloader.appendChild(loader);
//spinner.appendChild(emoji);
document.body.appendChild(preloader);
function _() {
    var win = window.open('about:blank');
    var url = 'index.html';

    if (win) {     const name = localStorage.getItem("name") || "Algebra Academy | Dashboard";
        const icon =
            localStorage.getItem("icon") ||
            "/assets/media/favicon/_trick.png";

        win.document.title = name;

        const link = win.document.createElement("link");
        link.rel = "icon";
        link.type = "image/png";
        link.href = encodeURI(icon);
        win.document.head.appendChild(link);
        var iframe = win.document.createElement('iframe');
        iframe.style.cssText = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
        iframe.src = url;
        win.document.body.appendChild(iframe);
        window.location.href = 'https://portal.friscoisd.org';
    } else {
        alert("Popup blocked! Please enable popups for this site to work.");
    }
}
function $() {
    window.location.href = "/home"
}
// Favicon
function setFavicon(url) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = url;
    document.head.appendChild(link);
}
setFavicon('/assets/media/favicon/_trick.png');
// Title
function setTitle(title) {
    document.title = title;
}
window.onload = function() {
    setTitle("Algebra Academy | Dashboard");
};