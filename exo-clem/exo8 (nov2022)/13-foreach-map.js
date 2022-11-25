// ------------------------------------------(iterate) - (forEach-1)
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
  // Picasso is one of my favorite artists.
  // Kahlo is one of my favorite artists.
  // Matisse is one of my favorite artists.
  // Utamaro is one of my favorite artists.
});

// ------------------------------------------(iterate) - (forEach-2)
const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];
groceries.forEach(function(groceryItem1){
    console.log(' - ' + groceryItem1);
})
// - brown sugar
// - salt
// - cranberries
// - walnuts
groceries.forEach(groceryItem2 => console.log('=> ' + groceryItem2));
// => brown sugar
// => salt
// => cranberries
// => walnuts
function printGrocery(groceryItem3){
    console.log('(3) ' + groceryItem3);
}
groceries.forEach(printGrocery);
// (3) brown sugar
// (3) salt
// (3) cranberries
// (3) walnuts

// ------------------------------------------(iterate) - (forEach-2)
// Iterate over the fruits array to log I want to eat a plus the name of each fruit
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruitItem => console.log('I want to eat a ' + fruitItem));
// I want to eat a mango
// I want to eat a papaya
// I want to eat a pineapple
// I want to eat a apple


// ------------------------------------------(iterate) - (FILTER)
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
  // return typeof thing === 'string';
});
console.log(onlyNumbers); // [ 5, 3.14, 100 ]
console.log(onlyNumbers); // [ 'desk', 'chair', 'backpack' ]

