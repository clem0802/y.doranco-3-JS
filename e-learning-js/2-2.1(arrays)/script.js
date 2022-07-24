console.log("Arrays");

// -------------------------------
let myArray = ["Paris", "Casablanca", "Tokyo", "NYC"];
let myArray2 = ["Tanger", 4000, true, ["1", 2, false]];
console.log(myArray2.length); // 4
console.log(myArray2[0]); // Tanger
console.log(myArray2[2]); // true

// ------------------------------- .PUSH()
myArray.push("Berlin");
console.log(myArray); // (5) ['Paris', 'Casablanca', 'Tokyo', 'NYC', 'Berlin']

// ------------------------------- for
let nameList = ["John", "Tom", "Mary", "Sarah", "David", "Jerry", "Lily"];
console.log(nameList); 
// (7) ['John', 'Tom', 'Mary', 'Sarah', 'David', 'Jerry', 'Lily']

let listHTML = "<ul>";
for(let i=0; i<nameList.length; i++){
    console.log("Bonjour " + nameList[i]);
    listHTML += "<li>" + nameList[i] + "</li>";
}
// Bonjour John
// Bonjour Tom
// Bonjour Mary
// Bonjour Sarah
// Bonjour David
// Bonjour Jerry
// Bonjour Lily
listHTML += "</ul>";
document.write(listHTML); // on récupère un <ul> avec <li> dedans, + puces
// John
// Tom
// Mary
// Sarah
// David
// Jerry
// Lily

// ------------------------------- .POP() 
nameList.pop(); // "Lily" will be removed
console.log(nameList); // (6) ['John', 'Tom', 'Mary', 'Sarah', 'David', 'Jerry']