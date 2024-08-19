const port = document.querySelector("#gate");
const portal = document.querySelector(".clipPath-overgang");
const body = document.querySelector("body");

port.addEventListener("click", () => {
    portal.classList.add("aktiv");
    let body_portal = document.querySelector(".body_portal")
    let body_maze = document.querySelector(".body_maze")
    const audio = new Audio("Lyder/The_Portal.mp3");
    audio.play();

    setTimeout(() => {
        body.style.backgroundColor = "black";
    }, 1200);

    setTimeout(() => {
        body_portal.style.display = "none";
    }, 1300);

    setTimeout(() => {
        body_maze.style.display = "block";
    }, 1300);


    function startLydAvspilling() {
        setTimeout(() => {
            var audioBakgrunn = new Audio('Lyder/musikkBakgrunn.mp3');
            audioBakgrunn.play();
            audioBakgrunn.loop = true;

            setTimeout(() => {
                audioBakgrunn.pause();
                console.log("Lydavspilling stoppet etter 5 minutter.");
            }, 5 * 60 * 1000);
        }, 2000);
    }

    startLydAvspilling();


})
