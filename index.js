// Random Number 1.....

var randomNumber1 = (Math.floor((Math.random() * 5)) + 1);
var randomSrc1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomSrc1);

// Random Number 2.....

var randomNumber2 = (Math.floor((Math.random() * 5)) + 1);
var randomSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomSrc2);
// Winner

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<h1>&#128681 Player 1 Wins!</h1>";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "<h1>Player 2 Wins! &#128681</h1>";
}

else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "<h1>Draw!</h1>";
}
