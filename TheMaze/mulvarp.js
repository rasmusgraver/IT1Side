
const ruter = document.querySelectorAll(".rute")
const mulvarp = document.querySelector(".mulvarp")
const tid = document.querySelector("#tid")
const score = document.querySelector("#score")

let resultat = 0
let treffPos
let aktivTid = 20
let tidId = null



const observer = new MutationObserver((mutationsList, observer) => {

  for (const mutation of mutationsList) {

    if (mutation.attributeName === 'style') {

      if (window.getComputedStyle(document.querySelector(".body_muldvarp")).display === 'block') {

        startSpill();

        observer.disconnect();
      }
    }
  }
});


observer.observe(document.querySelector(".body_muldvarp"), { attributes: true, subtree: true });


function startSpill() {


  function tilfRute() {
    ruter.forEach(rute => {
      rute.classList.remove("mulvarp")
    })

    let tilfRute = ruter[Math.floor(Math.random() * 9)]
    tilfRute.classList.add("mulvarp")

    treffPos = tilfRute.id
  }

  ruter.forEach(rute => {
    rute.addEventListener('mousedown', () => {
      if (rute.id == treffPos) {
        resultat++
        score.innerHTML = resultat
        treffPos = null
      }
    })
  })

  function flyttMulvarp() {
    tidId = setInterval(tilfRute, 500)
  }

  flyttMulvarp()

  function nedtelling() {
    aktivTid--
    tid.innerHTML = aktivTid

    if (aktivTid == 0) {
      clearInterval(nedtellingTidId)
      clearInterval(tidId)

    }
    if (aktivTid == 0 && resultat >= 15) {
      alert("Gratulerer! Du besto wack-a-mole med " + resultat + " poeng!")
      document.querySelector(".body_maze").style.display = "block";
      document.querySelector(".body_muldvarp").style.display = "none";
      const audio = new Audio("Lyder/KeyCollected.mp3");
      audio.play();
    }

    if (aktivTid == 0 && resultat < 15) {
      alert("Du greide det ikke:/ Men prøv igjen!")
      score.innerHTML = 0
      resultat = 0
      tilfRute()
      flyttMulvarp()
      aktivTid = 20;
      tid.innerHTML = aktivTid;
      nedtellingTidId = setInterval(nedtelling, 1000);
    }

  }

  let nedtellingTidId = setInterval(nedtelling, 1000)

}