const mobielMenuBtn = document.querySelector ("#mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

mobielMenuBtn.addEventListener("click", () => {

    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display ="flex";
    }
    else {
        mobileMenu.style.display = "none";

    }
});
