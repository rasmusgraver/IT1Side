
const maze_container = document.getElementById("maze");

for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        const elm = document.createElement("div");
        elm.classList.add("r" + i);
        elm.classList.add("c" + j);
        maze_container.appendChild(elm);
    }
}


const movableElement = document.getElementById('prikk');

let positionX = 10;
let positionY = 50;
const moveSpeed = 60;

let row = 0;
let column = 9;

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (canMoveUp(row, column)) {
                positionY -= moveSpeed;
                row--;
            }
            break;
        case 'ArrowDown':
            if (canMoveDown(row, column)) {
                positionY += moveSpeed;
                row++;
            }
            break;
        case 'ArrowLeft':
            if (canMoveLeft(row, column)) {
                positionX += moveSpeed;
                column--;
            }
            break;
        case 'ArrowRight':
            if (canMoveRight(row, column)) {
                positionX -= moveSpeed;
                column++;
            }
            break;
    }
    movableElement.style.right = positionX + 'px';
    movableElement.style.top = positionY + 'px';
    console.log(row, column);

    if (column == 8 & row == 8) {

        celle_r8_c8.removeChild(img1);
        const key_position_1 = document.querySelector(".key_position_1");
        key_position_1.appendChild(img1);

        // const audio=new Audio("Lyder/KeyCollected.mp3");
        //audio.play();

        document.querySelector(".body_maze").style.display = "none";
        document.querySelector(".body_portal").style.display = "none";
        document.querySelector(".body_memory").style.display = "block";
        document.querySelector(".intro").style.backgroundImage = "url('Bilder/memorybackground.jpg')";
        //const intro=document.querySelector(".intro")
        //intro.style.backgroundImage = "url('img_tree.png')";
    }



    //import { teller, kortAvdekket, antallKort } from './script_memorys.mjs';

    //console.log(teller, kortAvdekket, antallKort); 


    if (column == 0 & row == 0) {
        celle_r0_c0.removeChild(img2);
        const key_position_2 = document.querySelector(".key_position_2");
        key_position_2.appendChild(img2);

        document.querySelector(".body_maze").style.display = "none";
        document.querySelector(".quiz_body").style.display = "block";



    }

    if (column == 1 & row == 8) {
        celle_r2_c8.removeChild(img3);
        const key_position_3 = document.querySelector(".key_position_3");
        key_position_3.appendChild(img3);

        document.querySelector(".body_maze").style.display = "none";
        document.querySelector(".body_muldvarp").style.display = "block";



        //const audio=new Audio("Lyder/KeyCollected.mp3");
        //audio.play();
    }

    if (allKeysCollected()) {
        /* Åpner en utgang i celle r.4.c0 når alle nøkler er plukket */
        const celle_r4_c0 = document.querySelector(".r4.c0");
        celle_r4_c0.style.borderLeft = "none";

        /* Setter en pil i celle r4.c0 når alle nøkler er plukket */
        const arrow = document.getElementById("arrow_image");
        celle_r4_c0.appendChild(arrow);
        arrow.style.display = "block";
    }

    if (allKeysCollected() && row == 4 && column == 0) {
        if (event.key == "ArrowLeft") {
            endConditionMet = true;
        }
    }

    if (endConditionMet) {
        const gratulerer = document.getElementById("gratulerer");
        gratulerer.style.display = "block";
        prikk.style.display = "none";

        const knapp = document.getElementById("knapp");
        knapp.style.display = "none";

        const keys_abc = document.getElementById("keys_abc");
        keys_abc.style.display = "none";

        meny.style.display = "none";

        const audio = new Audio("Lyder/vinne.mp3");
        audio.play();

    }
});


function canMoveUp(row, column) {
    if (row == 0) {
        return false;
    }

    celle1 = document.querySelector(".r" + row + ".c" + column);
    style = window.getComputedStyle(celle1);
    if (style.getPropertyValue("border-top-width") != "0px") {
        return false;
    }

    return true;
}

function canMoveDown(row, column) {
    if (row == 9) {
        return false;
    }

    celle1 = document.querySelector(".r" + row + ".c" + column);
    style = window.getComputedStyle(celle1);
    if (style.getPropertyValue("border-bottom-width") != "0px") {
        return false;
    }

    return true;
}

function canMoveLeft(row, column) {
    if (column == 0) {
        return false;
    }

    celle1 = document.querySelector(".r" + row + ".c" + column)
    style = window.getComputedStyle(celle1);
    if (style.getPropertyValue("border-left-width") != "0px") {
        return false;
    }

    return true;
}

