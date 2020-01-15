// function makeid(length) {
//     var result = '';
//     var characters = 'abcdefghijklmnopqrstuvwxyz';
//     var charactersLength = characters.length;
//     for ( var i=0; i < length, i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

// console.log(makeid(5));

// Math.random().toString(36).replace(/[^a-z]+/g, '')

let r = Math.random().toString(36).substring(12);
console.log("random", r);