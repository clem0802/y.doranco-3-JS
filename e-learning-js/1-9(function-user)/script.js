console.log("User Functions");

// DRY
// Don't Repeat Yourself

// -------------------------------------
function myFunc(){
    console.log("myFunction has been called!");
}
myFunc(); // myFunction has been called!


// ---------------
function squareNumber(){
    return 2*2;
}
squareNumber(); // 4
let result = squareNumber(); // can served as "call the function"
console.log(result); // 4


// ---------------
function funcWithArg(monNombre){
    return monNombre * monNombre; // calcul dynamique
}
let result2 = funcWithArg(4);
console.log(result2); // 16
result2 = funcWithArg(100);
console.log(result2); // 10000


// ------------------------------------- (Anonymous Function)
// a FUNCTION inside a VARIABLE => une fonction variabilisées
let otherFunc = function(myNumb){ // function without a name
    return myNumb * myNumb * myNumb;
}
otherFunc(4);
console.log(otherFunc);
otherFunc(100);
console.log(otherFunc);


// ------------------------------------- (Multiple Arguments)
function calculMontantTTC(montantHT, tauxTVA){
    return montantHT * tauxTVA; // ça donne montantTTC
}
let TTC = calculMontantTTC(100, 1.2);
console.log(TTC); // 120
TTC = calculMontantTTC(120, 1.2);
console.log(TTC); // 144
console.log(calculMontantTTC(105, 1.05)); // 110.25


// ------------------------------------- (const)
const TAUX_20 = 1.2;
console.log(calculMontantTTC(200, TAUX_20)); // 240