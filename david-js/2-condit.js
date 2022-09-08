//  CONDITIONS

	
let age = 25;
 
if (age < 18) {
  console.log('La personne est mineur');
} else if (age < 65) {
  console.log('La personne est majeur');
} else {
  console.log('La personne est sénieur !')
}
// La personne est majeur



let age1 = 31;
switch (age){
    case 26: 
        console.log("vingtaine");
    break;
    case 32: 
        console.log("trentaine");
    break;
    case 18: 
        console.log("ado");
    break;
    default: 
    console.log("âge inconnu");
} // âge inconnu

// ---------------------------------------
let age3 = 40;
let isMajor = false;
if (age<18){
    isMajor = false;
} else {
    isMajor = true;
}
console.log(isMajor); // true
isMajor = age3>50 ? "pas vrai" : "âge à voir";
console.log(isMajor); // âge à voir

// ---------------------------------------
let name2 = "Jean";
let hello = name2 === "Jean" ? "Salut Jean !!" : "Je te connais pas";
console.log(hello); // Salut Jean !!

// ---------------------------------------
let age4 = 0;
let age5 = 18;
let age6 = age4 || age5;
console.log(age6); // 18

let age7 = 1;
let age8 = 18;
let age9 = age7 || age8;
console.log(age9); // 1

let age10 = 0;
let age11 = -2;
let age12 = age10 || age11;
console.log(age12); // -2