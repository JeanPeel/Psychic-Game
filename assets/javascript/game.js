var characters = ["a","b","c"]
var randomLetter = Math.floor(Math.random() * 100);   

for (var i = 0; i < characters.length; i++ ) {
    console.log ("list " + characters[i])
}
    
console.log("length " + characters.length);
console.log("location " + characters[1])
console.log("random " + randomLetter)

document.write("random " + randomLetter)