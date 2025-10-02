// skids, hop off or hope to see a job application
/*let particlesEnabled;

function loadParticles() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 150, density: { enable: false } },
      color: { value: ["#fff"] },
      shape: { type: ["circle"], stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: 6 }, image: { src: "img/github.svg", width: 100, height: 100 } },
      opacity: { value: 0.5, random: false, anim: { enable: true, speed: 9, opacity_min: 0.67, sync: false } },
      size: { value: 5, random: true, anim: { enable: true, speed: 9, size_min: 0.67, sync: false } },
      line_linked: { enable: false, distance: 150, color: "#ffffff", opacity: 3, width: 3 },
      move: { enable: true, speed: 9, direction: "none", random: false, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "push" }, resize: true },
      modes: { grab: { distance: 200, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 9.67 }, repulse: { distance: 200, duration: 1 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
  });
}

function disableParticles() {
  particlesJS("particles-js", { particles: { number: { value: 0 } } });
}

function toggleParticles() {
  if (particlesEnabled) {
    disableParticles();
    particlesEnabled = false;
    localStorage.setItem("particlesEnabled", "false");
  } else {
    loadParticles();
    particlesEnabled = true;
    localStorage.setItem("particlesEnabled", "true");
  }
}

// Modified section to start particles OFF by default
if (localStorage.getItem("particlesEnabled") === null) {
  particlesEnabled = false; // Set to false to start OFF
  disableParticles(); // Call disableParticles to ensure they are off
  localStorage.setItem("particlesEnabled", "false"); // Store the initial state
} else if (localStorage.getItem("particlesEnabled") === "false") {
  particlesEnabled = false;
  disableParticles();
} else {
  particlesEnabled = true;
  loadParticles();
}

document.getElementById("toggleParticles").addEventListener("click", toggleParticles);
*/

