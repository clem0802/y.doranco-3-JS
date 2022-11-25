// const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];
// for(let i=0; i<groceries.length; i++){
//     console.log('shopping list: ' + groceries[i])
// }


// ------------------------------------------(iterate) - (MAP-1)
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
  return number * number;
});
console.log(squareNumbers); // [ 1, 4, 9, 16, 25 ]


// ------------------------------------------(iterate) - (MAP-2)
const nombres = [1, 2, 3, 4, 5];
const grandNombres = nombres.map(nombre => {
    return nombre * 10;
})
console.log(nombres); // [ 1, 2, 3, 4, 5 ]
console.log(grandNombres); // [ 10, 20, 30, 40, 50 ]

// ------------------------------------------(iterate) - (MAP-3)
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => animal[0])
console.log(secretMessage);
// [
//     'H', 'e', 'l', 'l',
//     'o', 'W', 'o', 'r',
//     'l', 'd'
// ]
console.log(secretMessage.join(''));


// ------------------------------------------(iterate) - (MAP-4)
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(bigNumber => bigNumber/100)
console.log(smallNumbers); // [ 1, 2, 3, 4, 5 ]