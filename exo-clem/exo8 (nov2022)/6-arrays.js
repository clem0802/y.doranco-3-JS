// ------------------------------------------(ARRAY)
// in variables, const cannot be reassigned
// however, in arrays, const are MUTABLE
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo'; // (LET)
console.log(condiments); // [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
condiments = ['Mayo'];
console.log(condiments); // [ 'Mayo' ]
utensils[3] = 'Spoon'; // (CONST)
console.log(utensils); // [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]

// ------------------------------------------(.LENGTH)
const objects = ['book', 'Rapple', 'piano'];
console.log(objects.length); // 3

// ------------------------------------------(.PUSH) (to add from the end)
const fruits1 = ['apple', 'litchi', 'orange', 'cherry'];
fruits1.push('plum', 'lemon');
console.log(fruits1); // [ 'apple', 'litchi', 'orange', 'cherry', 'plum', 'lemon' ]

// ------------------------------------------(.POP) (to remove from the end)
const fruits2 = ['apple', 'litchi', 'orange', 'cherry', 'plum', 'lemon'];
fruits2.pop();
console.log(fruits2); // [ 'apple', 'litchi', 'orange', 'cherry', 'plum' ]



// ------------------------------------------(.SHIFT) (to remove from the beginning)
const countries = ['Utopia', 'America', 'France', 'Japan', 'Taiwan', 'Norway'];
countries.shift();
console.log(countries); // [ 'America', 'France', 'Japan', 'Taiwan', 'Norway' ]

// ------------------------------------------(.UNSHIFT) (to add from the beginning)
countries.unshift('Germany');
console.log(countries); // [ 'Germany', 'America', 'France', 'Japan', 'Taiwan', 'Norway' ]

// ------------------------------------------(.SLICE) (inclusive-exclusive)=>us/fr/jp
console.log(countries.slice(1,4)); // [ 'America', 'France', 'Japan' ]

// ------------------------------------------(.indexOf)
console.log(countries); // [ 'Germany', 'America', 'France', 'Japan', 'Taiwan', 'Norway' ]
const quietCountry = countries.indexOf('Japan'); 
console.log(quietCountry); // 3