// Particles Enabled
// Particles 
let particlesEnabled; function loadParticles() { particlesJS("particles-js", { particles: { number: { value: 150, density: { enable: false } }, color: { value: ["#fff"] }, shape: { type: ["circle"], stroke: { width: 0, color: "#ffffff" }, polygon: { nb_sides: 6 }, image: { src: "img/github.svg", width: 100, height: 100 } }, opacity: { value: 0.5, random: false, anim: { enable: true, speed: 9, opacity_min: 0.67, sync: false } }, size: { value: 5, random: true, anim: { enable: true, speed: 9, size_min: 0.67, sync: false } }, line_linked: { enable: false, distance: 150, color: "#ffffff", opacity: 3, width: 3  }, move: { enable: true, speed: 9, direction: "none", random: false, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 200, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 9.67 }, repulse: { distance: 200, duration: 1 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: true }); } function disableParticles() { particlesJS("particles-js", { particles: { number: { value: 0 } } }); } function toggleParticles() { if (particlesEnabled) { disableParticles(); particlesEnabled = false; localStorage.setItem("particlesEnabled", "false"); } else { loadParticles(); particlesEnabled = true; localStorage.setItem("particlesEnabled", "true"); } } if (localStorage.getItem("particlesEnabled") === null) { particlesEnabled = true; loadParticles(); localStorage.setItem("particlesEnabled", "true"); } else if (localStorage.getItem("particlesEnabled") === "false") { particlesEnabled = false; disableParticles(); } else { particlesEnabled = true; loadParticles(); } document.getElementById("toggleParticles").addEventListener("click", toggleParticles);
// Ads
document.addEventListener("DOMContentLoaded", () => {
  function adChange(selectedValue) {
    if (selectedValue === "default") {
      localStorage.setItem("ads", "on");
    } else if (selectedValue === "popups") {
      localStorage.setItem("ads", "popups");
    } else if (selectedValue === "off") {
      localStorage.setItem("ads", "off");
    }
  }

  const adTypeElement = document.getElementById("adType");

  if (adTypeElement) {
    adTypeElement.addEventListener("change", function () {
      const selectedOption = this.value;
      adChange(selectedOption);
    });

    const storedAd = localStorage.getItem("ads");
    if (storedAd === "on") {
      adTypeElement.value = "default";
    } else if (storedAd === "popups") {
      adTypeElement.value = "popups";
    } else if (storedAd === "off") {
      adTypeElement.value = "off";
    } else {
      adTypeElement.value = "default";
    }
  }

  // Makes the custom icon and name persistent
  const iconElement = document.getElementById("icon");
  const nameElement = document.getElementById("name");
  
  if (iconElement && nameElement) {
    const customIcon = localStorage.getItem("CustomIcon");
    const customName = localStorage.getItem("CustomName");
    if (customIcon) iconElement.value = customIcon;
    if (customName) nameElement.value = customName;
  }

  if (localStorage.getItem("ab") === "true") {
    const abSwitch = document.getElementById("ab-settings-switch");
    if (abSwitch) {
      abSwitch.checked = true;
    }
  }
});
// Dyn
document.addEventListener("DOMContentLoaded", () => {
  function pChange(selectedValue) {
    if (selectedValue === "uv") {
      localStorage.setItem("uv", "true");
      localStorage.setItem("dy", "false");
    } else if (selectedValue === "dy") {
      localStorage.setItem("uv", "false");
      localStorage.setItem("dy", "true");
    }
  }

  const pChangeElement = document.getElementById("pChange");

  if (pChangeElement) {
    pChangeElement.addEventListener("change", function () {
      const selectedOption = this.value;
      pChange(selectedOption);
    });

    const storedP = localStorage.getItem("uv");
    if (storedP === "true") {
      pChangeElement.value = "uv";
    } else if (
      localStorage.getItem("dy") === "true" ||
      localStorage.getItem("dy") === "auto"
    ) {
      pChangeElement.value = "dy";
    } else {
      pChangeElement.value = "uv";
    }
  }
});

// Key
let eventKey = localStorage.getItem("eventKey") || "𝕋𝕪𝕡𝕖 𝕚𝕟 𝕒 𝕣𝕒𝕟𝕕𝕠𝕞 𝕜𝕖𝕪...";
let eventKeyRaw = localStorage.getItem("eventKeyRaw") || "𝕋𝕪𝕡𝕖 𝕚𝕟 𝕒 𝕣𝕒𝕟𝕕𝕠𝕞 𝕜𝕖𝕪...";
let pLink = localStorage.getItem("pLink") || "𝕋𝕪𝕡𝕖 𝕚𝕟 𝕒 𝕌ℝ𝕃...";

document.addEventListener("DOMContentLoaded", () => {
  const eventKeyInput = document.getElementById("eventKeyInput");
  const linkInput = document.getElementById("linkInput");
  
  if (eventKeyInput) {
    eventKeyInput.value = eventKeyRaw;
    eventKeyInput.addEventListener("input", () => {
      eventKey = eventKeyInput.value.split(",");
    });
  }
  
  if (linkInput) {
    linkInput.value = pLink;
    linkInput.addEventListener("input", () => {
      pLink = linkInput.value;
    });
  }

  const selectedOption = localStorage.getItem("selectedOption");
  if (selectedOption) {
    updateHeadSection(selectedOption);
  }

  // Move dropdown sorting inside DOMContentLoaded and add null check
  const dropdown = document.getElementById("dropdown");
  if (dropdown) {
    const options = Array.from(dropdown.getElementsByTagName("option")).sort((a, b) =>
      a.textContent.localeCompare(b.textContent)
    );

    while (dropdown.firstChild) {
      dropdown.removeChild(dropdown.firstChild);
    }

    for (const option of options) {
      dropdown.appendChild(option);
    }
  }
});

function saveEventKey() {
  const eventKeyInput = document.getElementById("eventKeyInput");
  if (!eventKeyInput) return;
  
  eventKey = eventKeyInput.value.split(",");
  eventKeyRaw = eventKeyInput.value;
  localStorage.setItem("eventKey", JSON.stringify(eventKey));
  localStorage.setItem("pLink", pLink);
  localStorage.setItem("eventKeyRaw", eventKeyRaw);
  window.location = window.location;
}

function resetButton() {
  localStorage.removeItem("eventKey");
  localStorage.removeItem("eventKeyRaw");
  localStorage.removeItem("pLink");
  window.location.reload();
}

function saveIcon() {
  const iconElement = document.getElementById("icon");
  const iconValue = iconElement.value;
  console.log("saveIcon function called with icon value:", iconValue);
  localStorage.setItem("icon", iconValue);
}

function saveName() {
  const nameElement = document.getElementById("name");
  const nameValue = nameElement.value;
  console.log("saveName function called with name value:", nameValue);
  localStorage.setItem("name", nameValue);
}

function CustomIcon() {
  const iconElement = document.getElementById("icon");
  const iconValue = iconElement.value;
  console.log("saveIcon function called with icon value:", iconValue);
  localStorage.setItem("CustomIcon", iconValue);
}

function CustomName() {
  const nameElement = document.getElementById("name");
  const nameValue = nameElement.value;
  console.log("saveName function called with name value:", nameValue);
  localStorage.setItem("CustomName", nameValue);
}

function ResetCustomCloak() {
  localStorage.removeItem("CustomName");
  localStorage.removeItem("CustomIcon");
  document.getElementById("icon").value = "";
  document.getElementById("name").value = "";
}

function redirectToMainDomain() {
  const currentUrl = window.location.href;
  const mainDomainUrl = currentUrl.replace(/\/[^\/]*$/, "");
  const target = mainDomainUrl + window.location.pathname;
  if (window !== top) {
    try {
      top.location.href = target
    } catch {
      try {
        parent.location.href = target
      } catch {
        window.location.href = target
      }
    }
  } else window.location.href = mainDomainUrl + window.location.pathname;
}

document.addEventListener("DOMContentLoaded", event => {
  const icon = document.getElementById("tab-favicon");
  const name = document.getElementById("t");
  const selectedValue = localStorage.getItem("selectedOption") || "Default";
  const dropdownElement = document.getElementById("dropdown");
  if (dropdownElement) {
    dropdownElement.value = selectedValue;
  }
  updateHeadSection(selectedValue);
});

function handleDropdownChange(selectElement) {
  const selectedValue = selectElement.value;
  localStorage.removeItem("CustomName");
  localStorage.removeItem("CustomIcon");
  localStorage.setItem("selectedOption", selectedValue);
  updateHeadSection(selectedValue);
  redirectToMainDomain(selectedValue);
}

function updateHeadSection(selectedValue) {
  const icon = document.getElementById("tab-favicon");
  const name = document.getElementById("t");
  const customName = localStorage.getItem("CustomName");
  const customIcon = localStorage.getItem("CustomIcon");

  if (customName && customIcon) {
    name.textContent = customName;
    icon.setAttribute("href", customIcon);
    localStorage.setItem("name", customName);
    localStorage.setItem("icon", customIcon);
  }
}

// Custom Background
document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("save-button");
  const backgroundInput = document.getElementById("background-input");
  const resetButton = document.getElementById("reset-button");

  if (saveButton && backgroundInput && resetButton) {
    saveButton.addEventListener("click", () => {
      const imageURL = backgroundInput.value;
      if (imageURL.trim() !== "") {
        localStorage.setItem("backgroundImage", imageURL);
        document.body.style.backgroundImage = `url('${imageURL}')`;
        backgroundInput.value = "";
      } else {
        console.log("No image URL entered.");
      }
    });

    resetButton.addEventListener("click", () => {
      localStorage.removeItem("backgroundImage");
      document.body.style.backgroundImage = "url('default-background.jpg')";
      window.location.reload();
    });
  }
});
// AB Cloak
function AB() {
  let inFrame;

  try {
    inFrame = window !== top;
  } catch (e) {
    inFrame = true;
  }

  if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank");
    if (!popup || popup.closed) {
      alert("Window blocked. Please allow popups for this site.");
    } else {
      const doc = popup.document;
      const iframe = doc.createElement("iframe");
      const style = iframe.style;
      const link = doc.createElement("link");

      const name = localStorage.getItem("name") || "My Drive - Google Drive";
      const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";

      doc.title = name;
      link.rel = "icon";
      link.href = icon;

      iframe.src = location.href;
      style.position = "fixed";
      style.top = style.bottom = style.left = style.right = 0;
      style.border = style.outline = "none";
      style.width = style.height = "100%";

      const pLink = localStorage.getItem(encodeURI("pLink")) || getRandomURL();
      location.replace(pLink);

      const script = doc.createElement("script");
      script.textContent = `
        window.onbeforeunload = function (event) {
          const confirmationMessage = 'Leave Site?';
          (event || window.event).returnValue = confirmationMessage;
          return confirmationMessage;
        };
      `;
      doc.head.appendChild(link);
      doc.body.appendChild(iframe);
      doc.head.appendChild(script);
    }
  }
}

