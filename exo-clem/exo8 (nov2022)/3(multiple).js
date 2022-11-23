let needTacos = true;
if (needTacos) {
    console.log("Finding tacos");
} else {
    console.log("Keep on keeping on!");
} // Finding tacos


// ---------------------------------
let weather = "spring";
let clothingChoice = "";
if (weather === "spring") {
  clothingChoice = "Put on rain boots.";
} else if (weather === "summer") {
  clothingChoice = "Make sure to take your sunscreen.";
} else if (weather === "fall") {
  clothingChoice = "Wear a light jacket.";
} else if (weather === 'winter') {
  clothingChoice = "Wear a heavy coat.";
} else {
  console.log('Invalid weather type.');
};
console.log(clothingChoice); // Put on rain boots.


// ---------------------------------
let coin = "heads";
if (coin === "heads") {
    console.log('coin is heads!');
} else {
    console.log('coin is tails...');
}


// ---------------------------------
let runTime = 35;
let runDistance = 3.5;
if (runTime <= 30 && runDistance > 3.5) {
  console.log("You're super fast!");
} else if (runTime >= 30 && runDistance <= 3) {
  console.log("You're not making your pace!");
} else if (runTime > 30 || runDistance > 3) {
  console.log("Nice workout!"); 
} else {
  console.log("Keep on running!");
} // Nice workout:


// ---------------------------------
let groceryItem = "apple";
switch (groceryItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
} // Invalid item


// ---------------------------------
