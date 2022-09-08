// photo + vidéo (après modifications)
// Fonction nomée:

// ------------------------------------------
function moyenneClassique(...notes) {
    let result = 0;
    let nouvelleNotes = [];

    for (let note of notes) {
        nouvelleNotes.push(note + 2);
    }

    for (let i in nouvelleNotes) {
        if(nouvelleNotes[i] > 20) {
            nouvelleNotes[i] = 20;
        }
    }

    for (let note of nouvelleNotes) {
        result = result + note;
    }

    return result / notes.length;
}
console.log(moyenneClassique(12,13,8,7,19)); // 13.6