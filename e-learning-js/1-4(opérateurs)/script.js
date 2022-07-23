console.log("Comparison Operators");

// ---------------------------------
let comparison1 = "text" == "text";
console.log(comparison1); // true

comparison1 = "my text" == "text";
console.log(comparison1); // false

comparison1 = "2" == "2";
console.log(comparison1); // TRUE

comparison1 = 2 == "2";
console.log(comparison1); // TRUE

comparison1 = 2 === "2";
console.log(comparison1); // FALS


// --------------------------------- (!=)
let comparison2 = 3 != 4;
console.log(comparison2); // true

let comparison3 = 4 != 4;
console.log(comparison3); // false


// --------------------------------- (!==)
let comparison4 = 4 != "4";
console.log(comparison4); // false

comparison4 = 4 !== "4";
console.log(comparison4); // true

let comparison5 = 4 !== 4;
console.log(comparison5); // false


// ---------------------------------
let comparison6 = 3 > 1;
console.log(comparison6); // true

let comparison7 = 3 < 4;
console.log(comparison7); // true

let comparison8 = 2 >= 2;
console.log(comparison8); // true

let comparison9 = 3 <= 4;
console.log(comparison9); // true