function canMoveRight(row, column) {
    if (column == 9) {
        return false;
    }

    celle1 = document.querySelector(".r" + row + ".c" + column);
    style = window.getComputedStyle(celle1);
    if (style.getPropertyValue("border-right-width") != "0px") {
        return false;
    }

    return true;
}




let meny = document.getElementById("meny");

function myFunction() {
    meny.classList.add("show");
}

function myFunctionX() {
    meny.classList.remove("show");
}



let prikk = document.getElementById("prikk");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let purple = document.getElementById("purple");
let brown = document.getElementById("brown");
let grey = document.getElementById("grey");
let pink = document.getElementById("pink");
let black = document.getElementById("black");

function myFunctionRed() {
    prikk.style.backgroundColor = "red";
    prikk.innerHTML = "";

    red.style.border = "3px solid black";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "red";
    square.style.backgroundColor = "red";
    ellipse.style.backgroundColor = "red";
    roundedSquare.style.backgroundColor = "red";
}

function myFunctionBlue() {
    prikk.style.backgroundColor = "blue";
    prikk.innerHTML = "";

    blue.style.border = "3px solid black";
    red.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "blue";
    square.style.backgroundColor = "blue";
    ellipse.style.backgroundColor = "blue";
    roundedSquare.style.backgroundColor = "blue";




}

function myFunctionGreen() {
    prikk.style.backgroundColor = "teal";
    prikk.innerHTML = "";

    green.style.border = "3px solid black";
    red.style.border = "none";
    blue.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "teal";
    square.style.backgroundColor = "teal";
    ellipse.style.backgroundColor = "teal";
    roundedSquare.style.backgroundColor = "teal";
}

function myFunctionYellow() {
    prikk.style.backgroundColor = "yellow";
    prikk.innerHTML = "";

    yellow.style.border = "3px solid black";
    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "yellow";
    square.style.backgroundColor = "yellow";
    ellipse.style.backgroundColor = "yellow";
    roundedSquare.style.backgroundColor = "yellow";
}

function myFunctionPurple() {
    prikk.style.backgroundColor = "purple";
    prikk.innerHTML = "";

    purple.style.border = "3px solid black";
    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "purple";
    square.style.backgroundColor = "purple";
    ellipse.style.backgroundColor = "purple";
    roundedSquare.style.backgroundColor = "purple";
}

function myFunctionBrown() {
    prikk.style.backgroundColor = "peru";
    prikk.innerHTML = "";

    brown.style.border = "3px solid black";
    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "peru";
    square.style.backgroundColor = "peru";
    ellipse.style.backgroundColor = "peru";
    roundedSquare.style.backgroundColor = "peru";
}

function myFunctionGrey() {
    prikk.style.backgroundColor = "grey";
    prikk.innerHTML = "";

    grey.style.border = "3px solid black";
    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "grey";
    square.style.backgroundColor = "grey";
    ellipse.style.backgroundColor = "grey";
    roundedSquare.style.backgroundColor = "grey";
}

function myFunctionPink() {
    prikk.style.backgroundColor = "pink";
    prikk.innerHTML = "";

    pink.style.border = "3px solid black";
    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    black.style.border = "none";

    circle.style.backgroundColor = "pink";
    square.style.backgroundColor = "pink";
    ellipse.style.backgroundColor = "pink";
    roundedSquare.style.backgroundColor = "pink";
}

function myFunctionBlack() {
    prikk.style.backgroundColor = "black";
    prikk.innerHTML = "";

    black.style.border = "3px solid white";
    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";

    circle.style.backgroundColor = "black";
    square.style.backgroundColor = "black";
    ellipse.style.backgroundColor = "black";
    roundedSquare.style.backgroundColor = "black";


}


let circle = document.getElementById("circle");
let square = document.getElementById("square");
let ellipse = document.getElementById("ellipse");
let roundedSquare = document.getElementById("roundedSquare");

function myFunctionCircle() {
    prikk.style.borderRadius = "50%";
    prikk.innerHTML = "";

    circle.style.border = "3px solid black";
    square.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";
}

function myFunctionSquare() {
    prikk.style.borderRadius = "0";
    prikk.innerHTML = "";

    square.style.border = "3px solid black";
    circle.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";
}

function myFunctionEllipse() {
    prikk.style.borderRadius = "50% 30%";
    prikk.innerHTML = "";

    ellipse.style.border = "3px solid black";
    circle.style.border = "none";
    square.style.border = "none";
    roundedSquare.style.border = "none";
}

