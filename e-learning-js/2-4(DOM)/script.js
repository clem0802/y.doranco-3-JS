console.log("DOM Manipulation");
// DOM: Document Object Model

// ----------------------------
// Natural
var myP = myPgh2;
console.log(myP); // p#myPgh2
console.log(typeof myP); // object
myP.style.color = "red"; // "style" is a property
myP.style.fontSize = "xx-large";


// ----------------------------
// Class
var listClass = document.getElementsByClassName("myDiv");
console.log("listClass :", listClass); 
// (array) listClass : HTMLCollection(3) [div.myDiv, div.myDiv, div.myDiv]
console.log("listClass : " + typeof listClass); 
// listClass : object

var secondClass = listClass[1]; // Second Div
console.log(secondClass.textContent); // Second Div
console.log(secondClass.innerHTML); // Second Div
secondClass.style.color = "dodgerblue";


// ----------------------------
// ID
var myOtherP = document.getElementById("myOtherPgh");
console.log(myOtherP); // p#myOtherPgh
// myOtherP.style.display = "none";
myOtherP.style.textDecoration = "underline";


// ----------------------------
// Type
var myUl = document.getElementsByTagName("ul");
console.log("myUl :", myUl); 
// myUl : HTMLCollection [ul]  =>(élément parent)
console.log("myUl :", myUl[0].getElementsByTagName("li")); 
// myUl : HTMLCollection(3) [li, li, li]  =>(élément child) must indicate PARENT INDEX


// ----------------------------
// Name
var myName = document.getElementsByName("userName")
console.log("myName :", myName); 
// myName : NodeList [input.form-control]
// a "NODE LIST" => a list of HTML elemetns


// ----------------------------
// querySelector
var selection = document.querySelector(".form-control"); // this sends ONLY the 1st HTML element
console.log("selection :", selection); // selection : input.form-control
var selection = document.querySelector(".myDiv");
console.log("selection :", selection); // selection : div.myDiv
var selection = document.querySelector("ul li");
console.log("selection :", selection); // selection : li  => only the 1st "li"


// ----------------------------
// querySelectorAll
var selection2 = document.querySelectorAll("#querySelectorAll p");
console.log("selection2 :", selection2); // selection2 : NodeList(3) [p, p, p]


// ----------------------------
// Attribute
var img = document.querySelectorAll("img[src='three.jpg']");
console.log("img :", img); // img : NodeList [img]
console.log("img :", img[0].title); // img : 3-dimension title  =>img title attribute

img[0].title = "img title changed!"; 
// ré-affecter la valeur de "img title"
// when hover on the pic on the webpage, the img title will be updated


// ----------------------------
// Child & Parent NODES (Loop ITERATION)
// iterate dans toute ma collection HTML, récupérer chaque élément dans l'itération
// modifier la propriété "style", et ré-affecter une variété à ses propriétés "color"
for(var i=0; i<selection2.length; i++){
    selection2[i].style.color = "orange";
}