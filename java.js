const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = [
    "application",
    "programming",
    "interface",
    "donkey",
    "computer",
    "laptop",
    "wizard",
];
var kk = 1;
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
    wordEl.innerHTML = `
      ${selectedWord
      .split("")
      .map(
        (letter) => `
            <span class="letter">
              ${correctLetters.includes(letter) ? letter : ""}
            </span>
          `
      )
      .join("")}
    `;

  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You won! ";
    kk = 0;
    clickImage()

  }
}

function updateWrongLettersEl() {
  wrongLettersEl.innerHTML =
    wrongLetters.length > 0 ? "" : "";

  ;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    console.log(errors - 1);
    if (index === errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  if (wrongLetters.length+1 === figureParts.length) {
    finalMessage.innerText = "Oh..You lost !!";
    kk = 2;
    popup.style.display = "flex";
    clickImage()

  }
}

function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

window.addEventListener("keydown", (e) => {
  if (kk == 1) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {

      const letter = e.key;
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
  }
  if (kk == 2) {
    finalMessage.innerText = "You have already lost !!";
  }
  if(kk==0)
  {
    finalMessage.innerText = "You have already won! ";
  }
});

playAgainBtn.addEventListener("click", () => {

    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];
    colorReset();
    displayWord();

    updateWrongLettersEl();

    popup.style.display = "none";
});

function colorReset() {
  window.location.reload()
}

function clickImage() {
  if (document.getElementsById("figure-part").clicked === true) {
    window.location.reload()
  }
  else if (document.getElementsById("a").clicked === true) {

    window.location.reload()
  }
}
document.getElementById("a").addEventListener("click", a);
document.getElementById("b").addEventListener("click", b);
document.getElementById("c").addEventListener("click", c);
document.getElementById("d").addEventListener("click", d);
document.getElementById("e").addEventListener("click", e);
document.getElementById("f").addEventListener("click", f);
document.getElementById("g").addEventListener("click", g);
document.getElementById("h").addEventListener("click", h);
document.getElementById("i").addEventListener("click", i);
document.getElementById("j").addEventListener("click", j);
document.getElementById("k").addEventListener("click", k);
document.getElementById("l").addEventListener("click", l);
document.getElementById("m").addEventListener("click", m);
document.getElementById("n").addEventListener("click", n);
document.getElementById("o").addEventListener("click", o);
document.getElementById("p").addEventListener("click", p);
document.getElementById("q").addEventListener("click", q);
document.getElementById("r").addEventListener("click", r);
document.getElementById("s").addEventListener("click", s);
document.getElementById("t").addEventListener("click", t);
document.getElementById("u").addEventListener("click", u);
document.getElementById("v").addEventListener("click", v);
document.getElementById("w").addEventListener("click", w);
document.getElementById("x").addEventListener("click", x);
document.getElementById("y").addEventListener("click", y);
document.getElementById("z").addEventListener("click", z);
function a() {
  if(kk==1){
  const letter = "a";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function b() {
  if(kk==1){
  const letter = "b";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function c() {
  if(kk==1){
  const letter = "c";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function d() {
  if(kk==1){
  const letter = "d";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function e() {
  if(kk==1){
  const letter = "e";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function f() {
  if(kk==1){
  const letter = "f";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function g() {
  if(kk==1){
  const letter = "g";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function h() {
  if(kk==1){
  const letter = "h";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function i() {
  if(kk==1){
  const letter = "i";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function j() {
  if(kk==1){
  const letter = "j";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function k() {
  if(kk==1){
  const letter = "k";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function l() {
  if(kk==1){
  const letter = "l";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function m() {
  if(kk==1){
  const letter = "m";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function n() {
  if(kk==1){
  const letter = "n";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function o() {
  if(kk==1){
  const letter = "o";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function p() {
  if(kk==1){
  const letter = "p";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function q() {
  if(kk==1){
  const letter = "q";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function r() {
  if(kk==1){
  const letter = "r";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function s() {
  if(kk==1){
  const letter = "s";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function t() {
  if(kk==1){
  const letter = "t";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function u() {
  if(kk==1){
  const letter = "u";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function v() {
  if(kk==1){
  const letter = "v";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function w() {
  if(kk==1){
  const letter = "w";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function x() {
  if(kk==1){
  const letter = "x";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function y() {
  if(kk==1){
  const letter = "y";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}
function z() {
  if(kk==1){
  const letter = "z";
      document.getElementById(letter).style.color = 'lightgray';

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          if (correctLetters.length == 0) {
            figureParts[0].style.display = "block";
          }
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
    if (kk == 2) {
      finalMessage.innerText = "You have already lost !!";
    }
    if(kk==0)
    {
      finalMessage.innerText = "You have already won! ";
    }
}

displayWord();