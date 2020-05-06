var navBtn = document.getElementById("nav-btn");
var navList = document.getElementById("nav-list");

navBtn.addEventListener("click", function() {
    if (navBtn.classList.contains("close-nav")) {
        navBtn.classList.remove("close-nav");
        navBtn.classList.add("open-nav");
        navList.classList.add("open-nav-list");
        navList.style.display = "flex"
    } else {
        navBtn.classList.remove("open-nav");
        navBtn.classList.add("close-nav");
        navList.classList.remove("open-nav-list");
        navList.style.display = "none"
    }
})