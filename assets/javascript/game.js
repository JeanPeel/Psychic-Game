var characters = ["a","b","c"]
var randomLetter = Math.floor(Math.random() * 100);  
var userText = document.getElementById("user-text")

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
console.log("location " + characters[1])
console.log("random " + randomLetter)

document.write("random " + randomLetter)

document.onkeyup = function(event) {
    userText.textContent = event.key;
}