function beregnResultat() {
    let poengsum = 0;

   /*1*/ if (document.querySelector('input[name="q1"]:checked').value === "A") {
        poengsum++;
    }

    /*2*/ if (document.querySelector('input[name="q2"]:checked').value === "D") {
        poengsum++;
    }

   /*3*/  if (document.querySelector('input[name="q3"]:checked').value === "D") {
        poengsum++;
    }

   /*4*/  if (document.querySelector('input[name="q4"]:checked').value === "C") {
        poengsum++;
    }

    /*5*/ if (document.querySelector('input[name="q5"]:checked').value === "D") {
        poengsum++;
    }

    /*6*/ if (document.querySelector('input[name="q6"]:checked').value === "B") {
        poengsum++;
    }

   /*7*/  if (document.querySelector('input[name="q7"]:checked').value === "B") {
        poengsum++;
    }

    /*8*/ if (document.querySelector('input[name="q8"]:checked').value === "D") {
        poengsum++;
    }

   /*9*/  if (document.querySelector('input[name="q9"]:checked').value === "C") {
        poengsum++;
    }

   /*10*/  if (document.querySelector('input[name="q10"]:checked').value === "D") {
        poengsum++;
    }

    visResultat(poengsum);
}

function visResultat(poengsum) {
    const resultatContainer = document.getElementById('resultat');
    resultatContainer.innerHTML = `Din poengsum er: ${poengsum} av 10 poeng!`;

    if (poengsum >= 8) {
        alert("Gratulerer! Du besto quizen med " + poengsum + " poeng!")
        document.querySelector(".body_maze").style.display = "block";
        document.querySelector(".quiz_body").style.display = "none";
        const audio = new Audio("Lyder/KeyCollected.mp3");
        audio.play();
    }
    else {
        resultatContainer.innerHTML = 'Du besto desverre ikke, men prøv på nytt!';
        poengsum = 0
    }
}

/*
resultatContainer.innerHTML = `Din poengsum er: ${poengsum} av 5 poeng!`;
if(poengsum>=4){
alert("Gratulerer! Du besto quizen med "+poengsum+" poeng!")
document.querySelector(".body_maze").style.display = "block";
document.querySelector(".quiz_body").style.display = "none";
const audio=new Audio("Lyder/KeyCollected.mp3");
    audio.play();
}
else{
    resultatContainer.innerHTML = 'Du besto desverre ikke, men prøv på nytt!';
    poengsum=0
}
}
=======
resultatContainer.innerHTML = `Din poengsum er: ${poengsum} av 10 poeng!`;
}*/

