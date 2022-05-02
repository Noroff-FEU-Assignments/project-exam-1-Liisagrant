const mobielMenuBtn = document.querySelector ("#mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

mobielMenuBtn.addEventListener("click", () => {
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display ="flex";
        mobielMenuBtn.innerHTML = "Close";
    }
    else {
        mobileMenu.style.display = "none";
        mobielMenuBtn.innerHTML = "Menu";
    }
});