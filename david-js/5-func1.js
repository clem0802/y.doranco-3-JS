// FUNCTION
// c'est une boîte à code

// --------------------------------------------
// (1) fonction nommée
function ajouter(a, b) {
    let resultat = a + b;
    return resultat;
}
console.log(ajouter(3, 4)) // 7


function multi(x, y) {
    let result2 = x * y;
    return result2;
    // si pas de return, ce sera "undefined"
}
multi(3, 4);
console.log(multi(3, 4)); // 12 => console.log c'est pour "APPELER"
console.log(multi()); // NaN


function sub(c=0, d=0) {
    let result3 = c - d;
    return result3;
    // si pas de return, ce sera "undefined"
}
console.log(sub()); // 0 


// SPREAD OVER
function additionner2(...chiffres) {
    console.log(chiffres); // [ 2, 4, 15, 16, 30 ]
    let result = 0;

    for (let chiffre of chiffres){
        result = result + chiffre // there will be 5 times of additions
    }
    return result;
}
console.log(additionner2(2, 4, 15, 16, 30)); // 67


// --------------------------------------------
// (2) fonction anonyme
const add = function (a, b) {
    return a + b;
  }
console.log(add(5, 4)) // 9


// --------------------------------------------
// (3) fonction (anoyme) fléchée
const add2 = (p, q) => {
    return p + q;
  }
console.log(add2(8, 7)) // 15


// --------------------------------------------
// (4) fonction fléchée à 1 seule instruction
const add3 = (s, t) => s + t;
console.log(add3(20, 15)) // 35
