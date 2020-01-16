// changes to the page
var winsTxt = document.getElementById("wins-txt");
var lossesTxt = document.getElementById ("losses-txt");
var roundsTxt = document.getElementById ("rounds-txt");
var guessesTxt = document.getElementById ("guesses-txt");
var userTxt = document.getElementById("user-txt");

// array of choices for the computer
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
];

var wins = 0;
var losses = 0;
var rounds = 10;
var guesses = 0;

// Begin game on key up
document.onkeyup = function(event) {
    
    // Users guesses recorded and reported to html
    var userGuess = event.key;
    userTxt.textContent = event.key;

    // Computer chooses a random letter
    var randomLet = Math.floor(Math.random() * letters.length);
    var computerLetter = letters[randomLet];
    
    // Variables created to adjust score
    // Adjusted scores reported to html
    var youWon = wins;  
    winsTxt.textContent = youWon;

    var youLosse = losses;
    lossesTxt.textContent = youLosse;

    var looseRound = rounds;
    roundsTxt.textContent = looseRound;

    var youGuessed = guesses;
    guessesTxt.textContent = youGuessed;

    // User gets a point if their guess is equal to the computers
    if (userGuess === computerLetter) {
        wins++;  
    }

    // If the user looses 10 times they loose a round, 
    // lost round is recorded and losses resets.
    if  (losses > 9) {
        rounds --;   
        losses = 0
    }
   
    // losses and guesses goes if if looser does not win
    else {
        losses ++;
        guesses++;      
    }

    if (rounds < 0) {
        var confirmReload = alert("Do you want to reset the game?");
        confirmReload
        location.reload();
    }

    if (confirmReload) {
        wins = 0;
        losses = 0;
        rounds = 10;
        guesses = 0;
        
    }

    console.log(computerLetter)
    
}














;

// document.write("random " + randomNumber);