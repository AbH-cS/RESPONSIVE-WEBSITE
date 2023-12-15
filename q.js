let navBar = document.querySelector("nav");
let menuLinks = document.getElementById('menu-links')

window.onscroll = function () {
    if (window.scrollY > 0) {
        navBar.style.background = "#eefff9"
    }
    else {
        navBar.style.background = "transparent"
    }
}

function toggleMenu() {
    menuLinks.classList.toggle('show-menu')
}