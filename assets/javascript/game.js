var characters = ["a","b","c"];
var randomNumber = Math.floor(Math.random() * 100);

var wins = 0;
var losses = 0;

var userText = document.getElementById("user-text");
var computerText = document.getElementById("computer-text");

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById ("losses-text");



for (var i = 0; i < characters.length; i++ ) {
    console.log ("ilist " + characters[i])
}

for (var j = 0; j < characters.length; j++ ) {
    console.log ("jlist " + characters[j])
}

for (var k = 0; k < 5; k++) {
    console.log("I am " + k);
}

for (var l = 0; l < 36; l++) {
    console.log("l I am " + l);
}


    
console.log("length " + characters.length);
console.log("location " + characters[1]);
console.log("random " + randomNumber);

document.write("random " + randomNumber);


document.onkeyup = function(event) {
    userText.textContent = event.key;
    var userGuess = event.key;
    var computerGuess = characters[Math.foor(Math.random() * characters.length)]

    // if (userGuess === computerGuess) {
    //     wins++;
    // } else (userGuess != computerGuess) {
    //     looses++;
    // }

    // document.write("computer " + computerGuess);
};