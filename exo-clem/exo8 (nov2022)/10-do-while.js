// ------------------------------------------(DO - WHILE)
let countString = '';
let i = 0;
do {
  countString = countString + i;
  i++;
} while (i < 5);
console.log(countString); // 01234

// ------------------------------------------(DO - WHILE)
let fruits = ['apple', 'orange', 'waxapple', 'cherry'];
let j = 0;
do {
    fruits = fruits + j;
    j++;
} while (j < 6)
console.log(fruits); // apple,orange,waxapple,cherry012345


// ------------------------------------------(DO - WHILE (cupsOfSugarNeeded))
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;
do {
  cupsAdded++;
  console.log(cupsAdded + ' cup(s) of sugar added');
} while (cupsAdded < cupsOfSugarNeeded);
// 1 cup(s) of sugar added
// 2 cup(s) of sugar added
// 3 cup(s) of sugar added


// ------------------------------------------(DO - WHILE (ex))
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
console.log(firstMessage); // I will print
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage); // I will print
};