function toggleAB() {
  ab = localStorage.getItem("ab");
  if (!ab) {
    localStorage.setItem("ab", "true");
  } else if (ab === "true") {
    localStorage.setItem("ab", "false");
  } else {
    localStorage.setItem("ab", "true");
  }
}

// Search Engine dropdown change
function EngineChange(dropdown) {
  const selectedEngine = dropdown.value;

  const engineUrls = {
    DuckDuckGo: "https://duckduckgo.com/?q=",
    Google: "https://www.google.com/search?q=",
    Bing: "https://www.bing.com/search?q=",
    Qwant: "https://www.qwant.com/?q=",
    Startpage: "https://www.startpage.com/search?q=",
    SearchEncrypt: "https://www.searchencrypt.com/search/?q=",
    Ecosia: "https://www.ecosia.org/search?q=",
  };

  localStorage.setItem("engine", engineUrls[selectedEngine]);
  localStorage.setItem("enginename", selectedEngine);

  dropdown.value = selectedEngine;
}

// Save custom engine input
function SaveEngine() {
  const customEngine = document.getElementById("engine-form");

  if (customEngine && customEngine.value.trim() !== "") {
    localStorage.setItem("engine", customEngine.value.trim());
    localStorage.setItem("enginename", "Custom");
  } else {
    alert("𝕊𝕖𝕒𝕣𝕔𝕙 𝕖𝕟𝕘𝕚𝕟𝕖 𝕤𝕒𝕧𝕖𝕕.");
  }
}

