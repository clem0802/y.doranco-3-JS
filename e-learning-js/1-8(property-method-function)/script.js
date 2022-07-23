console.log("JavaScript Global Reference");


// Propriété prédéfinie
// ----------------------------------------
let undefined;
console.log(undefined); // undefined

let myText = "y";
let myNumber = Number(myText);
console.log(myNumber); // NaN


// Fonction prédéfinie
// ----------------------------------------
isNaN(myNumber); // true
if(isNaN(myNumber)){
    console.log("myNumber is not a number");
}

let monNombre = "10";
console.log(parseInt(monNombre)); // 10
console.log(typeof parseInt(monNombre)); // number

monNombre = "10.32";
console.log(parseInt(monNombre)); // 10

let nbr1 = true;
let nbr2 = false;
let nbr3 = "998";
let nbr4 = "998qdkfjlkqdjfljd";

console.log(Number(nbr1)); // 1
console.log(Number(nbr2)); // 0
console.log(Number(nbr3)); // 998
console.log(Number(nbr4)); // NaN
 

// Méthode prédéfinie
// ----------------------------------------
prompt() // c'est un obj qui appartien à OBJ WINDOW, donc une MÉTHODE
alert() // une MÉTHODE
confirm() // une MÉTHODE

window.prompt() // on peut aussi les écrire comme ça
window.alert() 
window.confirm() 

document.write("<p>") // OBJ document, MÉTHODE write, avec un ARGUMENT p