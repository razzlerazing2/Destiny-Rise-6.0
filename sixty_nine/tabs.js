        const menuBtn = document.querySelector(".more-options");
        const popup = document.getElementById("popup-menu");

        menuBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            popup.style.display = popup.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", function (e) {
            if (!popup.contains(e.target) && e.target !== menuBtn) {
                popup.style.display = "none";
            }
        });