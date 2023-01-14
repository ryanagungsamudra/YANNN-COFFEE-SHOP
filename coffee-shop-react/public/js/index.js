const switchMode = document.getElementById("switchMode")
switchMode.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        switchMode.src = "img/sun.png";
    } else {
        switchMode.src = "img/moon.png";
    }
}

const switchModeMobile = () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        switchMode.src = "img/sun.png";
    } else {
        switchMode.src = "img/moon.png";
    }
}

// Scroll top
const scrollTop = document.getElementById("scrollTop")
scrollTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
})
