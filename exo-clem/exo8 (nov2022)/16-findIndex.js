// ------------------------------------------(iterate) - (findIndex-1)
// .findIndex() will return the index of the first element 
// which evaluates to true for that condition.
const jumbledNums = [123, 25, 78, 5, 9];
const lessThanTen = jumbledNums.findIndex(number => {
    return number < 10;
})
console.log(lessThanTen); // 3
console.log(jumbledNums[3]); // 5


// ------------------------------------------(iterate) - (findIndex-2)
// If there isn’t a single element in the array that satisfies the condition in the callback, 
// then .findIndex() will return -1
const greaterThan1000 = jumbledNums.findIndex(num => {
    return num > 1000;
});
console.log(greaterThan1000); // -1


// ------------------------------------------(iterate) - (findIndex-3)
// Invoke .findIndex() on the animals array to find the index of the element 
// that has the value 'elephant' and 
// save the returned value to a const variable named foundAnimal.
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(word => {
    return word === 'elephant';
})
console.log(foundAnimal); // 7
// -------------
// see if we can find the index of the first animal that starts with the letter 's'
const foundS1 = animals.findIndex(word => {
    return word[0] === 's';
})
console.log(foundS1); // 3 
// -------------
// find all the words starting with 's'
const foundS2 = animals.filter(word => {
    return word[0] === 's';
})
console.log(foundS2); // [ 'seal', 'salamander' ]
// -------------
// numbers
const arrSample = [1, 2, 3, 4, 5, 5, 6, 7];
const foundElement = arrSample.findIndex(num => {
  return num === 5;
});
console.log(foundElement); // 4