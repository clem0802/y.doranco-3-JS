// a method that accepts an array containing multiple values and returns a single value
// ------------------------------------------(iterate) - (REDUCE-1)
const numbers = [1, 2, 4, 5, 10];
const summedNums = numbers.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue
})
console.log(summedNums); // 22
// Iteration	accumulator	currentValue	return value
// First	         1	          2	            3
// Second	         3	          4	            7
// Third	         7	          5	            12
// Fourth	         12	          10	        22


// -----------------------------------------------------------(iterate) - (REDUCE-2)
// remember, the first argument is the callback function
const numbers2 = [1, 2, 4, 5, 10];
const summedNums2 = numbers2.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue
}, 300)
console.log(summedNums2); // 322
// Iteration	accumulator	currentValue	return value
// First	       300	         1	            301
// Second	       301	         2	            303
// Third	       303	         4              307
// Fourth	       307	         5	            312
// Fifth	       312	         5	            322


// -----------------------------------------------------------(iterate) - (REDUCE-3)
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue)=>{

  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
})
console.log(newSum); 
// The value of accumulator:  1
// The value of currentValue:  3
// The value of accumulator:  4
// The value of currentValue:  5
// The value of accumulator:  9
// The value of currentValue:  7
// 16