function myFunctionRoundedSquare() {
    prikk.style.borderRadius = "15px";
    prikk.innerHTML = "";


    roundedSquare.style.border = "3px solid black";
    circle.style.border = "none";
    square.style.border = "none";
    ellipse.style.border = "none";
}

function myFunctionEmoji1() {

    prikk.style.fontSize = "40px";
    prikk.innerHTML = "⭐️";
    prikk.style.backgroundColor = "transparent";
    circle.style.border = "none";
    square.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";

    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";

}

function myFunctionEmoji2() {
    prikk.style.fontSize = "40px";
    prikk.innerHTML = "🌮";
    prikk.style.backgroundColor = "transparent";
    circle.style.border = "none";
    square.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";

    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";
}

function myFunctionEmoji3() {
    prikk.style.fontSize = "40px";
    prikk.innerHTML = "🏀";
    prikk.style.backgroundColor = "transparent";
    circle.style.border = "none";
    square.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";

    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";
}

function myFunctionEmoji4() {
    prikk.style.fontSize = "40px";
    prikk.innerHTML = "🚁";
    prikk.style.backgroundColor = "transparent";
    circle.style.border = "none";
    square.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";

    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";
}

function myFunctionEmoji5() {
    prikk.style.fontSize = "40px";
    prikk.innerHTML = "🗿";
    prikk.style.backgroundColor = "transparent";
    circle.style.border = "none";
    square.style.border = "none";
    ellipse.style.border = "none";
    roundedSquare.style.border = "none";

    red.style.border = "none";
    blue.style.border = "none";
    green.style.border = "none";
    yellow.style.border = "none";
    purple.style.border = "none";
    brown.style.border = "none";
    grey.style.border = "none";
    pink.style.border = "none";
    black.style.border = "none";
}


const celle_r8_c8 = document.querySelector(".r8.c8");
const img1 = document.getElementById("key_image1");
celle_r8_c8.appendChild(img1);


const celle_r0_c0 = document.querySelector(".r0.c0");
const img2 = document.getElementById("key_image2");
celle_r0_c0.appendChild(img2);

const celle_r2_c8 = document.querySelector(".r8.c1");
const img3 = document.getElementById("key_image3");
celle_r2_c8.appendChild(img3);

const key1 = document.getElementById("key_image1");
const key2 = document.getElementById("key_image2");
const key3 = document.getElementById("key_image3");

function allKeysCollected() {
    return !maze_container.contains(key1) &&
        !maze_container.contains(key2) &&
        !maze_container.contains(key3);
}

function startNedtelling(varighet, display) {
    var start = Date.now(),
        diff,
        minutter,
        sekunder;
    function timer() {
        // finn antall sekunder mellom nå og start
        diff = varighet - (((Date.now() - start) / 1000) | 0);

        // gjør om tiden til minutter og sekunder
        minutter = (diff / 60) | 0;
        sekunder = (diff % 60) | 0;

        minutter = minutter < 10 ? "0" + minutter : minutter;
        sekunder = sekunder < 10 ? "0" + sekunder : sekunder;

        // Oppdaterer display-elementet med de nye verdiene
        display.textContent = minutter + ":" + sekunder;


        if (diff <= 10) {
            document.querySelector(".ti_sekunder").style.display = "block";
        }

        if (diff <= 8) {
            document.querySelector(".ti_sekunder").style.display = "none";
        }

        if (diff == 0) {
            const audio = new Audio("Lyder/tape.mp3");
            audio.play();
        }


        if (endConditionMet) {

            clearInterval(interval);
        }

        if (diff <= 0) {

            clearInterval(interval);


            document.querySelector(".body_maze").style.display = "none";
            document.querySelector(".body_portal").style.display = "none";
            document.querySelector(".body_memory").style.display = "none";
            document.querySelector(".quiz_body").style.display = "none";
            document.body.style.backgroundImage = "none";
            document.querySelector(".tap").style.display = "block";
            document.querySelector(".intro").style.backgroundColor = "black";

            // GAME OVER (her må vi fylle inn ett eller annet som skjer når man taper)
        }

    };
    // Oppdaterer klokken hvert sekund
    timer();
    var interval = setInterval(timer, 1000);
}

window.onload = function () {
    var femMinutter = 60 * 5,
        display = document.querySelector('#timer');
    startNedtelling(femMinutter, display);
};

let endConditionMet = false;




