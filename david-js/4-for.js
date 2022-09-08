// FOR

for (let i = 0 /*initialisation*/; i < 3 /*condition*/; i++ /*incrémentation*/) {
    console.log("Je compte " + i);
}
// Je compte 0
// Je compte 1
// Je compte 2


// --------------------------------------
let noms = ['john', 'sarah', 'jack'];
 
for (let i in noms) {
  console.log('Index : ' + i); // Index : 0, Index : 1, Index : 2
  console.log('Nom : ' + noms[i]); // 'Nom : john', Nom : sarah ...
}
// Index : 0
// Nom : john
// Index : 1
// Nom : sarah
// Index : 2
// Nom : jack
 
// --------------------------------------
let personne = {
  nom: 'doe',
  prenom: 'john',
  age: 20
};
 
for (let key in personne) {
  console.log('Clef : ' + key); // Clef : nom, Clef : prenom etc ...
  console.log(personne[key]); // "doe", "john", 20
}
// Clef : nom
// doe
// Clef : prenom
// john
// Clef : age
// 20


// --------------------------------------
let notes = [12, 5, 19, 20]
   
  for (let index in notes) {
    if (notes[index] > 18){
        console.log(notes, "yaho tu cartonnes")
    } else if (notes[index > 10]){
        console.log(notes, "good job")
    } else {
        console.log(notes[index], "peux mieux faire")
    }
  }
// 12 peux mieux faire
// 5 peux mieux faire
// [ 12, 5, 19, 20 ] yaho tu cartonnes
// [ 12, 5, 19, 20 ] yaho tu cartonnes


for (let note of notes) {
    if (note > 18){
        console.log(note, "yaho tu cartonnes")
    } else if (note > 10){
        console.log(note, "good job")
    } else {
        console.log(note, "peux mieux faire")
    }
}
// 12 good job
// 5 peux mieux faire
// 19 yaho tu cartonnes
// 20 yaho tu cartonnes