const scramjet = new ScramjetController({
      files: {
        wasm: "/assets/scram/scramjet.wasm.wasm",
        worker: "/assets/scram/scramjet.worker.js",
        client: "/assets/scram/scramjet.client.js",
        shared: "/assets/scram/scramjet.shared.js",
        sync: "/assets/scram/scramjet.sync.js",
      },
    });

    scramjet.init();
    navigator.serviceWorker.register("./sw.js");

    const connection = new BareMux.BareMuxConnection("/assets/baremux/worker.js");

    const store = {
      url: "https://",
      wispurl:
        _CONFIG?.wispurl ||
        (location.protocol === "https:" ? "wss" : "ws") +
        "://" +
        location.host +
        "/wisp/",
      bareurl:
        _CONFIG?.bareurl ||
        (location.protocol === "https:" ? "https" : "http") +
        "://" +
        location.host +
        "/bare/",
      proxy: "",
    };

    connection.setTransport("/assets/epoxy/index.mjs", [{wisp: store.wispurl}]);

    // tab management
    let tabs = [];
    let activeTabId = 1;
    let nextTabId = 2;
    let sortableInstance = null;

    function getFaviconUrl(url) {
      try {
        const domain = new URL(url).origin;
        return `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
          domain
        )}`;
      } catch {
        return `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
          url
        )}`;
      }
    }

    function createTab() {
      const frame = scramjet.createFrame();
      const tab = {
        id: nextTabId++,
        title: `SKrypt tab ${tabCounter}`,
        url: "https://google.com",
        frame: frame,
        favicon: getFaviconUrl("https://google.com"),
      };

      frame.frame.src = "/page/newtab.html";

      frame.addEventListener("urlchange", (e) => {
        if (!e.url) return;
        tab.url = e.url;
        tab.favicon = getFaviconUrl(e.url);

        try {
          const title =
            frame.frame.contentWindow?.document?.title ||
            new URL(e.url).hostname;
          tab.title = title || "...";
        } catch (err) {
          tab.title = new URL(e.url).hostname || "...";
        }

        updateTabsUI();
        updateAddressBar();
      });

      tabs.push(tab);
      return tab;
    }

    function getActiveTab() {
      return tabs.find((tab) => tab.id === activeTabId);
    }

    function switchTab(tabId) {
      tabs.forEach((tab) => {
        tab.frame.frame.classList.add("hidden");
      });

      activeTabId = tabId;
      const activeTab = getActiveTab();
      if (activeTab) {
        activeTab.frame.frame.classList.remove("hidden");
      }

      updateTabsUI();
      updateAddressBar();
    }

    function closeTab(tabId) {
      const tabIndex = tabs.findIndex((tab) => tab.id === tabId);
      if (tabIndex === -1) return;

      const tab = tabs[tabIndex];


      if (tabs.length === 1) {
        const newTab = createTab();
        document.getElementById("iframe-container").appendChild(newTab.frame.frame);
        switchTab(newTab.id);
      }

      if (tab.frame.frame.parentNode) {
        tab.frame.frame.parentNode.removeChild(tab.frame.frame);
      }

      tabs.splice(tabIndex, 1);


      if (activeTabId === tabId && tabs.length > 0) {
        const newActiveIndex = Math.min(tabIndex, tabs.length - 1);
        activeTabId = tabs[newActiveIndex].id;
        switchTab(activeTabId);
      } else {
        updateTabsUI();
      }
    }

    function updateTabsUI() {
      const tabsContainer = document.getElementById("tabs-container");
      if (!tabsContainer) return;

      tabsContainer.innerHTML = "";

      tabs.forEach((tab) => {
        const tabElement = document.createElement("div");
        tabElement.className = `tab ${tab.id === activeTabId ? "active" : ""
          }`;
        tabElement.setAttribute("data-tab-id", tab.id);
        tabElement.onclick = () => switchTab(tab.id);

        const faviconImg = document.createElement("img");
        faviconImg.className = "tab-favicon";
        faviconImg.src = tab.favicon;
        faviconImg.alt = "";
        faviconImg.onerror = () => {
          faviconImg.style.display = "none";
        };

        const titleSpan = document.createElement("span");
        titleSpan.className = "tab-title";
        titleSpan.textContent = tab.title;

        const closeButton = document.createElement("button");
        closeButton.className = "tab-close";
        closeButton.textContent = "×";
        closeButton.onclick = (e) => {
          e.stopPropagation();
          closeTab(tab.id);
        };

        tabElement.appendChild(faviconImg);
        tabElement.appendChild(titleSpan);
        tabElement.appendChild(closeButton);
        tabsContainer.appendChild(tabElement);
      });

      const newTabButton = document.createElement("button");
      newTabButton.className = "new-tab";
      newTabButton.textContent = "+";
      newTabButton.onclick = () => {
        const newTab = createTab();
        document
          .getElementById("iframe-container")
          .appendChild(newTab.frame.frame);
        switchTab(newTab.id);
      };
      tabsContainer.appendChild(newTabButton);

      if (sortableInstance) {
        sortableInstance.destroy();
      }

      sortableInstance = new Sortable(tabsContainer, {
        animation: 200,
        direction: "horizontal",
        ghostClass: "sortable-ghost",
        dragClass: "sortable-drag",
        filter: ".new-tab",
        onStart: () => {
          tabsContainer
            .querySelectorAll(".tab:not(.sortable-ghost)")
            .forEach((t) => {
              t.style.opacity = "0.5";
            });
        },
        onEnd: (evt) => {
          tabsContainer.querySelectorAll(".tab").forEach((t) => {
            t.style.opacity = "1";
          });

          if (evt.oldIndex !== evt.newIndex) {
            const movedTab = tabs.splice(evt.oldIndex, 1)[0];
            tabs.splice(evt.newIndex, 0, movedTab);
          }
        },
      });
    }

    function updateAddressBar() {
      const addressBar = document.getElementById("address-bar");
      const activeTab = getActiveTab();
      if (addressBar && activeTab) {
        addressBar.value = activeTab.url;
      }
    }

    function handleSubmit() {
      const activeTab = getActiveTab();
      const addressBar = document.getElementById("address-bar");
      if (!activeTab || !addressBar) return;

      let url = addressBar.value.trim();


      if (!url.startsWith("http") && !url.includes(".")) {

        url = "https://google.com/?q=" + encodeURIComponent(url);
      } else if (!url.startsWith("http")) {

        url = "https://" + url;
      }

      activeTab.url = url;
      activeTab.favicon = getFaviconUrl(url);
      return activeTab.frame.go(url);
    }

    function showConfig() {
      document.getElementById("config-modal").showModal();
    }

    function closeConfig() {
      const modal = document.getElementById("config-modal");
      modal.style.opacity = 0;
      setTimeout(() => {
        modal.close();
        modal.style.opacity = 1;
      }, 250);
    }

    window.addEventListener("load", async () => {
      const root = document.getElementById("app");

      root.innerHTML = `
          <div class="browser-container">
            <dialog id="config-modal" class="cfg">
              <div style="align-self: end">
                <div class="flex buttons">
                  <button style="display:none;" onclick="connection.setTransport('/baremod/index.mjs', [store.bareurl])">use bare server 3</button>
                  <button style="display:none;" onclick="connection.setTransport('/libcurl/index.mjs', [{ wisp: store.wispurl }])">use libcurl.js</button>
                  <button onclick="connection.setTransport('/epoxy/index.mjs', [{ wisp: store.wispurl }])">Use Epoxy</button>
                </div>
              </div>
              <div class="flex col input_row">
                <label for="wisp_url_input">Wisp:</label>
                <input id="wisp_url_input" value="${store.wispurl}" spellcheck="false">
              </div>
              <div class="flex col input_row">
                <label for="bare_url_input">Bare:</label>
                <input id="bare_url_input" value="${store.bareurl}" spellcheck="false">
              </div>
              <div class="flex buttons centered">
                <button onclick="closeConfig()">Close</button>
              </div>
            </dialog>

            <div class="flex tabs" id="tabs-container">
            </div>

            <div class="flex nav">
              <button onclick="showConfig()" display="display: none;"><i class="fa-regular fa-cog"></i></button>
              <button onclick="getActiveTab()?.frame.back()"><i class="fa-regular fa-chevron-left"></i></button>
              <button onclick="getActiveTab()?.frame.forward()"><i class="fa-regular fa-chevron-right"></i></button>
              <button onclick="getActiveTab()?.frame.reload()"><i class="fa-regular fa-rotate-right"></i></button>

              <input class="bar" id="address-bar" autocomplete="off" autocapitalize="off" autocorrect="off" 
                onkeyup="event.keyCode === 13 && handleSubmit()">

              <button onclick="window.open(scramjet.encodeUrl(getActiveTab()?.url))"><i class="fa-regular fa-arrow-up-right-from-square"></i></button>

              <p class="version">
                <b></b>
              </p>
            </div>

            <div class="iframe-container" id="iframe-container">
            </div>
          </div>
        `;

      const initialTab = createTab();
      document
        .getElementById("iframe-container")
        .appendChild(initialTab.frame.frame);
      switchTab(initialTab.id);
      updateTabsUI();

      try {
        function b64(buffer) {
          let binary = "";
          const bytes = new Uint8Array(buffer);
          const len = bytes.byteLength;
          for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          return btoa(binary);
        }
        const arraybuffer = await (
          await fetch("/assets/scramjet.png")
        ).arrayBuffer();
        console.log(
          "%cb",
          `
              background-image: url(data:image/png;base64,${b64(arraybuffer)});
              color: transparent;
              padding-left: 200px;
              padding-bottom: 100px;
              background-size: contain;
              background-position: center center;
              background-repeat: no-repeat;
          `
        );
      } catch (e) {
        // naw
      }
    });