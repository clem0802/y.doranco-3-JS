const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// Have you visited Orlando?
// Have you visited Dubai?
// Have you visited Edinburgh?
// Have you visited Chennai?
// Have you visited Accra?
// Have you visited Denver?
// Have you visited Eskisehir?
// Have you visited Medellin?
// Have you visited Yokohama?

// -----------------------------------------------------------
// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);
console.log(longCities); 
// [ 'Edinburgh', 'Eskisehir', 'Medellin', 'Yokohama' ]

// -----------------------------------------------------------
// Choose a method that accepts an array with mutiple values & return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word); // CODECADEMY

// -----------------------------------------------------------
// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);
console.log(smallerNums); 
// [ -4,  45,  70, 195, 345, 520, 995 ]

// -----------------------------------------------------------
// Choose a method that will return a boolean 
const booleanMethod = nums.some(num => num < 0);
console.log(booleanMethod); 
// false
