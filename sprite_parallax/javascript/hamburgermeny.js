let headerMain = document.querySelector(".header-main");
let headerMobilBurgermeny = document.querySelector(".mobil-burgermeny");

let isMenuOpen = false;

headerMobilBurgermeny.onclick = function () {
    if (!isMenuOpen) {
        headerMain.style.display = "flex";
        isMenuOpen = true;

    }

    else if (isMenuOpen) {
        headerMain.style.display = "none";
        isMenuOpen = false;
    }
}
