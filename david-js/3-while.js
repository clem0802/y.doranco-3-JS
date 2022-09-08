// LOOP (boucles)

// (très peu utilisés mtn)
// while
// for
// for ... in
// for ... of
	
let i = 0 // Création d'une variable i = 0
while (i < 5) { // Tant que i inférieur à 3
    console.log("Je compte " + i);
  
    if (i == 3) { // Si i est égale à 1
        // Je compte 0
        // Je compte 1
        // Je compte 2
        // Je compte 3
        break // On arréte la boucle !
    }
    i++ // Sinon on "incrémente" i
}

//----------------------------------------------------
let compteur = 0
while (compteur < 6){
    console.log("le compteur est à " + compteur);
    compteur++;
    // le compteur est à 0
    // le compteur est à 1
    // le compteur est à 2
    // le compteur est à 3
    // le compteur est à 4
    // le compteur est à 5
}
console.log("Fin du comptage");
// Fin du comptage



//----------------------------------------------------
// MAP
// REDUCE
// FOREACH