// Load saved engine on page load
document.addEventListener("DOMContentLoaded", () => {
  const selectedEngineName = localStorage.getItem("enginename");
  const dropdown = document.getElementById("engine");

  if (dropdown && selectedEngineName) {
    dropdown.value = selectedEngineName;
  }
});


function getRandomURL() {
  const randomURLS = [
    "https://kahoot.it",
    "https://classroom.google.com",
    "https://drive.google.com",
    "https://google.com",
    "https://docs.google.com",
    "https://slides.google.com",
    "https://www.nasa.gov",
    "https://blooket.com",
    "https://clever.com",
    "https://edpuzzle.com",
    "https://khanacademy.org",
    "https://wikipedia.org",
    "https://dictionary.com",
  ];
  return randomURLS[randRange(0, randomURLS.length)];
}

function randRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function exportSaveData() {
  function getCookies() {
    let cookies = document.cookie.split('; ');
    let cookieObj = {};
    cookies.forEach(cookie => {
      let [name, value] = cookie.split('=');
      cookieObj[name] = value;
    });
    return cookieObj;
  }
  function getLocalStorage() {
    let localStorageObj = {};
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        localStorageObj[key] = localStorage.getItem(key);
      }
    }
    return localStorageObj;
  }
  const data = {
    cookies: getCookies(),
    localStorage: getLocalStorage()
  };
  const dataStr = JSON.stringify(data, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data-saved.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importSaveData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';
  input.onchange = function(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const data = JSON.parse(e.target.result);
        if (data.cookies) {
          Object.entries(data.cookies).forEach(([key, value]) => {
            document.cookie = `${key}=${value}; path=/`;
          });
        }
        if (data.localStorage) {
          Object.entries(data.localStorage).forEach(([key, value]) => {
            localStorage.setItem(key, value);
          });
        }
        alert('𝕐𝕠𝕦 𝕚𝕞𝕡𝕠𝕣𝕥𝕖𝕕 𝕪𝕠𝕦𝕣 𝕤𝕒𝕧𝕖 𝕕𝕒𝕥𝕒, 𝕚𝕥 𝕚𝕤 𝕘𝕠𝕠𝕕 𝕚𝕗 𝕥𝕙𝕚𝕤 𝕝𝕚𝕟𝕜 𝕘𝕖𝕥𝕤 𝕓𝕝𝕠𝕔𝕜𝕖𝕕, 𝕠𝕣 𝕒𝕟𝕠𝕥𝕙𝕖𝕣 𝕝𝕚𝕟𝕜 𝕚𝕤 𝕔𝕣𝕖𝕒𝕥𝕖𝕕, 𝕒𝕝𝕤𝕠 𝕚𝕗 𝕪𝕠𝕦 𝕙𝕒𝕧𝕖 𝕘𝕠𝕠𝕕 𝕡𝕣𝕠𝕘𝕣𝕖𝕤𝕤 𝕠𝕟 𝕒 𝕘𝕒𝕞𝕖 𝕠𝕟 𝕥𝕙𝕚𝕤 𝕨𝕖𝕓𝕤𝕚𝕥𝕖.')
      } catch (error) {
        console.error('Error parsing JSON file:', error);
      }
    };
    reader.readAsText(file);
  };
  input.click();
}