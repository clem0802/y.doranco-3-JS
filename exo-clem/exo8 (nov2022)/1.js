console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*8)); // random num between 0-7
console.log(Math.floor(Math.random()*1000)); // random num between 0-999
console.log(Math.floor(43.8)); // 43
console.log(Math.ceil(43.8)); // 44
console.log(Number.isInteger(2017)); // true
console.log(Number.isInteger(2017.33)); // false
console.log('hi!'.length); // 3


// -------------------------------(BACKTICKS)
// string interpolation : using template literals to embed variables into strings
let myName = "Clémence";
let myCity = "Jerusalem";
console.log("My name is " + myName + ". " + "My favorite city is " + myCity + ".");
// My name is Clémence. My favorite city is Jerusalem.
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
// My name is Clémence. My favorite city is Jerusalem.


// -------------------------------(TYPEOF)
let newVariable = 'Playing';
console.log(typeof newVariable); // string
newVariable = 1;
console.log(typeof newVariable); // number


// -------------------------------(FORECAST)
// Fahrenheit = Celsius * (9/5) + 32;
const kelvin = 300;
const celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit); // 80.6
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit); // 80
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// The temperature is 80 degrees Fahrenheit.



