console.log("Variables & Functions SCOPE"); // scope = portée


// GLOBAL
// --------------------------------
myVar = "my text"; // GLOBALE, pas le mot "var" au début
var myVar2 = "my text"; // GLOBALE


// LOCAL
// --------------------------------
function myFunc(){
    var localVar = "this is a local variable";
}
console.log(localVar); // => localVar is not defined


// test-1
// --------------------------------
var a = "my global variable";
function test(){
    var a = "my local variable";
    console.log(a); 
}
console.log(a); // Global variable  => Global is called 1st
test(); // Local variable  => Local is called after

// test-2
// --------------------------------
var a = "my global variable";
function test(){
    var b = "my local variable";
    console.log(a); 
}
console.log(a); // Global variable  => Global is called
test(); // Global variable  => Global is still called