console.log("Types and Objects");

// String
let str = "my text";
console.log(str);

// Property
console.log(str.length); // 7

// Method
console.log(str.toUpperCase()); // MY TEXT

// Slice => permet de découper un morceau de string
// je veux découper ce string de la position 3 à la position 7
// index 3 = position 4 (t)
// index 7 (pas ici) car ce string s'arrête à index 6
// slice() va donc découper du (t) jusqu'à la fin
console.log(str.slice(3, 7)); // text
let cut = str.slice(3, 7);
console.log(cut); // text


// Concaténation
console.log("The value of my variable cut is: " + cut);
// The value of my variable cut is: text


// Number
// toString()
// typeof
let nbr = 2;
console.log(nbr.toString());
console.log(typeof nbr.toString()); // strings

// Boolean
let boo1 = true;
let boo2 = false;
console.log(typeof boo1); // boolean

// NULL & UNDEFINED
let objNull = null;
let undefinedVar;
console.log(undefinedVar); // undefined

//----------------------------------------------
// (OBJECTS) : in JavaScript, almost everything is an object
// Booleans
// Numbers
// Strings

// Arrays
// Objects

// Dates
// Maths
// Regular expression (REGEX)
// Functions

//----------------------------------------------
// (DATA TYPES)
// string-number-boolean-null-undefined
