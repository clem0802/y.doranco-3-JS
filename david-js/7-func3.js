

// function moyenne(...notes){
//     let result = 0;
//     for (let note of notes){
//         result = result + note;
//     }
//     return result / notes.length;
// }

// ------------------------------------------
// const moyenne = function(...notes){
//     let result = 0;
//     for (let note of notes){
//         result = result + notes
//     }
//     return result / notes.length;
// }

// ------------------------------------------
// const moyenne = (...notes) => {
//     console.log("je reçois les notes:");
//     console.log(notes);
//     notes.map(function(note){
//         return note + 2;
//     })
// }

// ------------------------------------------
// const moyenne = (...notes) => {
//     console.log("je reçois les notes:");
//     console.log(notes);
//     // je reçois les notes:
//     // [ 12, 13, 8, 7, 19 ]

//     const nouvelleNotes = notes
//     .map((note) => +2)
//     .map((note) => (note > 20 ? 20 : note))
//     .reduce((acc, note) => acc + note, 0)

//     return nouvelleNotes / notes.length;
// }

// ------------------------------------------
// const moyenne = (...notes) => {
//     console.log("je reçois les notes:");
//     console.log(notes);
//     // je reçois les notes:
//     // [ 12, 13, 8, 7, 19 ]

//     const nouvelleNotes = notes
//     .map((note) => + 2)
//     .map((note) => (note > 20 ? 20 : note))
//     .reduce((acc, note) => acc + note, 0); 
//     // acc=accumulateur, sa valeur au début est 0
    
//     return nouvelleNotes / notes.length;
// }

// let result = moyenne(12,13,8,7,19);
// console.log(result); // 2


// ------------------------------------------
const moyenne = (...notes) => 
    notes
        .map((note) => note + 2)
        .map((note) => (note > 20 ? 20 : note))
        .reduce((acc, note) => acc + note, 0) / notes.length;

let result = moyenne(12,13,8,7,19);
console.log(result); // 13.6