// function find_max(nums) {
//     let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
//     for (let num of nums) {
//         if (num > max_num) {
//         // (Fill in the missing line here)
//                 max = max_num (??)
//         }
//     }
//  return max_num;
// }

// ------------------------------------------
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
makeShoppingList();
// Remember to buy milk
// Remember to buy bread
// Remember to buy eggs

// ------------------------------------------
function rectangleArea(width, height) {
  let area = width * height;
  return area;
}
console.log(rectangleArea(5, 7)) 
// undefined (without return)
// 35 (with return)

// ------------------------------------------
function monitorCount(rows, columns){
  return rows * columns;
}
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors); // 20

// ------------------------------------------Celsius & Fahrenheit
function getFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
};
console.log(getFahrenheit(15)); // 59  (OR)

function multiplyByNineFifths(number) {
  return number * (9/5);
};
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
let fahrenheit = getFahrenheit(15);
console.log(fahrenheit); // 59 (more complicated)

// ------------------------------------------Anonymous Function
const plantNeedsWater = function(day){
  if(day === "Wednesday"){
    return true;
  } return false;
}
console.log(plantNeedsWater('Tuesday')); // false

// ------------------------------------------Arrow Function
const needsWater1 = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}; 
// (changed to arrow function)
const needsWater2 = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};


// ZERO PARAMETER
const functionName1 = () => {};
// -------------
// ONE PARAMETER
const functionName2 = parameter => {};
// -------------
// TWO or MORE PARAMETER
const functionName3 = (parameter1, parameter2) => {};


// ------------------------------------------make it CONCISE !!
const plantWater1 = (day) => {
  return day === "Thursday" ? true : false;
}
// make it CONCISE:
const plantWater2 = day => day === "Thursday" ? true : false;


