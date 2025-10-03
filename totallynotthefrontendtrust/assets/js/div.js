/* hop off, skids */
window.onload = function() {
    console.log("Window loaded, attempting to load particles.js");
    particlesJS.load('particles-js', '/assets/json/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
};
const savedTheme = localStorage.getItem('background') || 'cuh';
document.body.setAttribute('background', savedTheme);

// Define the setTheme function globally
function setBackground(background) {
    document.body.setAttribute('background', background);
    localStorage.setItem('background', background);

    // Show alert when background is changed
    alert("𝔹𝕒𝕔𝕜𝕘𝕣𝕠𝕦𝕟𝕕 𝕙𝕒𝕤 𝕓𝕖𝕖𝕟 𝕔𝕙𝕒𝕟𝕘𝕖𝕕 𝕥𝕠: " + background);
}





const savedBackground = localStorage.getItem('theme') || 'whatss';
document.body.setAttribute('theme', savedBackground);

// Define the setTheme function globally
function setTheme(theme) {
    document.body.setAttribute('theme', theme);
    localStorage.setItem('theme', theme);
    // Show alert when theme is changed
    alert("𝕋𝕙𝕖𝕞𝕖 𝕙𝕒𝕤 𝕓𝕖𝕖𝕟 𝕔𝕙𝕒𝕟𝕘𝕖𝕕 𝕥𝕠: " + theme);
}
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
                { name: "𝕐𝕠𝕦𝕟𝕘, 𝔹𝕝𝕒𝕔𝕜 & ℝ𝕚𝕔𝕙 - 𝕄𝕖𝕝𝕝𝕪 𝕄𝕚𝕜𝕖", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/ybr.mp3" },
                 { name: "𝔽𝕣𝕠𝕞 𝕄𝕪 𝕎𝕚𝕟𝕕𝕠𝕨 - 𝕁𝕦𝕚𝕔𝕖 𝕎ℝ𝕃𝔻", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/frommywindowCUH.mp3" }, // good
                { name: "ℍ𝕠𝕡𝕖 - 𝕏𝕏𝕏𝕋𝕖𝕟𝕥𝕒𝕔𝕚𝕠𝕟", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/hope.mp3" },
                { name: "ℙ𝕣𝕒𝕪 𝕗𝕠𝕣 𝕞𝕖 - 𝕂𝕖𝕟𝕕𝕣𝕚𝕔𝕜 𝕃𝕒𝕞𝕒𝕣 & 𝕋𝕙𝕖 𝕎𝕖𝕖𝕜𝕟𝕕", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/pfm.mp3" },
                { name: "ℙ𝕣𝕠𝕧𝕖 𝕚𝕥 - 𝟚𝟙 𝕊𝕒𝕧𝕒𝕘𝕖", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/proveit.mp3" }, // good
                { name: "ℝ𝕒𝕟𝕤𝕠𝕞 - 𝕃𝕚𝕝 𝕋𝕖𝕔𝕔𝕒", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/ransomCUH.mp3" }, // good
                { name: "𝕃𝕚𝕗𝕖𝕤𝕥𝕪𝕝𝕖 - ℝ𝕚𝕔𝕙 𝔾𝕒𝕟𝕘", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/life.mp3" }, // good
                { name: "𝔹𝕚𝕘 𝔻𝕒𝕨𝕘𝕤 - ℍ𝕒𝕟𝕦𝕞𝕒𝕟𝕜𝕚𝕟𝕕", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/bigdawgs.mp3" }, // good
                { name: "𝕊𝕋𝔻 - 𝔾𝕝𝕠𝕣𝕓", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/std.mp3" }, // good
                { name: "𝕋𝕙𝕖 𝔹𝕠𝕥𝕥𝕠𝕞 - 𝔾𝕝𝕠𝕣𝕓", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/bottom.mp3" }, // good
                { name: "𝕋𝕙𝕖 𝔹𝕠𝕥𝕥𝕠𝕞 2 - 𝔾𝕝𝕠𝕣𝕓", url: "https://github.com/razzlerazing2/Destiny-Rise-6.0/raw/d86f2ebaa83bc5d42ff428708d67fcb6a9fa5fc7/totallynotthefrontendtrust/assets/media/_music/bottom2.mp3" }, // good
                { name: "𝕋𝕙𝕖 𝔹𝕠𝕥𝕥𝕠𝕞 3 - 𝔾𝕝𝕠𝕣𝕓", url: "https://github.com/razzlerazing2/Destiny-Rise-6.0/raw/d86f2ebaa83bc5d42ff428708d67fcb6a9fa5fc7/totallynotthefrontendtrust/assets/media/_music/bottom3.mp3" }, // good
                 { name: "ℍ𝔸ℙℙ𝕐 - ℕ𝔽", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/HAPPY.mp3"}, // good
                { name: "ℍ𝕚𝕕𝕖 - 𝕁𝕦𝕚𝕔𝕖 𝕎ℝ𝕃𝔻", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/hide.mp3" }, // good
                { name: "𝔽𝕖𝕖𝕝 𝕀𝕥 - 𝕕𝟜𝕧𝕕", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/feel.mp3" }, // good
             // { name: "FE!N - Travis Scott", url: "/assets/media/_music/fein.mp3" }, // not good
                { name: "𝕃𝕖𝕥 𝕐𝕠𝕦 𝔻𝕠𝕨𝕟 - ℕ𝔽", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/letyadown.mp3" }, // good
                { name: "ℕ𝕠𝕥 𝕃𝕚𝕜𝕖 𝕌𝕤 - 𝕂𝕖𝕟𝕕𝕣𝕚𝕔𝕜 𝕃𝕒𝕞𝕒𝕣", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/nlu.mp3" }, // good
                { name: "𝔽𝕚𝕘𝕙𝕥 𝔹𝕒𝕔𝕜 - ℕ𝕖𝕗𝕗𝕖𝕩", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/fbn.mp3" }, // good
                 { name: "ℂ𝕣𝕠𝕨𝕟 - ℕ𝕖𝕗𝕗𝕖𝕩", url: "https://github.com/razzlerazing2/Destiny-Rise-6.0/raw/d86f2ebaa83bc5d42ff428708d67fcb6a9fa5fc7/totallynotthefrontendtrust/assets/media/_music/crown-Lil'Cuzzin.mp3" },
                { name: "𝔾𝕣𝕒𝕥𝕖𝕗𝕦𝕝 - ℕ𝕖𝕗𝕗𝕖𝕩", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/thankful.mp3" }, // good
                { name: "ℝ𝕠𝕤𝕖𝕤 - 𝕁𝕦𝕚𝕔𝕖 𝕎ℝ𝕃𝔻", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/rosesCUH.mp3" }, // good
                { name: "𝔹𝕦𝕣𝕟 - 𝕁𝕦𝕚𝕔𝕖 𝕎ℝ𝕃𝔻", url: "https://github.com/razzlerazing2/Destiny-Rise-6.0/raw/d86f2ebaa83bc5d42ff428708d67fcb6a9fa5fc7/totallynotthefrontendtrust/assets/media/_music/burnjw.mp3" }, // good
                { name: "𝕊𝕢𝕦𝕒𝕓𝕓𝕝𝕖 𝕌𝕡 - 𝕂𝕖𝕟𝕕𝕣𝕚𝕔𝕜 𝕃𝕒𝕞𝕒𝕣", url: "https://github.com/razzlerazing4/music-file-storage/raw/refs/heads/main/squabbleup.mp3" }, // good
            ];

            let filteredPlaylist = [...allSongs];
            let currentSongIndex = 0;

            function loadSong(index) {
                if (filteredPlaylist.length === 0) {
                    audioPlayer.src = '';
                    currentSongTitle.textContent = 'ℕ𝕠 𝕤𝕠𝕟𝕘𝕤 𝕚𝕟 𝕡𝕝𝕒𝕪𝕝𝕚𝕤𝕥';
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
                    musicListDiv.innerHTML = '<p class="no-music-message">ℕ𝕠 𝕞𝕒𝕥𝕔𝕙𝕚𝕟𝕘 𝕞𝕦𝕤𝕚𝕔 𝕗𝕠𝕦𝕟𝕕. 𝕋𝕣𝕪 𝕒 𝕕𝕚𝕗𝕗𝕖𝕣𝕖𝕟𝕥 𝕤𝕖𝕒𝕣𝕔𝕙!</p>';
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
                            <button class="play-song-btn" title="ℙ𝕝𝕒𝕪 𝕥𝕙𝕚𝕤 𝕤𝕠𝕟𝕘"><i class="fas fa-play"></i></button>
                            <button class="ai-analyze-btn" title="𝔾𝕖𝕥 𝔸𝕀 𝔸𝕟𝕒𝕝𝕪𝕤𝕚𝕤 ✨"><i class="fas fa-magic"></i></button>
                        </div>
                        <div class="ai-analysis-output hidden">
                            <p class="loading-analysis hidden">𝔸𝕟𝕒𝕝𝕪𝕫𝕚𝕟𝕘...</p>
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
                        currentSongTitle.textContent = 'ℕ𝕠 𝕤𝕠𝕟𝕘𝕤 𝕚𝕟 𝕡𝕝𝕒𝕪𝕝𝕚𝕤𝕥';
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

                const prompt = `ℙ𝕣𝕠𝕧𝕚𝕕𝕖 𝕒 𝕓𝕣𝕚𝕖𝕗 (𝟚-𝟛 𝕤𝕖𝕟𝕥𝕖𝕟𝕔𝕖𝕤), 𝕔𝕣𝕖𝕒𝕥𝕚𝕧𝕖 𝕕𝕖𝕤𝕔𝕣𝕚𝕡𝕥𝕚𝕠𝕟 𝕒𝕟𝕕 𝕤𝕦𝕘𝕘𝕖𝕤𝕥 𝕒 𝕞𝕠𝕠𝕕/𝕧𝕚𝕓𝕖 𝕗𝕠𝕣 𝕥𝕙𝕖 𝕤𝕠𝕟𝕘 𝕥𝕚𝕥𝕝𝕖𝕕 "${songName}". 𝔽𝕠𝕔𝕦𝕤 𝕠𝕟 𝕘𝕖𝕟𝕖𝕣𝕒𝕝 𝕞𝕦𝕤𝕚𝕔𝕒𝕝 𝕔𝕙𝕒𝕣𝕒𝕔𝕥𝕖𝕣𝕚𝕤𝕥𝕚𝕔𝕤 𝕠𝕣 𝕗𝕖𝕖𝕝𝕚𝕟𝕘𝕤 𝕚𝕥 𝕖𝕧𝕠𝕜𝕖𝕤.`;
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
                        analysisText.textContent = `𝔼𝕣𝕣𝕠𝕣: ℂ𝕠𝕦𝕝𝕕 𝕟𝕠𝕥 𝕘𝕖𝕥 𝕒𝕟𝕒𝕝𝕪𝕤𝕚𝕤. ${errorData.error.message || 'ℙ𝕝𝕖𝕒𝕤𝕖 𝕥𝕣𝕪 𝕒𝕘𝕒𝕚𝕟.'}`;
                        return;
                    }

                    const result = await response.json();

                    if (result.candidates && result.candidates.length > 0 &&
                        result.candidates[0].content && result.candidates[0].content.parts &&
                        result.candidates[0].content.parts.length > 0) {
                        analysisText.textContent = result.candidates[0].content.parts[0].text;
                    } else {
                        analysisText.textContent = "ℂ𝕠𝕦𝕝𝕕 𝕟𝕠𝕥 𝕘𝕖𝕟𝕖𝕣𝕒𝕥𝕖 𝕒𝕟𝕒𝕝𝕪𝕤𝕚𝕤 𝕗𝕠𝕣 𝕥𝕙𝕚𝕤 𝕤𝕠𝕟𝕘.";
                        console.error("Unexpected Gemini API response structure:", result);
                    }
                } catch (error) {
                    console.error("Network or API Call Error:", error);
                    analysisText.textContent = "𝔽𝕒𝕚𝕝𝕖𝕕 𝕥𝕠 𝕔𝕠𝕟𝕟𝕖𝕔𝕥 𝕥𝕠 𝔸𝕀. ℂ𝕙𝕖𝕔𝕜 𝕪𝕠𝕦𝕣 𝕚𝕟𝕥𝕖𝕣𝕟𝕖𝕥 𝕔𝕠𝕟𝕟𝕖𝕔𝕥𝕚𝕠𝕟.";
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

const spinner = document.createElement("div");
spinner.className = "spinner";

// Add emoji inside an <h1> tag
const emoji = document.createElement("h1");
 emoji.textContent = "";
//emoji.textContent = "🔥";
// Nest elements
spinner.appendChild(emoji);
preloader.appendChild(spinner);

// Append to body
document.body.appendChild(preloader);
function aboutblank() {
            var win = window.open('about:blank');
            var url = 'index.html';
            var iframe = win.document.createElement('iframe');
            iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
            iframe.src = url;
            win.document.body.appendChild(iframe);

            window.location.href = 'https://portal.friscoisd.org';
        }