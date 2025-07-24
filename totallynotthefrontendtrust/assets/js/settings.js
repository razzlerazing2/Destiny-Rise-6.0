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
let eventKey = localStorage.getItem("eventKey") || "`";
let eventKeyRaw = localStorage.getItem("eventKeyRaw") || "`";
let pLink = localStorage.getItem("pLink") || "HTTPS://";

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

// Particles
document.addEventListener("DOMContentLoaded", () => {
  const switches = document.getElementById("2");
  if (switches) {
    if (window.localStorage.getItem("particles") !== "") {
      if (window.localStorage.getItem("particles") === "true") {
        switches.checked = true;
      } else {
        switches.checked = false;
      }
    }

    switches.addEventListener("change", event => {
      if (event.currentTarget.checked) {
        window.localStorage.setItem("particles", "true");
      } else {
        window.localStorage.setItem("particles", "false");
      }
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

      const name = localStorage.getItem("name") || "Dashboard | Khan Academy";
      const icon =
        localStorage.getItem("icon") ||
        "/assets/media/icon/favicon.png";

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
    Google: "https://www.google.com/search?q=",
    Bing: "https://www.bing.com/search?q=",
    DuckDuckGo: "https://duckduckgo.com/?q=",
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
    alert("Search Engine Saved.");
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
  a.download = 'save_data.json';
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
        alert('Your save data has been imported. Please test it out.')
        alert('If you find any issues then report it in GitHub or the skryptonite discord.')
      } catch (error) {
        console.error('Error parsing JSON file:', error);
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

