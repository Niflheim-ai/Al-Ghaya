document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
            setTimeout(() => {
                mobileMenu.classList.remove("max-h-0");
                mobileMenu.classList.add("max-h-[300px]");
            }, 10);
        } else {
            mobileMenu.classList.remove("max-h-[300px]");
            mobileMenu.classList.add("max-h-0");
            setTimeout(() => {
                mobileMenu.classList.add("hidden");
            }, 500);
        }
    });
});