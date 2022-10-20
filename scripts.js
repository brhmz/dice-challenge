var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);



var img1 = document.querySelectorAll("img")[0];
img1.src = `images/${[randomNumber1]}` + '.png';

var img2 = document.querySelectorAll("img")[1];
img2.src = `images/${[randomNumber2]}` + '.png';

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  


