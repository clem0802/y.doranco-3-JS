const eleve = {
    nom: "Doe",
    prenom: "John",
    age: 18,
    notes: [12, 15, 19, 16],
    friends: [
        {
            nom: 'idomar',
            prenom: 'fatiha',
            age: 22,
        },
        {
            nom: 'XXX',
            prenom: 'gwenn',
            age: 22,
        }
    ]
}

console.log("test1"); // test1
console.log(eleve["nom"], eleve["age"]); // Doe 18
console.log("test2"); // test2
console.log(eleve.nom); // Doe   => (cette méthode est mieux)
console.log(eleve.age, eleve.prenom); // 18 John
console.log(eleve.notes[2]); // 19
console.log(eleve.friends[0].prenom); // fatiha